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
    className="flex-1 rounded-2xl p-6 sm:p-8 flex flex-col relative group hover:scale-[1.02] transition-transform duration-300"
    style={CARD_FLAT_STYLE}
  >
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(254,180,19,0.06) 0%, transparent 70%)",
      }}
    />
    <div className="relative z-10">
      <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
        {stepLabel}
      </p>
      <div className="flex items-center justify-between mb-6">
        <span
          className="text-[#FEB413] font-bold"
          style={{ fontSize: "3.5rem", lineHeight: 1, fontFamily: "monospace" }}
        >
          {n}
        </span>
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{
            background: "rgba(254,180,19,0.08)",
            border: "1px solid rgba(254,180,19,0.2)",
          }}
        >
          <img
            src={icon}
            alt=""
            className="w-8 h-8 object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <h3
        className="text-white font-bold uppercase tracking-[0.15em] mb-3"
        style={{ fontSize: "1.05rem", lineHeight: 1.3, fontFamily: "monospace" }}
      >
        {title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
    </div>
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

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 items-stretch">
        {steps.map((s, i) => (
          <div key={i} className="flex-1 flex items-stretch">
            <StepCard
              n={STEP_NUMBERS[i]}
              icon={STEP_ICONS[i]}
              title={s.title}
              desc={s.desc}
              stepLabel={t("howItWorks.step")}
            />
            {i < steps.length - 1 && (
              <div className="hidden sm:flex items-center px-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FEB413]/40">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
