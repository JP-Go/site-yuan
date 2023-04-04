import { useState } from "react";
import { INOVATIONS } from "../../constants";
import { InovationContent } from "./InovationContent";
import { InovationHeader } from "./InovationHeader";
import { ManagementInovation } from "./ManagementInovation";

export function InovationSection() {
  const [index, setIndex] = useState(0);

  return (
    <section className="flex flex-col">
      <ManagementInovation />
      <div className="mx-auto -translate-y-1/2 max-w-[1250px] w-full py-6 bg-yuan-yellow flex items-baseline justify-evenly sm:gap-4 gap-2 px-10">
        {INOVATIONS.map((inovation, idx) => {
          return (
            <InovationHeader
              key={`${idx}-${inovation.headerTitle}`}
              data={inovation}
              selected={index === idx}
              onClick={() => setIndex(idx)}
            />
          );
        })}
      </div>
      <div className="relative h-[600px] bg-secondary">
          {INOVATIONS.map((inovation, idx) => {
            return (
              <InovationContent
                key={`${idx}-${inovation.contentTitle}`}
                data={inovation}
                visible={idx === index}
              />
            );
          })}
      </div>
    </section>
  );
}
