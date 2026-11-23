# Stack tecnológica — Portfólio Lavinia Tech

## Decisão para esta versão

| Camada | Tecnologia | Motivo |
|---|---|---|
| Portfólio público | HTML5, CSS3 e JavaScript | Leve, direto, fácil de manter e adequado a páginas institucionais e projetos pessoais |
| Interface administrativa | HTML5, CSS3 e JavaScript | Mantém a mesma base do portfólio e evita complexidade desnecessária |
| Banco de dados | Supabase PostgreSQL | Banco relacional, SQL, políticas de acesso e integração com o front-end |
| Autenticação | Supabase Auth | Login por e-mail e senha, sessão e verificação de administrador |
| Imagens | Supabase Storage | Upload de imagens com acesso público de leitura e escrita limitada a administradores |
| Hospedagem | Vercel | Publicação estática, HTTPS e integração com GitHub |
| Versionamento | Git + GitHub | Histórico, colaboração e sincronização com a Vercel |

## Comparação resumida

- **React:** indicado para interfaces com muitos componentes e estado compartilhado. Para este portfólio estático, acrescentaria configuração sem benefício proporcional.
- **Next.js:** forte opção para aplicações React com rotas, renderização no servidor e recursos avançados de SEO. Pode ser escolhido numa futura migração se o site virar uma aplicação maior.
- **Tailwind CSS:** acelera a construção de interfaces por classes utilitárias, mas a base atual usa CSS organizado e não depende de build.
- **Framer Motion:** biblioteca de animação para React. Não é necessária nesta versão; as transições atuais usam CSS e respeitam `prefers-reduced-motion`.
- **HTML/CSS/JS:** entrega páginas rápidas e simples de publicar. Para as Landing Pages independentes, foi escolhido o mesmo padrão para facilitar cópia, personalização e desempenho.

## Stack definida para Landing Pages

HTML semântico + CSS responsivo + JavaScript puro. O modelo reutilizável está em `modelos/landing-page/`. Ele já inclui navegação móvel, metadados básicos, seções de apresentação, diferenciais, galeria e contato.

## Estrutura principal

- `index.html`: página inicial.
- `quemsoueu.html`: história e apresentação.
- `portfolio.html`: projetos publicados.
- `login.html`: entrada administrativa.
- `dashboard.html`: painel de gerenciamento.
- `css/`: estilos globais e responsivos.
- `js/`: navegação, Supabase, login, projetos e Dashboard.
- `supabase/`: SQL e instruções de configuração.
- `projetos/`: imagens e arquivos de projetos demonstrativos.
- `modelos/landing-page/`: modelo para novas páginas de apresentação.

## O que ainda depende das contas externas

A integração de código está preparada, mas a configuração final precisa ser executada no projeto Supabase e na conta Vercel/GitHub da proprietária. Não foi feito deploy nem alteração remota nessas contas nesta entrega.
