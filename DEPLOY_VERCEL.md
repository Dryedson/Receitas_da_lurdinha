# 🚀 Guia de Deploy no Vercel

Este guia fornece instruções passo a passo para fazer deploy do site Receitas Deliciosas no Vercel.

---

## 📋 Pré-requisitos

- Conta GitHub (recomendado)
- Conta Vercel (gratuita)
- Node.js 18+ instalado localmente

---

## Opção 1: Deploy via GitHub (Recomendado)

### Passo 1: Criar Repositório GitHub

1. Acesse [GitHub.com](https://github.com)
2. Clique em "New repository"
3. Nome: `receitas-deliciosas`
4. Descrição: "Site de receitas para monetização com Google AdSense"
5. Selecione "Public"
6. Clique em "Create repository"

### Passo 2: Fazer Push do Código

```bash
cd receitas-monetizadas

# Inicializar git (se não estiver)
git init

# Adicionar remote
git remote add origin https://github.com/seu-usuario/receitas-deliciosas.git

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Projeto inicial: Site de receitas com 20 receitas originais"

# Fazer push
git branch -M main
git push -u origin main
```

### Passo 3: Conectar ao Vercel

1. Acesse [Vercel.com](https://vercel.com)
2. Clique em "Sign Up" ou "Log In"
3. Selecione "Continue with GitHub"
4. Autorize o Vercel
5. Clique em "Import Project"
6. Selecione seu repositório `receitas-deliciosas`
7. Clique em "Import"

### Passo 4: Configurar Projeto no Vercel

1. **Project Name:** `receitas-deliciosas`
2. **Framework:** Next.js (detectado automaticamente)
3. **Root Directory:** `./` (padrão)
4. **Build Command:** `npm run build -- --webpack`
5. **Output Directory:** `.next` (padrão)
6. **Environment Variables:** (deixe em branco por enquanto)

### Passo 5: Deploy

1. Clique em "Deploy"
2. Aguarde o build completar (5-10 minutos)
3. Você receberá uma URL como: `https://receitas-deliciosas.vercel.app`

---

## Opção 2: Deploy via Vercel CLI

### Passo 1: Instalar Vercel CLI

```bash
npm i -g vercel
```

### Passo 2: Fazer Login

```bash
vercel login
```

Siga as instruções para fazer login com sua conta Vercel.

### Passo 3: Deploy

```bash
cd receitas-monetizadas
vercel deploy
```

Responda às perguntas:
- **Set up and deploy?** → `Y`
- **Which scope?** → Seu nome de usuário
- **Link to existing project?** → `N`
- **Project name?** → `receitas-deliciosas`
- **In which directory is your code?** → `./`

### Passo 4: Configurar Build Command

```bash
vercel env add BUILD_COMMAND "npm run build -- --webpack"
```

---

## 📝 Configurações Pós-Deploy

### 1. Configurar Domínio Personalizado

1. Acesse seu projeto no Vercel
2. Vá para "Settings" → "Domains"
3. Clique em "Add Domain"
4. Digite seu domínio (ex: receitas-deliciosas.com)
5. Siga as instruções para configurar DNS

### 2. Configurar Google AdSense

Após o deploy:

1. Abra `app/layout.tsx`
2. Substitua `ca-pub-xxxxxxxxxxxxxxxx` pelo seu ID real do AdSense
3. Faça commit e push:

```bash
git add app/layout.tsx
git commit -m "Adicionar ID do Google AdSense"
git push
```

O Vercel fará deploy automático!

### 3. Configurar Variáveis de Ambiente (Opcional)

Se precisar de variáveis de ambiente:

1. No Vercel, vá para "Settings" → "Environment Variables"
2. Clique em "Add"
3. Nome: `NEXT_PUBLIC_ADSENSE_ID`
4. Valor: seu ID do AdSense
5. Clique em "Save"

### 4. Configurar Redirects (Opcional)

Para redirecionar URLs antigas, crie `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/old-url",
      "destination": "/new-url",
      "permanent": true
    }
  ]
}
```

---

## 🔍 Verificar Deploy

### Checklist Pós-Deploy

- [ ] Site carrega corretamente
- [ ] Todas as páginas funcionam
- [ ] Imagens carregam
- [ ] Busca funciona
- [ ] Filtros funcionam
- [ ] Links internos funcionam
- [ ] Links externos funcionam
- [ ] Política de Privacidade está acessível
- [ ] Termos de Uso estão acessíveis
- [ ] Política de Cookies está acessível

### Testar Performance

1. Acesse [PageSpeed Insights](https://pagespeed.web.dev/)
2. Digite sua URL
3. Verifique os scores:
   - Desktop: 90+
   - Mobile: 85+

### Testar SEO

1. Acesse [Google Search Console](https://search.google.com/search-console)
2. Adicione seu domínio
3. Envie o sitemap: `/sitemap.xml`
4. Verifique se há erros

---

## 🐛 Solução de Problemas

### Build falha com erro de Turbopack

**Solução:** Use a flag `--webpack`:
```bash
npm run build -- --webpack
```

### Imagens não carregam

**Solução:** Verifique se as imagens estão em `public/images/` com os nomes corretos.

### Site lento

**Solução:**
1. Verifique PageSpeed Insights
2. Otimize imagens
3. Reduza tamanho de CSS/JS
4. Considere usar CDN

### Erro 404 em páginas dinâmicas

**Solução:** Verifique se `generateStaticParams` está configurado corretamente em `app/receitas/[slug]/page.tsx`.

---

## 📊 Monitorar Performance

### Vercel Analytics

1. Vá para "Analytics" no Vercel
2. Monitore:
   - Requisições por dia
   - Tempo de resposta
   - Erros
   - Uso de banda

### Google Analytics

1. Crie uma conta em [Google Analytics](https://analytics.google.com/)
2. Adicione seu site
3. Copie o ID de rastreamento
4. Adicione em `app/layout.tsx`

---

## 🔄 Atualizações Futuras

### Fazer Atualizações

```bash
# Fazer alterações locais
# ...

# Fazer commit
git add .
git commit -m "Descrição da alteração"

# Fazer push
git push

# Vercel fará deploy automático!
```

### Rollback de Versão

1. No Vercel, vá para "Deployments"
2. Clique em "..." ao lado do deployment anterior
3. Selecione "Promote to Production"

---

## 🎯 Próximos Passos

1. ✅ Deploy no Vercel
2. ⏳ Configurar Google AdSense
3. ⏳ Adicionar imagens reais
4. ⏳ Submeter ao Google Search Console
5. ⏳ Configurar Google Analytics
6. ⏳ Monitorar performance
7. ⏳ Otimizar conforme necessário

---

## 📞 Suporte

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel Support](https://vercel.com/support)

---

**Seu site estará online em minutos!** 🎉
