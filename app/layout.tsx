import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterRevealWrapper from "@/components/FooterRevealWrapper";
import { CartProvider } from "@/components/CartProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cursive",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign"),
  title: {
    default: "Emperor Akbar Cardamom | GI-Tagged Alleppey Cardamom",
    template: "%s | Emperor Akbar Cardamom",
  },
  description:
    "Discover premium GI-tagged Alleppey Green Cardamom, its unique aroma, quality grades, and versatile uses in cooking and recipes.",
  applicationName: "Emperor Akbar Cardamom Redesign",
  keywords: [
    "green cardamom",
    "Alleppey green cardamom",
    "Emperor Akbar cardamom",
    "buy cardamom online",
    "GI tagged cardamom",
    "cardamom pods",
    "choti elaichi",
    "Indian spices",
    "premium cardamom grades",
    "doctor of spices",
  ],
  authors: [{ name: "Satya (dotsatya)", url: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/" }],
  creator: "Satya (dotsatya)",
  publisher: "Emperor Akbar Cardamom Redesign",
  category: "Food & Grocery",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/",
    siteName: "Emperor Akbar Cardamom Redesign",
    title: "Emperor Akbar Cardamom | GI-Tagged Alleppey Cardamom",
    description:
      "Discover premium GI-tagged Alleppey Green Cardamom, its unique aroma, quality grades, and versatile uses in cooking and recipes.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Emperor Akbar Alleppey Green Cardamom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emperor Akbar Cardamom | GI-Tagged Alleppey Cardamom",
    description:
      "Discover premium GI-tagged Alleppey Green Cardamom, its unique aroma, quality grades, and versatile uses in cooking and recipes.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${playfair.variable} ${greatVibes.variable} font-sans antialiased bg-bg-primary text-stone-900 min-h-screen flex flex-col`}
        style={{ paddingBottom: 'var(--footer-height, 0px)' }}
        suppressHydrationWarning
      >
        <CartProvider>
          {/* Main content wrapper with flat straight bottom edge (NO rounded corners) */}
          <div className="relative z-10 bg-bg-primary min-h-screen flex flex-col shadow-[0_25px_50px_rgba(0,0,0,0.25)] mb-0">
            <Header />
            <main className="flex flex-col flex-1">
              {children}
            </main>
          </div>
          {/* Clean footer reveal underneath */}
          <FooterRevealWrapper>
            <Footer />
          </FooterRevealWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
