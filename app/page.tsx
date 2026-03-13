import dynamic from "next/dynamic";
import { About } from "@/components/About";
import { BottomSection } from "@/components/BottomSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { Partners } from "@/components/Partners";
import ScrollProgress from "@/components/ScrollProgress";
import { Services } from "@/components/Services";
import { TopSection } from "@/components/TopSection";

import { BachelorResults } from "@/components/BachelorResults";
import { MasterResults } from "@/components/MasterResults";
import { Team } from "@/components/Team";
import { Branches } from "@/components/Branches";
import { Publications } from "@/components/Publications";

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
