
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AlertTriangle, Heart, Brain, Moon, Activity, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const symptoms = [
  { icon: Moon, title: 'Loud Snoring', description: 'Chronic, disruptive snoring that may wake your partner' },
  { icon: AlertTriangle, title: 'Gasping During Sleep', description: 'Episodes of choking or gasping while sleeping' },
  { icon: Brain, title: 'Morning Headaches', description: 'Frequent headaches upon waking' },
  { icon: Activity, title: 'Daytime Fatigue', description: 'Excessive sleepiness during the day, even after a full night\'s rest' },
  { icon: Heart, title: 'Mood Changes', description: 'Irritability, depression, or difficulty concentrating' },
  { icon: Users, title: 'Witnessed Pauses', description: 'Someone has observed you stop breathing while asleep' },
];

const risks = [
  'High blood pressure (hypertension)',
  'Heart disease and heart attack',
  'Stroke',
  'Type 2 diabetes',
  'Depression and anxiety',
  'Decreased cognitive function',
  'Motor vehicle accidents due to drowsiness',
  'Liver problems',
];

const types = [
  {
    title: 'Obstructive Sleep Apnea (OSA)',
    description: 'The most common type, caused by the relaxation of throat muscles during sleep, blocking the airway.',
    prevalence: 'Affects approximately 25 million Americans',
  },
  {
    title: 'Central Sleep Apnea',
    description: 'Occurs when the brain fails to send proper signals to the muscles that control breathing.',
    prevalence: 'Less common, often associated with other conditions',
  },
  {
    title: 'Complex Sleep Apnea',
    description: 'A combination of obstructive and central sleep apnea.',
    prevalence: 'Also known as treatment-emergent central sleep apnea',
  },
];

const faqItems = [
  {
    question: 'How is sleep apnea diagnosed?',
    answer: 'Sleep apnea is diagnosed through a sleep study (polysomnography), which can be conducted at a sleep center or at home with a home sleep test. The study monitors your breathing, oxygen levels, heart rate, and other vital signs while you sleep.',
  },
  {
    question: 'Who is at risk for sleep apnea?',
    answer: 'Risk factors include being overweight, having a large neck circumference, being male, being over 40, having a family history of sleep apnea, having nasal obstruction, and having certain physical traits like a recessed chin or enlarged tonsils.',
  },
  {
    question: 'Can sleep apnea be cured?',
    answer: 'While there\'s no cure for sleep apnea, it can be effectively managed with treatment. Weight loss, lifestyle changes, CPAP therapy, oral appliances, and in some cases surgery can significantly reduce or eliminate symptoms.',
  },
  {
    question: 'What happens if sleep apnea goes untreated?',
    answer: 'Untreated sleep apnea increases the risk of serious health problems including heart disease, stroke, diabetes, and high blood pressure. It also affects quality of life, causing daytime fatigue, mood changes, and decreased cognitive function.',
  },
  {
    question: 'How common is sleep apnea?',
    answer: 'Sleep apnea affects approximately 22 million Americans, with 80% of moderate to severe cases remaining undiagnosed. It\'s more common in men but also affects women, especially after menopause.',
  },
];

export default function SleepApnea101() {
  return (<>
    
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sleep Apnea 101</h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Everything you need to know about sleep apnea: what it is, how to recognize it, 
              and why treatment matters for your health and quality of life.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/shop/sleep-tests">
                Get Tested Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What is Sleep Apnea */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">What is Sleep Apnea?</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Sleep apnea is a serious sleep disorder where breathing repeatedly stops and starts 
              during sleep. These pauses can last from a few seconds to minutes and may occur 30 
              times or more per hour. When breathing stops, oxygen levels drop, causing the brain 
              to briefly wake you up to resume breathing—often without you being aware of it.
            </p>
            <p className="text-lg leading-relaxed">
              This cycle of interrupted sleep prevents you from reaching deep, restorative sleep 
              stages, leading to chronic fatigue and serious health consequences if left untreated.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Sleep Apnea */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Sleep Apnea</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {types.map((type) => (
              <Card key={type.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <p className="text-sm font-medium text-primary">{type.prevalence}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Common Symptoms</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Recognizing the signs of sleep apnea is the first step toward treatment. 
            Do any of these sound familiar?
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {symptoms.map((symptom) => (
              <Card key={symptom.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <symptom.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{symptom.title}</h3>
                      <p className="text-sm text-muted-foreground">{symptom.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Risks */}
      <section className="py-16 bg-destructive/5">
        <div className="container max-w-4xl">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Health Risks of Untreated Sleep Apnea</h2>
              <p className="text-muted-foreground">
                When left untreated, sleep apnea can contribute to or worsen these conditions:
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {risks.map((risk) => (
              <div key={risk} className="flex items-center gap-3 p-4 bg-background rounded-lg">
                <div className="w-2 h-2 bg-destructive rounded-full" />
                <span>{risk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options Preview */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Treatment Options</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The good news? Sleep apnea is highly treatable. Here are the main treatment approaches:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">CPAP Therapy</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  The gold standard for moderate to severe sleep apnea. A CPAP machine delivers 
                  continuous positive airway pressure to keep your airway open while you sleep.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/cpap-guide">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Oral Appliances</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Custom-fitted dental devices that reposition the jaw and tongue to keep the 
                  airway open. Ideal for mild to moderate sleep apnea or CPAP intolerance.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/shop/oral-appliances">View Options</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-3">Lifestyle Changes</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Weight loss, avoiding alcohol before bed, changing sleep positions, and 
                  quitting smoking can all help reduce sleep apnea symptoms.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/blog">Read Tips</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-muted rounded-lg px-4">
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take the First Step?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Getting tested is easier than ever with our FDA-approved home sleep tests. 
            Take control of your health today.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/shop/sleep-tests">Order a Sleep Test</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
              <Link href="/contact">Speak to a Specialist</Link>
            </Button>
          </div>
        </div>
      </section>
    
  </>
  );
}
