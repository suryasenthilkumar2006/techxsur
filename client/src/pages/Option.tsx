import React from "react";
import { AboutHostSection } from "./sections/AboutHostSection";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { EventAgendaSection } from "./sections/EventAgendaSection";
import { HeroSection } from "./sections/HeroSection";
import { TicketInfoSection } from "./sections/TicketInfoSection";
import { WhySponsorSection } from "./sections/WhySponsorSection";

export function Option() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <div id="about">
        <AboutUsSection />
      </div>
      <AboutHostSection />

      <WhySponsorSection />
      <div id="agenda">
        <EventAgendaSection />
      </div>
      <div id="tickets">
        <TicketInfoSection />
      </div>
      <div id="contact">
        <ContactUsSection />
      </div>
    </div>
  );
}