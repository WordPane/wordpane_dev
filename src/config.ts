// Dados de contato da WordPane — ajuste os valores oficiais aqui.
export const SITE_NAME = 'WordPane';
export const SITE_URL = 'https://wordpane.dev';
export const EMAIL = 'hello@wordpane.dev';

// Número no formato internacional, somente dígitos (DDI + DDD + número).
export const WHATSAPP_NUMBER = '5551993060845';
export const WHATSAPP_DISPLAY = '(51) 99306-0845';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Olá! Quero uma proposta gratuita para criação de site.'
)}`;

// Dados legais da empresa (usados em orçamentos e documentos).
export const COMPANY = {
  legalName: 'WordPane Administração de Sistemas LTDA',
  cnpj: '40.904.977/0001-58',
  address: 'Rua Doutor Campos Velho, 1888, Apt 607c - Cristal',
  city: 'Porto Alegre - RS',
  cep: '90820-000',
} as const;
