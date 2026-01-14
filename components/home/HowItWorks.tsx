import { ClipboardCheck, TestTube, Video, Package } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Take a Quick Assessment',
    description: 'Answer a few questions to see if you\'re a candidate for our at-home sleep test.',
    step: '01',
  },
  {
    icon: TestTube,
    title: 'Complete Your Sleep Test',
    description: 'We ship you an FDA-approved device. Test in your own bed, upload results automatically.',
    step: '02',
  },
  {
    icon: Video,
    title: 'Review Results with a Doctor',
    description: 'A board-certified sleep physician reviews your results and provides a diagnosis via telehealth.',
    step: '03',
  },
  {
    icon: Package,
    title: 'Get Your Treatment',
    description: 'Receive your CPAP or oral appliance, plus ongoing coaching and support.',
    step: '04',
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A fully digital journey from diagnosis to treatment. 
            Skip the sleep labs, the wait times, and the hassle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-5xl font-serif font-bold text-accent/30 absolute top-4 right-4">
                {step.step}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
