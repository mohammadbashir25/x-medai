import Container from "../../components/ui/Container";
import SectionDivider from "../../components/ui/SectionDivider";
import PortfolioHero from "./components/portfolio-hero";
import PortfolioCTA from "./components/potfolio-cta";
import PortfolioGrid from "./components/portfolio-grid";

const PortfolioPage = () => {
  return (
    <>
      <Container>
        <PortfolioHero />
      </Container>

      <SectionDivider />

      <Container className="py-16 md:py-24">
        <PortfolioGrid />
      </Container>

      <SectionDivider />

      <Container>
        <PortfolioCTA />
      </Container>
    </>
  );
};

export default PortfolioPage;
