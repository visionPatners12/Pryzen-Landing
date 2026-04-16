import React from "react";
import { cn } from "../../lib/utils";

export const Button = ({
  children,
  href,
  variant = "primary",
  className,
  ...props
}) => {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 text-sm lg:text-base leading-normal px-6 py-3 md:py-4 font-semibold rounded-full transition-all duration-300",
    variant === "primary" && "bg-yellow-400 text-slate-900 hover:bg-yellow-300 shadow-lg hover:shadow-xl",
    variant === "ghost" && "border-2 border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:bg-opacity-10",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseStyles} {...props} style={{ fontFamily: "'Jura', sans-serif" }}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseStyles} {...props} style={{ fontFamily: "'Jura', sans-serif" }}>
      {children}
    </button>
  );
};
