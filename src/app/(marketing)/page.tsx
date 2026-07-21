import Container from "../components/ui/Container";
import SectionDivider from "../components/ui/SectionDivider";
import CTASection from "../section/CTA/CTASection";
import Hero from "../section/Hero/Hero";
import HowItWorksSection from "../section/HowWorks/HowItWorksSection";
import PortfolioSection from "../section/Portfolio-section/PortfolioSection";
import ProblemSolutionSection from "../section/Problem-solution/ProblemSolutionSection";
import TestimonialsSection from "../section/Testimonail/TestimonailSection";
import WhyChooseUsSection from "../section/WhyChooseUs/WhyChooseUsSection";

const Page = () => {
  return (
    <div className="">
      <Container>
        <Hero />
        <ProblemSolutionSection />
        <SectionDivider />
        <HowItWorksSection />
        <PortfolioSection />
        <TestimonialsSection />
        <WhyChooseUsSection />
        <CTASection />
      </Container>
    </div>
  );
};

export default Page;
