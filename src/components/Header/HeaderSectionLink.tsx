import { HeaderSection } from "."

type HeaderSectionLinkProps = {
    section: HeaderSection
}

export function HeaderSectionLink({ section }: HeaderSectionLinkProps) {
    return <a href={`#${section.link}`} className="hidden mr-px cursor-pointer group lg:block" >
        <span className="font-bold uppercase text-primary" >{section.title}</span>
        <div className="bg-yuan-yellow w-0 transition-all duration-[400] group-hover:w-full h-0.5"></div>
    </a>
}