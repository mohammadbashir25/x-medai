import Container from "../../components/ui/Container";
import SectionDivider from "../../components/ui/SectionDivider";
import AboutHero from "./components/about-hero";
import CompanyStory from "./components/company-story";
import MissionVision from "./components/mission-vision";
import ValuesGrid from "./components/values-grid";
import StatsSection from "./components/stats-section";
import Timeline from "./components/timeline";
import TeamGrid from "./components/team-grid";
import AboutCTA from "./components/about-cta";

const AboutPage = () => {
  return (
    <>
      <Container>
        <AboutHero />
      </Container>

      <SectionDivider />

      <Container>
        <CompanyStory />
      </Container>

      <SectionDivider />

      <Container>
        <MissionVision />
      </Container>

      <SectionDivider />

      <Container>
        <ValuesGrid />
      </Container>

      <SectionDivider />

      <Container className="py-20 md:py-28">
        <StatsSection />
      </Container>

      <SectionDivider />

      <Container>
        <Timeline />
      </Container>

      <SectionDivider />

      <Container>
        <TeamGrid />
      </Container>

      <SectionDivider />

      <Container>
        <AboutCTA />
      </Container>
    </>
  );
};

export default AboutPage;
