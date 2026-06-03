import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MedStackLiteLeadMagnet from "./components/MedStackLiteLeadMagnet";
import MedStackOSPurchase from "./components/MedStackOSPurchase";
import MedStackAICommandLayer from "./components/MedStackAICommandLayer";
import MedStackOfferStack from "./components/MedStackOfferStack";
import WhatIsMedStackOS from "./components/WhatIsMedStackOS";
import ResearchStackStarter from "./components/ResearchStackStarter";
import MedStackOSFaq from "./components/MedStackOSFaq";
import WaitlistCta from "./components/WaitlistCta";
import Footer from "./components/Footer";
import MedStackOSAccess from "./components/MedStackOSAccess";

export default function App() {
  if (window.location.pathname === "/medstack-os-access") {
    return <MedStackOSAccess />;
  }

  return (
    <div className="page">
      <Nav />
      <Hero />
      <MedStackLiteLeadMagnet />
      <MedStackOSPurchase />
      <MedStackAICommandLayer />
      <MedStackOfferStack />
      <WhatIsMedStackOS />
      <ResearchStackStarter />
      <MedStackOSFaq />
      <WaitlistCta />
      <Footer />
    </div>
  );
}
