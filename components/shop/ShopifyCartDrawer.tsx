'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useShopifyCartStore } from '@/stores/shopifyCartStore';

export function ShopifyCartDrawer() {
  const getTotalItems = useShopifyCartStore((state) => state.getTotalItems);
  const [cartCount, setCartCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCartCount(getTotalItems());
  }, [getTotalItems]);

  useEffect(() => {
    if (!mounted) return;
    const unsubscribe = useShopifyCartStore.subscribe(() => {
      setCartCount(getTotalItems());
    });
    return () => unsubscribe();
  }, [mounted, getTotalItems]);

  return (
    <Button variant="ghost" size="icon" className="relative" asChild>
      <Link href="/cart">
        <ShoppingCart className="h-5 w-5" />
        {mounted && cartCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
          >
            {cartCount}
          </Badge>
        )}
      </Link>
    </Button>
  );
}
