export interface AgencyFeature {
  icon: string;
  title: string;
  desc: string;
}

export const agencyFeatures: AgencyFeature[] = [
  {
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>',
    title: 'Atendimento próximo',
    desc: 'Você fala direto com quem constrói, sem robô e sem fila. Resposta em poucos minutos, do briefing ao pós-lançamento.',
  },
  {
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />',
    title: 'Transparência total',
    desc: 'Propostas, etapas e entregas acompanhadas em tempo real pelo nosso CRM. Nada de projeto em caixa-preta.',
  },
  {
    icon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />',
    title: 'Agilidade de verdade',
    desc: 'Sites entregues em até 3 dias úteis e sistemas com entregas parciais frequentes. Seu projeto não fica meses no forno.',
  },
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" />',
    title: 'Segurança de ponta a ponta',
    desc: 'Sem plugins vulneráveis, com criptografia, controle de acesso e backup automático. Seus dados e sua reputação protegidos.',
  },
  {
    icon: '<polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />',
    title: 'Código 100% seu',
    desc: 'Você recebe o código-fonte completo e documentado. Sem aprisionamento, sem dependência da gente para evoluir.',
  },
  {
    icon: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />',
    title: 'Pronto para crescer',
    desc: 'Arquitetura que aguenta picos de tráfego e novas funcionalidades sem precisar recomeçar do zero.',
  },
];
