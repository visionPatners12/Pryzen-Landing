/** Reusable checklist item with gold checkmark icon */
export const BenefitItem = ({ children }) => (
  <li className="flex items-start gap-3">
    <img
      src="/landing/landing_assests/checkmark_circle.svg"
      alt=""
      className="shrink-0 mt-0.5 w-[18px] h-[18px]"
      loading="lazy"
      decoding="async"
    />
    <span className="text-white/80 text-md leading-snug">{children}</span>
  </li>
);
