import {
  Check,
  Envelope,
  Globe,
  InstagramLogo,
  MapPin,
  WhatsappLogo,
} from "phosphor-react";
import * as CheckBox from "@radix-ui/react-checkbox";
import { FormEvent, useRef, useState } from "react";

export function Contact() {
  const nomeRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const assuntoRef = useRef<HTMLInputElement | null>(null);
  const empresaRef = useRef<HTMLInputElement | null>(null);
  const telefoneRef = useRef<HTMLInputElement | null>(null);
  const [checked, setChecked] = useState<boolean | "indeterminate">(false);
  const [telefone, setTelefone] = useState("");

  function handlePhoneChange() {
    const inputValue = telefoneRef.current?.value
      .replace(/\D/g, "")
      .match(/(\d{2})(\d{4,5})(\d{4})/);

    if (!inputValue) {
      return;
    }

    telefoneRef.current!.value = !inputValue[2]
      ? inputValue[1]
      : `(${inputValue[1]}) ${inputValue[2]}-${inputValue[3]}`;

    setTelefone(telefoneRef.current!.value.replace(/\D/g, ""));
    console.log(telefone);
  }

  function submitForm(e: FormEvent<Element>) {
    const nome = nomeRef.current!.value;
    const email = emailRef.current!.value;
    const assunto = assuntoRef.current!.value;
    const empresa = empresaRef.current!.value;
    e.preventDefault();
    alert(
      "Obrigado por contactar! Nossa equipe entrará em contato pelo email fornecido."
    );
  }

  return (
    <footer
      id="proposta"
      className="flex justify-center px-8 py-10 text-xl text-white md:px-24 bg-primary"
    >
      <div className="flex flex-col items-center w-full max-w-[1280px]">
        <h2 className="mb-[72px] text-5xl font-bold text-center text-yuan-yellow">
          Entre em contato!
        </h2>
        <form
          className="flex flex-col gap-10 mb-6 w-full lg:gap-20 lg:flex-row"
          onSubmit={submitForm}
        >
          <div className="flex flex-col gap-8 lg:w-1/2">
            <div className="flex flex-col gap-1">
              <label htmlFor="nome">Nome</label>
              <input
                className="p-2 outline-white bg-primary outline outline-2"
                id="nome"
                type="text"
                required
                ref={nomeRef}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                className="p-2 outline-white bg-primary outline outline-2"
                id="email"
                type="email"
                required
                ref={emailRef}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="assunto">Sobre o que deseja falar</label>
              <input
                className="p-2 outline-white bg-primary outline outline-2"
                id="assunto"
                type="text"
                required
                ref={assuntoRef}
              />
            </div>
            <div className="flex gap-2">
              <CheckBox.Root
                className="w-6 h-6 border-2 border-white"
                checked={checked}
                defaultChecked={false}
                onCheckedChange={setChecked}
              >
                <CheckBox.Indicator className="flex justify-center items-center">
                  <Check className="w-4" weight="bold" />
                </CheckBox.Indicator>
              </CheckBox.Root>
              <label htmlFor="novidade" className="w-full">
                Eu concordo em receber novidades da Yuan Soluções
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:w-1/2">
            <div className="flex flex-col gap-1">
              <label htmlFor="empresa">Empresa</label>
              <input
                className="p-2 outline-white bg-primary outline outline-2"
                id="empresa"
                type="text"
                required
                ref={empresaRef}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="telefone">Telefone</label>
              <input
                className="p-2 outline-white bg-primary outline outline-2"
                id="telefone"
                type="text"
                required
                ref={telefoneRef}
                onChange={handlePhoneChange}
              />
            </div>
            <button
              type="submit"
              className="py-5 w-full font-bold rounded-xl md:text-4xl text-primary bg-yuan-yellow"
            >
              CADASTRAR
            </button>
            <p className="text-center">
              Obs: Não utilizaremos suas informações de contato para enviar
              qualquer tipo de SPAM
            </p>
          </div>
        </form>
        <div className="flex flex-1 gap-10 justify-between">
          <span className="inline text-xs sm:text-base">
            <MapPin
              className="inline text-yuan-yellow"
              size={20}
              weight="fill"
            />
            Rua Prof. Darcí Araújo, nº 3025, São Cristóvão, Teresina - Pl
          </span>
          <div className="flex flex-col gap-4 justify-start items-start pt-2 text-xs lg:justify-end md:flex-row md:flex-wrap">
            <span className="inline-flex gap-1 items-center text-sm">
              <span className="inline-flex justify-center items-center rounded-full border-2 border-transparent w-fit h-fit outline outline-1 outline-yuan-yellow">
                <Globe
                  className="inline rotate-45 text-yuan-yellow"
                  size={15}
                />
              </span>
              <span>yuancob.com.br</span>
            </span>
            <span className="inline-flex gap-1 items-center text-sm">
              <span className="inline-flex justify-center items-center rounded-full border-2 border-transparent w-fit h-fit outline outline-1 outline-yuan-yellow">
                <Envelope className="inline text-yuan-yellow" size={15} />
              </span>
              <span>yuan@yuancob.com</span>
            </span>
            <span className="inline-flex gap-1 items-center text-sm">
              <span className="inline-flex justify-center items-center rounded-full border-2 border-transparent w-fit h-fit outline outline-1 outline-yuan-yellow">
                <InstagramLogo className="inline text-yuan-yellow" size={15} />
              </span>
              <span>yuansolucoes</span>
            </span>
            <span className="inline-flex gap-1 text-sm">
              <WhatsappLogo className="inline text-yuan-yellow" size={20} />
              <span className="inline-flex flex-col">
                <p>(86) 99987-5055</p>
                <p>(86) 99854-9910</p>
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
