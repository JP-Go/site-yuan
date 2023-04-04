import inovacaoGestaoEmpresarialImg from "../../assets/images/ilustracoes/inovacao_gestao_empresarial.svg";

export function ManagementInovation() {
  return (
    <section id="quem-somos" className="flex justify-center items-center pt-16 pb-40 w-full max-h-screen bg-primary h-min">
      <div className="flex flex-col gap-2 items-center px-8 py-2 mx-auto w-full h-full lg:p-10 lg:flex-row lg:w-4/5 lg:gap-14">
        <img
          alt="inovationImage"
          className="md:w-1/2 max-w-[500px] w-40 lg:h-full h-40"
          src={inovacaoGestaoEmpresarialImg}
        />
        <div className="flex flex-col gap-4 max-w-1/2">
          <h2 className="text-lg font-bold lg:text-6xl text-yuan-yellow">
            Inovação na Gestão Empresarial
          </h2>
          <p className="text-sm text-white lg:text-2xl">
            A Yuan Soluções oferece uma ampla variedade de serviços para atender
            às necessidades de seus clientes, desde consultoria estratégica e
            gerenciamento de projetos até desenvolvimento de software e soluções
            em nuvem.
          </p>
          <a
            href="#proposta"
            className="py-4 w-full max-w-md font-bold text-center rounded-lg cursor-pointer md:w-4/5 lg:text-3xl text-inovation bg-yuan-yellow"
          >
            Fale com o especialista!
          </a>
        </div>
      </div>
    </section>
  );
}
