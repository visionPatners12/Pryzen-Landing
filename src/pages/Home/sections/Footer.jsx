export const Footer = () => {
  return (
    <footer className="w-[90%] sm:w-[85%] lg:w-[80%] max-w-[1400px] mx-auto py-6 border-t border-white/5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <img
            src="/landing/landing_assests/nav_logo.svg"
            alt="Team Index logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Copyright */}
        <div className="font-golos text-xs text-white/30 text-center sm:text-right flex gap-3">
          <p>© {new Date().getFullYear()} Team Index. All rights reserved.</p>
          <span className="text-[#FEB413]">
            Powered by Polymarket. Built for fans.
          </span>
        </div>
      </div>
    </footer>
  );
};
