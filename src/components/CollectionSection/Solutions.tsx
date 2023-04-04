import { SOLUTIONS } from "../../constants";

export function Solutions() {
  return (
    <div
      id="cobranca"
      className="flex flex-col items-center p-20 w-full bg-primary"
    >
      <h2 className="mb-11 text-3xl font-bold md:text-5xl text-yuan-yellow">
        Soluções em Cobrança
      </h2>
      <p className="md:text-xl lg:text-[27px] text-justify text-white hyphens-normal">
        Oferecemos uma gama de soluções em cobrança, que vão desde o serviço de
        cobrança amigável até a cobrança judicial, passando pela negociação de
        dívidas e renegociação de contratos. Além disso, a Yuan Soluções utiliza
        tecnologias avançadas para automatizar processos e garantir a
        efetividade na gestão de cobrança.
      </p>
      <div className="flex flex-col gap-8 mt-16 w-full md:grid md:grid-cols-4 grow">
        {SOLUTIONS.map((solution) => {
          return (
            <div key={solution.title} className="flex justify-center">
              <div className="w-60">
                <img
                  className="pb-6 mx-auto w-28 h-28 brightness-0 invert md:mx-0"
                  src={solution.imgPath ? solution.imgPath : ""}
                />
                <h3 className="text-xl font-bold lg:text-3xl text-yuan-yellow">
                  {solution.title.split("\n").map((part) => (
                    <span key={part} className="block">{part}</span>
                  ))}
                </h3>
                <ul>
                  {solution.solutions.map((item) => (
                    <li key={item} className="font-medium text-white lg:text-lg">
                      <span className="text-yuan-yellow">▸</span>{" "}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
