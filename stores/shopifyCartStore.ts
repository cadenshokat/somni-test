'use client';

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem, createStorefrontCheckout } from '@/lib/shopify/client';
import { toast } from 'sonner';

interface ShopifyCartStore {
  items: CartItem[];
  cartId: string | null;
  checkoutUrl: string | null;
  isLoading: boolean;

  // Actions
  addItem: (item: CartItem) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
  setCartId: (cartId: string | null) => void;
  setCheckoutUrl: (url: string | null) => void;
  setLoading: (loading: boolean) => void;
  createCheckout: () => Promise<void>;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  loadCartFromSupabase: (items: CartItem[], cartId: string | null) => void;
}

export const useShopifyCartStore = create<ShopifyCartStore>()(
  persist(
    (set, get) => ({
      items: [],
      cartId: null,
      checkoutUrl: null,
      isLoading: false,

      addItem: (item) => {
        const { items } = get();
        const existingItem = items.find(i => i.variantId === item.variantId);

        if (existingItem) {
          set({
            items: items.map(i =>
              i.variantId === item.variantId
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            )
          });
        } else {
          set({ items: [...items, item] });
        }

        toast.success('Added to cart', {
          description: `${item.product.node.title} x${item.quantity}`,
        });
      },

      updateQuantity: (variantId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(variantId);
          return;
        }

        set({
          items: get().items.map(item =>
            item.variantId === variantId ? { ...item, quantity } : item
          )
        });
      },

      removeItem: (variantId) => {
        const item = get().items.find(i => i.variantId === variantId);

        set({
          items: get().items.filter(item => item.variantId !== variantId)
        });

        if (item) {
          toast.success('Removed from cart', {
            description: item.product.node.title,
          });
        }
      },

      clearCart: () => {
        set({ items: [], cartId: null, checkoutUrl: null });
      },

      setCartId: (cartId) => set({ cartId }),
      setCheckoutUrl: (checkoutUrl) => set({ checkoutUrl }),
      setLoading: (isLoading) => set({ isLoading }),

      createCheckout: async () => {
        const { items, setLoading, setCheckoutUrl } = get();
        if (items.length === 0) {
          toast.error('Cart is empty');
          return;
        }

        setLoading(true);
        try {
          const checkoutUrl = await createStorefrontCheckout(items);
          setCheckoutUrl(checkoutUrl);

          // Redirect to Shopify checkout
          window.location.href = checkoutUrl;
        } catch (error) {
          console.error('Failed to create checkout:', error);
          toast.error('Failed to create checkout', {
            description: (error as Error).message,
          });
          throw error;
        } finally {
          setLoading(false);
        }
      },

      getTotalItems: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((sum, item) => sum + (parseFloat(item.price.amount) * item.quantity), 0);
      },

      // Load cart from Supabase (for logged-in users)
      loadCartFromSupabase: (items, cartId) => {
        set({ items, cartId });
      },
    }),
    {
      name: 'shopify-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
