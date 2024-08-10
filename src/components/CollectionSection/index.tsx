import { HumanizedCollection } from "./HumanizedCollection";
import { Solutions } from "./Solutions";

function CollectionSection() {
  return (
    <section id="cobranca" className="flex relative flex-col items-center">
      <Solutions />
      <a
        href="#proposta"
        className="z-10 px-8 py-4 text-lg font-bold rounded-lg -translate-y-1/2 cursor-pointer md:px-12 md:text-3xl text-humanized-button bg-yuan-yellow"
      >
        Agende uma reunião!
      </a>
      <HumanizedCollection />
    </section>
  );
}

export default CollectionSection;
