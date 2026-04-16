import { useTranslation } from "react-i18next";
import { BracketLabel, GradientHeading } from "../../../components/ui";

export const FeaturedExperienceSection = () => {
  const { t } = useTranslation();

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
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.6)" }}
      />

      <div className="relative z-[1] flex flex-col items-center text-center px-6">
        <BracketLabel className="mb-4">{t("featured.label")}</BracketLabel>
        <GradientHeading className="text-3xl sm:text-4xl lg:text-5xl max-w-3xl">
          {t("featured.heading")}
        </GradientHeading>
        <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-6 leading-relaxed">
          {t("featured.desc")}
        </p>
      </div>
    </section>
  );
};
