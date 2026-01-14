
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Wind, Moon, Droplets, Settings, AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const machineTypes = [
  {
    title: 'CPAP (Continuous Positive Airway Pressure)',
    description: 'Delivers a constant, steady air pressure throughout the night. The most commonly prescribed therapy for sleep apnea.',
    pros: ['Simple to use', 'Highly effective', 'Most affordable option'],
    idealFor: 'Most people with obstructive sleep apnea',
  },
  {
    title: 'APAP (Auto-Adjusting PAP)',
    description: 'Automatically adjusts pressure throughout the night based on your breathing patterns.',
    pros: ['Adapts to your needs', 'More comfortable for many users', 'Handles different sleep positions'],
    idealFor: 'Users who need varying pressures or have position-dependent apnea',
  },
  {
    title: 'BiPAP (Bilevel PAP)',
    description: 'Provides two pressure levels: higher when you inhale and lower when you exhale.',
    pros: ['Easier to breathe out', 'Better for high-pressure needs', 'More natural breathing feel'],
    idealFor: 'Users who need high pressure or have central sleep apnea',
  },
];

const maskTypes = [
  {
    title: 'Nasal Masks',
    description: 'Covers the nose only. A good balance of stability and minimal coverage.',
    pros: ['Comfortable for most', 'Stable seal', 'Works well with glasses'],
    considerations: 'May not work if you breathe through your mouth',
  },
  {
    title: 'Nasal Pillow Masks',
    description: 'Small cushions that seal at the nostrils. Minimal contact with the face.',
    pros: ['Lightweight', 'Good for claustrophobic users', 'Works with any sleep position'],
    considerations: 'May be uncomfortable at high pressures',
  },
  {
    title: 'Full Face Masks',
    description: 'Covers both the nose and mouth for complete coverage.',
    pros: ['Works for mouth breathers', 'Good at high pressures', 'Secure seal'],
    considerations: 'Larger and may feel more restrictive',
  },
];

const maintenanceTips = [
  { task: 'Clean mask cushion and headgear', frequency: 'Daily' },
  { task: 'Clean tubing with warm soapy water', frequency: 'Weekly' },
  { task: 'Replace air filter', frequency: 'Every 2-4 weeks' },
  { task: 'Clean humidifier chamber', frequency: 'Weekly' },
  { task: 'Replace mask cushion', frequency: 'Every 1-3 months' },
  { task: 'Replace entire mask', frequency: 'Every 6-12 months' },
  { task: 'Replace tubing', frequency: 'Every 3-6 months' },
];

const troubleshootingItems = [
  {
    problem: 'Air leaking from mask',
    solutions: [
      'Adjust headgear straps for a better fit',
      'Clean the mask cushion',
      'Check if the cushion needs replacing',
      'Try a different mask size or style',
    ],
  },
  {
    problem: 'Dry nose or mouth',
    solutions: [
      'Use a heated humidifier',
      'Increase humidity settings',
      'Try a full face mask if using nasal',
      'Use saline nasal spray before bed',
    ],
  },
  {
    problem: 'Rainout (water in tubing)',
    solutions: [
      'Use a heated tube',
      'Lower the humidity setting',
      'Keep the CPAP at or below bed level',
      'Insulate the tubing',
    ],
  },
  {
    problem: 'Difficulty falling asleep',
    solutions: [
      'Use the ramp feature',
      'Practice wearing the mask while awake',
      'Try relaxation techniques',
      'Ensure proper mask fit for comfort',
    ],
  },
  {
    problem: 'Feeling bloated or gassy',
    solutions: [
      'Lower your pressure if possible',
      'Sleep with head elevated',
      'Try an APAP if on CPAP',
      'Consult your doctor about pressure settings',
    ],
  },
];

export default function CPAPGuide() {
  return (<>
    
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CPAP Therapy Guide</h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Everything you need to know about CPAP machines, masks, and getting the most 
              out of your sleep apnea treatment.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/shop/cpap-machines">
                Browse CPAP Machines
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is CPAP */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">What is CPAP Therapy?</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              CPAP stands for Continuous Positive Airway Pressure. It's the most effective 
              treatment for obstructive sleep apnea and is considered the "gold standard" 
              by sleep medicine professionals.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              A CPAP machine delivers a constant stream of pressurized air through a mask 
              you wear while sleeping. This air pressure keeps your airway open, preventing 
              the pauses in breathing that characterize sleep apnea.
            </p>
            <div className="flex items-start gap-4 p-4 bg-muted rounded-lg mt-6">
              <Wind className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-foreground">How it works</p>
                <p className="text-sm">
                  Think of it like an air splint for your airway. The gentle pressure keeps 
                  your throat from collapsing, allowing you to breathe normally all night long.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Types */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Types of PAP Machines</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {machineTypes.map((machine) => (
              <Card key={machine.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{machine.title}</CardTitle>
                  <CardDescription>{machine.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Benefits:</p>
                    <ul className="space-y-1">
                      {machine.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm">
                      <span className="font-medium">Ideal for:</span>{' '}
                      <span className="text-muted-foreground">{machine.idealFor}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mask Types */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Choosing the Right Mask</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Your mask is just as important as your machine. Finding the right fit is key 
            to successful CPAP therapy.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {maskTypes.map((mask) => (
              <Card key={mask.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{mask.title}</CardTitle>
                  <CardDescription>{mask.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Pros:</p>
                    <ul className="space-y-1">
                      {mask.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{mask.considerations}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/shop/accessories">Browse Masks & Accessories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-16 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">CPAP Maintenance Schedule</h2>
          <p className="text-center text-muted-foreground mb-12">
            Regular cleaning and replacement of parts is essential for effective therapy and hygiene.
          </p>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {maintenanceTips.map((tip) => (
                  <div key={tip.task} className="flex items-center justify-between p-4">
                    <span className="font-medium">{tip.task}</span>
                    <span className="text-primary font-semibold">{tip.frequency}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-4">Troubleshooting Common Issues</h2>
          <p className="text-center text-muted-foreground mb-12">
            Having trouble with your CPAP? Here are solutions to the most common problems.
          </p>
          <Accordion type="single" collapsible className="space-y-2">
            {troubleshootingItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-muted rounded-lg px-4">
                <AccordionTrigger className="text-left font-semibold">
                  {item.problem}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pt-2">
                    {item.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Tips for Success */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Tips for CPAP Success</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Moon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Start Gradually</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Wear your mask for short periods while watching TV to get used to it.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Droplets className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Use a Humidifier</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Heated humidification reduces dryness and makes therapy more comfortable.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Settings className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Use the Ramp Feature</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Start with low pressure and let it gradually increase as you fall asleep.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Be Consistent</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Use your CPAP every night, even during naps, for the best results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-muted">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your CPAP Journey?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Browse our selection of top-rated CPAP machines and find the perfect fit for your needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link href="/shop/cpap-machines">Shop CPAP Machines</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Talk to a Specialist</Link>
            </Button>
          </div>
        </div>
      </section>
    
  </>
  );
}
