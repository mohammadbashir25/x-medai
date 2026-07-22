import { contactMap } from "../data/data";

const ContactMap = () => {
  return (
    <div className="relative h-[380px] w-full overflow-hidden border-b border-border md:h-[460px]">
      <iframe
        src={contactMap.embedSrc}
        title={contactMap.label}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full grayscale invert-[0.92] contrast-[0.9]"
      />
      {/* subtle top fade so the map tucks under the navbar cleanly */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
    </div>
  );
};

export default ContactMap;
