import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Skip middleware for static assets and API routes
  const path = request.nextUrl.pathname
  if (
    path.startsWith('/_next') ||
    path.startsWith('/api/') ||
    path.includes('.')
  ) {
    return NextResponse.next()
  }

  try {
    let supabaseResponse = NextResponse.next({
      request,
    })

    // Check if Supabase credentials are configured
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase credentials not configured, skipping auth middleware')
      return supabaseResponse
    }

    const supabase = createServerClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
            supabaseResponse = NextResponse.next({
              request,
            })
            cookiesToSet.forEach(({ name, value, options }) =>
              supabaseResponse.cookies.set(name, value, options)
            )
          },
        },
      }
    )

    // Get user session with timeout
    const { data: { user } } = await Promise.race([
      supabase.auth.getUser(),
      new Promise<{ data: { user: null } }>((resolve) =>
        setTimeout(() => resolve({ data: { user: null } }), 3000)
      )
    ])

    // Protected routes - redirect to login if not authenticated
    const protectedRoutes = ['/submit-rx', '/track-order']
    const isProtectedRoute = protectedRoutes.some(route =>
      path.startsWith(route)
    )

    if (isProtectedRoute && !user) {
      const url = request.nextUrl.clone()
      url.pathname = '/login'
      url.searchParams.set('redirectTo', path)
      return NextResponse.redirect(url)
    }

    return supabaseResponse
  } catch (error) {
    console.error('Middleware error:', error)
    // On error, just pass through without blocking
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
