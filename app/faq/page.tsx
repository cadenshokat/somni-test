'use client';

'use client';


import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const faqCategories = {
  general: {
    title: 'General Questions',
    questions: [
      {
        question: 'What is Somni?',
        answer: 'Somni is a digital healthcare company specializing in sleep apnea diagnosis and treatment. We offer a complete journey from home sleep testing to prescription devices, all from the comfort of your home.',
      },
      {
        question: 'How does Somni work?',
        answer: 'Getting started is easy: 1) Order a home sleep test, 2) Complete the test at home, 3) Get your results reviewed by a board-certified sleep physician, 4) If diagnosed, receive a prescription, and 5) Shop for your treatment device with free shipping.',
      },
      {
        question: 'Do I need a prescription for CPAP?',
        answer: 'Yes, CPAP machines and some accessories require a valid prescription from a licensed healthcare provider. Our home sleep test includes a physician review that can provide you with a prescription if you\'re diagnosed with sleep apnea.',
      },
      {
        question: 'Is Somni legitimate?',
        answer: 'Absolutely. Somni is a licensed healthcare provider working with board-certified sleep physicians. Our home sleep tests are FDA-approved, and all prescriptions are issued by licensed medical professionals.',
      },
    ],
  },
  testing: {
    title: 'Sleep Testing',
    questions: [
      {
        question: 'How does the home sleep test work?',
        answer: 'Our FDA-approved home sleep test is shipped to your door. You\'ll wear a small, comfortable device while you sleep for one night. The device records your breathing patterns, oxygen levels, heart rate, and sleep position. Once complete, you ship it back using the prepaid label, and a board-certified sleep physician reviews your results.',
      },
      {
        question: 'Is a home sleep test as accurate as an in-lab study?',
        answer: 'Home sleep tests are highly accurate for diagnosing obstructive sleep apnea. While in-lab studies provide more data points, home sleep tests are FDA-approved and recommended by sleep specialists for most patients. They also provide a more natural sleep environment.',
      },
      {
        question: 'How long does it take to get my results?',
        answer: 'After we receive your completed test, results are typically available within 3-5 business days. You\'ll receive an email notification when your results are ready to view in your account.',
      },
      {
        question: 'What if my test results are inconclusive?',
        answer: 'In rare cases where results are inconclusive, we\'ll work with you to determine next steps. This may include a retest at no additional charge or a referral for an in-lab sleep study.',
      },
    ],
  },
  products: {
    title: 'Products & Prescriptions',
    questions: [
      {
        question: 'What brands of CPAP machines do you carry?',
        answer: 'We carry top brands including ResMed, Philips Respironics, Fisher & Paykel, and more. Our selection includes CPAP, APAP, and BiPAP machines to suit different therapy needs.',
      },
      {
        question: 'How do I know which CPAP mask is right for me?',
        answer: 'Choosing the right mask depends on your breathing style (nose vs. mouth), sleep position, and comfort preferences. We offer nasal masks, nasal pillow masks, and full face masks. Contact our sleep specialists for personalized recommendations.',
      },
      {
        question: 'Can I use my existing prescription?',
        answer: 'Yes! If you already have a valid CPAP prescription, you can upload it to your account. Prescriptions must be dated within the last 5 years and include the diagnosis and prescribed device type.',
      },
      {
        question: 'Do you sell CPAP supplies without a prescription?',
        answer: 'Some accessories like tubing, filters, and cleaning supplies don\'t require a prescription. However, CPAP machines, masks, and cushions that interface with the user require a valid prescription.',
      },
    ],
  },
  shipping: {
    title: 'Shipping & Returns',
    questions: [
      {
        question: 'How long does shipping take?',
        answer: 'Standard shipping takes 3-5 business days. Expedited shipping options are available at checkout. Home sleep tests include prepaid return shipping.',
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Currently, we only ship within the United States, including Alaska and Hawaii. International shipping is not available at this time.',
      },
      {
        question: 'What is your return policy?',
        answer: 'Unopened items can be returned within 30 days for a full refund. Due to FDA regulations, opened CPAP equipment cannot be returned for hygienic reasons. See our Returns page for full details.',
      },
      {
        question: 'What if my order arrives damaged?',
        answer: 'Contact us within 48 hours of delivery with photos of the damage. We\'ll send a replacement at no cost to you.',
      },
    ],
  },
  insurance: {
    title: 'Insurance & Payment',
    questions: [
      {
        question: 'Do you accept insurance?',
        answer: 'Currently, we operate on a cash-pay model. However, we provide detailed receipts that you can submit to your insurance for potential reimbursement. Many HSA/FSA accounts also cover our products and services.',
      },
      {
        question: 'Can I use my HSA or FSA?',
        answer: 'Yes! Sleep apnea diagnosis and treatment are typically eligible HSA/FSA expenses. This includes home sleep tests, CPAP machines, masks, and accessories.',
      },
      {
        question: 'Do you offer payment plans?',
        answer: 'Yes, we partner with Affirm to offer flexible payment plans. You can split your purchase into monthly payments at checkout. Subject to credit approval.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and HSA/FSA cards.',
      },
    ],
  },
  support: {
    title: 'Technical Support',
    questions: [
      {
        question: 'How do I set up my CPAP machine?',
        answer: 'Each CPAP machine comes with a quick start guide. We also provide video tutorials and written guides in your account. If you need additional help, our support team is available by phone or chat.',
      },
      {
        question: 'My CPAP is making noise. What should I do?',
        answer: 'Some noise is normal, but loud or unusual sounds may indicate a filter needs replacement, a leak in the mask or tubing, or a technical issue. Check our troubleshooting guide or contact support.',
      },
      {
        question: 'How often should I replace my supplies?',
        answer: 'General guidelines: Filters every 2-4 weeks, mask cushions every 1-3 months, full masks every 6-12 months, and tubing every 3-6 months. Frequency depends on usage and manufacturer recommendations.',
      },
      {
        question: 'My mask is leaking. How do I fix it?',
        answer: 'Mask leaks are often caused by improper fit or worn cushions. Try adjusting the headgear straps, cleaning the cushion, or replacing worn parts. Our mask fitting guide can help you achieve a better seal.',
      },
    ],
  },
};

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const allQuestions = Object.values(faqCategories).flatMap((category) =>
    category.questions.map((q) => ({ ...q, category: category.title }))
  );

  const filteredQuestions = searchQuery
    ? allQuestions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  return (<>
    
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Find answers to common questions about sleep apnea, our products, and services.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background text-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 bg-background">
        <div className="container max-w-4xl">
          {filteredQuestions ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  {filteredQuestions.length} result{filteredQuestions.length !== 1 && 's'} for "{searchQuery}"
                </p>
                <Button variant="ghost" size="sm" onClick={() => setSearchQuery('')}>
                  Clear search
                </Button>
              </div>
              {filteredQuestions.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">No questions found matching your search.</p>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              ) : (
                <Accordion type="single" collapsible className="space-y-2">
                  {filteredQuestions.map((faq, index) => (
                    <AccordionItem key={index} value={`search-${index}`} className="bg-muted rounded-lg px-4">
                      <AccordionTrigger className="text-left">
                        <div>
                          <span className="text-xs text-primary font-medium block mb-1">{faq.category}</span>
                          {faq.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          ) : (
            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent">
                {Object.entries(faqCategories).map(([key, category]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(faqCategories).map(([key, category]) => (
                <TabsContent key={key} value={key}>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${key}-${index}`} className="bg-muted rounded-lg px-4">
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted">
        <div className="container max-w-2xl text-center">
          <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our team of sleep specialists is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:1-800-SOMNI">Call 1-800-SOMNI</a>
            </Button>
          </div>
        </div>
      </section>
    
  </>
  );
}
