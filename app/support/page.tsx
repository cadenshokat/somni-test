
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, Mail, MessageSquare, Package, FileText, RotateCcw, HelpCircle, Clock } from 'lucide-react';

const supportOptions = [
  {
    title: 'Contact Us',
    description: 'Get in touch with our support team via phone, email, or chat.',
    icon: MessageSquare,
    href: '/contact',
    cta: 'Contact Support'
  },
  {
    title: 'Track Your Order',
    description: 'Check the status of your order and get delivery updates.',
    icon: Package,
    href: '/track-order',
    cta: 'Track Order'
  },
  {
    title: 'Submit Prescription',
    description: 'Upload your prescription for CPAP or other prescription items.',
    icon: FileText,
    href: '/submit-rx',
    cta: 'Submit Rx'
  },
  {
    title: 'Returns & Exchanges',
    description: 'Learn about our return policy and start a return request.',
    icon: RotateCcw,
    href: '/returns',
    cta: 'View Policy'
  },
  {
    title: 'FAQ',
    description: 'Find answers to commonly asked questions about our products and services.',
    icon: HelpCircle,
    href: '/faq',
    cta: 'Browse FAQ'
  }
];

const Support = () => {
  return (<>
    
      {/* Hero Section */}
      <section className="bg-secondary py-16">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            How Can We Help?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our sleep specialists are here to support you on your journey to better sleep. 
            Choose from the options below or contact us directly.
          </p>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <a href="tel:1-800-555-0123" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-5 w-5" />
              <span className="font-medium">1-800-555-0123</span>
            </a>
            <a href="mailto:support@somni.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-5 w-5" />
              <span className="font-medium">support@somni.com</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Mon-Fri: 8am-8pm EST</span>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportOptions.map((option) => (
              <Card key={option.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <option.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{option.title}</CardTitle>
                      <CardDescription className="mt-2">{option.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={option.href}>{option.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Need More Help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of certified sleep specialists is available to answer your questions 
              about sleep apnea, CPAP therapy, and finding the right treatment for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:1-800-555-0123" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Send a Message</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    
  </>
  );
};

export default Support;
