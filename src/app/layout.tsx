import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import TekBot from "@/components/bot/TekBot";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://teknasdigitalsolutions.com"),

  title: {
    default: "Teknas Digital Solutions | Websites, Apps & Custom Software",
    template: "%s | Teknas Digital Solutions",
  },

  description:
    "Teknas Digital Solutions builds modern websites, mobile applications and custom software solutions designed to help businesses attract customers, automate operations and grow faster.",

  keywords: [
    "Web Development",
    "Website Design",
    "Mobile App Development",
    "Custom Software",
    "Business Website",
    "Website Redesign",
    "Digital Agency",
    "Teknas Digital Solutions",
    "Next.js Development",
    "Software Company",
  ],

  authors: [
    {
      name: "Teknas Digital Solutions",
    },
  ],

  creator: "Teknas Digital Solutions",

  openGraph: {
    title: "Teknas Digital Solutions",
    description:
      "Modern websites, mobile apps and software solutions built for business growth.",
    url: "https://teknasdigitalsolutions.com",
    siteName: "Teknas Digital Solutions",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Teknas Digital Solutions",
    description:
      "Modern websites, mobile apps and software solutions built for business growth.",
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${jakarta.className}
          bg-white
          text-slate-900
          antialiased
        `}
      >
        <BackgroundEffects />
        <Layout>{children}</Layout>
        <TekBot />
        <Footer />
      </body>
    </html>
  );
}