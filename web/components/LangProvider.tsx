"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getLang } from "@/lib/i18n";

export function LangProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const lang = getLang(searchParams?.get("lang") ?? undefined);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <>{children}</>;
}
