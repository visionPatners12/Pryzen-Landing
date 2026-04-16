import React from "react";
import { cn } from "../../lib/utils";

export const GradientHeading = ({
  children,
  className,
  style,
  as: Tag = "h2",
}) => (
  <Tag
    className={cn("font-bold uppercase tracking-wide leading-tight", className)}
    style={{
      background: "linear-gradient(180deg, #FFF 18.48%, #FEB413 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "'Jura', sans-serif",
      ...style,
    }}
  >
    {children}
  </Tag>
);
