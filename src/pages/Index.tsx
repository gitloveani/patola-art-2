
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentSection, setCurrentSection] = useState("home");

  const renderSection = () => {
    switch (currentSection) {
      case "single-ekat":
      case "semi-ekat":
      case "double-ekat":
      case "more":
        return <Gallery filter={currentSection} />;
      case "contact":
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <About />
            <div className="py-16">
              <Gallery filter="featured" />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        currentSection={currentSection} 
        onSectionChange={setCurrentSection}
      />
      
      <main className="relative">
        {renderSection()}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
