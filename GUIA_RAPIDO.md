# ⚡ Guia Rápido - Receitas Deliciosas

Instruções rápidas para começar a usar o site.

---

## 🚀 Começar em 5 Minutos

### 1. Instalar e Rodar Localmente

```bash
cd receitas-monetizadas
npm install
npm run dev
```

Abra: http://localhost:3000

### 2. Explorar o Site

- **Home:** http://localhost:3000
- **Receitas:** http://localhost:3000/receitas
- **Uma Receita:** http://localhost:3000/receitas/bolo-chocolate-intenso
- **Sobre:** http://localhost:3000/sobre
- **Política:** http://localhost:3000/politica-privacidade

### 3. Fazer Deploy

```bash
# Opção A: Via Vercel CLI
npm i -g vercel
vercel deploy

# Opção B: Via GitHub + Vercel
# 1. Push para GitHub
# 2. Conectar ao Vercel
# 3. Deploy automático
```

---

## 📝 Configurações Essenciais

### Adicionar Google AdSense

1. Abra: `app/layout.tsx`
2. Procure por: `ca-pub-xxxxxxxxxxxxxxxx`
3. Substitua pelo seu ID do AdSense
4. Salve e faça deploy

### Adicionar Imagens

1. Coloque imagens em: `public/images/`
2. Atualize em: `lib/recipes.ts`
3. Exemplo: `imagem: '/images/bolo-chocolate.jpg'`

### Mudar Email de Contato

1. Abra: `app/sobre/page.tsx`
2. Procure por: `contato@receitas-deliciosas.com`
3. Substitua pelo seu email
4. Salve e faça deploy

---

## 📊 Estrutura Rápida

```
receitas-monetizadas/
├── app/              # Páginas e layout
├── components/       # Componentes React
├── lib/              # Dados e funções
├── public/           # Imagens e arquivos estáticos
└── README.md         # Documentação
```

---

## 🔍 Arquivos Importantes

| Arquivo | Descrição |
|---------|-----------|
| `app/layout.tsx` | Layout principal + script AdSense |
| `app/page.tsx` | Página inicial |
| `lib/recipes.ts` | 20 receitas |
| `components/Header.tsx` | Cabeçalho |
| `components/Footer.tsx` | Rodapé |
| `README.md` | Documentação completa |
| `SETUP_ADSENSE.md` | Guia AdSense |
| `DEPLOY_VERCEL.md` | Guia de deploy |

---

## ✅ Checklist Rápido

- [ ] Site roda localmente
- [ ] Todas as páginas funcionam
- [ ] Busca funciona
- [ ] Filtros funcionam
- [ ] Responsivo em mobile
- [ ] Imagens adicionadas (opcional)
- [ ] Email de contato configurado
- [ ] Google AdSense ID adicionado
- [ ] Deploy no Vercel
- [ ] Google AdSense aprovado

---

## 🎯 Próximos Passos

1. **Hoje:** Rodar localmente e explorar
2. **Amanhã:** Adicionar imagens e configurar AdSense
3. **Semana:** Fazer deploy no Vercel
4. **Semana:** Submeter ao Google AdSense
5. **Após aprovação:** Monitorar e otimizar

---

## 📞 Ajuda Rápida

### O site não carrega
```bash
npm install
npm run dev
```

### Build falha
```bash
npm run build -- --webpack
```

### Erro de TypeScript
```bash
npm run dev
# Verifique os erros e corrija
```

### Imagens não aparecem
- Verifique se estão em `public/images/`
- Verifique o caminho em `lib/recipes.ts`

---

## 🌐 URLs Importantes

- **Vercel:** https://vercel.com
- **Google AdSense:** https://www.google.com/adsense/
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com

---

## 💡 Dicas Rápidas

1. **Adicionar mais receitas:** Edite `lib/recipes.ts`
2. **Mudar cores:** Procure por `orange-500` nos componentes
3. **Adicionar página:** Crie pasta em `app/`
4. **Testar performance:** Use PageSpeed Insights

---

## 🎉 Pronto!

Seu site está pronto para:
- ✅ Rodar localmente
- ✅ Fazer deploy
- ✅ Monetizar com AdSense

**Boa sorte! 🚀**

---

Para mais detalhes, veja:
- `README.md` - Documentação completa
- `SETUP_ADSENSE.md` - Guia do AdSense
- `DEPLOY_VERCEL.md` - Guia de deploy
