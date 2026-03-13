import { About } from "@/components/About";
import { BachelorResults } from "@/components/BachelorResults";
import { BottomSection } from "@/components/BottomSection";
import { Branches } from "@/components/Brancehs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import {MasterResults} from "@/components/MasterResults";
import { Partners } from "@/components/Partners";
import { Publications } from "@/components/Publications";
import ScrollProgress from "@/components/ScrollProgress";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { TopSection } from "@/components/TopSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <TopSection />
        <About />
        <Services/>
        <Team/>
        <Partners/>
        <Branches/>
        <BachelorResults/>
        <MasterResults/>
        <Publications/>
        <Contact/>
        <BottomSection/>
        <Footer/>
      </main>
    </>
  );
}
