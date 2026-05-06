import type { Metadata } from "next";
import { Instrument_Serif, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import OceanWave from "@/components/ocean-wave";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "next-themes";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
});

const BASE_URL = "https://nikhilshinde.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Nikhil Shinde",
    template: "%s | Nikhil Shinde",
  },
  description:
    "Nikhil Shinde — MS CS at George Washington University. Interested in Systems, AI/ML, Cloud, and Security.",
  keywords: [
    "Nikhil Shinde",
    "Systems",
    "AI/ML",
    "Cloud",
    "Security",
    "GWU",
    "Portfolio",
  ],
  authors: [{ name: "Nikhil Shinde" }],
  creator: "Nikhil Shinde",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Nikhil Shinde",
    title: "Nikhil Shinde",
    description:
      "Nikhil Shinde — MS CS at George Washington University. Interested in Systems, AI/ML, Cloud, and Security.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Shinde",
    description:
      "Nikhil Shinde — MS CS at George Washington University. Interested in Systems, AI/ML, Cloud, and Security.",
    creator: "@nikhilbuilds_",
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable} ${geistMono.variable} bg-[#faf9f7] antialiased dark:bg-[#131211]`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ViewTransitions>
            <OceanWave />
            <Navbar />
            <div className="relative">
              {children}
            </div>
            <Footer />
          </ViewTransitions>
        </ThemeProvider>
      </body>
    </html>
  );
}
