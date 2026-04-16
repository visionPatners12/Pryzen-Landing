import { BracketLabel } from "../../../components/ui";
import { GradientHeading } from "../../../components/ui";
import { CARD_FLAT_STYLE } from "../../../styles/constants";

const PRYX_EXAMPLES = [
  "/landing/pryx-examples/pryx-1-removebg-preview.png",
  "/landing/pryx-examples/pryx-2-removebg-preview.png",
  "/landing/pryx-examples/pryx-4-removebg-preview.png",
  "/landing/pryx-examples/pryx-alt-3-removebg-preview.png",
  "/landing/pryx-examples/pryx-alt-5-removebg-preview.png",
];

/* ── Benefit list item ───────────────────────────── */
const BenefitItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <img
      src="/landing/landing_assests/checkmark_circle.svg"
      alt=""
      className="shrink-0 mt-0.5 w-[18px] h-[18px]"
    />
    <span className="text-white/80 text-md leading-snug">{children}</span>
  </li>
);

export const PryxPryzeSection = () => {
  return (
    <section id="pryx" className="py-20 w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1400px] mx-auto">
      {/* ── Section header ── */}
      <div className="flex flex-col items-center text-center mb-20">
        <BracketLabel className="mb-4">PRYX & PRYZE</BracketLabel>
        <GradientHeading className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
          Identity, Access, Rewards & Utility
        </GradientHeading>
        <p className="text-white/60 text-sm sm:text-base max-w-3xl mt-6 leading-relaxed">
          PRYX and PRYZE extend the value of every Pryzen pillar. PRYX is not
          just a collectible image, it is a visible identity layer tied to
          status, access, exclusivity, and recognition. PRYZE powers the
          practical side of the ecosystem through rewards, perks, progression,
          and product advantages across Fan App, Social Sportbook, and Team
          Index.
        </p>
      </div>

      {/* ── PRYX Card ── */}
      {/* ── PRYX Card ── */}
      <article className="mb-16 overflow-hidden">
        <div className="flex flex-col items-center lg:flex-row gap-10 lg:gap-16">
          {/* Left: copy */}
          <div className="flex-[1] min-w-0">
            <BracketLabel className="mb-4">PRYX</BracketLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl max-w-xl">
              Identity, Status & Exclusive Access
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mt-4">
              PRYX is the identity asset of Pryzen. It gives users more than
              ownership of a visual collectible: it gives them status,
              recognition, and access across the ecosystem. A PRYX holder is not
              just displaying an image, but holding a visible mark of
              participation inside Pryzen.
            </p>
          </div>

          {/* Right: benefits card + image grid */}
          <div
            className="flex-[2] flex flex-col sm:flex-row items-center gap-4 rounded-xl p-5 sm:p-6"
            style={CARD_FLAT_STYLE}
          >
            {/* Benefits list */}
            <div className="flex-[1] flex flex-col justify-start">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-4">
                PRYX unlocks concrete benefits such as:
              </p>
              <ul className="flex flex-col gap-8">
                <BenefitItem>
                  Stronger profile identity and community status
                </BenefitItem>
                <BenefitItem>
                  Access to exclusive groups, drops, and private experiences
                </BenefitItem>
                <BenefitItem>
                  Visible badges, tiers, and recognition inside the platform
                </BenefitItem>
                <BenefitItem>
                  Priority access to selected product features or launches
                </BenefitItem>
                <BenefitItem>
                  Premium positioning across the Fan App, Social Sportbook, and
                  Team Index
                </BenefitItem>
                <BenefitItem>
                  Deeper attachment to the culture and brand of Pryzen
                </BenefitItem>
              </ul>
            </div>

            {/* PRYX gallery */}
            <div
              className="flex-[1] w-full rounded-xl p-4 sm:p-5"
              style={{
                backgroundImage: "url('/landing/landing_assests/rectangle_bg.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {PRYX_EXAMPLES.map((src, index) => (
                  <div
                    key={src}
                    className="rounded-lg bg-black/20 border border-white/10 p-2 flex items-center justify-center min-h-[110px] sm:min-h-[130px]"
                  >
                    <img
                      src={src}
                      alt={`PRYX example ${index + 1}`}
                      className="max-h-[130px] sm:max-h-[150px] w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ── PRYZE Card ── */}
      <article className="mb-16 overflow-hidden">
        <div className="flex flex-col items-center lg:flex-row gap-10 lg:gap-16">
          {/* Left: benefits card + image side-by-side */}
          <div
            className="flex-[2] flex flex-col sm:flex-row items-center gap-4 rounded-xl p-5 sm:p-6"
            style={CARD_FLAT_STYLE}
          >
            {/* Benefits list */}
            <div className="flex-[1] flex flex-col justify-start ">
              <p className="text-white/50 text-xs uppercase tracking-widest mb-4">
                PRYX unlocks concrete benefits such as:
              </p>
              <ul className="flex flex-col gap-8">
                <BenefitItem>
                  Stronger profile identity and community status
                </BenefitItem>
                <BenefitItem>
                  Access to exclusive groups, drops, and private experiences
                </BenefitItem>
                <BenefitItem>
                  Visible badges, tiers, and recognition inside the platform
                </BenefitItem>
                <BenefitItem>
                  Priority access to selected product features or launches
                </BenefitItem>
                <BenefitItem>
                  Premium positioning across the Fan App, Social Sportbook, and
                  Team Index
                </BenefitItem>
                <BenefitItem>
                  Deeper attachment to the culture and brand of Pryzen
                </BenefitItem>
              </ul>
            </div>

            {/* PRYZE coins image */}
            <div
              className="flex-[1] relative rounded-xl overflow-hidden"
              style={{
                backgroundImage: "url('/landing/landing_assests/rectangle_bg.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src="/landing/landing_assests/coins.svg"
                alt="PRYZE coins"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          {/* Right: copy */}
          <div className="flex-[1] min-w-0">
            <BracketLabel className="mb-4">PRYX</BracketLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl max-w-xl">
              Identity, Status & Exclusive Access
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mt-4">
              PRYX is the identity asset of Pryzen. It gives users more than
              ownership of a visual collectible: it gives them status,
              recognition, and access across the ecosystem. A PRYX holder is not
              just displaying an image, but holding a visible mark of
              participation inside Pryzen.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
