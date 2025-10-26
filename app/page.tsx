import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Packages from "./components/Packages";
import Portfolio from "./components/Portfolio";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { getPersonSchema, getServiceSchema, getOrganizationSchema } from "./lib/schema";

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPersonSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServiceSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
      />

      <Header />
      
      <main id="main-content">
        <Hero />
        <About />
        <Packages />
        <Portfolio />
        <Results />
        <Testimonials />
        <Process />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

