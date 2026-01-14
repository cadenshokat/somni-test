'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ShoppingCart, Minus, Plus, ArrowLeft, Check } from 'lucide-react';
import { fetchProductByHandle } from '@/lib/shopify/client';
import { CartItem, ShopifyProduct } from '@/lib/shopify/types';
import { useShopifyCartStore } from '@/stores/shopifyCartStore';
import { toast } from 'sonner';

export default function ProductDetail() {
  const params = useParams();
  const handle = params?.handle as string;
  const [product, setProduct] = useState<ShopifyProduct['node'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const addItem = useShopifyCartStore(state => state.addItem);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      setLoading(true);
      try {
        const productData = await fetchProductByHandle(handle);
        setProduct(productData);
        if (productData?.variants?.edges?.[0]) {
          setSelectedVariantId(productData.variants.edges[0].node.id);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [handle]);

  const selectedVariant = product?.variants.edges.find(
    v => v.node.id === selectedVariantId
  )?.node;

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const shopifyProduct: ShopifyProduct = {
      node: product
    };

    const cartItem: CartItem = {
      product: shopifyProduct,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions || []
    };

    addItem(cartItem);
    toast.success('Added to cart', {
      description: `${quantity}x ${product.title}`,
      position: 'top-center'
    });
  };

  if (loading) {
    return (
      <div className="container py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <Skeleton className="aspect-square rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button asChild>
          <Link href="/shop/cpap-machines">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const images = product.images.edges;

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/shop/cpap-machines" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-muted">
            {images[selectedImage] ? (
              <img
                src={images[selectedImage].node.url}
                alt={images[selectedImage].node.altText || product.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No image
              </div>
            )}
          </div>
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${selectedImage === idx ? 'border-primary' : 'border-transparent'
                    }`}
                >
                  <img
                    src={image.node.url}
                    alt={image.node.altText || `${product.title} - Image ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
              {product.title}
            </h1>
            {selectedVariant && (
              <p className="text-3xl font-bold text-primary">
                ${parseFloat(selectedVariant.price.amount).toFixed(2)}
              </p>
            )}
          </div>

          {/* Variant Selection */}
          {product.variants.edges.length > 1 && (
            <div className="space-y-3">
              <label className="text-sm font-medium">Select Option</label>
              <div className="flex flex-wrap gap-2">
                {product.variants.edges.map((variant) => (
                  <Button
                    key={variant.node.id}
                    variant={selectedVariantId === variant.node.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedVariantId(variant.node.id)}
                    disabled={!variant.node.availableForSale}
                  >
                    {variant.node.title}
                    {selectedVariantId === variant.node.id && (
                      <Check className="h-4 w-4 ml-1" />
                    )}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="space-y-3">
            <label className="text-sm font-medium">Quantity</label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center text-lg font-medium">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart */}
          <Button
            size="lg"
            className="w-full"
            onClick={handleAddToCart}
            disabled={!selectedVariant?.availableForSale}
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            {selectedVariant?.availableForSale ? 'Add to Cart' : 'Out of Stock'}
          </Button>

          {/* Description */}
          {product.description && (
            <div className="space-y-3 pt-6 border-t">
              <h2 className="text-lg font-semibold">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          {/* Features */}
          <div className="space-y-3 pt-6 border-t">
            <h2 className="text-lg font-semibold">Included</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Badge variant="outline">✓</Badge>
                <span>Free shipping on orders over $99</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline">✓</Badge>
                <span>30-day return policy</span>
              </li>
              <li className="flex items-center gap-2">
                <Badge variant="outline">✓</Badge>
                <span>Expert support available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
