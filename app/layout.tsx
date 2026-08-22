import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sidhi Vinayaka Sweets & Snacks — Traditional Sweets Online",
  description:
    "Sidhi Vinayaka Sweets & Snacks — traditional Telangana & Andhra sweets, savouries, and pickles, freshly prepared.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
