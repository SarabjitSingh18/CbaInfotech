import FAQSection from "@/components/Faqs";
import HeroSection from "@/components/HeroSection";
import PopularCourses from "@/components/PopularCourses";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
   <main className="flex flex-col align-center justify-center">
    <HeroSection/>
    <PopularCourses/>
    <FAQSection/>
  
   </main>
  );
}
