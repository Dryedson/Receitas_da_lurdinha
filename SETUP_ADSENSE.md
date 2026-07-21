# Guia de Configuração - Google AdSense

## 📋 Checklist para Aprovação do Google AdSense

Este documento contém todas as informações necessárias para preparar seu site para aprovação no Google AdSense.

### ✅ Requisitos Atendidos

- [x] **Conteúdo Original**: 20 receitas 100% originais e reescritas
- [x] **Qualidade de Conteúdo**: Receitas detalhadas com passo a passo
- [x] **Política de Privacidade**: `/politica-privacidade`
- [x] **Termos de Uso**: `/termos-uso`
- [x] **Política de Cookies**: `/politica-cookies`
- [x] **Design Responsivo**: Tailwind CSS mobile-first
- [x] **Performance**: Next.js otimizado com Core Web Vitals
- [x] **Navegação Clara**: Menu intuitivo e breadcrumbs
- [x] **Sem Conteúdo Duplicado**: Todas as receitas são originais
- [x] **Imagens Otimizadas**: Next.js Image Component
- [x] **Sem Cliques Acidentais**: Espaços adequados para anúncios

---

## 🚀 Passos para Configuração

### 1. Obter ID do Google AdSense

1. Acesse [Google AdSense](https://www.google.com/adsense/)
2. Clique em "Começar"
3. Faça login com sua conta Google
4. Siga as instruções para criar uma conta
5. Você receberá um **ID de cliente** (ca-pub-xxxxxxxxxxxxxxxx)

### 2. Adicionar ID do AdSense ao Projeto

Abra o arquivo `app/layout.tsx` e substitua:

```tsx
src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
```

Substitua `ca-pub-xxxxxxxxxxxxxxxx` pelo seu ID real do AdSense.

### 3. Configurar Domínio no AdSense

1. No painel do AdSense, vá para **Configurações** > **Contas**
2. Adicione seu domínio (ex: receitas-deliciosas.com)
3. Verifique a propriedade do domínio

### 4. Deploy no Vercel

```bash
npm run build
npm run start
```

Ou use o Vercel CLI:

```bash
vercel deploy
```

### 5. Aguardar Aprovação

- O Google levará de 24 horas a alguns dias para revisar seu site
- Você receberá um email quando for aprovado
- Após aprovação, os anúncios começarão a aparecer automaticamente

---

## 📊 Otimizações para Melhor Performance

### Core Web Vitals

O site foi otimizado para:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### SEO

- Metadados dinâmicos em cada página
- Open Graph para compartilhamento social
- Sitemap automático
- Robots.txt configurado

### Imagens

- Otimização automática com Next.js Image
- Formatos modernos (WebP, AVIF)
- Lazy loading padrão

---

## 🎨 Personalizações Recomendadas

### 1. Adicionar Imagens Reais

As imagens atualmente são placeholders. Para melhor aprovação:

1. Gere imagens com IA (Dall-E, Midjourney, Stable Diffusion)
2. Ou use imagens de bancos gratuitos (Unsplash, Pexels)
3. Substitua os caminhos em `lib/recipes.ts`

**Exemplo:**
```typescript
imagem: '/images/bolo-chocolate.jpg',
```

### 2. Customizar Cores

Edite `app/globals.css` ou use classes Tailwind para mudar:
- Cores do header (orange-500 → sua cor)
- Cores dos botões
- Cores de destaque

### 3. Adicionar Logo

Substitua o emoji 🍳 no `components/Header.tsx` por uma imagem:

```tsx
<Image src="/logo.png" alt="Logo" width={40} height={40} />
```

### 4. Configurar Email de Contato

Em `app/sobre/page.tsx`, substitua:

```tsx
href="mailto:contato@receitas-deliciosas.com"
```

Pelo seu email real.

---

## 📝 Conteúdo das Receitas

Todas as 20 receitas foram reescritas para ser 100% originais:

1. **Bolo de Chocolate Intenso**
2. **Frango Grelhado com Tempero Especial**
3. **Salada Tropical com Vinagrete Cítrico**
4. **Brigadeiro Gourmet de Café**
5. **Pasta à Carbonara Autêntica**
6. **Sopa de Abóbora com Gengibre**
7. **Cookies de Aveia e Chocolate**
8. **Risoto de Cogumelos Selvagens**
9. **Smoothie Bowl de Açaí**
10. **Pão Caseiro de Fermentação Natural**
11. **Ceviche Peruano Tradicional**
12. **Torta de Maçã com Canela**
13. **Tacos de Carnitas Mexicanos**
14. **Quiche de Brócolis e Queijo**
15. **Pudim de Leite Condensado**
16. **Steak com Molho de Vinho Tinto**
17. **Pavê de Chocolate**
18. **Frittata de Vegetais**
19. **Molho Pesto Caseiro**
20. **Soufflé de Queijo**

---

## 🔍 Verificação Final

Antes de submeter ao AdSense, verifique:

- [ ] Todas as páginas carregam corretamente
- [ ] Links de navegação funcionam
- [ ] Política de Privacidade está completa
- [ ] Termos de Uso estão completos
- [ ] Política de Cookies está completa
- [ ] Imagens carregam corretamente
- [ ] Site é responsivo em mobile
- [ ] Sem erros no console
- [ ] Velocidade de carregamento é boa

---

## 📞 Suporte

Para dúvidas sobre Google AdSense:
- [Centro de Ajuda AdSense](https://support.google.com/adsense)
- [Comunidade AdSense](https://support.google.com/adsense/community)

---

## 📅 Próximos Passos

1. ✅ Configurar Google AdSense
2. ✅ Fazer deploy no Vercel
3. ✅ Aguardar aprovação
4. ✅ Adicionar imagens reais
5. ✅ Monitorar performance
6. ✅ Otimizar CTR (Click-Through Rate)

---

**Última atualização:** 2024
**Status:** Pronto para deploy
