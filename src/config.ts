// Dados de contato da WordPane — ajuste os valores oficiais aqui.
export const SITE_NAME = 'WordPane';
export const SITE_URL = 'https://wordpane.dev';
export const EMAIL = 'hello@wordpane.dev';

// Número no formato internacional, somente dígitos (DDI + DDD + número).
export const WHATSAPP_NUMBER = '5551993060845';
export const WHATSAPP_DISPLAY = '(51) 99306-0845';

// Monta um link de WhatsApp com mensagem pré-preenchida.
export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_LINK = waLink(
  'Olá! Quero uma proposta gratuita para um projeto com a WordPane.'
);

// Portal de gestão de projetos dos clientes WordPane.
export const CRM_LINK = 'https://crm.wordpane.dev';

// Dados legais da empresa (usados em orçamentos e documentos).
export const COMPANY = {
  legalName: 'WordPane Administração de Sistemas LTDA',
  cnpj: '40.904.977/0001-58',
  address: 'Rua Doutor Campos Velho, 1888, Apt 607c - Cristal',
  city: 'Porto Alegre - RS',
  cep: '90820-000',
} as const;
