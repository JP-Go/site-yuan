import { useLoopCounter } from "../../hooks/useLoopCounter";
import { CaretLeft, CaretRight } from "phosphor-react";
import comunicacaoDigitalImg from "../../assets/images/ilustracoes/comunicacao_digital.svg";
import solucoes from "../../assets/images/ilustracoes/solucoes.svg";
import equipe from "../../assets/images/ilustracoes/equipe.svg";

type Carrousel = {
  text: string;
  imgUri?: string;
}[];

type CarrouselItem = Carrousel[number];

const imgs = [comunicacaoDigitalImg, solucoes, equipe];

export function Hero() {
  const items: Carrousel = [
    {
      text: "Somos uma empresa inovadora que oferece soluções de alta qualidade para seu negócio",
    },
    {
      text: "Desenvolvemos soluções projetadas para ajudar a aumentar a eficiência, reduzir custos e impulsionar a produtividade da sua empresa.",
    },
    {
      text: "Nossa equipe de atendimento é capaz de lidar com uma ampla variedade de solicitações e problemas de seus clientes",
    },
  ];

  const { index, next, prev, setIndex } = useLoopCounter(items);
  return (
    <section className="flex flex-col justify-center items-center mx-auto w-full bg-secondary">
      <div className="inline-flex overflow-x-hidden justify-center relative gap-4 w-full max-w-[1280px] h-80 sm:h-[400px]">
        <CaretLeft
          size={40}
          className="hidden absolute left-8 top-1/2 z-10 cursor-pointer text-primary md:block"
          onClick={prev}
        />
        {items.map((item, idx) => {
          const diff = Math.abs(index - idx);
          return (
            <div
              key={`${idx}+${item.text}`}
              className={`absolute flex gap-4 md:w-md items-center justify-center transition-all duration-700 ${
                index !== idx
                  ? index > idx
                    ? "-translate-x-full "
                    : "translate-x-full "
                  : ""
              }`}
            >
              <div className="flex flex-col px-2 w-1/2 font-bold md:px-16 md:text-2xl lg:text-4xl text-primary">
                <p>{item.text}</p>
                <a
                  className="py-2 mt-8 w-full text-center rounded-lg cursor-pointer md:py-4 md:w-4/5 bg-yuan-yellow"
                  href="#proposta"
                >
                  Fale com a gente
                </a>
              </div>
              <img alt={item.text} src={imgs[idx]} className="w-1/3 h-80" />
            </div>
          );
        })}
        <CaretRight
          size={40}
          className="hidden absolute right-0 top-1/2 cursor-pointer text-primary md:block"
          onClick={next}
        />
      </div>
      <div className="flex justify-between items-center my-6 w-20">
        {items.map((item, idx) => (
          <button
            key={item.text + idx}
            type="button"
            onClick={() => setIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              index === idx ? "bg-yuan-yellow" : "bg-primary"
            } transition-colors duration-500`}
          ></button>
        ))}
      </div>
    </section>
  );
}
