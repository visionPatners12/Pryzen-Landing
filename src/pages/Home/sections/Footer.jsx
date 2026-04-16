import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1400px] mx-auto py-6 border-t border-white/5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img
            src="/landing/landing_assests/nav_logo.svg"
            alt="Team Index logo"
            className="h-8 w-auto"
          />
        </div>

        <div className="font-golos text-xs text-white/30 text-center sm:text-right flex gap-3">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <span className="text-[#FEB413]">
            {t("footer.powered")}
          </span>
        </div>
      </div>
    </footer>
  );
};
