import { HeaderSectionLink } from "./HeaderSectionLink";

export type HeaderSection = {
  title: string;
};

const sections: HeaderSection[] = [
  {
    title: "Quem Somos",
  },
  {
    title: "Gestão de cobranças",
  },
  {
    title: "Produtos",
  },
  {
    title: "Cursos",
  },
];

export function Header() {
  return (
    <header className="px-8 py-5 bg-secondary">
      <div className="flex justify-evenly items-center w-full">
        <div className="w-10 h-10">Logo aqui</div>
        {sections.map((section) => {
          return <HeaderSectionLink key={section.title} section={section} />;
        })}
        <a
          href="#proposta"
          className="px-4 py-2 font-bold uppercase rounded-md bg-yuan-yellow text-primary-dark"
        >
          Solicite uma proposta
        </a>
      </div>
    </header>
  );
}
