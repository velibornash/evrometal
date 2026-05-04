import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://evrometal.rs"),
  title: {
    default: "Evrometal | ALU, PVC i stakleni sistemi",
    template: "%s | Evrometal",
  },
  description:
    "Evrometal proizvodi, isporučuje i montira aluminijumske i PVC sisteme, termopan staklo, okove, profile i prateći materijal za B2B projekte.",
  keywords: [
    "Evrometal",
    "aluminijumska stolarija",
    "PVC stolarija",
    "ALU profili",
    "termopan staklo",
    "Petrovac na Mlavi",
  ],
  openGraph: {
    title: "Evrometal | ALU, PVC i stakleni sistemi",
    description:
      "Proizvodnja, veleprodaja, transport i montaža aluminijumskih i PVC sistema za objekte i proizvođače.",
    url: "https://evrometal.rs",
    siteName: "Evrometal",
    images: [
      {
        url: "/images/hero-factory.jpg",
        width: 2400,
        height: 1500,
        alt: "Evrometal proizvodnja i sistemi",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
