import Container from "../components/ui/Container";
import Hero from "../section/Hero/Hero";
import HowItWorksSection from "../section/HowWorks/HowItWorksSection";
import ProblemSolutionSection from "../section/Problem-solution/ProblemSolutionSection";

const Page = () => {
  return (
    <div className="">
      <Container>
        <Hero />
        <ProblemSolutionSection />
        <HowItWorksSection />
      </Container>
    </div>
  );
};

export default Page;
