import ServiceBlock from "./ServiceBlock";
import { SERVICES } from "../data/data";

const ServicesBreakdown = () => {
  return (
    <section className="relative">
      {SERVICES.map((service, index) => (
        <ServiceBlock
          key={service.id}
          service={service}
          reversed={index % 2 === 1}
          tinted={index % 2 === 1}
        />
      ))}
    </section>
  );
};

export default ServicesBreakdown;