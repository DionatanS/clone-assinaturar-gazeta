import MainHero from '@/components/MainHero';
import { SiteMain } from '@/components/sharedstyles';
import OtherPlans from '@/components/Sections/TheOtherPlans';
import ThePlans from '@/components/Sections/ThePlans';
import Doubts from '@/components/Sections/Doubts';
import WhySubscribe from '@/components/Sections/WhySubscribe';

export default function Home() {
  return (
    <SiteMain>
      <MainHero />
      <ThePlans />
      <OtherPlans />
      <WhySubscribe />
      <Doubts />
    </SiteMain>
  );
}
