import { cn } from "../../lib/utils";

export const GoldButton = ({
  children,
  icon,
  className = "",
  backgroundImage = "landing/landing_assests/btnBg.png",
  ...rest
}) => (
  <button
    type="button"
    className={cn(
      "group relative isolate bg-transparent cursor-pointer min-h-12 lg:min-h-14 inline-flex items-center justify-center text-sm lg:text-base leading-normal px-6 font-semibold text-black",
      className
    )}
    {...rest}
  >
    <span className="relative z-10 inline-flex items-center gap-2">
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
    <img
      src={backgroundImage}
      className="absolute top-0.5 left-0 w-full h-full group-hover:saturate-200 transition-all duration-500 select-none pointer-events-none"
      style={{ zIndex: -1 }}
      alt=""
    />
  </button>
);
