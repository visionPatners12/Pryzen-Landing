import { BracketLabel, GradientHeading } from "../../../components/ui";

export const FeaturedExperienceSection = () => {
  return (
    <section
      className="relative py-28 w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1400px] mx-auto rounded-2xl overflow-hidden"
      id="featured"
      style={{
        backgroundImage: "url('/landing/landing_assests/close_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.6)" }}
      />

      <div className="relative z-[1] flex flex-col items-center text-center px-6">
        <BracketLabel className="mb-4">Featured Experience</BracketLabel>
        <GradientHeading className="text-3xl sm:text-4xl lg:text-5xl max-w-3xl">
          A Premium Lounge Where Social, Betting, And Team Markets Converge
        </GradientHeading>
        <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-6 leading-relaxed">
          Pryzen delivers a cinematic sports-tech atmosphere blending digital
          culture, social participation, and onchain conviction.
        </p>
      </div>
    </section>
  );
};
