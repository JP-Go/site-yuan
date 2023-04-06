import { InovationSectionItem } from "../../@types/inovation-section";

type InovationContentProps = {
  data: InovationSectionItem;
  visible: boolean;
};

export function InovationContent({ data, visible }: InovationContentProps) {
  return (
    <div
      className={`left-1/2 -translate-x-1/2 w-full absolute max-w-[1250px] flex flex-col md:flex-row md:justify-center items-center mx-auto lg:justify-center gap-4 lg:gap-10 h-4/5 px-8 ${
        visible ? "z-10 opacity-100" : "z-0 opacity-0"
      }`}
    >
      <img
        src={data.contentImgPath}
        alt={data.contentTitle}
        className="md:w-1/2 w-[240px] sm:w-[300px] h-4/5 md:max-w-1/2"
      />
      <div className="px-4 max-w-md md:w-1/2 md:px-auto">
        <h3 className="mb-2 text-3xl font-bold lg:mb-8 lg:text-6xl text-primary">
          {data.contentTitle}
        </h3>
        <p className="font-medium lg:text-3xl text-primary">{data.contentBody}</p>
        <a
          href="#proposta"
          className="inline-block p-4 mt-8 text-xl font-bold text-center rounded-xl cursor-pointer lg:text-3xl bg-yuan-yellow text-primary"
        >
          Confira mais informações!
        </a>
      </div>
    </div>
  );
}
