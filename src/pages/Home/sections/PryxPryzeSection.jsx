import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Shield, Sparkles, Users, Rocket, Trophy, Heart,
  Zap, Gift, BarChart3, Crown, Ticket, TrendingUp,
} from "lucide-react";
import { BracketLabel, GradientHeading } from "../../../components/ui";
import { CARD_GRADIENT_STYLE } from "../../../styles/constants";

const PRYX_EXAMPLES = [
  "/landing/pryx-examples/pryx-1-removebg-preview.png",
  "/landing/pryx-examples/pryx-2-removebg-preview.png",
  "/landing/pryx-examples/pryx-4-removebg-preview.png",
  "/landing/pryx-examples/pryx-alt-3-removebg-preview.png",
  "/landing/pryx-examples/pryx-alt-5-removebg-preview.png",
];

const PRYX_ICONS = [Shield, Trophy, Users, Rocket, Sparkles, Heart];
const PRYZE_ICONS = [Zap, Gift, BarChart3, Crown, Ticket, TrendingUp];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const BenefitCard = ({ icon: Icon, title, desc, index, accent = "gold" }) => {
  const isGold = accent === "gold";
  const accentColor = isGold ? "254,180,19" : "99,179,237";
  const textAccent = isGold ? "#FEB413" : "#63B3ED";

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="group relative rounded-xl p-5 sm:p-6 transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(13,10,6,0.9) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, rgba(${accentColor},0.08) 0%, transparent 70%)`,
        }}
      />
      <div className="relative z-10">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
          style={{
            background: `rgba(${accentColor},0.1)`,
            border: `1px solid rgba(${accentColor},0.2)`,
          }}
        >
          <Icon className="w-5 h-5" style={{ color: textAccent }} />
        </div>
        <h4 className="text-white font-semibold text-base mb-2">{title}</h4>
        <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
};

export const PryxPryzeSection = () => {
  const { t } = useTranslation();
  const pryxBenefits = t("pryx.benefits", { returnObjects: true });
  const pryzeBenefits = t("pryze.benefits", { returnObjects: true });
  const pryxTags = t("pryx.tags", { returnObjects: true });
  const pryzeTags = t("pryze.tags", { returnObjects: true });

  return (
    <>
      <section id="pryx" className="py-20 w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <BracketLabel className="mb-4">{t("pryx.label")}</BracketLabel>
          <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
            {t("pryx.heading")}
          </GradientHeading>
          <p className="text-white/60 text-sm sm:text-base max-w-3xl mt-6 leading-relaxed">
            {t("pryx.intro")}
          </p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10 mb-16"
          style={CARD_GRADIENT_STYLE}
        >
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 100% 0%, rgba(254,180,19,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start relative z-10">
            <div className="flex-1 min-w-0 flex flex-col">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                {t("pryx.cardTitle")}
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                {t("pryx.cardDesc")}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {pryxTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-[#FEB413]"
                    style={{
                      background: "rgba(254,180,19,0.08)",
                      border: "1px solid rgba(254,180,19,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full">
              <div
                className="relative rounded-xl p-4 sm:p-6"
                style={{
                  backgroundImage: "url('/landing/landing_assests/rectangle_bg.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 50%, rgba(254,180,19,0.05) 0%, transparent 70%)",
                  }}
                />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10">
                  {PRYX_EXAMPLES.map((src, index) => (
                    <motion.div
                      key={src}
                      custom={index}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="group/card rounded-lg bg-black/30 border border-white/10 p-2 flex items-center justify-center min-h-[110px] sm:min-h-[130px] transition-all duration-300 hover:border-[#FEB413]/30 hover:bg-black/40 hover:shadow-[0_0_20px_rgba(254,180,19,0.1)]"
                    >
                      <img
                        src={src}
                        alt={`PRYX example ${index + 1}`}
                        className="max-h-[130px] sm:max-h-[150px] w-auto object-contain transition-transform duration-300 group-hover/card:scale-105"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <BracketLabel className="mb-4">{t("pryx.benefitsLabel")}</BracketLabel>
          <GradientHeading className="text-3xl sm:text-4xl lg:text-5xl max-w-3xl">
            {t("pryx.benefitsHeading")}
          </GradientHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16">
          {pryxBenefits.map((benefit, i) => (
            <BenefitCard key={i} icon={PRYX_ICONS[i]} title={benefit.title} desc={benefit.desc} index={i} accent="gold" />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden p-8 sm:p-10 lg:p-12 text-center"
          style={{
            background: "linear-gradient(160deg, rgba(254,180,19,0.06) 0%, rgba(13,10,6,0.95) 50%, rgba(254,180,19,0.03) 100%)",
            border: "1px solid rgba(254,180,19,0.15)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(254,180,19,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              {t("pryx.closingTitle")}
            </h3>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t("pryx.closingText")}{" "}
              <span className="text-[#FEB413] font-medium">{t("pryx.closingUse")}</span>,{" "}
              <span className="text-[#FEB413] font-medium">{t("pryx.closingDisplay")}</span>, and{" "}
              <span className="text-[#FEB413] font-medium">{t("pryx.closingGrowWith")}</span>{" "}
              {t("pryx.closingEnd")}
            </p>
          </div>
        </motion.div>
      </section>

      <div className="w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1400px] mx-auto">
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(99,179,237,0.3) 50%, transparent 100%)" }} />
      </div>

      <section id="pryze" className="py-20 w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <BracketLabel className="mb-4">{t("pryze.label")}</BracketLabel>
          <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
            {t("pryze.heading")}
          </GradientHeading>
          <p className="text-white/60 text-sm sm:text-base max-w-3xl mt-6 leading-relaxed">
            {t("pryze.intro")}
          </p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10 mb-16"
          style={{
            background: "linear-gradient(160deg, rgba(99,179,237,0.04) 0%, rgba(13,10,6,0.95) 100%)",
            border: "1px solid rgba(99,179,237,0.12)",
          }}
        >
          <div
            className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 0% 0%, rgba(99,179,237,0.06) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 100% 100%, rgba(254,180,19,0.04) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                {t("pryze.cardTitle")}
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                {t("pryze.cardDesc")}
              </p>
              <div className="flex flex-wrap gap-2">
                {pryzeTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-[#63B3ED]"
                    style={{
                      background: "rgba(99,179,237,0.08)",
                      border: "1px solid rgba(99,179,237,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full flex justify-center">
              <div
                className="relative w-full max-w-[340px] rounded-xl overflow-hidden"
                style={{
                  backgroundImage: "url('/landing/landing_assests/rectangle_bg.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 50%, rgba(99,179,237,0.06) 0%, transparent 70%)",
                  }}
                />
                <img
                  src="/landing/landing_assests/coins.svg"
                  alt="PRYZE token"
                  className="relative z-10 w-full h-auto object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-10">
          <BracketLabel className="mb-4">{t("pryze.benefitsLabel")}</BracketLabel>
          <GradientHeading className="text-3xl sm:text-4xl lg:text-5xl max-w-3xl">
            {t("pryze.benefitsHeading")}
          </GradientHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16">
          {pryzeBenefits.map((benefit, i) => (
            <BenefitCard key={i} icon={PRYZE_ICONS[i]} title={benefit.title} desc={benefit.desc} index={i} accent="blue" />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden p-8 sm:p-10 lg:p-12 text-center"
          style={{
            background: "linear-gradient(160deg, rgba(99,179,237,0.06) 0%, rgba(13,10,6,0.95) 50%, rgba(99,179,237,0.03) 100%)",
            border: "1px solid rgba(99,179,237,0.15)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(99,179,237,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              {t("pryze.closingTitle")}
            </h3>
            <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {t("pryze.closingText")}{" "}
              <span className="text-[#63B3ED] font-medium">{t("pryze.closingAccess")}</span>,{" "}
              <span className="text-[#63B3ED] font-medium">{t("pryze.closingRewards")}</span>,{" "}
              <span className="text-[#63B3ED] font-medium">{t("pryze.closingDiscounts")}</span>,{" "}
              <span className="text-[#63B3ED] font-medium">{t("pryze.closingUpgrades")}</span>, and{" "}
              <span className="text-[#63B3ED] font-medium">{t("pryze.closingParticipation")}</span>{" "}
              {t("pryze.closingEnd")}
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};
