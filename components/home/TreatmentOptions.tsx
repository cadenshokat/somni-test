import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
// import ... from '/assets/cpap-device.jpg';
// import ... from '/assets/oral-appliance.jpg';

const treatmentOptions = [
  {
    title: 'CPAP Therapy',
    subtitle: 'The gold standard for sleep apnea treatment',
    description: 'Continuous Positive Airway Pressure keeps your airway open while you sleep. Modern devices are quieter, smaller, and smarter than ever.',
    image: "https://placehold.co/600x400",
    benefits: [
      'Most effective treatment',
      'Insurance often covers',
      'Remote monitoring included',
      'Personalized coaching',
    ],
    cta: 'Shop CPAP',
    link: '/shop/cpap-machines',
    bgClass: 'bg-secondary',
  },
  {
    title: 'Oral Appliance',
    subtitle: 'The comfortable CPAP alternative',
    description: 'Custom-fit dental devices that gently advance your jaw to keep your airway open. No masks, no machines, no noise.',
    image: "https://placehold.co/600x400",
    benefits: [
      'No masks or machines',
      'FDA-cleared devices',
      'Custom-fit to your teeth',
      'Great for travel',
    ],
    cta: 'Learn More',
    link: '/shop/oral-appliances',
    bgClass: 'bg-primary text-primary-foreground',
  },
];

export const TreatmentOptions = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Treatment Options That Work for You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you prefer CPAP or want a machine-free alternative, 
            we have solutions that fit your lifestyle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {treatmentOptions.map((option) => (
            <div
              key={option.title}
              className={`rounded-xl overflow-hidden ${option.bgClass}`}
            >
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
                  {option.title}
                </h3>
                <p className="text-sm opacity-80 mb-4">{option.subtitle}</p>
                <p className="mb-6 opacity-90">{option.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {option.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={option.bgClass.includes('primary') ? 'secondary' : 'default'}
                  size="lg"
                  asChild
                >
                  <Link href={option.link} className="flex items-center gap-2">
                    {option.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="h-48 lg:h-64">
                <img
                  src="https://placehold.co/600x400"
                  alt={option.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
