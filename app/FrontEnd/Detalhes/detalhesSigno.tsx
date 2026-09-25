import estilos from '../Cards/cards.module.css';

type Props = {
  nome: string;
  frase: string;
};

const perfis: Record<string, { jeitoDeSer: string; amor: string; profissional: string; amigos: string }> = {
  Áries: {
    jeitoDeSer: 'É direto, corajoso e sempre pronto para agir. Gosta de desafios, lidera com energia e não teme começar do zero.',
    amor: 'No amor, vive com intensidade, paixão e espontaneidade. Quer reciprocidade real e prefere relacionamentos com brilho e movimento.',
    profissional: 'No trabalho, é proativo, competitivo e visionário. Se destaca em cargos que exigem decisão rápida e iniciativa.',
    amigos: 'Com os amigos, é leal, alegre e inspirador. Adora companhia ativa e cria laços fortes por admiração e confiança.'
  },
  Touro: {
    jeitoDeSer: 'É estável, sensível e muito atento ao conforto. Valora a segurança, a calma e as coisas que têm valor duradouro.',
    amor: 'No amor, é fiel, carinhoso e exige confiança. Atraído por relações mais sólidas, afetuosas e reais.',
    profissional: 'No trabalho, é perseverante, responsável e dedicado. Brilha em áreas que exigem consistência e disciplina.',
    amigos: 'Com os amigos, é confiável e acolhedor. Prefere vínculos profundos, leais e sem drama excessivo.'
  },
  Gêmeos: {
    jeitoDeSer: 'É curioso, inteligente e comunicativo. Tem mente ágil, fala com leveza e se adapta rapidamente a qualquer ambiente.',
    amor: 'No amor, gosta de conversa, charme e conexão mental. Relacionamentos com bom diálogo e boa sintonia são essenciais.',
    profissional: 'No trabalho, é versátil, criativo e rápido para aprender. Se destaca em atividades dinâmicas e de comunicação.',
    amigos: 'Com os amigos, é simpático, divertido e sempre bem informado. Aproxima-se com humor e espontaneidade.'
  },
  Câncer: {
    jeitoDeSer: 'É sensível, protetor e emocionalmente inteligente. Valoriza a paz, o lar e as relações genuínas.',
    amor: 'No amor, é carinhoso, cuidadoso e muito ligado à afetuosidade. Quer sentir segurança e acolhimento.',
    profissional: 'No trabalho, é dedicado, intuitivo e muito atento ao ambiente. Se destaca em funções com cuidado, empatia e responsabilidade.',
    amigos: 'Com os amigos, é acolhedor, sincero e leal. Gosta de estar presente em momentos bons e difíceis.'
  },
  Leão: {
    jeitoDeSer: 'É confiante, brilhante e cheio de presença. Dá vida ao ambiente e vive com intensidade, orgulho e generosidade.',
    amor: 'No amor, é apaixonado, romântico e muito expressivo. Quer ser admirado, valorizado e reconhecido.',
    profissional: 'No trabalho, é líder, criativo e motivador. Se destaca em posições de destaque, gestão e expressão pública.',
    amigos: 'Com os amigos, é fiel, divertido e protetor. Cria laços fortes com quem o admira e respeita.'
  },
  Virgem: {
    jeitoDeSer: 'É analítico, organizado e refinado. Prefere clareza, praticidade e cuidado com os detalhes.',
    amor: 'No amor, é dedicado, estável e carinhoso de forma concreta. Apreciam gestos realistas e consistentes.',
    profissional: 'No trabalho, é eficiente, esforçado e preciso. Se destaca em áreas que exigem organização e atenção.',
    amigos: 'Com os amigos, é útil, honesto e confiável. Gosta de ajudar e mostrar apoio de maneira prática.'
  },
  Libra: {
    jeitoDeSer: 'É equilibrado, elegante e muito sensível à harmonia. Busca paz, bom gosto e relações agradáveis.',
    amor: 'No amor, é romântico, gentil e sociável. Quer parceria, afeto e equilíbrio emocional no relacionamento.',
    profissional: 'No trabalho, é diplomático, inteligente e cooperativo. Se destaca em mediação, vendas e relações interpessoais.',
    amigos: 'Com os amigos, é prestativo, sociável e encantador. Percebe as nuances e valoriza vínculos bonitos.'
  },
  Escorpião: {
    jeitoDeSer: 'É intenso, profundo e muito observador. Tem presença forte, senso de mistério e grande capacidade de transformação.',
    amor: 'No amor, é apaixonado, fiel e extremamente intenso. Relacionamentos profundos e verdadeiros são seu forte.',
    profissional: 'No trabalho, é estratégico, determinado e não foge de desafios. Se destaca em gestão, análise e decisões firmes.',
    amigos: 'Com os amigos, é leal e protetor. Valoriza confiança e costuma ser muito presente quando a relação é verdadeira.'
  },
  Sagitário: {
    jeitoDeSer: 'É otimista, curioso e livre. Adora aprender, viajar, expandir ideias e viver com entusiasmo.',
    amor: 'No amor, gosta de leveza, companheirismo e liberdade. Relacionamentos com boa energia e cumplicidade têm mais valor.',
    profissional: 'No trabalho, é empreendedor, aventureiro e estratégico. Se destaca em projetos que exigem visão de futuro.',
    amigos: 'Com os amigos, é espontâneo, divertido e inspirador. A amizade dele costuma ser cheia de boas histórias e boa energia.'
  },
  Capricórnio: {
    jeitoDeSer: 'É responsável, objetivo e muito maduro. Gosta de construir bases sólidas e de conquistar com esforço.',
    amor: 'No amor, é sério, fiel e comprometido. Procura estabilidade, respeito e uma relação que dure.',
    profissional: 'No trabalho, é disciplinado, responsável e focado em resultados. Se destaca em lideranças e objetivos de longo prazo.',
    amigos: 'Com os amigos, é confiável, leal e prudente. Sua amizade é forte, estável e muito útil em momentos difíceis.'
  },
  Aquário: {
    jeitoDeSer: 'É original, inteligente e independente. Ama liberdade, inovação e a possibilidade de pensar diferente.',
    amor: 'No amor, valoriza amizade, liberdade e autenticidade. Prefere relações que respeitem seu espaço e sua individualidade.',
    profissional: 'No trabalho, é criativo, visionário e curioso. Se destaca em áreas com tecnologia, ideias inovadoras e causas sociais.',
    amigos: 'Com os amigos, é genuíno, sociável e muito aberto. Gosta de conexões intelectuais e experiências novas.'
  },
  Peixes: {
    jeitoDeSer: 'É sensível, imaginativo e muito intuitivo. Tem forte empatia e vive em conexão com emoções e espiritualidade.',
    amor: 'No amor, é romântico, doce e profundamente emocional. Busca acolhimento, conexão profunda e cumplicidade.',
    profissional: 'No trabalho, é criativo, compaixivo e inspirado. Se destaca em áreas artísticas, humanas e de apoio emocional.',
    amigos: 'Com os amigos, é compreensivo, gentil e acolhedor. Costuma ser um porto seguro para quem precisa de afeto e escuta.'
  }
};

export default function DetalhesSigno({ nome}: Props) {
  const perfil = perfis[nome] ?? perfis.Áries;

  return (
    <div className={estilos.cardDetalhes}>
      <div className={estilos.cardDetalhesHeader}>
        <span>Perfil de {nome}</span>
      </div>

    

      <div className={estilos.detalheLista}>
        <div>
          <h3>Jeito de ser</h3>
          <p>{perfil.jeitoDeSer}</p>
        </div>

        <div>
          <h3>Amor</h3>
          <p>{perfil.amor}</p>
        </div>

        <div>
          <h3>Profissional</h3>
          <p>{perfil.profissional}</p>
        </div>

        <div>
          <h3>Amigos</h3>
          <p>{perfil.amigos}</p>
        </div>
      </div>
    </div>
  );
}
