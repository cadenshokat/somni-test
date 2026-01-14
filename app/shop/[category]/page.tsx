'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchProducts } from '@/lib/shopify/client';
import { ShopifyProduct } from '@/lib/shopify/types';
import { ShopifyProductCard } from '@/components/shop/ShopifyProductCard';

const categoryInfo: Record<string, { title: string; description: string; query?: string }> = {
  'sleep-tests': {
    title: 'At-Home Sleep Tests',
    description: 'FDA-cleared home sleep testing kits for diagnosing sleep apnea.',
    query: 'product_type:sleep-test'
  },
  'cpap-machines': {
    title: 'CPAP Machines',
    description: 'Premium CPAP and Auto-CPAP machines from leading manufacturers.',
    query: 'product_type:CPAP'
  },
  'oral-appliances': {
    title: 'Oral Appliances',
    description: 'Custom-fit oral appliances for mild to moderate sleep apnea.',
    query: 'product_type:oral-appliance'
  },
  'otc-mouthpieces': {
    title: 'OTC Mouthpieces',
    description: 'Over-the-counter anti-snoring solutions.',
    query: 'product_type:otc-mouthpiece'
  },
  'accessories': {
    title: 'CPAP Accessories',
    description: 'Masks, tubing, filters, and other CPAP supplies.',
    query: 'product_type:accessory'
  }
};

export default function ShopCategory() {
  const params = useParams();
  const category = params?.category as string;
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const info = category ? categoryInfo[category] : null;

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts(50);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [category]);

  return (<>
    {/* Header */}
    <section className="bg-secondary py-12">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
          {info?.title || 'Shop All Products'}
        </h1>
        <p className="text-lg text-muted-foreground">
          {info?.description || 'Browse our complete selection of sleep apnea products.'}
        </p>
      </div>
    </section>

    {/* Products Grid */}
    <section className="py-12">
      <div className="container">
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-square rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              No products found in this category.
            </p>
            <p className="text-sm text-muted-foreground">
              Check back soon or browse our other categories.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ShopifyProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  </>
  );
}
