import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { Nav } from "@/components/ui/nav";
import { Footer } from "@/components/ui/footer";
import { WhatsappFab } from "@/features/whatsapp";
import { JsonLd } from "@/lib/seo/jsonld";
import { LenisProvider } from "@/components/ui/lenis-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F2EEE6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "painting contractor Daman",
    "house painting Daman",
    "exterior painting Vapi",
    "waterproofing Silvassa",
    "wall painting Nani Daman",
    "commercial painting Vapi",
    "painting services Sarigam",
    site.founder,
  ],
  authors: [{ name: site.founder }],
  creator: site.founder,
  publisher: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "home services",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <JsonLd />
        <ScrollProgress />
        <LenisProvider>
          <div
            className="site-shell min-h-dvh"
            style={{ background: "var(--color-frame)" }}
          >
            <div
              className="site-canvas relative overflow-hidden"
              style={{ background: "var(--color-bg)" }}
            >
              <Nav />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
          <WhatsappFab />
        </LenisProvider>
      </body>
    </html>
  );
}
