'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const questions = [
  {
    id: 'snoring',
    question: 'Do you snore loudly (louder than talking or loud enough to be heard through closed doors)?',
    field: 'snoring',
  },
  {
    id: 'tired',
    question: 'Do you often feel tired, fatigued, or sleepy during the daytime?',
    field: 'tired',
  },
  {
    id: 'observed',
    question: 'Has anyone observed you stop breathing during your sleep?',
    field: 'observed',
  },
  {
    id: 'pressure',
    question: 'Do you have or are you being treated for high blood pressure?',
    field: 'pressure',
  },
  {
    id: 'bmi',
    question: 'Is your BMI more than 35?',
    field: 'bmi',
  },
  {
    id: 'age',
    question: 'Are you over 50 years old?',
    field: 'age',
  },
  {
    id: 'neck',
    question: 'Is your neck circumference greater than 16 inches (40cm)?',
    field: 'neck',
  },
  {
    id: 'gender',
    question: 'Are you male?',
    field: 'gender',
  },
];

export default function Assessment() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (field: string, value: string) => {
    setAnswers({ ...answers, [field]: value });
  };

  const calculateRisk = () => {
    const yesCount = Object.values(answers).filter((answer) => answer === 'yes').length;

    if (yesCount >= 5) {
      return 'high';
    } else if (yesCount >= 3) {
      return 'moderate';
    } else {
      return 'low';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const isComplete = Object.keys(answers).length === questions.length;
  const risk = showResults ? calculateRisk() : null;

  return (<>
    <section className="py-16 bg-background">
      <div className="container max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Sleep Apnea Assessment</h1>
          <p className="text-muted-foreground text-lg">
            This questionnaire is based on the STOP-BANG assessment, a clinically validated
            tool for identifying sleep apnea risk. Answer honestly for the most accurate results.
          </p>
        </div>

        {!showResults ? (
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {questions.map((q, index) => (
                <Card key={q.id}>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">
                      {index + 1}. {q.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      onValueChange={(value) => handleAnswer(q.field, value)}
                      value={answers[q.field]}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id={`${q.id}-yes`} />
                        <Label htmlFor={`${q.id}-yes`}>Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id={`${q.id}-no`} />
                        <Label htmlFor={`${q.id}-no`}>No</Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button type="submit" size="lg" disabled={!isComplete}>
                View My Results
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {!isComplete && (
              <p className="text-center text-sm text-muted-foreground mt-4">
                Please answer all questions to see your results
              </p>
            )}
          </form>
        ) : (
          <div className="space-y-6">
            {risk === 'high' && (
              <Card className="border-red-500 bg-red-50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-8 w-8 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-red-900 mb-2">High Risk</h3>
                      <p className="text-red-800 mb-4">
                        Based on your answers, you have a high risk of sleep apnea. We strongly
                        recommend getting a professional sleep test to confirm a diagnosis.
                      </p>
                      <div className="space-y-2">
                        <p className="font-semibold text-red-900">Next Steps:</p>
                        <ul className="list-disc list-inside space-y-1 text-red-800">
                          <li>Order a home sleep test for accurate diagnosis</li>
                          <li>Consult with a sleep medicine physician</li>
                          <li>Start treatment if sleep apnea is confirmed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {risk === 'moderate' && (
              <Card className="border-yellow-500 bg-yellow-50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-yellow-900 mb-2">Moderate Risk</h3>
                      <p className="text-yellow-800 mb-4">
                        Based on your answers, you have a moderate risk of sleep apnea. We recommend
                        getting tested to rule out sleep apnea and ensure proper treatment if needed.
                      </p>
                      <div className="space-y-2">
                        <p className="font-semibold text-yellow-900">Recommended Actions:</p>
                        <ul className="list-disc list-inside space-y-1 text-yellow-800">
                          <li>Consider ordering a home sleep test</li>
                          <li>Monitor your symptoms</li>
                          <li>Discuss concerns with your doctor</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {risk === 'low' && (
              <Card className="border-green-500 bg-green-50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-2">Low Risk</h3>
                      <p className="text-green-800 mb-4">
                        Based on your answers, you have a low risk of sleep apnea. However, if you
                        still experience symptoms like excessive daytime sleepiness or witnessed
                        breathing pauses, consider getting tested.
                      </p>
                      <div className="space-y-2">
                        <p className="font-semibold text-green-900">Maintaining Good Sleep:</p>
                        <ul className="list-disc list-inside space-y-1 text-green-800">
                          <li>Maintain a consistent sleep schedule</li>
                          <li>Create a comfortable sleep environment</li>
                          <li>Limit caffeine and alcohol before bed</li>
                          <li>Exercise regularly</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Important Disclaimer</h3>
                <p className="text-muted-foreground mb-4">
                  This assessment is a screening tool only and not a substitute for professional
                  medical diagnosis. Only a qualified healthcare provider can diagnose sleep apnea
                  through proper testing.
                </p>
                <p className="text-muted-foreground">
                  If you have concerns about your sleep health, we recommend consulting with a
                  healthcare professional or taking a home sleep test for accurate diagnosis.
                </p>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <Link href="/shop/sleep-tests">
                  Order Sleep Test
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                setShowResults(false);
                setAnswers({});
              }}>
                Retake Assessment
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  </>
  );
}
