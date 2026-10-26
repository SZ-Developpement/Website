import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/section/hero";
import Engagements from "@/components/section/engagements";
import Services from "@/components/section/services";
import Method from "@/components/section/method";
import Apropos from "@/components/section/apropos";
import PlanRate from "@/components/section/plan-rate";
import Faq from "@/components/section/faq";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main" className="flex flex-col">
        <Hero />
        <Engagements />
        <Services />
        <Method />
        <Apropos />
        <PlanRate />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
