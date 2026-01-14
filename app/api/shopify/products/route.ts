import { NextRequest, NextResponse } from 'next/server';
import { storefrontApiRequest } from '@/lib/shopify/storefront';
import { STOREFRONT_QUERY } from '@/lib/shopify/queries';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const first = parseInt(searchParams.get('first') || '20', 10);
    const query = searchParams.get('query') || undefined;

    const data = await storefrontApiRequest(STOREFRONT_QUERY, { first, query });

    if ('error' in data) {
      return NextResponse.json(
        { error: data.error, message: data.message },
        { status: 402 }
      );
    }

    if (!data) {
      return NextResponse.json({ products: [] });
    }

    return NextResponse.json({ products: data.data.products.edges });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products', message: (error as Error).message },
      { status: 500 }
    );
  }
}
