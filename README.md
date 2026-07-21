# 🍳 Receitas Deliciosas - Site de Receitas para Monetização com Google AdSense

Um site moderno e otimizado de receitas originais e curiosidades de culinária, pronto para monetização via Google AdSense.

## 📋 Características

- ✅ **Receitas Originais**: Conteúdo 100% único e reescrito
- ✅ **Curiosidades de Culinária**: Dicas e curiosidades para engajamento
- ✅ **Design Responsivo**: Tailwind CSS mobile-first
- ✅ **Performance Otimizada**: Next.js 14 com Core Web Vitals
- ✅ **SEO Completo**: Metadados dinâmicos, sitemap, robots.txt
- ✅ **Documentos Legais**: Política de Privacidade, Termos de Uso, Política de Cookies
- ✅ **Google AdSense Pronto**: Espaços para anúncios e configuração completa
- ✅ **Categorias e Filtros**: Busca e filtro por categoria
- ✅ **Imagens Otimizadas**: Next.js Image Component com lazy loading

## 🚀 Começar Rápido

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone <seu-repo>
cd receitas-monetizadas

# Instalar dependências
npm install

# Executar servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
receitas-monetizadas/
├── app/
│   ├── layout.tsx              # Layout principal com Header e Footer
│   ├── page.tsx                # Página inicial
│   ├── receitas/
│   │   ├── page.tsx            # Todas as receitas
│   │   └── [slug]/
│   │       └── page.tsx        # Página individual de receita
│   ├── sobre/page.tsx          # Página sobre
│   ├── politica-privacidade/   # Política de privacidade
│   ├── termos-uso/             # Termos de uso
│   └── politica-cookies/       # Política de cookies
├── components/
│   ├── Header.tsx              # Cabeçalho com navegação
│   ├── Footer.tsx              # Rodapé
│   └── RecipeCard.tsx          # Card de receita
├── lib/
│   └── recipes.ts              # Banco de dados de receitas
├── public/
│   ├── robots.txt              # Arquivo robots.txt para SEO
│   └── images/                 # Pasta para imagens das receitas
└── SETUP_ADSENSE.md            # Guia de configuração do AdSense
```

## 📚 Receitas Incluídas

1. Bolo de Chocolate Intenso
2. Frango Grelhado com Tempero Especial
3. Salada Tropical com Vinagrete Cítrico
4. Brigadeiro Gourmet de Café
5. Pasta à Carbonara Autêntica
6. Sopa de Abóbora com Gengibre
7. Cookies de Aveia e Chocolate
8. Risoto de Cogumelos Selvagens
9. Smoothie Bowl de Açaí
10. Pão Caseiro de Fermentação Natural
11. Ceviche Peruano Tradicional
12. Torta de Maçã com Canela
13. Tacos de Carnitas Mexicanos
14. Quiche de Brócolis e Queijo
15. Pudim de Leite Condensado
16. Steak com Molho de Vinho Tinto
17. Pavê de Chocolate
18. Frittata de Vegetais
19. Molho Pesto Caseiro
20. Soufflé de Queijo

## 🔧 Configuração do Google AdSense

Veja o arquivo [SETUP_ADSENSE.md](./SETUP_ADSENSE.md) para instruções completas sobre:
- Como obter seu ID do AdSense
- Como configurar o site para aprovação
- Otimizações recomendadas
- Checklist de verificação final

## 🎨 Personalizações

### Adicionar Imagens

1. Coloque as imagens em `public/images/`
2. Atualize os caminhos em `lib/recipes.ts`

### Mudar Cores

Edite as classes Tailwind nos componentes:
- Header: `from-orange-500 to-red-500`
- Botões: `bg-orange-500`

### Configurar Email de Contato

Em `app/sobre/page.tsx`, substitua o email em:
```tsx
href="mailto:seu-email@exemplo.com"
```

## 📊 Performance

O site foi otimizado para:
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

Verifique com [PageSpeed Insights](https://pagespeed.web.dev/)

## 🚀 Deploy no Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer deploy
vercel deploy
```

Ou conecte seu repositório GitHub ao Vercel para deploy automático.

## 📝 Documentação

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Google AdSense Help](https://support.google.com/adsense)

## 📄 Licença

Este projeto é fornecido como está para fins educacionais e comerciais.

## 🤝 Contribuições

Sinta-se livre para fazer fork, modificar e usar este projeto para seus próprios fins.

## 📞 Suporte

Para dúvidas sobre o projeto, consulte a documentação incluída ou visite os links de suporte acima.

---

**Desenvolvido com ❤️ para monetização via Google AdSense**
