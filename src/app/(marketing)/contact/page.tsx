import Container from "../../components/ui/Container";
import SectionDivider from "../../components/ui/SectionDivider";
import ContactMap from "../contact/components/contact-map";
import ContactInfo from "../contact/components/contact-info";
import ContactForm from "../contact/components/contact-form";
import ProjectBanner from "../contact/components/project-banner";
import ContactFooterStrip from "../contact/components/contact-footer-strip";

const ContactPage = () => {
  return (
    <>
      <ContactMap />

      <Container className="py-16 md:py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>

      <SectionDivider />

      <Container className="py-16 md:py-24">
        <ProjectBanner />
      </Container>

      <SectionDivider />

      <Container className="pb-16 md:pb-24">
        <ContactFooterStrip />
      </Container>
    </>
  );
};

export default ContactPage;
