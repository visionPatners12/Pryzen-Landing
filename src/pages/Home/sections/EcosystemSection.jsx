import { ExternalLink } from "lucide-react";
import AnimatedLayer from "../../../components/AnimatedLayer";
import {
  BracketLabel,
  AnimationCard,
  ArticleNumber,
  GradientHeading,
} from "../../../components/ui";
import {
  USDTIcon,
  WETHIcon,
  PolygonIcon,
  BaseIcon,
  USDCIcon,
} from "../../../components/ui/CryptoIcons";
import { CARD_GRADIENT_STYLE } from "../../../styles/constants";

const SectionCta = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2.5 mt-6 px-6 py-3 rounded-xl font-manrope text-sm font-semibold text-black no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(254,180,19,0.4)]"
    style={{
      background: "linear-gradient(135deg, #FEB413 0%, #F59E0B 50%, #D97706 100%)",
    }}
  >
    {children}
    <ExternalLink className="w-4 h-4" />
  </a>
);

const ANIMATION_URLS = {
  sofaGuy:
    "/assets/lottie/sofa-guy-1/animations/2a79a033-bc14-47c8-92df-c6b0acd02dcb.json",
  ticket:
    "/assets/lottie/ticket-with-glow/animations/88ada3eb-4d73-407c-9f16-f824f85818ab.json",
  chiliz:
    "/assets/lottie/chiliz/animations/10dc854d-a108-497f-ba5e-33d2c822f63c.json",
};

const FAN_APP_LOGOS = [
  "chz",
  "afc",
  "acm",
  "arg",
  "asm",
  "asr",
  "atm",
  "avl",
  "bar",
  "benfica",
  "city",
  "dzg",
  "gal",
  "inter",
  "ita",
  "juv",
  "lufc",
  "nap",
  "psg",
  "spurs",
];

/* ── Betting Rail row ─────────────────────────────── */
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

/* ── Route row ────────────────────────────────────── */
const RouteRow = ({ label, note }) => (
  <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
    <span className="text-[#FEB413] font-bold mt-0.5">→</span>
    <div>
      <p className="text-white text-sm font-medium">{label}</p>
      <p className="text-white/35 text-xs mt-0.5">{note}</p>
    </div>
  </div>
);

/* ══════════════════════════════════════════════════ */
/*  Main section                                      */
/* ══════════════════════════════════════════════════ */
export const EcosystemSection = () => (
  <section id="ecosystem-overview" className="py-20 w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1400px] mx-auto">
    {/* Section header */}
    <div className="flex flex-col items-center text-center mb-20">
      <BracketLabel className="mb-4">3 Main Pillars</BracketLabel>
      <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
        What Is Pryzen For Prediction
      </GradientHeading>
    </div>

    {/* ── 01: Fan App ── */}
    <article
      id="fan-app"
      className="mb-28 relative rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10"
      style={CARD_GRADIENT_STYLE}
    >
      {/* Row: text (left) + animation (right) */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-10">
        <div className="flex-1 min-w-0">
          <ArticleNumber n="01" />
          <BracketLabel className="mb-4">Fan App</BracketLabel>
          <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
            The Social Layer Of Sports
          </GradientHeading>
          <p className="text-white text-md leading-relaxed mb-2">
            La Fan App est l&apos;espace ou les supporters vivent le sport au
            quotidien. Les utilisateurs suivent leurs equipes, ligues et
            joueurs, retrouvent highlights, matchs et actualites, publient leurs
            analyses, partagent leurs predictions et construisent leur identite
            dans une communaute sports-first pensee pour l&apos;engagement, pas
            seulement pour la consommation.
          </p>
          <p className="text-white text-md leading-relaxed mt-2">
            La Fan App est gratuite, mais construite autour d&apos;un systeme de
            prediction : les utilisateurs peuvent remporter des fan tokens ou du
            CHZ selon leur engagement et leurs performances.
          </p>
          <img
            src="/landing/landing_assests/socios.svg"
            alt="Socios wallet"
            className="h-8 w-auto b-3 mt-5"
          />
          <SectionCta href="https://fan-app.pryzen.io">
            Découvrir la Fan App
          </SectionCta>
        </div>
        <AnimationCard
          bgImage="/landing/landing_assests/animation_bg.svg"
          className="h-[300px] sm:h-[400px] lg:h-[502px]"
          style={{ minHeight: "unset" }}
        >
          <AnimatedLayer
            name="Sofa Guy 1"
            animationUrl={ANIMATION_URLS.sofaGuy}
            preserveAspectRatio="xMidYMin slice"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          />
        </AnimationCard>
      </div>

      {/* Full-width centered: socios logo + caption + fan token grid */}
      <div className="flex flex-col w-full items-center">
        <p className="text-white text-md mb-6 text-center text-[#ffffff]">
          Les fan tokens remportes sont deposes sur le wallet Socios.
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
              />
            </div>
          ))}
        </div>
      </div>
    </article>

    {/* ── 02: Social Sportbook ── */}
    <article
      id="sportbook"
      className="mb-28 relative rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10"
      style={CARD_GRADIENT_STYLE}
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
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
          />
        </AnimationCard>
        <div className="flex-1 min-w-0">
          <ArticleNumber n="02" />
          <BracketLabel className="mb-4">Social Sportbook</BracketLabel>
          <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
            The Action Layer Of Sports
          </GradientHeading>
          <p className="text-white text-sm leading-relaxed mb-8">
            Le Sportbook transforme le pari sportif en experience sociale et
            onchain. Les utilisateurs ne se contentent pas de placer un bet :
            ils peuvent le partager, le suivre publiquement, l&apos;inscrire
            dans leur profil, et demain le posseder sous forme d&apos;actif
            digital. Transparent, immersif et communautaire, il rapproche
            l&apos;action, la preuve et la culture fan dans une seule
            experience.
          </p>
          <SectionCta href="https://sportbook.pryzen.io">
            Accéder au Sportbook
          </SectionCta>
          <div className="flex flex-col gap-3 mt-6">
            <BettingRail
              assetIcon={<USDTIcon />}
              assetName="USDT"
              chainIcon={<PolygonIcon />}
              chainName="Polygon"
            />
            <BettingRail
              assetIcon={<WETHIcon />}
              assetName="WETH"
              chainIcon={<BaseIcon />}
              chainName="Base"
            />
          </div>
        </div>
      </div>
      <p className="text-white text-xs text-center mt-8">
        Betting scope is focused only on these two chains: Polygon and Base.
      </p>
    </article>

    {/* ── 03: Team Index ── */}
    <article
      id="team-index"
      className="mb-8 relative rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10"
      style={CARD_GRADIENT_STYLE}
    >
      {/* Top row: text + animation */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <div className="flex-1 min-w-0">
          <ArticleNumber n="03" />
          <BracketLabel className="mb-4">Team index</BracketLabel>
          <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
            The Market Layer Of Fandom
          </GradientHeading>
          <p className="text-white text-md leading-relaxed mb-8">
            Team Index offers a new way to back a team through a structured
            onchain strategy built on Polymarket. User funds are held in USDC,
            then allocated across selected prediction markets tied to that team,
            such as match outcomes or longer-term futures. Instead of relying on
            opaque mechanics, the model is designed around clear market
            exposure, transparent positions, and a stable base unit. The goal is
            to give fans a simpler, more understandable way to participate in
            team performance through real prediction markets.
          </p>
          <SectionCta href="https://team-index.pryzen.io">
            Explorer le Team Index
          </SectionCta>
          {/* Fan token icons + settlement info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 border border-white/10 py-2 px-3 rounded-3xl shrink-0">
              {["chz", "afc", "acm", "bar", "city"].map((t) => (
                <img
                  key={t}
                  src={`/landing/fan-tokens/${t}.png`}
                  alt={t.toUpperCase()}
                  className="w-[28px] h-[28px] rounded-full object-contain"
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <PolygonIcon />
              <p className="text-white text-xs leading-tight">
                Primary settlement: Polygon, with Chiliz
                <br />
                wrapped access path
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

      {/* USDC badge - centered */}
      <div className="flex justify-center mt-10 mb-6">
        <div className="inline-flex items-center gap-2 text-sm text-white/70">
          <USDCIcon />
          USDC is the base asset
        </div>
      </div>

      {/* Route boxes side by side */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8">
        <div className="flex-1 w-full">
          <RouteRow label="USDC → Team Token" note="Route 1: on Polygon" />
        </div>
        <p className="text-white text-xs font-bold tracking-widest shrink-0">
          - - - OR - - -
        </p>
        <div className="flex-1 w-full">
          <RouteRow
            label="CHZ + Fan Token → Wrapped on Chiliz"
            note="Route 2: Chiliz ecosystem rail"
          />
        </div>
      </div>

      {/* Bottom note - centered */}
      <p className="text-white text-xs text-center leading-relaxed">
        Note: the <strong className="text-white/50">CHZ</strong> logo represents
        the Chiliz network token. Attached fan tokens (AFC, ACM, BAR, CITY) can
        be used as the wrapped participation path in Team Index.
      </p>
    </article>
  </section>
);
