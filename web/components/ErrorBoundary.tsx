"use client";

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Log the error for debugging
    console.error("Error caught by boundary:", error);
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#111820] text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Došlo je do greške</h1>
            <p className="text-white/60 mb-8">
              Izvinjavamo se, došlo je do neočekivane greške. Molimo osvežite stranicu.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-amber-300 text-[#11100b] px-6 py-3 rounded-sm font-bold hover:bg-amber-200"
            >
              Osveži stranicu
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
