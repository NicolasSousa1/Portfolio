# Portfólio de Nicolas de Sousa

Portfólio pessoal de Nicolas de Sousa, desenvolvedor full stack e estudante de Análise e Desenvolvimento de Sistemas. Reúne projetos de software, conquistas acadêmicas e canais de contato.

[Acessar o portfólio](https://portfolio-phi-six-lgvojicdpr.vercel.app/)

## Projetos

- **PlannedGoal** — aplicação de educação financeira para simular metas e analisar sua viabilidade com o Google Gemini.
- **Bartô Info** — guia de cursos da Etec com quiz de orientação que usa inteligência artificial.
- **Bot de automação** — cadastro de produtos a partir de um CSV com Python, Pandas e PyAutoGUI.
- **Busca de clima e endereço** — aplicativo em React Native e Expo que consulta CEPs e condições do tempo e registra as buscas no dispositivo.

O site usa React, Vite e CSS. O layout é responsivo e a preferência entre tema claro e escuro é salva no navegador.

## Executar localmente

Use Node.js 22.12 ou superior e npm.

```sh
npm ci
npm run dev
```

Abra o endereço informado pelo Vite. Para compilar e conferir a versão de produção, execute:

```sh
npm run build
npm run preview
```

## Publicar na Vercel

Importe o repositório do GitHub na Vercel com o preset **Vite**. A raiz do projeto é a raiz do repositório, o comando de compilação é `npm run build` e o diretório de saída é `dist`. O site funciona como uma aplicação estática e dispensa variáveis de ambiente. [Documentação da Vercel para Vite](https://vercel.com/docs/frameworks/frontend/vite)

## Atualizar o conteúdo

- `src/App.jsx` contém a apresentação, as tecnologias e os contatos.
- `src/Projects.jsx` define os projetos e suas mídias. As imagens ficam em `public/imagens/` e os vídeos em `public/videos/`.
- `src/Achievements.jsx` reúne as conquistas acadêmicas e os links para as publicações.
- `src/styles.css` define o layout e os temas.

Os ícones de tecnologias do [Devicon](https://github.com/devicons/devicon/tree/v2.17.0) ficam em `public/icones/tecnologias/` com a licença correspondente.
