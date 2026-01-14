import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import ... from '/assets/sleep-test-device.jpg';
// import ... from '/assets/cpap-device.jpg';

export const FeatureCards = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
          Everything you need, every step of the way
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          From testing to treatment, we guide you through your entire sleep apnea journey.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Sleep Test Card */}
          <div className="text-center">
            <div className="relative mx-auto mb-6 w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-secondary rounded-full" />
              <img
                src="https://placehold.co/600x400"
                alt="Home sleep test device"
                className="relative z-10 w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3">
              Test for Sleep Apnea at Home.
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              Take the easiest sleep test available, all from the comfort of your home. 
              Results reviewed by board-certified sleep physicians.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/sleep-test">Get Tested</Link>
            </Button>
          </div>

          {/* CPAP Card */}
          <div className="text-center">
            <div className="relative mx-auto mb-6 w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-secondary rounded-full" />
              <img
                src="https://placehold.co/600x400"
                alt="CPAP machine"
                className="relative z-10 w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-3">
              The Best Products for the Best Sleep.
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              Get the best CPAP products, backed by the best service and support. 
              Premium devices with personalized coaching.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/shop/cpap-machines">Shop CPAP</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
