import Hero from '@/components/home/Hero';
import CompanyOverview from '@/components/home/CompanyOverview';
import ProductsShowcase from '@/components/home/ProductsShowcase';
import VideoSection from '@/components/home/VideoSection';
import ContactSection from '@/components/home/ContactSection';
import BrochureDownload from '@/components/BrochureDownload';

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ProductsShowcase />
      <VideoSection />
      <BrochureDownload 
        title="Download Our Complete Product Brochure"
        description="Get detailed information about our spring solutions and capabilities. Learn about our specifications, applications, and success stories."
      />
      <ContactSection />
    </>
  );
}
