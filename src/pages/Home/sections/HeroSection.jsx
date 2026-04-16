import { motion } from "framer-motion";
import SceneCanvas from "../../../components/SceneCanvas";
import { GoldButton, GradientHeading } from "../../../components/ui";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SceneCanvas immersive className="w-full h-full" />
      </div>

      <img
        src="/landing/landing_assests/hero_shades.svg"
        alt=""
        aria-hidden
        className="absolute top-0 left-0 h-full w-auto object-cover z-[1] pointer-events-none opacity-80"
      />

      <img
        src="/landing/landing_assests/rectangle_black.svg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover z-[2] pointer-events-none opacity-70"
      />

      <img
        src="/landing/landing_assests/hero_gradiant.svg"
        alt=""
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full object-cover z-[3] pointer-events-none opacity-90"
      />

      <div className="absolute inset-0 z-[4] bg-gradient-to-b from-black/30 via-black/45 to-[#0D0A06]/85 pointer-events-none" />

      <motion.div
        className="relative z-10 min-h-screen w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center py-24"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={fadeUp}
          className="text-sm tracking-[0.2em] font-medium text-white/70 mb-8"
        >
          Pryzen Genesis &nbsp;–&nbsp; <span className="font-bold text-white">Built on Chiliz</span>
        </motion.p>

        <motion.div variants={fadeUp}>
          <GradientHeading as="h1" className="leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            The Onchain<br />Architecture of Sports
          </GradientHeading>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mb-10"
        >
          Pryzen is building the core onchain layer for sports: a connected ecosystem where
          fans do not just watch the game, but follow, predict, participate, own, trade, and
          engage through a new digital sports economy.
        </motion.p>

        <motion.div variants={fadeUp}>
          <GoldButton href="#ecosystem-overview" className="text-sm sm:text-base w-[253px] text-black text-center justify-center mb-12">
            Explore the Ecosystem
          </GoldButton>
        </motion.div>
      </motion.div>
    </section>
  );
};
