import { SOLUTIONS } from "../../constants";
import { SolutionDisplay } from "./SolutionDisplay";

export function Solutions() {
  return (
    <div
      id="cobranca"
      className="flex flex-col items-center px-10 py-20 w-full md:px-20 bg-primary"
    >
      <div className="w-full max-w-[1280px]">
        <h2 className="mb-11 text-3xl font-bold text-center md:text-5xl text-yuan-yellow">
          Soluções em Cobrança
        </h2>
        <p className="md:text-xl lg:text-[27px] text-justify text-white hyphens-normal">
          Oferecemos uma gama de soluções em cobrança, que vão desde o serviço
          de cobrança amigável até a cobrança judicial, passando pela negociação
          de dívidas e renegociação de contratos. Além disso, a Yuan Soluções
          utiliza tecnologias avançadas para automatizar processos e garantir a
          efetividade na gestão de cobrança.
        </p>
        <div className="flex flex-col gap-8 items-center mt-16 w-full md:items-start md:content-evenly md:grid md:grid-cols-4">
          {SOLUTIONS.map((solution) => {
            return <SolutionDisplay key={solution.title} solution={solution} />;
          })}
        </div>
      </div>
    </div>
  );
}
