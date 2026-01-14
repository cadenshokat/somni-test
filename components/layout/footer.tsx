import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

const footerLinks = {
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Track Order', href: '/track-order' },
    { label: 'Submit Prescription', href: '/submit-rx' },
    { label: 'Returns', href: '/returns' },
  ],
  shop: [
    { label: 'Sleep Tests', href: '/shop/sleep-tests' },
    { label: 'CPAP Machines', href: '/shop/cpap-machines' },
    { label: 'Oral Appliances', href: '/shop/oral-appliances' },
    { label: 'Accessories', href: '/shop/accessories' },
  ],
  resources: [
    { label: 'Sleep Apnea 101', href: '/resources/sleep-apnea-101' },
    { label: 'CPAP Guide', href: '/resources/cpap-guide' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQs', href: '/faq' },
  ],
  about: [
    { label: 'About Somni', href: '/about' },
    { label: 'Why Choose Us', href: '/why-somni' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="font-medium">
                Subscribe for updates, exclusive promotions, and more.
              </span>
            </div>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" className="hover:text-accent transition-colors" aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-primary-foreground/20">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Somni. All rights reserved.</p>
            <p className="text-center md:text-right max-w-2xl">
              Notice: Somni is a healthcare company providing sleep apnea diagnosis and treatment services.
              Some products require a valid prescription. Please consult with a healthcare provider.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
