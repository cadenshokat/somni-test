import { ShopifyProduct, ProductByHandle, CartItem } from './types';

// Re-export types for convenience
export type { CartItem };

export async function fetchProducts(
  first: number = 20,
  query?: string
): Promise<ShopifyProduct[]> {
  const params = new URLSearchParams({ first: first.toString() });
  if (query) params.set('query', query);

  const response = await fetch(`/api/shopify/products?${params}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to fetch products');
  }

  const data = await response.json();
  return data.products || [];
}

export async function fetchProductByHandle(
  handle: string
): Promise<ProductByHandle | null> {
  const response = await fetch(`/api/shopify/product/${handle}`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to fetch product');
  }

  const data = await response.json();
  return data.product;
}

export async function createStorefrontCheckout(
  items: CartItem[]
): Promise<string> {
  const checkoutItems = items.map((item) => ({
    variantId: item.variantId,
    quantity: item.quantity,
  }));

  const response = await fetch('/api/shopify/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items: checkoutItems }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to create checkout');
  }

  const data = await response.json();
  return data.checkoutUrl;
}
