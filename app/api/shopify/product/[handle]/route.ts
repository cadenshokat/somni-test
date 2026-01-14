import { NextRequest, NextResponse } from 'next/server';
import { storefrontApiRequest } from '@/lib/shopify/storefront';
import { PRODUCT_BY_HANDLE_QUERY } from '@/lib/shopify/queries';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ handle: string }> }
) {
  try {
    const { handle } = await params;

    const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });

    if ('error' in data) {
      return NextResponse.json(
        { error: data.error, message: data.message },
        { status: 402 }
      );
    }

    if (!data) {
      return NextResponse.json({ product: null }, { status: 404 });
    }

    return NextResponse.json({ product: data.data.productByHandle });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product', message: (error as Error).message },
      { status: 500 }
    );
  }
}
