import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Form1 from "./components/Form1";
import Hero from "./components/Hero";
import Mockup from "./components/Mockup";
import Section1 from "./components/Sec1";
import Section2 from "./components/Sec2";
import Section3 from "./components/Sec3";
import Section4 from "./components/Sec4";
import Section5 from "./components/Sec5";
import Section6 from "./components/Sec6";
import Section7 from "./components/Sec7";
import Section8 from "./components/Sec8";
import Section9 from "./components/Sec9";
import Section10 from "./components/Sec10";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";


export default function Home() {
  return (
    <>
      <Hero/>
      <Section1/>
      <Section5/>
      <Banner/>
      <Section4/>
      <Section3/>
      <Banner2/>
      <Form1/>
      <Mockup/>
      <Section2/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Section9/>
      <Section10/>
      <FAQ></FAQ>
      <CTA/>
      <Footer></Footer>
    </>
  );
}
