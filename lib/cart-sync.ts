'use client';

import { createClient } from '@/lib/supabase/client';
import { useShopifyCartStore } from '@/stores/shopifyCartStore';
import { CartItem } from '@/lib/shopify/types';

/**
 * Syncs the local cart with Supabase for logged-in users
 * This allows cart persistence across devices
 */
export async function syncCartToSupabase(userId: string) {
  const supabase = createClient();
  const { items, cartId } = useShopifyCartStore.getState();

  try {
    // Check if user has existing cart
    const { data: existingCart, error: fetchError } = await supabase
      .from('carts')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      // PGRST116 = no rows returned, which is fine
      console.error('Error fetching cart:', fetchError);
      return;
    }

    // Upsert cart data
    const { error: upsertError } = await supabase
      .from('carts')
      .upsert({
        user_id: userId,
        items: JSON.stringify(items),
        shopify_cart_id: cartId,
        updated_at: new Date().toISOString(),
      });

    if (upsertError) {
      console.error('Error syncing cart to Supabase:', upsertError);
    }
  } catch (error) {
    console.error('Error syncing cart:', error);
  }
}

/**
 * Loads cart from Supabase for logged-in users
 * Merges with local cart if both exist
 */
export async function loadCartFromSupabase(userId: string) {
  const supabase = createClient();
  const localItems = useShopifyCartStore.getState().items;

  try {
    const { data: cart, error } = await supabase
      .from('carts')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error loading cart from Supabase:', error);
      return;
    }

    if (cart && cart.items) {
      const supabaseItems: CartItem[] = JSON.parse(cart.items);

      // Merge local and Supabase items
      const mergedItems = [...supabaseItems];

      // Add local items that aren't in Supabase cart
      localItems.forEach(localItem => {
        const existingIndex = mergedItems.findIndex(
          item => item.variantId === localItem.variantId
        );

        if (existingIndex >= 0) {
          // Item exists in both - use higher quantity
          mergedItems[existingIndex].quantity = Math.max(
            mergedItems[existingIndex].quantity,
            localItem.quantity
          );
        } else {
          // Item only in local cart
          mergedItems.push(localItem);
        }
      });

      // Update Zustand store
      useShopifyCartStore.getState().loadCartFromSupabase(
        mergedItems,
        cart.shopify_cart_id
      );

      // Sync merged cart back to Supabase
      await syncCartToSupabase(userId);
    } else if (localItems.length > 0) {
      // No Supabase cart, but has local items - sync local to Supabase
      await syncCartToSupabase(userId);
    }
  } catch (error) {
    console.error('Error loading cart:', error);
  }
}

/**
 * Clears cart from Supabase when user logs out or empties cart
 */
export async function clearCartFromSupabase(userId: string) {
  const supabase = createClient();

  try {
    const { error } = await supabase
      .from('carts')
      .delete()
      .eq('user_id', userId);

    if (error) {
      console.error('Error clearing cart from Supabase:', error);
    }
  } catch (error) {
    console.error('Error clearing cart:', error);
  }
}
