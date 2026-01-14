'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, User, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShopifyCartDrawer } from '@/components/shop/ShopifyCartDrawer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const shopLinks = [
  { title: 'Sleep Tests', href: '/shop/sleep-tests', description: 'At-home sleep apnea testing' },
  { title: 'CPAP Machines', href: '/shop/cpap-machines', description: 'Premium CPAP devices' },
  { title: 'Oral Appliances', href: '/shop/oral-appliances', description: 'Custom-fit alternatives to CPAP' },
  { title: 'OTC Mouthpieces', href: '/shop/otc-mouthpieces', description: 'Anti-snoring solutions' },
  { title: 'Accessories', href: '/shop/accessories', description: 'Masks, supplies & more' },
];

interface HeaderClientProps {
  user: any; // Will be typed properly when we migrate auth context
  onSignOut: () => Promise<void>;
}

export function HeaderClient({ user, onSignOut }: HeaderClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    await onSignOut();
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <span className="hidden sm:inline">Free shipping on orders over $99</span>
          <div className="flex items-center gap-4 ml-auto">
            <Link href="/track-order" className="hover:underline">
              Track Order
            </Link>
            <a href="tel:1-800-555-0123" className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              1-800-555-0123
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary font-serif">somni</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {shopLinks.map((link) => (
                      <li key={link.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">{link.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/sleep-test" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground focus:outline-none">
                  Home Sleep Testing
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/resources/sleep-apnea-101" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground focus:outline-none">
                  Resources
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/support" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground focus:bg-secondary focus:text-secondary-foreground focus:outline-none">
                  Support
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <ShopifyCartDrawer />

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden lg:flex">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/account">My Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/orders">Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="ghost" className="hidden lg:flex">
                <Link href="/login">Sign In</Link>
              </Button>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4 space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-sm px-2">Shop</h3>
              {shopLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block px-2 py-2 hover:bg-secondary rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="font-medium">{link.title}</div>
                  <div className="text-sm text-muted-foreground">{link.description}</div>
                </Link>
              ))}
            </div>
            <div className="space-y-2 border-t pt-4">
              <Link href="/sleep-test" className="block px-2 py-2 hover:bg-secondary rounded-md font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home Sleep Testing
              </Link>
              <Link href="/resources/sleep-apnea-101" className="block px-2 py-2 hover:bg-secondary rounded-md font-medium" onClick={() => setMobileMenuOpen(false)}>
                Resources
              </Link>
              <Link href="/support" className="block px-2 py-2 hover:bg-secondary rounded-md font-medium" onClick={() => setMobileMenuOpen(false)}>
                Support
              </Link>
            </div>
            {user ? (
              <div className="space-y-2 border-t pt-4">
                <Link href="/account" className="block px-2 py-2 hover:bg-secondary rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  My Account
                </Link>
                <Link href="/orders" className="block px-2 py-2 hover:bg-secondary rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  Orders
                </Link>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleSignOut();
                  }}
                  className="block w-full text-left px-2 py-2 hover:bg-secondary rounded-md"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="border-t pt-4">
                <Link href="/login" className="block px-2 py-2 hover:bg-secondary rounded-md font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Sign In
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
