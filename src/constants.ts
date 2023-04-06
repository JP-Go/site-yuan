import gestaoImg from "./assets/images/icones/cobranca/gestao_de_negocios.svg";
import analiseImg from "./assets/images/icones/cobranca/analise_de_dados.svg";
import contactImg from "./assets/images/icones/cobranca/contact_center.svg";
import juridicoImg from "./assets/images/icones/cobranca/juridicas.svg";

import gestaoDeRecebiveisIcon from "./assets/images/icones/inovacoes/gestao_de_recebiveis.svg";
import lembreteAntecipadoIcon from "./assets/images/icones/inovacoes/lembrete_antecipado.svg";
import businessInteligenceIcon from "./assets/images/icones/inovacoes/business_inteligence.svg";
import cobrancaDigitalIcon from "./assets/images/icones/inovacoes/cobranca_digital.svg";
import omnichannelIcon from "./assets/images/icones/inovacoes/omnichannel.svg";

import gestaoDeRecebiveisImg from "./assets/images/ilustracoes/gestao_de_recebiveis.svg";
import comunicacaoDigitalImg from "./assets/images/ilustracoes/cobranca_digital.svg";
import lembreteAntecipadoImg from "./assets/images/ilustracoes/lembrete_antecipado.svg";
import businessIntelligenceImg from "./assets/images/ilustracoes/business_intelligence.svg";
import omnichannelImg from "./assets/images/ilustracoes/ominichannel.svg";

import type { NavigationSection } from "./@types/sections";
import type { SolutionCatetory } from "./@types/sections";
import type { InovationSectionItem } from "./@types/sections";

export const navSections: NavigationSection[] = [
  {
    title: "Quem Somos",
    link: "quem-somos",
  },
  {
    title: "Gestão de cobranças",
    link: "cobranca",
  },
  {
    title: "Produtos",
    link: "produtos",
  },
  {
    title: "Cursos",
    link: "#",
  },
];

export const SOLUTIONS: SolutionCatetory[] = [
  {
    title: "Análise \nde dados",
    solutions: [
      "MS",
      "BI",
      "Automação de processos",
      "Desenvolvimento de software",
      "Criação de websites",
      "Criação de apps",
    ],
    imgPath: analiseImg,
  },
  {
    title: "Jurídicas, Legais e Regulatórias",
    solutions: [
      "Assessoria em recuperação de crédito",
      "Acompanhamento de processos",
      "Analise de regulamentações técnicas de setores estratégicos",
    ],
    imgPath: juridicoImg,
  },
  {
    title: "Gestão de \nNegócios",
    solutions: ["Planejamento", "T&D", "R&S"],
    imgPath: gestaoImg,
  },
  {
    title: "Contact\nCenter",
    solutions: [
      "Ativo",
      "Receptivo",
      "Gestão da cobrança",
      "Gestão em qualidade",
    ],
    imgPath: contactImg,
  },
];

export const INOVATIONS: InovationSectionItem[] = [
  {
    buttonText: "Confira mais informações!",
    headerImgPath: lembreteAntecipadoIcon,
    contentBody: `Não esqueça mais do vencimento da sua fatura! 
    Com nosso sistema de lembrete antecipado, 
    você recebe uma notificação alguns 
    dias antes da data limite.`,
    contentTitle: "Lembrete Antecipado",
    contentImgPath: lembreteAntecipadoImg,
    headerTitle: "Lembrete Antecipado",
  },
  {
    buttonText: "Confira mais informações!",
    headerImgPath: gestaoDeRecebiveisIcon,
    contentBody: `O processo envolve gerenciar os pagamentos
    que uma empresa espera receber dos seus
    clientes, seja por meio de vendas a prazo,
    contratos de prestação de serviços ou outras
    operações financeiras.`,
    contentTitle: "Gestão de recebíveis",
    contentImgPath: gestaoDeRecebiveisImg,
    headerTitle: "Gestão de recebíveis",
  },
  {
    buttonText: "Confira mais informações!",
    headerImgPath: businessInteligenceIcon,
    contentBody: `Acompanhamento em tempo real do
    funcionamento de operação e resultados.
    Vantagens:
    Rápido diagnóstico;
    Definição de estratégia;
    Gerenciamento inteligente.
    `,
    contentTitle: "Bussiness Inteligence",
    contentImgPath: businessIntelligenceImg,
    headerTitle: "Bussiness Inteligence",
  },
  {
    buttonText: "Confira mais informações!",
    headerImgPath: omnichannelIcon,
    contentBody: `Atendimento com integração em 
    diversos canais de contato, promovendo
    uma maior experiência com o cliente.
    
    Vantagens:
    Eficiência no atendimento;
    Rapidez e versatilidade;
    Conversão em vendas.
    `,
    contentTitle: "Plataforma Omnichannel",
    contentImgPath: omnichannelImg,
    headerTitle: "Plataforma Omnichannel",
  },
  {
    buttonText: "Confira mais informações!",
    headerImgPath: cobrancaDigitalIcon,
    contentBody: `A cobrança digital permite que empresas
    possam enviar faturas eletrônicas e receber 
    pagamentos por meio de plataformas online, 
    reduzindo a necessidade de lidar com cheques, 
    boletos e dinheiro em espécie.`,
    contentTitle: "Cobrança Digital",
    contentImgPath: comunicacaoDigitalImg,
    headerTitle: "Cobrança Digital",
  },
];
