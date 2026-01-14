
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle, 
  Home, 
  Clock, 
  DollarSign, 
  Shield, 
  Users, 
  Award,
  ArrowRight,
  X,
  Stethoscope,
  Truck,
  HeadphonesIcon
} from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: Home,
    title: 'Test at Home',
    description: 'No need to spend a night in a sleep lab. Our FDA-approved home tests deliver hospital-grade accuracy in the comfort of your bed.',
  },
  {
    icon: Clock,
    title: 'Fast Results',
    description: 'Get your diagnosis in 3-5 business days, not weeks. We know you\'re eager to start feeling better.',
  },
  {
    icon: Stethoscope,
    title: 'Expert Physicians',
    description: 'Every test is reviewed by a board-certified sleep medicine physician who can prescribe treatment if needed.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No surprise bills or insurance hassles. Know exactly what you\'ll pay upfront, with HSA/FSA accepted.',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Fast, free shipping on all orders over $99. Your treatment shouldn\'t cost extra to receive.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'Real sleep specialists available by phone, chat, and email. We\'re with you from first test to long-term success.',
  },
];

const comparison = [
  {
    feature: 'Location',
    somni: 'Your own bed',
    traditional: 'Sleep lab facility',
  },
  {
    feature: 'Wait time to test',
    somni: '3-5 days delivery',
    traditional: '2-6 weeks typically',
  },
  {
    feature: 'Results timeline',
    somni: '3-5 business days',
    traditional: '1-3 weeks',
  },
  {
    feature: 'Cost transparency',
    somni: 'Upfront pricing',
    traditional: 'Variable, insurance-dependent',
  },
  {
    feature: 'Physician review',
    somni: 'Board-certified sleep MD',
    traditional: 'Board-certified sleep MD',
  },
  {
    feature: 'Treatment access',
    somni: 'Direct online ordering',
    traditional: 'DME supplier required',
  },
  {
    feature: 'Ongoing support',
    somni: 'Included at no cost',
    traditional: 'Limited, varies by provider',
  },
];

const testimonials = [
  {
    quote: "I'd been putting off getting tested for years because I didn't want to deal with the sleep lab hassle. Somni made it so easy—I got my results in less than a week and my CPAP a few days later.",
    author: 'Michael R.',
    location: 'Austin, TX',
  },
  {
    quote: "The whole process was seamless. The home test was comfortable, the results were clear, and the support team helped me pick the perfect mask. I'm sleeping better than I have in decades.",
    author: 'Patricia L.',
    location: 'Denver, CO',
  },
  {
    quote: "Finally, a healthcare company that respects my time. From test to treatment in under two weeks, all from my couch. This is how healthcare should work.",
    author: 'James K.',
    location: 'Seattle, WA',
  },
];

export default function WhySomni() {
  return (<>
    
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Somni?</h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Sleep apnea treatment shouldn't be complicated, expensive, or time-consuming. 
              Here's why thousands of patients choose Somni for their sleep health journey.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/shop/sleep-tests">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">The Somni Difference</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Somni vs. Traditional Testing</h2>
          <p className="text-center text-muted-foreground mb-12">
            See how our approach compares to the traditional sleep lab experience.
          </p>
          <Card>
            <CardContent className="p-0">
              <div className="grid grid-cols-3 gap-4 p-4 border-b font-semibold">
                <div>Feature</div>
                <div className="text-primary text-center">Somni</div>
                <div className="text-center text-muted-foreground">Traditional</div>
              </div>
              {comparison.map((row, index) => (
                <div 
                  key={row.feature} 
                  className={`grid grid-cols-3 gap-4 p-4 ${index < comparison.length - 1 ? 'border-b' : ''}`}
                >
                  <div className="font-medium">{row.feature}</div>
                  <div className="text-center flex items-center justify-center gap-2 text-primary">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">{row.somni}</span>
                  </div>
                  <div className="text-center text-muted-foreground text-sm">
                    {row.traditional}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6 flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground flex-1 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">HIPAA Compliant</p>
                <p className="text-xs text-muted-foreground">Your data is protected</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">FDA-Approved</p>
                <p className="text-xs text-muted-foreground">Medical-grade devices</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">50,000+ Patients</p>
                <p className="text-xs text-muted-foreground">Trust Somni</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold">98% Satisfaction</p>
                <p className="text-xs text-muted-foreground">Customer rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join thousands of patients who've chosen a better way to diagnose and treat 
            sleep apnea. Your journey to better sleep starts here.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/shop/sleep-tests">Order Your Sleep Test</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
              <Link href="/resources/sleep-apnea-101">Learn About Sleep Apnea</Link>
            </Button>
          </div>
        </div>
      </section>
    
  </>
  );
}
