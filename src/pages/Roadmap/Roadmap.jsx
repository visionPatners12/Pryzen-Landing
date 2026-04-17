import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Navigation } from "../Home/sections/Navigation";
import { Footer } from "../Home/sections/Footer";
import { GradientHeading, BracketLabel } from "../../components/ui";
import { CARD_GRADIENT_STYLE, CARD_FLAT_STYLE } from "../../styles/constants";

const PHASE_KEYS = ["phase0", "phase1", "phase2", "phase3", "phase4", "phase5"];

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const PhaseCard = ({ phaseKey, index }) => {
  const { t } = useTranslation();
  const groups = t(`roadmap.${phaseKey}.groups`, { returnObjects: true });
  const positioning = t(`roadmap.${phaseKey}.positioning`, { defaultValue: "" });

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="relative pl-6 sm:pl-10"
    >
      <div className="absolute left-0 top-2 flex flex-col items-center h-full">
        <div className="w-3 h-3 rounded-full bg-[#FEB413] shadow-[0_0_16px_rgba(254,180,19,0.7)]" />
        <div className="flex-1 w-px bg-gradient-to-b from-[#FEB413]/40 via-white/10 to-transparent mt-2" />
      </div>

      <div
        className="rounded-2xl p-6 sm:p-8 lg:p-10"
        style={CARD_GRADIENT_STYLE}
      >
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="text-[#FEB413] font-bold text-xs tracking-[0.25em] uppercase font-mono">
            {t(`roadmap.${phaseKey}.label`)}
          </span>
          <span className="text-white/30 text-xs">·</span>
          <span className="text-white/50 text-xs uppercase tracking-widest">
            {t(`roadmap.${phaseKey}.tag`)}
          </span>
        </div>

        <h3
          className="text-white font-bold mb-4"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", lineHeight: 1.15, fontFamily: "monospace" }}
        >
          {t(`roadmap.${phaseKey}.title`)}
        </h3>

        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
          <span className="text-[#FEB413] font-semibold">
            {t("roadmap.goalPrefix")}:
          </span>{" "}
          {t(`roadmap.${phaseKey}.goal`)}
        </p>

        <div className="flex flex-col gap-5">
          {Array.isArray(groups) &&
            groups.map((group, gi) => (
              <div
                key={gi}
                className="rounded-xl p-5"
                style={CARD_FLAT_STYLE}
              >
                {group.title && (
                  <div className="flex items-center gap-2 mb-3">
                    {group.icon && (
                      <span className="text-lg leading-none">{group.icon}</span>
                    )}
                    <h4 className="text-white font-semibold text-sm sm:text-base tracking-wide">
                      {group.title}
                    </h4>
                  </div>
                )}
                {Array.isArray(group.items) && group.items.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="text-white/60 text-sm sm:text-[15px] leading-relaxed flex gap-2"
                      >
                        <span className="text-[#FEB413] mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {group.note && (
                  <p className="text-white/50 text-sm leading-relaxed mt-2">
                    {group.note}
                  </p>
                )}
              </div>
            ))}
        </div>

        {positioning && (
          <div className="mt-6 pt-5 border-t border-white/5">
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              <span className="text-[#FEB413] font-semibold">
                {t("roadmap.positioningPrefix")}:
              </span>{" "}
              {positioning}
            </p>
          </div>
        )}
      </div>
    </motion.article>
  );
};

export function Roadmap() {
  const { t } = useTranslation();
  const whyItems = t("roadmap.why.items", { returnObjects: true });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <section className="w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center mb-16"
          >
            <BracketLabel className="mb-4">{t("roadmap.label")}</BracketLabel>
            <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
              {t("roadmap.heading")}
            </GradientHeading>
            <p className="text-white/60 text-sm sm:text-base mt-6 max-w-2xl leading-relaxed">
              {t("roadmap.intro")}
            </p>
          </motion.div>

          <div className="flex flex-col gap-10">
            {PHASE_KEYS.map((key, i) => (
              <PhaseCard key={key} phaseKey={key} index={i} />
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-16 rounded-2xl p-8 sm:p-10 lg:p-12 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(160deg, rgba(254,180,19,0.10) 0%, rgba(13,10,6,0.95) 100%)",
              border: "1px solid rgba(254,180,19,0.25)",
            }}
          >
            <div className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                background: "radial-gradient(circle at top right, rgba(254,180,19,0.15), transparent 60%)",
              }}
            />
            <div className="relative">
              <BracketLabel className="mb-4">{t("roadmap.why.label")}</BracketLabel>
              <h3
                className="text-white font-bold mb-6"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontFamily: "monospace" }}
              >
                {t("roadmap.why.heading")}
              </h3>
              <ul className="flex flex-col gap-3 mb-6">
                {Array.isArray(whyItems) &&
                  whyItems.map((item, i) => (
                    <li
                      key={i}
                      className="text-white/75 text-sm sm:text-base leading-relaxed flex gap-2"
                    >
                      <span className="text-[#FEB413] mt-1 shrink-0">{item.icon || "•"}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
              </ul>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed font-medium">
                {t("roadmap.why.conclusion")}
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
