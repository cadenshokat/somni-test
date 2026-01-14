import { describe, it, expect, beforeEach } from 'vitest'
import { useShopifyCartStore } from '@/stores/shopifyCartStore'
import { CartItem } from '@/lib/shopify/types'

// Mock cart item for testing
const mockCartItem: CartItem = {
  product: {
    node: {
      id: 'product-1',
      title: 'Test CPAP Machine',
      handle: 'test-cpap',
      description: 'Test description',
      priceRange: {
        minVariantPrice: {
          amount: '299.99',
          currencyCode: 'USD'
        }
      },
      images: {
        edges: []
      },
      variants: {
        edges: [
          {
            node: {
              id: 'variant-1',
              title: 'Default',
              price: {
                amount: '299.99',
                currencyCode: 'USD'
              },
              availableForSale: true,
              selectedOptions: []
            }
          }
        ]
      }
    }
  },
  variantId: 'variant-1',
  variantTitle: 'Default',
  price: {
    amount: '299.99',
    currencyCode: 'USD'
  },
  quantity: 1,
  selectedOptions: []
}

describe('ShopifyCartStore', () => {
  beforeEach(() => {
    // Reset store before each test
    useShopifyCartStore.getState().clearCart()
  })

  it('should add item to cart', () => {
    const { addItem, items } = useShopifyCartStore.getState()

    addItem(mockCartItem)

    expect(items).toHaveLength(1)
    expect(items[0].variantId).toBe('variant-1')
    expect(items[0].quantity).toBe(1)
  })

  it('should increase quantity when adding existing item', () => {
    const { addItem, items } = useShopifyCartStore.getState()

    addItem(mockCartItem)
    addItem(mockCartItem)

    expect(items).toHaveLength(1)
    expect(items[0].quantity).toBe(2)
  })

  it('should update item quantity', () => {
    const { addItem, updateQuantity, items } = useShopifyCartStore.getState()

    addItem(mockCartItem)
    updateQuantity('variant-1', 3)

    expect(items[0].quantity).toBe(3)
  })

  it('should remove item from cart', () => {
    const { addItem, removeItem, items } = useShopifyCartStore.getState()

    addItem(mockCartItem)
    expect(items).toHaveLength(1)

    removeItem('variant-1')
    expect(items).toHaveLength(0)
  })

  it('should calculate total items correctly', () => {
    const { addItem, getTotalItems } = useShopifyCartStore.getState()

    addItem(mockCartItem)
    addItem({ ...mockCartItem, variantId: 'variant-2' })

    expect(getTotalItems()).toBe(2)
  })

  it('should calculate total price correctly', () => {
    const { addItem, getTotalPrice } = useShopifyCartStore.getState()

    addItem(mockCartItem) // $299.99 x 1
    addItem(mockCartItem) // $299.99 x 2 total

    expect(getTotalPrice()).toBe(599.98)
  })

  it('should clear cart', () => {
    const { addItem, clearCart, items } = useShopifyCartStore.getState()

    addItem(mockCartItem)
    expect(items).toHaveLength(1)

    clearCart()
    expect(items).toHaveLength(0)
  })
})
