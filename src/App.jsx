import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MedStackOSPurchase from "./components/MedStackOSPurchase";
import WhatIsMedStackOS from "./components/WhatIsMedStackOS";
import ResearchStackStarter from "./components/ResearchStackStarter";
import ResearchStackAcademy from "./components/ResearchStackAcademy";
import WhyThisExists from "./components/WhyThisExists";
import WaitlistCta from "./components/WaitlistCta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Nav />
      <Hero />
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
