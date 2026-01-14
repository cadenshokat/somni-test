import type { Metadata } from "next";
import { Lato, EB_Garamond, Fira_Code } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

const firaCode = Fira_Code({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Somni - Your Sleep Apnea Journey Starts Here",
  description: "Expert sleep apnea treatment, CPAP supplies, and personalized care to help you breathe better and sleep soundly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lato.variable} ${ebGaramond.variable} ${firaCode.variable} font-sans antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
