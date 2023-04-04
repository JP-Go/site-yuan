import { InovationSectionItem } from "../../@types/inovation-section";

type InovationProps = {
  data: InovationSectionItem;
  selected: boolean;
  onClick: () => any;
};

export function InovationHeader({ data, onClick, selected }: InovationProps) {
  return (
    <button
      className="flex flex-col items-center w-20 max-w-28 group"
      type="button"
      onClick={onClick}
    >
      <img
        src={data.headerImgPath}
        alt={data.headerTitle}
        className={`px-4 mb-2 group-hover:brightness-0 group-hover:invert transition-all w-16 md:w-20 ${
          selected ? "brightness-0 invert" : ""}`}
      />
      <span
        className={`md:text-xl sm:text-sm text-xs font-bold tracking-tighter leading-none text-center text-primary group-hover:text-white transition-colors ${
          selected ? "text-white" : ""}`}
      >
        {data.headerTitle}
      </span>
    </button>
  );
}
