import Container from "../../components/ui/Container";
import SectionDivider from "../../components/ui/SectionDivider";
import ServicesHero from "./components/ServicesHero";
import ServicesBreakdown from "./components/ServicesBreakDown";
import SystemFlow from "./components/ServiceFlow";
import LightProcess from "./components/LightProcess";
import TrustStrip from "./components/TrustStrip";
import ServicesCta from "./components/ServicesCTA";

const ServicesPage = () => {
  return (
    <div>
      <Container>
        <ServicesHero />
      </Container>

      <ServicesBreakdown />

      <Container>
        <SectionDivider />
        <SystemFlow />
        <SectionDivider />
        <LightProcess />
        <SectionDivider />
        <TrustStrip />
        <ServicesCta />
      </Container>
    </div>
  );
};

export default ServicesPage;
