import { NextRequest, NextResponse } from 'next/server';
import { storefrontApiRequest } from '@/lib/shopify/storefront';
import { CART_CREATE_MUTATION } from '@/lib/shopify/queries';

interface CheckoutItem {
  variantId: string;
  quantity: number;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items } = body as { items: CheckoutItem[] };

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Invalid request', message: 'Items array is required' },
        { status: 400 }
      );
    }

    const lines = items.map((item) => ({
      quantity: item.quantity,
      merchandiseId: item.variantId,
    }));

    const cartData = await storefrontApiRequest(CART_CREATE_MUTATION, {
      input: { lines },
    });

    if ('error' in cartData) {
      return NextResponse.json(
        { error: cartData.error, message: cartData.message },
        { status: 402 }
      );
    }

    if (!cartData) {
      return NextResponse.json(
        { error: 'Failed to create checkout' },
        { status: 500 }
      );
    }

    if (cartData.data.cartCreate.userErrors.length > 0) {
      return NextResponse.json(
        {
          error: 'Cart creation failed',
          message: cartData.data.cartCreate.userErrors
            .map((e: { message: string }) => e.message)
            .join(', '),
        },
        { status: 400 }
      );
    }

    const cart = cartData.data.cartCreate.cart;

    if (!cart.checkoutUrl) {
      return NextResponse.json(
        { error: 'No checkout URL returned from Shopify' },
        { status: 500 }
      );
    }

    // Add channel parameter to checkout URL
    const url = new URL(cart.checkoutUrl);
    url.searchParams.set('channel', 'online_store');

    return NextResponse.json({ checkoutUrl: url.toString(), cart });
  } catch (error) {
    console.error('Error creating checkout:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout', message: (error as Error).message },
      { status: 500 }
    );
  }
}
