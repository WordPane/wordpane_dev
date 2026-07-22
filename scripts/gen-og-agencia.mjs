// Gera public/og-agencia.png (1200x630) — imagem de compartilhamento da página /agencia/.
// Uso: node scripts/gen-og-agencia.mjs
import { readFileSync } from 'node:fs';
import sharp from 'sharp';

const W = 1200;
const H = 630;

const logoBuf = readFileSync('src/assets/brand/logo-white.png');
const logoMeta = await sharp(logoBuf).metadata();
const logoH = 96;
const logoW = Math.round((logoMeta.width / logoMeta.height) * logoH);
const logoX = Math.round((W - logoW) / 2);
const logoY = 118;
const logoPng = await sharp(logoBuf).resize({ height: logoH }).png().toBuffer();

const text = (t, y, size, color, weight = 700, spacing = 0) =>
  `<text x="${W / 2}" y="${y}" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}"${spacing ? ` letter-spacing="${spacing}"` : ''}>${t}</text>`;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="18%" cy="0%" r="75%">
      <stop offset="0%" stop-color="#00d164" stop-opacity="0.32"/>
      <stop offset="55%" stop-color="#00d164" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#00d164" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="#071928"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <image href="data:image/png;base64,${logoPng.toString('base64')}" x="${logoX}" y="${logoY}" width="${logoW}" height="${logoH}"/>
  ${text('PARA AGÊNCIAS', 296, 25, '#00d164', 700, 8)}
  ${text('Sua agência entregando sites', 372, 58, '#ffffff')}
  ${text('em 1 a 3 dias úteis.', 448, 58, '#00d164')}
  ${text('White label · Preço fechado · A margem é sua', 522, 27, '#9db4c4', 400)}
  ${text('wordpane.dev/agencia', 578, 24, '#7d95a8', 400)}
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og-agencia.png');
console.log('public/og-agencia.png gerado.');
