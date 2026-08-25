# JR Visual - Site Institucional

Site de apresentação para a **JR Visual**, empresa de comunicação visual e gráfica. Projeto desenvolvido para colocar em prática conceitos de desenvolvimento web moderno com foco em criar um front-end responsivo e performativo.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para maior segurança no código
- **Vite** - Build tool e dev server ultra-rá¿¿do
- **CSS Modules** - Estilizaç¿¿o modular e escalá¿¿vel
- **Vercel** - Plataforma de deploy e hospedagem

## 📁 Estrutura do Projeto

```
jrvisual/
├── src/
│   ├── components/     # Componentes reutilizá¿¿veis (Nav, etc.)
│   ├── data/           # Dados estáticos (produtos, serviços)
│   ├── pages/          # Páginas da aplicação (Home, AboutUs, Products, etc.)
│   ├── imports/        # Imports e assets
│   ├── App.tsx         # Componente principal
│   ├── Root.tsx        # Layout base
│   ├── routes.ts       # Configuraç¿¿o de rotas
│   └── index.css       # Estilos globais
├── public/             # Assets públicos
├── package.json        # Dependê¿¿ncias e scripts
├── tsconfig.json       # Configuraç¿¿o TypeScript
├── vite.config.ts      # Configuraç¿¿o Vite
└── vercel.json         # Configuraç¿¿o de deploy Vercel
```

## 🎯 Funcionalidades

- **Home Page** - Apresentação da empresa com destaque para serviços principais
- **Catá¿¿logo de Produtos** - Exibiç¿¿o de produtos e serviços da gráfica
- **Sobre Nós** - Informações sobre a empresa
- **Detalhes do Produto** - Página individual para cada produto/serviç¿¿o
- **Navegaç¿¿o Responsiva** - Menu adaptativo para mobile e desktop
- **Deploy Automá¿¿tico** - CI/CD integrado com Vercel

## 🛠️ Instalaç¿¿o e Desenvolvimento

### Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm

### Passos

1. Clone o repositó¿¿¿rio
```bash
git clone https://github.com/spray-dev/jrvisual.git
cd jrvisual
```

2. Instale as dependê¿¿ncias
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

### Build para Produç¿¿o

```bash
npm run build
npm run preview
```

## 📦 Scripts Disponí¿¿veis

| Comando | Descriç¿¿o |
|---------|----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera build otimizado para produç¿¿o |
| `npm run preview` | Preview do build em localhost |
| `npm run lint` | Executa linting do código |

## 🌐 Deploy

O projeto está configurado para deploy automático na **Vercel**. Cada push para a branch main dispara um novo deploy.

Configuraç¿¿o em `vercel.json`:
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
- Projeto desenvolvido como parte do portfó¿¿¿lio para posiç¿¿o de Back-End Developer

## 📝 Licenç¿¿

MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

*Projeto focado em boas prá ¿ ticas de desenvolvimento front-end com React e TypeScript.*
