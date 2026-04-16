import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GoldButton } from "../../../components/ui/GoldButton";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language?.startsWith("fr") ? "fr" : "en";

  const toggle = () => {
    const next = currentLang === "en" ? "fr" : "en";
    i18n.changeLanguage(next);
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all border border-white/10 hover:border-white/25 bg-white/5 hover:bg-white/10"
    >
      <span className={currentLang === "en" ? "text-[#FEB413]" : "text-white/50"}>{t("langSwitch.en")}</span>
      <span className="text-white/20">/</span>
      <span className={currentLang === "fr" ? "text-[#FEB413]" : "text-white/50"}>{t("langSwitch.fr")}</span>
    </button>
  );
};

export const Navigation = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#fan-app", label: t("nav.fanApp") },
    { href: "#sportbook", label: t("nav.sportbook") },
    { href: "#team-index", label: t("nav.teamIndex") },
    { href: "#pryx", label: t("nav.pryx") },
    { href: "#pryze", label: t("nav.pryze") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    ["hero", "fan-app", "sportbook", "team-index", "pryx", "pryze"].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveLink(`#${id}`);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (href) => {
    setActiveLink(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0D0A06]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg"
            : "border-b border-transparent py-4"
        }`}
      >
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-5">
          <a
            href="#hero"
            className="flex items-center justify-center shrink-0 no-underline"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
          >
            <img 
              src="/landing/landing_assests/nav_logo.svg" 
              alt="Pryzen Logo"
              className="h-10 w-auto transition-filter duration-300 hover:brightness-110"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-0 flex-1 justify-center px-8">
            {navItems.map((item) => (
              <div key={item.href} className="flex items-center gap-0">
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative inline-flex items-center justify-center font-manrope text-[18px] font-medium px-6 py-2.5 rounded-lg transition-colors pb-1 whitespace-nowrap ${
                    activeLink === item.href
                      ? "text-white"
                      : "text-white/70"
                  }`}
                >
                  <span>{item.label}</span>
                  {activeLink === item.href && (
                    <img
                      src="/landing/landing_assests/header-shape.svg"
                      alt=""
                      aria-hidden
                      className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[calc(100%-10px)] h-2.5 object-contain opacity-100 drop-shadow-[0_2px_8px_rgba(254,180,19,0.5)] pointer-events-none"
                    />
                  )}
                </button>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <GoldButton
              className="hidden sm:flex w-[auto]"
              onClick={() => handleNavClick("#hero")}
              icon={<img src="/landing/landing_assests/chz.png" alt="Chiliz" className="w-6 h-6 object-contain" />}
              children={t("nav.builtOnChiliz")}
            />

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 transition-all shrink-0"
              aria-label={t("nav.openMenu")}
            >
              <Menu className="w-5 h-5 text-white/70" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />

            <motion.div
              key="drawer"
              className="fixed top-0 right-0 z-[70] h-full w-[min(320px,85vw)] bg-[#0D0A06] border-l border-white/10 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <button
                  className="flex items-center gap-2"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    closeMenu();
                  }}
                >
                  <img
                    src="/landing/landing_assests/nav_logo.svg"
                    alt="Pryzen Logo"
                    className="h-7 w-auto"
                  />
                </button>
                <div className="flex items-center gap-2">
                  <LanguageSwitcher />
                  <button
                    onClick={closeMenu}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center border border-white/10 transition-all"
                    aria-label={t("nav.closeMenu")}
                  >
                    <X className="w-5 h-5 text-white/70" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col px-4 py-6 gap-1 flex-1 overflow-y-auto">
                {navItems.map(({ label, href }, i) => {
                  const isActive = activeLink === href;
                  return (
                    <motion.button
                      key={href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1, duration: 0.22 }}
                      onClick={() => handleNavClick(href)}
                      className={`flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-xl font-manrope text-sm font-medium transition-all ${
                        isActive
                          ? "bg-white/8 text-white"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FEB413] shrink-0" />
                      )}
                      <span className={isActive ? "" : "ml-4"}>{label}</span>
                    </motion.button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3 px-6 py-6 border-t border-white/10">
                <GoldButton
                  className="w-full"
                  onClick={() => handleNavClick("#hero")}
                  icon={<img src="/landing/landing_assests/chz.png" alt="Chiliz" className="w-6 h-6 object-contain" />}
                >
                  {t("nav.builtOnChiliz")}
                </GoldButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
