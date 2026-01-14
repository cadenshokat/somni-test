import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import ... from '/assets/hero-sleep.jpg';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-12 lg:py-20">
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              The Somni Home<br />Sleep Test
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Test for sleep apnea in the comfort of your own home. 
              Get diagnosed and treated in under 2 weeks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/sleep-test">Get Tested</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/why-somni">Learn More</Link>
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://placehold.co/600x400"
                alt="Peaceful bedroom at dawn - better sleep starts here"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
