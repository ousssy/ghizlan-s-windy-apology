import FloatingHearts from "@/components/FloatingHearts";
import WindLines from "@/components/WindLines";
import HeroSection from "@/components/HeroSection";
import ExplanationSection from "@/components/ExplanationSection";
import ApologySection from "@/components/ApologySection";
import ForgiveButton from "@/components/ForgiveButton";
import PromiseSection from "@/components/PromiseSection";
import FinalNote from "@/components/FinalNote";

const Index = () => {
  return (
    <main className="relative overflow-hidden">
      {/* Background effects */}
      <FloatingHearts />
      <WindLines />

      {/* Page sections */}
      <HeroSection />
      <ExplanationSection />
      <ApologySection />
      <ForgiveButton />
      <PromiseSection />
      <FinalNote />
    </main>
  );
};

export default Index;
