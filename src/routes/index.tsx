import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroBanner } from "@/components/hero-banner";
import { MenuSection } from "@/components/menu-section";
import { ReservationSection } from "@/components/reservation-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <main>
        <HeroBanner />
        <AboutSection />
        <MenuSection />
        <ReservationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
