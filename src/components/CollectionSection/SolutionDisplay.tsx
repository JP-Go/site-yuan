import { SolutionCatetory } from "../../@types/collection-section";

type SolutionDisplayProps = {
  solution: SolutionCatetory;
};

export function SolutionDisplay({ solution }: SolutionDisplayProps) {
  return (
    <div key={solution.title} className="flex">
      <div className="w-60">
        <img
          className="pb-6 mx-auto w-20 h-28 brightness-0 invert md:mx-0"
          src={solution.imgPath ? solution.imgPath : ""}
        />
        <h3 className="text-xl font-bold lg:text-3xl text-yuan-yellow">
          {solution.title.split("\n").map((part) => (
            <span key={part} className="block">
              {part}
            </span>
          ))}
        </h3>
        <ul>
          {solution.solutions.map((item) => (
            <li key={item} className="font-medium text-white lg:text-lg">
              <span className="text-yuan-yellow">▸</span> <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
