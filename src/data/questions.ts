import { Question, ResultData, CareerType } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Como você prefere lidar com problemas no dia a dia?",
    options: [
      { id: 'a', text: "Gosto de seguir regras claras e processos definidos.", type: 'ADMINISTRATIVA' },
      { id: 'b', text: "Prefiro ação direta e resolver situações de risco.", type: 'POLICIAL' },
      { id: 'c', text: "Gosto de analisar dados, contas e encontrar erros.", type: 'FISCAL' },
      { id: 'd', text: "Prefiro ler, argumentar e defender pontos de vista.", type: 'TRIBUNAIS' },
    ]
  },
  {
    id: 2,
    text: "Qual ambiente de trabalho mais te atrai?",
    options: [
      { id: 'a', text: "Um escritório organizado com rotina previsível.", type: 'ADMINISTRATIVA' },
      { id: 'b', text: "Trabalho de campo, operações externas e dinamismo.", type: 'POLICIAL' },
      { id: 'c', text: "Ambiente corporativo focado em auditoria e finanças.", type: 'FISCAL' },
      { id: 'd', text: "Fóruns, cartórios e ambientes jurídicos.", type: 'TRIBUNAIS' },
    ]
  },
  {
    id: 3,
    text: "Qual matéria você teria mais facilidade em estudar?",
    options: [
      { id: 'a', text: "Gestão de Pessoas e Administração Pública.", type: 'ADMINISTRATIVA' },
      { id: 'b', text: "Direito Penal e Processual Penal.", type: 'POLICIAL' },
      { id: 'c', text: "Contabilidade, Economia e Matemática Financeira.", type: 'FISCAL' },
      { id: 'd', text: "Direito Constitucional, Civil e Processo Civil.", type: 'TRIBUNAIS' },
    ]
  },
  {
    id: 4,
    text: "O que você mais valoriza em uma carreira?",
    options: [
      { id: 'a', text: "Estabilidade e equilíbrio vida-trabalho.", type: 'ADMINISTRATIVA' },
      { id: 'b', text: "Adrenalina e senso de proteção à sociedade.", type: 'POLICIAL' },
      { id: 'c', text: "Remuneração alta e prestígio técnico.", type: 'FISCAL' },
      { id: 'd', text: "Status, intelecto e justiça.", type: 'TRIBUNAIS' },
    ]
  },
  {
    id: 5,
    text: "Diante de uma pilha de documentos, qual sua reação?",
    options: [
      { id: 'a', text: "Organizo tudo por ordem de prioridade e arquivo.", type: 'ADMINISTRATIVA' },
      { id: 'b', text: "Fico entediado, prefiro estar na rua.", type: 'POLICIAL' },
      { id: 'c', text: "Verifico se os números batem e se há irregularidades.", type: 'FISCAL' },
      { id: 'd', text: "Analiso o teor jurídico e a legalidade dos textos.", type: 'TRIBUNAIS' },
    ]
  }
];

export const RESULTS: Record<CareerType, ResultData> = {
  ADMINISTRATIVA: {
    title: "Perfil Administrativo",
    description: "Você é uma pessoa organizada, metódica e que valoriza a previsibilidade. Seu perfil é essencial para o funcionamento da máquina pública, garantindo que processos sejam seguidos e que a burocracia funcione a favor do cidadão. Você tende a se dar bem com gestão, organização e atendimento.",
    careers: ["Técnico do INSS", "Analista Administrativo (Tribunais/MP)", "Assistente em Administração (Universidades)", "Cargos de Prefeituras"]
  },
  POLICIAL: {
    title: "Perfil Operacional / Policial",
    description: "Você tem um forte senso de justiça e proteção. A rotina monótona de escritório não é para você; você busca dinamismo, ação e a possibilidade de fazer a diferença diretamente na segurança da sociedade. Tem perfil para lidar com situações de pressão e risco.",
    careers: ["Polícia Federal (Agente/Escrivão)", "Polícia Rodoviária Federal", "Polícia Civil", "Polícia Militar", "Guarda Municipal"]
  },
  FISCAL: {
    title: "Perfil Fiscal e Controle",
    description: "Analítico, detalhista e focado em resultados. Você tem facilidade com números, auditoria e em encontrar inconsistências. As carreiras fiscais oferecem algumas das melhores remunerações do serviço público e exigem um alto nível de conhecimento técnico e responsabilidade.",
    careers: ["Auditor Fiscal da Receita Federal", "Auditor de Tributos Estaduais (SEFAZ)", "Analista de Controle Externo (Tribunais de Contas)", "Analista do Banco Central"]
  },
  TRIBUNAIS: {
    title: "Perfil Jurídico / Tribunais",
    description: "Você gosta de ler, escrever e argumentar. Tem afinidade com as leis e com a aplicação da justiça. Seu perfil é voltado para a análise processual e o suporte ao judiciário. Valoriza o intelectual e a interpretação das normas.",
    careers: ["Técnico/Analista Judiciário", "Ministério Público", "Defensoria Pública", "Procuradorias", "Cartórios"]
  }
};