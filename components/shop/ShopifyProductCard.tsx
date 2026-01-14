'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { ShopifyProduct, CartItem } from '@/lib/shopify/types';
import { useShopifyCartStore } from '@/stores/shopifyCartStore';
import { toast } from 'sonner';

interface ShopifyProductCardProps {
  product: ShopifyProduct;
}

export const ShopifyProductCard = ({ product }: ShopifyProductCardProps) => {
  const addItem = useShopifyCartStore(state => state.addItem);
  const { node } = product;

  const firstImage = node.images.edges[0]?.node;
  const firstVariant = node.variants.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!firstVariant) {
      toast.error('This product is not available');
      return;
    }

    const cartItem: CartItem = {
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || []
    };

    addItem(cartItem);
    toast.success('Added to cart', {
      description: node.title,
      position: 'top-center'
    });
  };

  return (
    <Link href={`/product/${node.handle}`}>
      <Card className="group hover:shadow-lg transition-shadow overflow-hidden h-full">
        <div className="aspect-square overflow-hidden bg-muted">
          {firstImage ? (
            <img
              src={firstImage.url}
              alt={firstImage.altText || node.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No image
            </div>
          )}
        </div>
        <CardContent className="p-4 space-y-3">
          <h3 className="font-medium text-foreground line-clamp-2 min-h-[2.5rem]">
            {node.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">
              {price.currencyCode === 'USD' ? '$' : price.currencyCode}
              {parseFloat(price.amount).toFixed(2)}
            </span>
            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={!firstVariant?.availableForSale}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
