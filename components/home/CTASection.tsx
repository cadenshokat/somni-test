import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Clock, Shield } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-accent text-accent-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Ready to Sleep Better?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Take our free 30-second assessment to find out if you're a candidate 
          for at-home sleep testing. No commitment required.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/assessment">Start Free Assessment</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent" asChild>
            <a href="tel:1-800-555-0123" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </Button>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <Clock className="h-8 w-8 mb-2" />
            <span className="font-medium">Quick Results</span>
            <span className="text-sm opacity-80">3-5 day turnaround</span>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="h-8 w-8 mb-2" />
            <span className="font-medium">HIPAA Compliant</span>
            <span className="text-sm opacity-80">Your data is secure</span>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="h-8 w-8 mb-2" />
            <span className="font-medium">Expert Support</span>
            <span className="text-sm opacity-80">Real humans, real help</span>
          </div>
        </div>
      </div>
    </section>
  );
};
