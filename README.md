# JR Visual - Site Institucional

Site de apresentação para a **JR Visual**, empresa de comunicação visual e gráfica. Projeto desenvolvido para colocar em prática conceitos de desenvolvimento web moderno, com foco em um front-end responsivo e performático.

Acessar demonstração: (https:/jrcomunica.vercel.app)

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para maior segurança no código
- **Vite** - Build tool e dev server rápido
- **CSS Modules** - Estilização modular e escalável
- **Vercel** - Plataforma de deploy e hospedagem

## 📁 Estrutura do Projeto

```
jrvisual/
├── src/
│   ├── components/     # Componentes reutilizáveis (Nav, etc.)
│   ├── data/           # Dados estáticos (produtos, serviços)
│   ├── pages/          # Páginas da aplicação (Home, AboutUs, Products, etc.)
│   ├── imports/        # Imports e assets
│   ├── App.tsx         # Componente principal
│   ├── Root.tsx        # Layout base
│   ├── routes.ts       # Configuração de rotas
│   └── index.css       # Estilos globais
├── public/             # Assets públicos
├── package.json        # Dependências e scripts
├── tsconfig.json       # Configuração TypeScript
├── vite.config.ts      # Configuração Vite
└── vercel.json         # Configuração de deploy Vercel
```

## 🎯 Funcionalidades

- **Home Page** - Apresentação da empresa com destaque para serviços principais
- **Catálogo de Produtos** - Exibição de produtos e serviços da gráfica
- **Sobre Nós** - Informações sobre a empresa
- **Detalhes do Produto** - Página individual para cada produto ou serviço
- **Navegação Responsiva** - Menu adaptativo para mobile e desktop
- **Deploy Automático** - CI/CD integrado com Vercel

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm

### Passos

1. Clone o repositório
```bash
git clone https://github.com/spray-dev/jrvisual.git
cd jrvisual
```

2. Instale as dependências
```bash
npm install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento
```bash
npm run dev
# ou
pnpm dev
```

4. Abra em `http://localhost:5173`

### Build para Produção

```bash
npm run build
npm run preview
```

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---------|----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build otimizado para produção |
| `npm run preview` | Preview do build em localhost |
| `npm run lint` | Executa linting do código |

## 🌐 Deploy

O projeto está configurado para deploy automático na **Vercel**. Cada push para a branch `main` dispara um novo deploy.

Configuração em `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## 👨‍💻 Autor

**Filipe Coelho Arce**
- GitHub: [@spray-dev](https://github.com/spray-dev)
- Projeto desenvolvido como parte do portfólio para posição de Back-End Developer

## 📝 Licença

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

*Projeto focado em boas práticas de desenvolvimento front-end com React e TypeScript.*
