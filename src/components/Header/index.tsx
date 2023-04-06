import { NavigationSectionLink } from "./HeaderSectionLink";
import { navSections } from "../../constants";
import logo from "../../assets/images/ilustracoes/yuan_logo.svg";

export function Header() {
  return (
    <header className="flex justify-center items-center px-16 max-w-[1280px] py-8 mx-auto w-4/5 lg:w-full bg-secondary">
      <img src={logo} className="mr-5 h-10" />
      <div className="hidden gap-8 justify-start items-center ml-8 w-fit shrink lg:flex">
        {navSections.map((section) => {
          return (
            <NavigationSectionLink key={section.title} section={section} />
          );
        })}
      </div>
      <a
        href="#proposta"
        className="self-end p-1 ml-auto text-xs font-bold text-center uppercase rounded-md cursor-pointer sm:p-2 md:px-4 md:text-lg bg-yuan-yellow text-primary-dark"
      >
        Solicite uma proposta
      </a>
    </header>
  );
}
