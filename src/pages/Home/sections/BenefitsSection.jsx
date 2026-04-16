import { useTranslation } from "react-i18next";
import { BracketLabel, GradientHeading } from "../../../components/ui";

const LINE = "rgba(255,255,255,0.15)";

const BenefitPill = ({ children }) => (
  <div
    className="inline-flex items-center px-5 py-[10px] rounded-full text-sm text-white/80 whitespace-nowrap shrink-0"
    style={{
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.12)",
      backdropFilter: "blur(6px)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
    }}
  >
    {children}
  </div>
);

const CenterLogo = ({ size = 140 }) => (
  <div
    className="relative z-10 rounded-[22px] flex items-center justify-center shrink-0"
    style={{
      width: size,
      height: size,
      backgroundImage: "url('/landing/landing_assests/shadow_grad.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: "1px solid rgba(254,180,19,0.28)",
      boxShadow:
        "0 0 0 1px rgba(254,180,19,0.12), 0 8px 32px rgba(254,180,19,0.24), 0 24px 64px rgba(0,0,0,0.55)",
    }}
  >
    <img
      src="/landing/landing_assests/future_img.png"
      alt="Pryzen"
      style={{ width: size * 0.46, height: size * 0.46 }}
      className="object-contain"
    />
  </div>
);

export const BenefitsSection = () => {
  const { t } = useTranslation();
  const allBenefits = t("benefits.items", { returnObjects: true });
  const leftBenefits = allBenefits.slice(0, 3);
  const rightBenefits = allBenefits.slice(3, 6);

  return (
    <section
      id="why-pryzen"
      className="py-20 w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1400px] mx-auto"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <BracketLabel className="mb-4">{t("benefits.label")}</BracketLabel>
        <GradientHeading className="text-3xl sm:text-4xl lg:text-6xl w-full">
          {t("benefits.heading")}
        </GradientHeading>
      </div>

      <div className="hidden lg:flex items-stretch min-h-[360px]">
        <div className="flex-1 flex flex-col justify-around py-2 min-w-0">
          {leftBenefits.map((b) => (
            <div key={b} className="flex items-center">
              <BenefitPill>{b}</BenefitPill>
              <div
                className="flex-1 h-px min-w-[24px]"
                style={{
                  background: `linear-gradient(to right, rgba(255,255,255,0.04), ${LINE})`,
                }}
              />
            </div>
          ))}
        </div>

        <div className="relative shrink-0 w-52 flex items-center justify-center">
          <div
            className="absolute left-0 w-px"
            style={{ top: "18%", bottom: "18%", background: LINE }}
          />
          <div
            className="absolute left-0 h-px w-10 top-1/2"
            style={{ background: LINE }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(254,180,19,0.2) 0%, rgba(254,180,19,0.07) 45%, transparent 72%)",
            }}
          />
          <CenterLogo size={140} />
          <div
            className="absolute right-0 h-px w-10 top-1/2"
            style={{ background: LINE }}
          />
          <div
            className="absolute right-0 w-px"
            style={{ top: "18%", bottom: "18%", background: LINE }}
          />
        </div>

        <div className="flex-1 flex flex-col justify-around py-2 min-w-0">
          {rightBenefits.map((b) => (
            <div key={b} className="flex items-center">
              <div
                className="flex-1 h-px min-w-[24px]"
                style={{
                  background: `linear-gradient(to left, rgba(255,255,255,0.04), ${LINE})`,
                }}
              />
              <BenefitPill>{b}</BenefitPill>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden sm:flex lg:hidden flex-col items-center gap-6">
        <CenterLogo size={110} />
        <div className="grid grid-cols-2 gap-3 w-full">
          {allBenefits.map((b) => (
            <div key={b} className="flex justify-center">
              <BenefitPill>{b}</BenefitPill>
            </div>
          ))}
        </div>
      </div>

      <div className="flex sm:hidden flex-col items-center gap-4">
        <CenterLogo size={96} />
        {allBenefits.map((b) => (
          <BenefitPill key={b}>{b}</BenefitPill>
        ))}
      </div>
    </section>
  );
};
