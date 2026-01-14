import { HeroSection } from '@/components/home/HeroSection';
import { FeatureCards } from '@/components/home/FeatureCards';
import { HowItWorks } from '@/components/home/HowItWorks';
import { TreatmentOptions } from '@/components/home/TreatmentOptions';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <HowItWorks />
      <TreatmentOptions />
      <CTASection />
    </>
  );
}
