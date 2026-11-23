# Portfólio Lavinia Tech — migração inicial para Next.js

Esta versão inicia a migração sem refazer o design: as páginas HTML, CSS, imagens e demonstrações existentes foram preservadas em `public/`. O Next.js passa a controlar a aplicação, as rotas de entrada e a proteção de acesso ao Dashboard.

## Requisitos
- Node.js 20.9 ou superior
- Conta/projeto Supabase já utilizado pelo portfólio

## Rodar no Windows
1. Extraia o ZIP em uma pasta, por exemplo `C:\\PORTFOLIO_LAVINIA_NEXT`.
2. Abra essa pasta no VS Code.
3. Copie `.env.example` para `.env.local`.
4. Preencha `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` com a URL e a chave pública (publishable/anon) do projeto Supabase.
5. Abra o terminal do VS Code e execute:

```bash
npm install
npm run dev
```

6. Acesse `http://localhost:3000`.

## O que foi migrado nesta etapa
- Next.js App Router e configuração TypeScript.
- Páginas existentes preservadas em `public/`, para manter o visual e os links atuais.
- Login validado no servidor por `/api/auth/login`.
- Cookies de autenticação server-side com `HttpOnly`, `SameSite=Lax` e `Secure` em produção.
- Middleware que valida a sessão e consulta `public.admins` antes de entregar `/dashboard.html`.
- Rota `/dashboard` que encaminha para o painel existente.
- O cliente Supabase do navegador continua sendo usado para as operações do painel; as políticas RLS do banco continuam obrigatórias.

## Publicar na Vercel
1. Envie esta pasta para um repositório GitHub.
2. Importe o repositório na Vercel como projeto Next.js.
3. Em **Settings → Environment Variables**, cadastre `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Faça o deploy.
5. No Supabase, atualize **Authentication → URL Configuration** com o domínio de produção e as URLs de redirecionamento necessárias.

## Segurança importante
- Não adicione `service_role`, secret key, senha de usuário ou tokens ao `.env` público, ao GitHub ou ao código do navegador.
- O middleware só libera a página administrativa quando a sessão server-side é válida e o UUID do usuário existe em `public.admins`.
- Mantenha o SQL de RLS em `supabase/seguranca-dashboard.sql` aplicado. O RLS protege os dados mesmo se alguém tentar chamar o Supabase diretamente.
- A sessão do navegador usada pelo painel e o cookie HttpOnly usado pelo middleware são sessões separadas, ambas autenticadas no Supabase.
- Não teste somente abrindo os arquivos HTML pelo Explorer/Live Server: agora é necessário iniciar o Next.js em `localhost:3000`.

## Limite desta entrega
As páginas públicas ainda são os HTML originais servidos pelo Next.js a partir de `public/`. Portanto, esta é uma migração incremental: o servidor e a barreira de acesso ao Dashboard foram migrados primeiro. A conversão das páginas públicas para componentes React/Next.js, SEO por página, testes automatizados e medições reais de velocidade ficam para as próximas etapas.
