import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircle,
  Package,
  RefreshCw,
  Shield,
  Clock,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

const returnSteps = [
  {
    icon: Package,
    title: 'Contact Support',
    description: 'Reach out to our support team within 30 days of delivery to initiate a return.',
  },
  {
    icon: RefreshCw,
    title: 'Get Authorization',
    description: 'Receive your return authorization number and shipping instructions.',
  },
  {
    icon: Package,
    title: 'Pack & Ship',
    description: 'Securely package the item in its original packaging and ship it back using the provided label.',
  },
  {
    icon: CheckCircle,
    title: 'Receive Refund',
    description: 'Once we receive and inspect the return, your refund will be processed within 5-7 business days.',
  },
];

const faq = [
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy on most products. Items must be unused, in original packaging, and in resalable condition. CPAP masks have a 30-day satisfaction guarantee—if the mask doesn\'t fit properly, we\'ll exchange it for a different size or model.',
  },
  {
    question: 'Are there any items that cannot be returned?',
    answer: 'For health and safety reasons, the following items are non-returnable once opened: CPAP machines, humidifiers, tubing, filters, and headgear. Sleep test kits cannot be returned once used. All sales on prescription items are final.',
  },
  {
    question: 'How long does it take to get a refund?',
    answer: 'Once we receive and inspect your return, refunds are typically processed within 5-7 business days. The refund will be issued to your original payment method. Please allow an additional 3-5 business days for the credit to appear in your account.',
  },
  {
    question: 'Who pays for return shipping?',
    answer: 'If you received a defective or incorrect item, we will cover return shipping costs. For other returns, customers are responsible for return shipping. We recommend using a trackable shipping method.',
  },
  {
    question: 'Can I exchange an item instead of returning it?',
    answer: 'Yes! If you need a different size or model, contact our support team. We\'ll help you find the right product and facilitate an exchange. Exchanges are subject to product availability.',
  },
  {
    question: 'What if my item is defective?',
    answer: 'We stand behind the quality of our products. If you receive a defective item, contact us immediately. We\'ll arrange for a replacement or refund at no cost to you, including return shipping. Most items also come with manufacturer warranties.',
  },
  {
    question: 'Can I return a sleep test kit?',
    answer: 'Unopened sleep test kits can be returned within 30 days. Once a kit has been opened or used, it cannot be returned for health and safety reasons. However, if you have issues with the test or device, please contact our support team.',
  },
  {
    question: 'How do I track my return?',
    answer: 'When you ship your return, save your tracking number. You can check the status of your return by contacting our support team with your order number and tracking information.',
  },
];

export default function Returns() {
  return (<>
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Returns & Exchanges</h1>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Your satisfaction is our priority. We offer hassle-free returns and exchanges
            to ensure you get the right product for your sleep health needs.
          </p>
        </div>
      </div>
    </section>

    {/* Return Process */}
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">How to Return an Item</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Returning a product is simple. Follow these steps for a smooth return process.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {returnSteps.map((step, index) => (
            <Card key={step.title} className="relative">
              <CardContent className="pt-6">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mt-2">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Key Points */}
    <section className="py-16 bg-muted">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Return Policy Highlights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">30-Day Window</h3>
                  <p className="text-muted-foreground">
                    Returns must be initiated within 30 days of delivery for most products.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Mask Guarantee</h3>
                  <p className="text-muted-foreground">
                    CPAP masks come with a 30-day fit guarantee. Exchange for different sizes or models.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Original Condition</h3>
                  <p className="text-muted-foreground">
                    Items must be unused, in original packaging, and in resalable condition.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Non-Returnable Items</h3>
                  <p className="text-muted-foreground">
                    Some items cannot be returned once opened for health and safety reasons.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 bg-background">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faq.map((item) => (
            <Card key={item.question}>
              <CardHeader>
                <CardTitle className="text-base">{item.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">Need Help with a Return?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Our support team is here to assist you. Contact us for return authorization
          or if you have any questions about our return policy.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
            <Link href="/support">Visit Help Center</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
  );
}
