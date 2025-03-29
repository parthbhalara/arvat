import Hero from '@/components/home/Hero';
import CompanyOverview from '@/components/home/CompanyOverview';
import ProductsShowcase from '@/components/home/ProductsShowcase';
import VideoSection from '@/components/home/VideoSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ProductsShowcase />
      <VideoSection />
      <ContactSection />
    </>
  );
}
