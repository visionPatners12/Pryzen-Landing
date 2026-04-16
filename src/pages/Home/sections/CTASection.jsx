import { useTranslation } from "react-i18next";
import { GoldButton } from "../../../components/ui/GoldButton";

export const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section id="enter-beta" className="py-10 w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1400px] mx-auto">
      <div
        className="w-full rounded-3xl px-8 sm:px-16 lg:px-24 py-20 sm:py-28 flex flex-col items-center gap-6 text-center"
        style={{ backgroundColor: "#FEB413" }}
      >
        <h2 className="font-jura font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black uppercase tracking-wide leading-tight max-w-3xl">
          {t("cta.heading")}
        </h2>

        <p className="font-golos text-black/60 text-sm sm:text-base">
          {t("cta.subtitle")}
        </p>

        <GoldButton backgroundImage="/landing/landing_assests/btn-bg-footer.svg">
          {t("cta.button")}
        </GoldButton>
      </div>
    </section>
  );
};
