import { HeaderSectionLink } from "./HeaderSectionLink";
import { Link } from "react-scroll";
import logo from "../../assets/images/ilustracoes/yuan_logo.svg"

export type HeaderSection = {
  title: string;
  link: string;
};

const sections: HeaderSection[] = [
  {
    title: "Quem Somos",
    link: "quem-somos",
  },
  {
    title: "Gestão de cobranças",
    link: "cobranca",
  },
  {
    title: "Produtos",
    link: "produtos",
  },
  {
    title: "Cursos",
    link: "#",
  },
];

export function Header() {
  return (
    <header className="flex justify-center items-center px-4 py-8 mx-auto w-4/5 lg:w-full bg-secondary">
      <img src={logo} className="mr-5 h-10"/>
      <div className="flex gap-8 justify-start items-center ml-8 w-4/5">
        {sections.map((section) => {
          return <HeaderSectionLink key={section.title} section={section} />;
        })}
        <Link
          to="proposta"
          smooth={true}
          spy={true}
          duration={1000}
          className="self-end p-2 ml-auto text-xs font-bold uppercase rounded-md cursor-pointer md:px-4 md:text-lg bg-yuan-yellow text-primary-dark"
        >
          Solicite uma proposta
        </Link>
      </div>
    </header>
  );
}
