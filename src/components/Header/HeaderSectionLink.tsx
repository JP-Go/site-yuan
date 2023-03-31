import { HeaderSection } from "./Header"

type HeaderSectionLinkProps = {
    section: HeaderSection
}

export function HeaderSectionLink({ section }: HeaderSectionLinkProps) {
    return <a href="#" className="group">
        <span className="font-bold uppercase text-primary" >{section.title}</span>
        <div className="bg-yuan-yellow w-0 transition-all group-hover:w-full h-0.5"></div>
    </a>
}