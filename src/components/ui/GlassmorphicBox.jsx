import React from "react";
import { cn } from "../../lib/utils";

export const GlassmorphicBox = ({ children, className, ...props }) => (
  <div
    className={cn("glassmorphic-box", className)}
    style={{
      borderRadius: "20px",
      border: "1px solid rgba(255, 255, 255, 0.20)",
      background: "rgba(255, 255, 255, 0.05)",
      boxShadow: "0 44px 104px 0 rgba(254, 180, 19, 0.26)",
      backdropFilter: "blur(10px)",
    }}
    {...props}
  >
    {children}
  </div>
);
