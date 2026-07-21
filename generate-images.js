// Script para gerar imagens placeholder SVG para as receitas
const fs = require('fs');
const path = require('path');

// Lista de receitas com seus slugs
const receitas = [
  'bolo-chocolate',
  'frango-grelhado',
  'salada-tropical',
  'brigadeiro-cafe',
  'pasta-carbonara',
  'sopa-abobora-gengibre',
  'cookies-aveia-chocolate',
  'risoto-cogumelos',
  'smoothie-bowl-acai',
  'pao-fermentacao-natural',
  'ceviche-peruano',
  'torta-maca-canela',
  'tacos-carnitas',
  'quiche-brocolis-queijo',
  'pudim-leite-condensado',
  'steak-molho-vinho',
  'pave-chocolate',
  'frittata-vegetais',
  'molho-pesto',
  'souffle-queijo',
];

// Cores para cada receita
const cores = [
  ['#8B4513', '#D2691E'], // Marrom
  ['#FF6347', '#FFB6C1'], // Vermelho
  ['#FFD700', '#FFA500'], // Amarelo
  ['#8B0000', '#DC143C'], // Vermelho escuro
  ['#DAA520', '#F0E68C'], // Ouro
  ['#FF8C00', '#FFA500'], // Laranja
  ['#8B7355', '#D2B48C'], // Marrom claro
  ['#228B22', '#90EE90'], // Verde
  ['#4B0082', '#9370DB'], // Roxo
  ['#CD853F', '#DEB887'], // Marrom claro
  ['#FF1493', '#FFB6C1'], // Rosa
  ['#8B4513', '#A0522D'], // Marrom
  ['#FF4500', '#FF8C00'], // Laranja vermelho
  ['#228B22', '#32CD32'], // Verde
  ['#8B0000', '#FF69B4'], // Vermelho/Rosa
  ['#8B4513', '#D2691E'], // Marrom
  ['#4B0082', '#8B008B'], // Roxo
  ['#228B22', '#90EE90'], // Verde
  ['#228B22', '#90EE90'], // Verde
  ['#FFD700', '#FFA500'], // Ouro
];

// Criar pasta se não existir
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Gerar SVG para cada receita
receitas.forEach((receita, index) => {
  const [cor1, cor2] = cores[index];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <defs>
    <linearGradient id="grad${index}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${cor1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${cor2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="400" height="300" fill="url(#grad${index})"/>
  <circle cx="200" cy="150" r="80" fill="rgba(255,255,255,0.2)"/>
  <text x="200" y="140" font-size="20" font-weight="bold" fill="white" text-anchor="middle">🍽️</text>
  <text x="200" y="180" font-size="14" font-weight="bold" fill="white" text-anchor="middle">${receita}</text>
</svg>`;

  const filePath = path.join(imagesDir, `${receita}.jpg`);
  fs.writeFileSync(filePath, svg);
  console.log(`✓ Criado: ${receita}.jpg`);
});

console.log(`\n✅ ${receitas.length} imagens placeholder criadas com sucesso!`);
