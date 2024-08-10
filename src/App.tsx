import CollectionSection from "./components/CollectionSection";
import PortfolioSection from "./components/PortfolioSection";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InovationSection } from "./components/InovationSection";
import { useEffect, useState } from "react";
import { navSections } from "./constants";
import { NavigationSectionLink } from "./components/Header/HeaderSectionLink";
import { CaretRight } from "phosphor-react";
import { FABToTop } from "./components/FABToTop";

function App() {
  const [sidebarClosed, setSidebarClosed] = useState(true);
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }
    });
  }, []);

  function closeSidebar() {
    setSidebarClosed(true);
  }

  function toggleSidebar() {
    setSidebarClosed((c) => !c);
  }

  return (
    <main className="relative w-full h-full">
      {!sidebarClosed && (
        <div
          className="fixed z-30 w-screen h-screen bg-black/30 lg:hidden"
          onClick={closeSidebar}
        />
      )}
      <div
        className={`flex lg:hidden fixed top-0 left-0 z-40 self-start w-64 h-screen transition-all bg-secondary sidebar ${sidebarClosed ? "-translate-x-full" : "translate-x-0"
          }`}
      >
        <ul className="flex-1 p-4 pr-8 mt-8 w-full h-full transition-opacity">
          {navSections.map((section) => (
            <li
              key={section.title}
              className={`mt-4 transition-all ease-in-out`}
              onClick={closeSidebar}
            >
              <NavigationSectionLink section={section} />
            </li>
          ))}
        </ul>
        <div className="flex self-end h-screen bg-transparent border-l translate-x-full border-primary/50">
          <button
            type="button"
            className="flex items-center mt-40 -ml-px h-10 rounded-r-full border border-l-0 border-primary/50 bg-secondary"
            onClick={(e) => {
              e.stopPropagation();
              toggleSidebar();
            }}
          >
            <CaretRight
              size={20}
              className={`text-primary transition-transform duration-500 ${sidebarClosed ? "rotate-0" : "-rotate-180"
                }`}
            />
          </button>
        </div>
      </div>
      <Header />
      <Hero />
      <InovationSection />
      <CollectionSection />
      <PortfolioSection />
      <Contact />
      {showFab && <FABToTop />}
      </main>
  );
}

export default App;
