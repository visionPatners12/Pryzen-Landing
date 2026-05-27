import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import AnimatedLayer from "../../../components/AnimatedLayer";
import {
  BracketLabel,
  AnimationCard,
  ArticleNumber,
  GradientHeading,
  GoldButton,
} from "../../../components/ui";
import {
  USDTIcon,
  WETHIcon,
  PolygonIcon,
  BaseIcon,
  USDCIcon,
} from "../../../components/ui/CryptoIcons";
import { LOTTIE_POSTERS } from "../../../data/sceneLayers";
import { CARD_GRADIENT_STYLE } from "../../../styles/constants";

const headerReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const slideRight = {
  hidden: { opacity: 0, x: 80, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const ANIMATION_URLS = {
  sofaGuy:
    "/assets/lottie/sofa-guy-1/animations/2a79a033-bc14-47c8-92df-c6b0acd02dcb.json",
  ticket:
    "/assets/lottie/ticket-with-glow/animations/88ada3eb-4d73-407c-9f16-f824f85818ab.json",
  chiliz:
    "/assets/lottie/chiliz/animations/10dc854d-a108-497f-ba5e-33d2c822f63c.json",
};

const FAN_APP_LOGOS = [
  "chz", "afc", "acm", "arg", "asm", "asr", "atm", "avl", "bar",
  "benfica", "city", "dzg", "gal", "inter", "ita", "juv", "lufc", "nap", "psg", "spurs",
];

const BettingRail = ({ assetIcon, assetName, chainIcon, chainName }) => (
  <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-3xl px-4 py-1.5">
    <div className="flex items-center gap-2 text-sm font-semibold text-white">
      {assetIcon}
      {assetName}
    </div>
    <div className="flex items-center gap-5 text-sm text-white/45 border border-white/10 rounded-3xl px-3 py-2">
      {chainIcon}
      {chainName}
    </div>
  </div>
);

const RouteRow = ({ label, note }) => (
  <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
    <span className="text-[#FEB413] font-bold mt-0.5">→</span>
    <div>
      <p className="text-white text-sm font-medium">{label}</p>
      <p className="text-white/35 text-xs mt-0.5">{note}</p>
    </div>
  </div>
);

export const EcosystemSection = () => {
  const { t } = useTranslation();

  return (
    <section id="ecosystem-overview" className="py-20 w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1400px] mx-auto">
      <motion.div
        className="flex flex-col items-center text-center mb-20"
        variants={headerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div variants={fadeUp}>
          <BracketLabel className="mb-4">{t("ecosystem.pillarsLabel")}</BracketLabel>
        </motion.div>
        <motion.div variants={fadeUp}>
          <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
            {t("ecosystem.pillarsHeading")}
          </GradientHeading>
        </motion.div>
      </motion.div>

      <motion.article
        id="fan-app"
        className="mb-28 relative rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10"
        style={CARD_GRADIENT_STYLE}
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-10">
          <div className="flex-1 min-w-0">
            <ArticleNumber n="01" />
            <BracketLabel className="mb-4">{t("ecosystem.fanAppLabel")}</BracketLabel>
            <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
              {t("ecosystem.fanAppHeading")}
            </GradientHeading>
            <p className="text-white text-md leading-relaxed mb-2">
              {t("ecosystem.fanAppDesc1")}
            </p>
            <p className="text-white text-md leading-relaxed mt-2">
              {t("ecosystem.fanAppDesc2")}
            </p>
            <img
              src="/landing/landing_assests/socios.svg"
              alt="Socios wallet"
              className="h-8 w-auto b-3 mt-5"
              loading="lazy"
              decoding="async"
            />
            <GoldButton href="https://fan-app.pryzen.io" className="mt-6 text-sm sm:text-base w-[253px] text-black text-center justify-center">
              {t("ecosystem.fanAppCta")}
            </GoldButton>
          </div>
          <AnimationCard
            bgImage="/landing/landing_assests/animation_bg.svg"
            className="h-[300px] sm:h-[400px] lg:h-[502px]"
            style={{ minHeight: "unset" }}
          >
            <AnimatedLayer
              name="Sofa Guy 1"
              animationUrl={ANIMATION_URLS.sofaGuy}
              posterSrc={LOTTIE_POSTERS.sofaGuy1}
              preserveAspectRatio="xMidYMin slice"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            />
          </AnimationCard>
        </div>

        <div className="flex flex-col w-full items-center">
          <p className="text-white text-md mb-6 text-center text-[#ffffff]">
            {t("ecosystem.fanAppTokenNote")}
          </p>
          <div className="w-full sm:w-[80%] lg:w-[65%] flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 relative z-[1]">
            {FAN_APP_LOGOS.map((logo) => (
              <div
                key={logo}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-[52px] md:h-[52px] lg:w-[60px] lg:h-[60px] rounded-full flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 4px 20px 0 rgba(0,0,0,0.7)",
                }}
              >
                <img
                  src={`/landing/fan-app-logos/${logo}.png`}
                  alt={`${logo.toUpperCase()} fan token`}
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.article>

      <motion.article
        id="sportbook"
        className="mb-28 relative rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10"
        style={CARD_GRADIENT_STYLE}
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-start">
          <AnimationCard
            bgImage="/landing/landing_assests/animation_bg.svg"
            className="h-[300px] sm:h-[400px] lg:h-[502px]"
            style={{ minHeight: "unset" }}
          >
            <AnimatedLayer
              name="Ticket With Glow"
              animationUrl={ANIMATION_URLS.ticket}
              posterSrc={LOTTIE_POSTERS.ticketWithGlow}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            />
          </AnimationCard>
          <div className="flex-1 min-w-0">
            <ArticleNumber n="02" />
            <BracketLabel className="mb-4">{t("ecosystem.sportbookLabel")}</BracketLabel>
            <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
              {t("ecosystem.sportbookHeading")}
            </GradientHeading>
            <p className="text-white text-sm leading-relaxed mb-8">
              {t("ecosystem.sportbookDesc")}
            </p>
            <GoldButton href="https://sportbook.pryzen.io" className="mt-6 text-sm sm:text-base w-[253px] text-black text-center justify-center">
              {t("ecosystem.sportbookCta")}
            </GoldButton>
            <div className="flex flex-col gap-3 mt-6">
              <BettingRail
                assetIcon={<USDTIcon />}
                assetName={t("crypto.usdt")}
                chainIcon={<PolygonIcon />}
                chainName={t("crypto.polygon")}
              />
              <BettingRail
                assetIcon={<WETHIcon />}
                assetName={t("crypto.weth")}
                chainIcon={<BaseIcon />}
                chainName={t("crypto.base")}
              />
            </div>
          </div>
        </div>
        <p className="text-white text-xs text-center mt-8">
          {t("ecosystem.sportbookNote")}
        </p>
      </motion.article>

      <motion.article
        id="team-index"
        className="mb-8 relative rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10"
        style={CARD_GRADIENT_STYLE}
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="flex-1 min-w-0">
            <ArticleNumber n="03" />
            <BracketLabel className="mb-4">{t("ecosystem.teamIndexLabel")}</BracketLabel>
            <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
              {t("ecosystem.teamIndexHeading")}
            </GradientHeading>
            <p className="text-white text-md leading-relaxed mb-8">
              {t("ecosystem.teamIndexDesc")}
            </p>
            <GoldButton href="https://team-index.pryzen.io" className="mt-6 mb-6 text-sm sm:text-base w-[253px] text-black text-center justify-center">
              {t("ecosystem.teamIndexCta")}
            </GoldButton>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-2 border border-white/10 py-2 px-3 rounded-3xl shrink-0">
                {["chz", "afc", "acm", "bar", "city"].map((tk) => (
                  <img
                    key={tk}
                    src={`/landing/fan-tokens/${tk}.png`}
                    alt={tk.toUpperCase()}
                    className="w-[28px] h-[28px] rounded-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <PolygonIcon />
                <p className="text-white text-xs leading-tight">
                  {t("ecosystem.teamIndexSettlement")}
                  <br />
                  {t("ecosystem.teamIndexSettlement2")}
                </p>
              </div>
            </div>
          </div>
          <AnimationCard
            bgImage="/landing/landing_assests/animation_bg.svg"
            className="h-[300px] sm:h-[400px] lg:h-[502px]"
            style={{ minHeight: "unset" }}
          >
            <AnimatedLayer
              name="Chiliz"
              animationUrl={ANIMATION_URLS.chiliz}
              posterSrc={LOTTIE_POSTERS.chiliz}
              style={{
                width: "90%",
                position: "relative",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </AnimationCard>
        </div>

        <div className="flex justify-center mt-10 mb-6">
          <div className="inline-flex items-center gap-2 text-sm text-white/70">
            <USDCIcon />
            {t("ecosystem.usdcBase")}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8">
          <div className="flex-1 w-full">
            <RouteRow label={t("ecosystem.route1Label")} note={t("ecosystem.route1Note")} />
          </div>
          <p className="text-white text-xs font-bold tracking-widest shrink-0">
            {t("ecosystem.or")}
          </p>
          <div className="flex-1 w-full">
            <RouteRow
              label={t("ecosystem.route2Label")}
              note={t("ecosystem.route2Note")}
            />
          </div>
        </div>

        <p
          className="text-white text-xs text-center leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t("ecosystem.bottomNote") }}
        />
      </motion.article>
    </section>
  );
};
