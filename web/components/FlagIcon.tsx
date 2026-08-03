"use client";

import { useId } from "react";

type FlagIconProps = {
  code: string;
  className?: string;
};

const defaultClassName = (code: string) =>
  code === "gb" ? "h-4 w-8" : "h-4 w-6";

export function FlagIcon({ code, className }: FlagIconProps) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const size = className ?? defaultClassName(code);

  if (code === "de") {
    return (
      <svg viewBox="0 0 30 20" className={size} aria-hidden="true">
        <rect width="30" height="6.67" fill="#000" />
        <rect y="6.67" width="30" height="6.67" fill="#DD0000" />
        <rect y="13.33" width="30" height="6.67" fill="#FFCE00" />
      </svg>
    );
  }

  if (code === "rs") {
    return (
      <svg viewBox="0 0 30 20" className={size} aria-hidden="true">
        <rect width="30" height="6.67" fill="#C6363C" />
        <rect y="6.67" width="30" height="6.67" fill="#0C4076" />
        <rect y="13.33" width="30" height="6.67" fill="#fff" />
      </svg>
    );
  }

  const clipAll = `flag-all-${id}`;
  const clipDiag = `flag-diag-${id}`;

  return (
    <svg viewBox="0 0 60 30" className={size} aria-hidden="true">
      <clipPath id={clipAll}>
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id={clipDiag}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath={`url(#${clipAll})`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          clipPath={`url(#${clipDiag})`}
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
