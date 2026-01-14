'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useShopifyCartStore } from '@/stores/shopifyCartStore';
import { Minus, Plus, Trash2, ShoppingBag, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Cart() {
  const { items, updateQuantity, removeItem, createCheckout, getTotalItems, getTotalPrice, isLoading } = useShopifyCartStore();
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const handleCheckout = async () => {
    setCheckoutLoading(true);
    try {
      await createCheckout();
    } catch (error) {
      console.error('Checkout error:', error);
    } finally {
      setCheckoutLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container py-16 text-center">
        <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
        <h1 className="text-2xl font-serif font-bold mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Explore our products and find what you need.</p>
        <Button asChild>
          <Link href="/shop/cpap-machines">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  const subtotal = getTotalPrice();
  const totalItems = getTotalItems();

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-serif font-bold mb-8">Your Cart ({totalItems} items)</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const firstImage = item.product.node.images.edges[0]?.node;
            const price = parseFloat(item.price.amount);

            return (
              <div key={item.variantId} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="w-24 h-24 bg-secondary rounded-md flex-shrink-0 overflow-hidden">
                  {firstImage ? (
                    <img
                      src={firstImage.url}
                      alt={firstImage.altText || item.product.node.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      No image
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <Link href={`/product/${item.product.node.handle}`}>
                    <h3 className="font-medium hover:text-primary transition-colors">
                      {item.product.node.title}
                    </h3>
                  </Link>
                  {item.variantTitle !== 'Default Title' && (
                    <p className="text-sm text-muted-foreground">{item.variantTitle}</p>
                  )}
                  <p className="text-lg font-bold mt-1">${price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 ml-auto text-destructive hover:bg-destructive/10"
                      onClick={() => removeItem(item.variantId)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">${(price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="bg-card p-6 rounded-lg border border-border h-fit">
          <h2 className="font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal ({totalItems} items)</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 text-muted-foreground">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="border-t border-border my-4" />
          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Button
            className="w-full"
            size="lg"
            onClick={handleCheckout}
            disabled={checkoutLoading || isLoading}
          >
            {checkoutLoading ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              'Proceed to Checkout'
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Secure checkout powered by Shopify
          </p>
        </div>
      </div>

      {/* Continue Shopping */}
      <div className="mt-8 text-center">
        <Button variant="outline" asChild>
          <Link href="/shop/cpap-machines">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}
