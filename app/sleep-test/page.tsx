import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle,
  Clock,
  Home,
  Shield,
  ArrowRight,
  Package,
  ClipboardCheck,
  Truck
} from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    icon: Package,
    title: 'Order Your Test',
    description: 'Choose your sleep test package and complete a quick medical questionnaire online.',
  },
  {
    icon: Truck,
    title: 'Receive Your Kit',
    description: 'Your FDA-approved sleep test device arrives in 3-5 business days with free shipping.',
  },
  {
    icon: Home,
    title: 'Test at Home',
    description: 'Wear the comfortable, lightweight device for one night in your own bed.',
  },
  {
    icon: ClipboardCheck,
    title: 'Get Your Results',
    description: 'A board-certified sleep physician reviews your data and provides a diagnosis in 3-5 days.',
  },
];

const benefits = [
  {
    icon: Home,
    title: 'Sleep in Your Own Bed',
    description: 'No uncomfortable sleep lab. Get accurate results in your natural sleep environment.',
  },
  {
    icon: Clock,
    title: 'Fast & Convenient',
    description: 'Complete the entire process from home. Results in less than a week.',
  },
  {
    icon: Shield,
    title: 'Medical-Grade Accuracy',
    description: 'FDA-approved devices reviewed by board-certified sleep medicine physicians.',
  },
  {
    icon: CheckCircle,
    title: 'Comprehensive Analysis',
    description: 'Measures breathing patterns, oxygen levels, heart rate, and sleep position.',
  },
];

const faq = [
  {
    question: 'Is a home sleep test as accurate as a lab test?',
    answer: 'Yes! Our FDA-approved home sleep tests are clinically validated and provide the same diagnostic accuracy as in-lab tests for obstructive sleep apnea. They\'re reviewed by the same board-certified sleep physicians.',
  },
  {
    question: 'What does the test measure?',
    answer: 'The test monitors your breathing patterns, oxygen saturation, heart rate, snoring intensity, and sleep position throughout the night. This comprehensive data allows physicians to accurately diagnose sleep apnea.',
  },
  {
    question: 'How long does it take to get results?',
    answer: 'After you complete your test and ship the device back (prepaid shipping included), a board-certified sleep physician will review your data. You\'ll receive your results within 3-5 business days.',
  },
  {
    question: 'What if I need treatment?',
    answer: 'If you\'re diagnosed with sleep apnea, you\'ll receive a prescription and can immediately order your CPAP therapy equipment through our online store. We offer ongoing support to ensure treatment success.',
  },
  {
    question: 'Will insurance cover this?',
    answer: 'Many insurance plans cover home sleep tests. We provide detailed receipts for insurance reimbursement. We also accept HSA/FSA cards and offer transparent upfront pricing.',
  },
];

export default function SleepTest() {
  return (<>
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">FDA-Approved Home Sleep Test</h1>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Get diagnosed for sleep apnea from the comfort of your own bed.
            Fast, accurate, and convenient—no sleep lab required.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/shop/sleep-tests">
                Order Your Test
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
              <Link href="/assessment">Take Free Assessment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Getting tested for sleep apnea has never been easier. Follow these simple steps
          to get your diagnosis in less than two weeks.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
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

    {/* Benefits */}
    <section className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose a Home Sleep Test?</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

    {/* What's Included */}
    <section className="py-16 bg-background">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-4">What's Included</h2>
        <p className="text-center text-muted-foreground mb-12">
          Everything you need for a comprehensive sleep apnea diagnosis.
        </p>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">FDA-Approved Device</p>
                  <p className="text-sm text-muted-foreground">Medical-grade monitoring equipment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Free Shipping Both Ways</p>
                  <p className="text-sm text-muted-foreground">Prepaid return label included</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Physician Review</p>
                  <p className="text-sm text-muted-foreground">Board-certified sleep medicine doctor</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Detailed Report</p>
                  <p className="text-sm text-muted-foreground">Comprehensive sleep analysis</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Treatment Prescription</p>
                  <p className="text-sm text-muted-foreground">If sleep apnea is diagnosed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Ongoing Support</p>
                  <p className="text-sm text-muted-foreground">Access to sleep specialists</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 bg-muted">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faq.map((item) => (
            <Card key={item.question}>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Tested?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Take the first step toward better sleep and improved health.
          Order your home sleep test today.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/shop/sleep-tests">Order Your Test Now</Link>
        </Button>
      </div>
    </section>
  </>
  );
}
