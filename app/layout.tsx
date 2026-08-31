import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { profile } from "./lib/site";

const description =
  "Pranav Rebala is an ML engineer and data analyst in Boston. Recommendation engines, RAG assistants and agentic systems in production, plus two IEEE publications.";

export const metadata: Metadata = {
  title: {
    default: `${profile.name}, ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    "Pranav Rebala",
    "machine learning engineer",
    "data analyst",
    "RAG",
    "LangChain",
    "business analytics",
    "Boston",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    title: `${profile.name}, ${profile.role}`,
    description,
    siteName: `${profile.name} · Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name}, ${profile.role}`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08080B",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Scroll-reveal starts at opacity 0 and is switched on by an
            IntersectionObserver. Without JS that would hide the whole page. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}
                   .animate-fade-up{opacity:1!important;animation:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-5 focus:py-2 focus:text-sm focus:font-medium focus:text-ink-950"
        >
          Skip to content
        </a>

        {children}

        <div aria-hidden className="grain-overlay" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1TQN5YR32B"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1TQN5YR32B');
          `}
        </Script>
      </body>
    </html>
  );
}
