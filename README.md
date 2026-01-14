# Somni Sleep Journey - Next.js Application

Sleep apnea diagnosis and treatment platform built with Next.js 15, Supabase, and Shopify.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Authentication**: Supabase SSR
- **E-commerce**: Shopify Storefront API
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Testing**: Vitest + React Testing Library
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Shopify store with Storefront API access

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Copy `.env.example` to `.env.local` and fill in your credentials:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Environment Variables

Required environment variables (see `.env.example`):

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` - Your Shopify store domain (e.g., `your-store.myshopify.com`)
- `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN` - Shopify Storefront API access token
- `SHOPIFY_STOREFRONT_API_VERSION` - API version (default: `2024-01`)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage report

## Project Structure

```
next-app/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Auth routes
│   ├── api/               # API routes
│   ├── shop/              # E-commerce pages
│   └── ...
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components
│   ├── home/             # Home page sections
│   └── shop/             # Shopping components
├── lib/                  # Utilities and configurations
│   ├── shopify/          # Shopify API client
│   └── supabase/         # Supabase clients
├── stores/               # Zustand stores
├── contexts/             # React contexts
└── __tests__/            # Test files
```

## Features

### Completed

- ✅ Next.js 15 with App Router
- ✅ Supabase SSR authentication
- ✅ Shopify Storefront API integration
- ✅ Consolidated shopping cart with Zustand
- ✅ Cart sync for authenticated users
- ✅ Dynamic product pages
- ✅ Protected routes with middleware
- ✅ Responsive design with Tailwind CSS
- ✅ Component testing with Vitest
- ✅ Proper container centering

### Key Pages

- `/` - Home page
- `/shop/[category]` - Shop by category
- `/product/[handle]` - Product details
- `/cart` - Shopping cart
- `/login` - Authentication
- `/submit-rx` - Prescription submission (protected)
- `/track-order` - Order tracking (protected)

## Testing

Run tests:
```bash
npm test
```

Tests are located in `__tests__/` and cover:
- Cart store functionality
- UI component behavior
- Critical user flows

## Deployment to Vercel

### Automatic Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

```bash
npm run build
vercel
```

### Environment Variables in Vercel

Add these secrets in your Vercel project settings:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`
- `NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN`

## Supabase Setup

### Required Tables

The app expects these Supabase tables:

**carts**
- `id` (uuid, primary key)
- `user_id` (uuid, foreign key to auth.users)
- `items` (jsonb)
- `shopify_cart_id` (text, nullable)
- `updated_at` (timestamp)

SQL to create:
```sql
create table carts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  items jsonb not null default '[]'::jsonb,
  shopify_cart_id text,
  updated_at timestamp with time zone default now(),
  unique(user_id)
);

-- Enable RLS
alter table carts enable row level security;

-- Users can only access their own cart
create policy "Users can manage their own cart"
  on carts for all
  using (auth.uid() = user_id);
```

## Shopify Setup

1. Create a Storefront API access token in your Shopify admin
2. Enable Storefront API permissions for your store
3. Add the credentials to your environment variables

## Architecture Decisions

### Cart System
- **Single Source of Truth**: Shopify cart is the primary cart
- **Local Persistence**: Cart stored in localStorage with Zustand
- **Cloud Sync**: Authenticated users sync cart to Supabase
- **Merge Strategy**: On login, local and cloud carts merge (max quantities)

### Authentication
- **Server-Side Rendering**: Supabase SSR for secure auth
- **Middleware Protection**: Protected routes redirect to login
- **Session Management**: Automatic session refresh

### API Routes
- **Security**: Shopify credentials stay server-side
- **Endpoints**: `/api/shopify/*` for all Shopify operations
- **Error Handling**: Consistent error responses

## Contributing

1. Create a feature branch
2. Write tests for new features
3. Ensure build passes: `npm run build`
4. Ensure tests pass: `npm test`
5. Submit a pull request

## License

Private project - All rights reserved
