# Publicar o Portfólio Lavinia no GitHub e na Vercel

## Importante
Este projeto usa Next.js. **Não remova nem achate as pastas** `app`, `public`, `lib`, `css`, `js`, `projetos`, `modelos` e `supabase`. O GitHub aceita pastas dentro de outras pastas; o Next.js precisa dessa estrutura.

## Corrigir a mensagem de branch/commit inexistente
A mensagem “The provided GitHub repository does not contain the requested branch or commit reference” geralmente aparece quando o repositório está vazio ou a branch selecionada não existe.

1. No GitHub, crie ou abra o repositório correto.
2. Se ele estiver vazio, extraia este ZIP no computador.
3. Dentro da pasta extraída, selecione **todos os arquivos e pastas** (incluindo `app`, `public`, `lib` etc.) e envie-os ao repositório usando **Add file → Upload files**. Não envie somente o arquivo ZIP.
4. Faça o primeiro commit com a mensagem `Adicionar projeto Portfólio Lavinia`.
5. Confirme que a branch principal se chama `main` e que `package.json` e a pasta `app` aparecem na raiz do repositório.
6. Na Vercel, importe esse mesmo repositório e selecione a branch `main`. Se `main` não aparecer, atualize/reconecte o repositório depois do primeiro commit.

## Configuração da Vercel
- Framework Preset: Next.js (detecção automática).
- Root Directory: `./`.
- Build Command: `npm run build` (padrão).
- Install Command: `npm install` (padrão).
- Output Directory: deixe em branco/padrão.
- Cadastre as variáveis `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` em Project Settings → Environment Variables, usando os valores do seu projeto Supabase.

## Rodar localmente no Windows
1. Instale Node.js 20.9 ou superior.
2. Abra a pasta extraída no VS Code.
3. Copie `.env.example` para `.env.local` e preencha as duas variáveis do Supabase.
4. No terminal, execute `npm install` e depois `npm run dev`.
5. Abra `http://localhost:3000`.

Não coloque senha, `service_role` ou chave secreta no GitHub. Este ZIP não publica nada automaticamente nas contas GitHub, Vercel ou Supabase.
