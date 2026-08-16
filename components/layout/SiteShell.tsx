"use client";

import { CartProvider } from "@/components/commerce/CartProvider";
import { CartDrawer } from "@/components/commerce/CartDrawer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { TrustStrip } from "@/components/layout/TrustStrip";
import { Footer } from "@/components/layout/Footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <AnnouncementBar />
      <Header />
      <TrustStrip />
      <main id="main" className="site-main">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
