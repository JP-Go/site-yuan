import type { NavigationSection } from "../../@types/sections";

type HeaderSectionLinkProps = {
  section: NavigationSection;
};

export function NavigationSectionLink({ section }: HeaderSectionLinkProps) {
  return (
    <a
      href={`#${section.link}`}
      className="flex-initial cursor-pointer group shrink"
    >
      <span className="font-bold uppercase text-primary">{section.title}</span>
      <div className="bg-yuan-yellow w-0 transition-all duration-[400] group-hover:w-full h-0.5"></div>
    </a>
  );
}
