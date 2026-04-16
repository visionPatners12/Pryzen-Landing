import { BracketLabel, GradientHeading } from "../../../components/ui";
import { CARD_FLAT_STYLE } from "../../../styles/constants";

const steps = [
  {
    n: "01",
    icon: "/landing/landing_assests/1.png",
    title: "Choose Your Sport Universe",
    desc: "Select your leagues, communities, and team focus.",
  },
  {
    n: "02",
    icon: "/landing/landing_assests/2.png",
    title: "Follow, Predict, Or Back A Team",
    desc: "Engage with social insights, betting conviction, and market action.",
  },
  {
    n: "03",
    icon: "/landing/landing_assests/3.png",
    title: "Unlock More Utility",
    desc: "Grow your identity and access through PRYX / PRYZE.",
  },
];

const StepCard = ({ n, icon, title, desc }) => (
  <article
    className="flex-1 rounded-2xl p-6 sm:p-8 flex flex-col"
    style={CARD_FLAT_STYLE}
  >
    <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-1">
      STEP
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
  return (
    <section id="how-it-works" className="py-20 w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1400px] mx-auto">
      {/* Section header */}
      <div className="flex flex-col items-center text-center mb-16">
        <BracketLabel className="mb-4">HOW IT WORKS</BracketLabel>
        <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
          Simple On The Surface. Smart Underneath.
        </GradientHeading>
        <p className="text-white/50 text-sm mt-6">
          For the user, Team Index is simple:
        </p>
      </div>

      {/* 3-column step cards */}
      <div className="flex flex-col sm:flex-row gap-6">
        {steps.map((s) => (
          <StepCard key={s.n} {...s} />
        ))}
      </div>
    </section>
  );
};
