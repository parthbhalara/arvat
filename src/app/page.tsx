import Hero from '@/components/home/Hero';
import CompanyOverview from '@/components/home/CompanyOverview';
import ProductsShowcase from '@/components/home/ProductsShowcase';
import VideoSection from '@/components/home/VideoSection';

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ProductsShowcase />
      <VideoSection />
    </>
  );
}
