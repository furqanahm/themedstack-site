import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MedStackLiteLeadMagnet from "./components/MedStackLiteLeadMagnet";
import MedStackOSPurchase from "./components/MedStackOSPurchase";
import WhatIsMedStackOS from "./components/WhatIsMedStackOS";
import ResearchStackStarter from "./components/ResearchStackStarter";
import ResearchStackAcademy from "./components/ResearchStackAcademy";
import WhyThisExists from "./components/WhyThisExists";
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
      <WhatIsMedStackOS />
      <ResearchStackStarter />
      <ResearchStackAcademy />
      <WhyThisExists />
      <WaitlistCta />
      <Footer />
    </div>
  );
}
