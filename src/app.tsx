import CollectionSection from "./components/CollectionSection";
import { Contact } from "./components/Contact";
import { FABToTop } from "./components/FABToTop";
import { Header } from "./components/Header";
import {Hero} from "./components/Hero";
import { InovationSection } from "./components/InovationSection";
import PortfolioSection from "./components/PortfolioSection";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <InovationSection />
      <CollectionSection />
      <PortfolioSection />
      <Contact />
    </>
  );
}

export default App;
