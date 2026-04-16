import { useTranslation } from "react-i18next";
import { BracketLabel, GradientHeading } from "../../../components/ui";
import { CARD_FLAT_STYLE } from "../../../styles/constants";

const STEP_ICONS = [
  "/landing/landing_assests/1.png",
  "/landing/landing_assests/2.png",
  "/landing/landing_assests/3.png",
];

const STEP_NUMBERS = ["01", "02", "03"];

const StepCard = ({ n, icon, title, desc, stepLabel }) => (
  <article
    className="flex-1 rounded-2xl p-6 sm:p-8 flex flex-col"
    style={CARD_FLAT_STYLE}
  >
    <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-1">
      {stepLabel}
    </p>
    <div className="flex items-center justify-between mb-5">
      <span
        className="text-[#FEB413] font-bold"
        style={{ fontSize: "3rem", lineHeight: 1, fontFamily: "monospace" }}
      >
        {n}
      </span>
      <img src={icon} alt="" className="w-[36px] h-[36px] object-contain" />
    </div>
    <h3
      className="text-white font-bold uppercase tracking-[0.15em] mb-3"
      style={{ fontSize: "1rem", lineHeight: 1.3, fontFamily: "monospace" }}
    >
      {title}
    </h3>
    <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
  </article>
);

export const HowItWorksSection = () => {
  const { t } = useTranslation();
  const steps = t("howItWorks.steps", { returnObjects: true });

  return (
    <section id="how-it-works" className="py-20 w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1400px] mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <BracketLabel className="mb-4">{t("howItWorks.label")}</BracketLabel>
        <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
          {t("howItWorks.heading")}
        </GradientHeading>
        <p className="text-white/50 text-sm mt-6">
          {t("howItWorks.subtitle")}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        {steps.map((s, i) => (
          <StepCard
            key={i}
            n={STEP_NUMBERS[i]}
            icon={STEP_ICONS[i]}
            title={s.title}
            desc={s.desc}
            stepLabel={t("howItWorks.step")}
          />
        ))}
      </div>
    </section>
  );
};
