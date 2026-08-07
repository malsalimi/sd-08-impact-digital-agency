import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "وكالة إمباكت للتسويق الرقمي | Impact Digital Agency",
  description: "وكالة تسويق رقمي تجريبية تقدم حلولاً حديثة في التسويق، الهوية البصرية، تطوير المواقع، وتحسين الظهور الرقمي. Salimi Digital Collection.",
  keywords: ["Impact Digital Agency", "وكالة إمباكت", "التسويق الرقمي", "الهوية البصرية", "تطوير المواقع", "SEO", "Google Ads"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${plusJakarta.variable} ${cairo.variable}`}>
      <body className="min-h-screen flex flex-col bg-navy-900 text-slate-100 font-sans">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
