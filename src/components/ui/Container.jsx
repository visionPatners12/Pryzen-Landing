import React from "react";
import { cn } from "../../lib/utils";

export const Container = ({ children, className, ...props }) => (
  <div 
    className={cn(
      "w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8",
      className
    )}
    {...props}
  >
    {children}
  </div>
);
