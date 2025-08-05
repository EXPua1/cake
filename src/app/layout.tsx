import type { Metadata } from "next";
import { Montserrat, Allura } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

const allura = Allura({
  subsets: ["latin"],
  variable: "--font-allura",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "La Crème Patisserie - Unique Cakes & Desserts in Sydney",
  description: "Artisan cakes, cheesecakes, and custom desserts made with natural ingredients. Address delivery within Sydney. Order your perfect cake today!",
  keywords: ["cakes", "patisserie", "cheesecake", "custom cakes", "Sydney delivery", "desserts"],
  openGraph: {
    title: "La Crème Patisserie",
    description: "Unique cakes and desserts with natural ingredients",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${allura.variable} antialiased`}
        style={{
          fontFamily: 'var(--font-family)',
          backgroundColor: 'var(--bg)',
          color: 'var(--black)'
        }}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
