"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import { dictionary, getLang, type Lang } from "@/lib/i18n";
import { useSearchParams } from "next/navigation";

interface Props {
  children: ReactNode;
  lang?: Lang;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  private currentLang: Lang = "sr";

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
    this.currentLang = props.lang || "sr";
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.lang && this.props.lang !== prevProps.lang) {
      this.currentLang = this.props.lang;
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.currentLang = this.props.lang || "sr";
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      const t = dictionary[this.currentLang].error;
      return (
        <div className="min-h-screen bg-[#111820] text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{t.title}</h1>
            <p className="text-white/60 mb-8">{t.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-amber-300 text-[#11100b] px-6 py-3 rounded-sm font-bold hover:bg-amber-200"
            >
              {t.retry}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function ErrorBoundaryWrapper({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const lang = getLang(searchParams?.get("lang") ?? undefined);
  return <ErrorBoundary lang={lang}>{children}</ErrorBoundary>;
}
