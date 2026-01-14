const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN!;
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const SHOPIFY_API_VERSION = process.env.SHOPIFY_API_VERSION || '2025-07';

const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;

export async function storefrontApiRequest(
  query: string,
  variables: Record<string, unknown> = {}
) {
  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: 'no-store', // Disable caching for real-time inventory
  });

  if (response.status === 402) {
    return {
      error: 'Payment required',
      message: 'Shopify API access requires an active Shopify billing plan.',
    };
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (data.errors) {
    throw new Error(
      `Error calling Shopify: ${data.errors.map((e: { message: string }) => e.message).join(', ')}`
    );
  }

  return data;
}
