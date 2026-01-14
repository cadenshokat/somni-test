'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Upload, FileText, CheckCircle, AlertCircle, Shield, Clock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const steps = [
  {
    icon: Upload,
    title: 'Upload Your Prescription',
    description: 'Take a photo or upload a scan of your valid prescription.',
  },
  {
    icon: Shield,
    title: 'Verification',
    description: 'Our team verifies your prescription within 24-48 hours.',
  },
  {
    icon: CheckCircle,
    title: 'Start Shopping',
    description: 'Once verified, you can purchase prescription-required items.',
  },
];

export default function SubmitPrescription() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    doctorName: '',
    doctorPhone: '',
    notes: '',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast({
        title: "File required",
        description: "Please upload your prescription document.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Prescription submitted!",
      description: "We'll verify your prescription within 24-48 hours.",
    });

    setFile(null);
    setFormData({ doctorName: '', doctorPhone: '', notes: '' });
    setIsSubmitting(false);
  };

  if (!user) {
    return (<>
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Submit Prescription</h1>
            <p className="text-xl text-primary-foreground/80">
              Upload your valid prescription to purchase CPAP machines and accessories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-md">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Sign In Required</CardTitle>
              <CardDescription>
                You need to be signed in to submit your prescription.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full">
                <Link href="/login">Sign In</Link>
              </Button>
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link href="/login" className="text-primary underline">
                  Create one
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
    );
  }

  return (<>
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
      <div className="container">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Submit Prescription</h1>
          <p className="text-xl text-primary-foreground/80">
            Upload your valid prescription to purchase CPAP machines and accessories.
          </p>
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-12 bg-muted">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                <step.icon className="h-6 w-6" />
              </div>
              <div className="text-sm text-muted-foreground mb-2">Step {index + 1}</div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Upload Form */}
    <section className="py-16 bg-background">
      <div className="container max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Upload Your Prescription
            </CardTitle>
            <CardDescription>
              Accepted formats: PDF, JPG, PNG (max 10MB)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="prescription">Prescription Document *</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                  <input
                    id="prescription"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="prescription" className="cursor-pointer">
                    {file ? (
                      <div className="flex items-center justify-center gap-2 text-primary">
                        <FileText className="h-8 w-8" />
                        <span className="font-medium">{file.name}</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                        <p className="font-medium">Click to upload or drag and drop</p>
                        <p className="text-sm text-muted-foreground">PDF, JPG, or PNG up to 10MB</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="doctorName">Prescribing Doctor's Name</Label>
                  <Input
                    id="doctorName"
                    value={formData.doctorName}
                    onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                    placeholder="Dr. Smith"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctorPhone">Doctor's Phone Number</Label>
                  <Input
                    id="doctorPhone"
                    type="tel"
                    value={formData.doctorPhone}
                    onChange={(e) => setFormData({ ...formData, doctorPhone: e.target.value })}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any additional information about your prescription..."
                  rows={3}
                />
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Verification takes 24-48 hours</p>
                  <p className="text-muted-foreground">
                    We'll email you once your prescription has been verified.
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Prescription'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Prescription Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Must be signed by a licensed physician, physician assistant, or nurse practitioner</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Must include the diagnosis (e.g., Obstructive Sleep Apnea)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Must specify the equipment prescribed (e.g., CPAP, BiPAP)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span>Must be dated within the last 5 years</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  </>
  );
}
