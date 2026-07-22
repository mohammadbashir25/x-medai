import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section className="relative overflow-hidden  mt-10 lg:-mt-10 max-w-7xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 max-w-7xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]"
      />

      <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-4 px-3 md:px-5">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;