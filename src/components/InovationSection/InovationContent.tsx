import { Link } from "react-scroll";
import { InovationSectionItem } from "../../@types/inovation-section";

type InovationContentProps = {
  data: InovationSectionItem;
  visible: boolean;
};

export function InovationContent({ data, visible }: InovationContentProps) {
  return (
    <div
      className={`left-1/2 -translate-x-1/2 w-full absolute max-w-[1250px] flex flex-col md:flex-row items-center mx-auto lg:justify-center gap-4 lg:gap-20 h-full ${
        visible ? "z-10 opacity-100" : "z-0 opacity-0"
      }`}
    >
      <img
        src={data.contentImgPath}
        alt={data.contentTitle}
        className="w-1/2 max-h-screen"
      />
      <div className="px-4 mx-auto max-w-md md:w-1/2 md:px-auto">
        <h3 className="mb-2 text-2xl font-bold lg:mb-8 lg:text-6xl text-primary">
          {data.contentTitle}
        </h3>
        <p className="font-medium lg:text-3xl text-primary">{data.contentBody}</p>
        <Link
          to="proposta"
          href="#proposta"
          smooth
          className="inline-block p-2 mt-10 font-bold text-center rounded-xl cursor-pointer md:p-4 md:text-4xl bg-yuan-yellow text-primary"
        >
          Confira mais informações!
        </Link>
      </div>
    </div>
  );
}
