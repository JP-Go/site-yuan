import { Link } from "react-scroll";
import cobrancaHumanizadaImg from "../../assets/images/ilustracoes/cobranca_humanizada.svg"

export function HumanizedCollection() {
  return (
    <div className="flex flex-col-reverse gap-8 p-8 w-full md:flex-row lg:px-32 lg:py-20 bg-humanized-collection text-humanized-button-text">
      <div className="flex flex-col gap-6 md:w-1/2">
        <h3 className="w-40 text-lg font-bold lg:text-6xl text-inovation text">
          Cobrança Humanizada
        </h3>
        <p className="font-medium lg:text-3xl text-primary">
          A equipe da Yuan Soluções utiliza técnicas e estratégias de negociação
          para recuperar o valor devido, buscando sempre manter uma relação
          cordial com o cliente devedor.
        </p>
        <Link to="proposta" smooth className="py-4 font-bold text-center rounded-lg cursor-pointer lg:text-4xl bg-yuan-yellow text-primary" href="#proposta">Confira mais informações!</Link>
      </div>
      <img alt="Imagem" className="w-1/2" src={cobrancaHumanizadaImg}/>
    </div>
  );
}
