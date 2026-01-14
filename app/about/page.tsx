
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Shield, Users, Zap, Award, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    icon: Heart,
    title: 'Patient-First Care',
    description: 'Every decision we make starts with what\'s best for the people we serve. Your health and well-being are our top priority.',
  },
  {
    icon: Shield,
    title: 'Clinical Excellence',
    description: 'We work with board-certified sleep physicians and use FDA-approved devices to ensure the highest quality of care.',
  },
  {
    icon: Zap,
    title: 'Accessibility',
    description: 'We believe everyone deserves access to quality sleep apnea care, regardless of location or circumstance.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We\'re building a community of people committed to better sleep and better health, supporting each other every step of the way.',
  },
];

const stats = [
  { value: '50,000+', label: 'Patients Helped' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24-48hrs', label: 'Average Result Time' },
  { value: '50', label: 'States Served' },
];

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Chief Medical Officer',
    description: 'Board-certified sleep medicine physician with 15+ years of experience.',
  },
  {
    name: 'Michael Chen',
    role: 'CEO & Co-Founder',
    description: 'Healthcare technology leader passionate about improving access to care.',
  },
  {
    name: 'Jennifer Adams',
    role: 'Head of Patient Experience',
    description: 'Former sleep technologist dedicated to making the patient journey seamless.',
  },
];

export default function About() {
  return (<>
    
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Somni</h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              We're on a mission to help millions of people breathe easier and sleep better. 
              Somni makes sleep apnea diagnosis and treatment accessible, affordable, and 
              convenient—all from the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              Sleep apnea affects over 22 million Americans, yet 80% of cases remain undiagnosed. 
              We're changing that.
            </p>
          </div>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Traditional sleep apnea diagnosis often means waiting weeks for a sleep center 
              appointment, spending an uncomfortable night in a lab, and navigating confusing 
              insurance processes. We knew there had to be a better way.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Somni was founded on a simple belief: that getting diagnosed and treated for 
              sleep apnea should be as easy as ordering anything else online. We've built a 
              platform that combines FDA-approved home testing, board-certified physician 
              oversight, and direct-to-consumer convenience.
            </p>
            <p className="text-lg leading-relaxed">
              Our fully digital journey takes you from "I think I might have sleep apnea" to 
              "I'm sleeping better than I have in years"—often in just a week or two.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Leadership Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our team combines decades of experience in sleep medicine, healthcare technology, 
            and patient care.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-16 bg-muted">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Patients Choose Somni</h2>
            <p className="text-muted-foreground">
              We're not just another medical supplier. We're your partner in better sleep.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4">
              <Award className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Board-Certified Physicians</h3>
                <p className="text-sm text-muted-foreground">
                  Every test is reviewed by a licensed sleep medicine specialist.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Fast Results</h3>
                <p className="text-sm text-muted-foreground">
                  Get your diagnosis in days, not weeks.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">FDA-Approved Devices</h3>
                <p className="text-sm text-muted-foreground">
                  Hospital-grade accuracy in the comfort of your home.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Dedicated Support</h3>
                <p className="text-sm text-muted-foreground">
                  Real humans ready to help you every step of the way.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button asChild>
              <Link href="/why-somni">
                Learn More About Why Somni
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sleep Better?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Take the first step toward better sleep. Order your home sleep test today and 
            join thousands of patients who've transformed their health with Somni.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/shop/sleep-tests">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    
  </>
  );
}
