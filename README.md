# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Boas Práticas do Projeto

### Estrutura de Diretórios

```
src/
├── context/          # Contextos React (gerenciamento de estado global)
├── hooks/            # Hooks customizados genéricos/reutilizáveis
├── ui/               # Componentes e páginas da interface
│   ├── components/   # Componentes reutilizáveis da UI
│   ├── pages/        # Páginas da aplicação
│   └── router/       # Configuração de rotas
└── assets/           # Arquivos estáticos (imagens, fontes, etc.)
```

### Regras de Organização

- **`src/context/`**: Use para Context API. Arquivos de contexto devem exportar apenas o Provider. Hooks personalizados que dependem do contexto devem ficar em `src/hooks/` para evitar erros de lint do React Fast Refresh.
- **`src/hooks/`**: Hooks customizados genéricos que podem ser usados em qualquer parte da aplicação. Não devem depender de componentes UI específicos.
- **`src/ui/`**: Tudo relacionado à interface do usuário.
  - **`components/`**: Componentes reutilizáveis (botões, inputs, cards, etc.)
  - **`pages/`**: Páginas completas da aplicação
  - **`router/`**: Configuração de rotas e navegação

### Convenções de Código

- **Nomes de arquivos**: Use PascalCase para componentes (`Counter.tsx`) e camelCase para hooks (`useCounter.ts`)
- **Exportações**: Arquivos de contexto devem exportar apenas o Provider para manter o React Fast Refresh funcionando corretamente
- **Hooks customizados**: Sempre valide o contexto dentro do hook e lance erro se não estiver disponível

### Exemplo de Estrutura

```jsx
// src/context/CounterContext.tsx
export function CounterProvider({ children }) {
  // lógica do provider
}

// src/hooks/contador/useCounter.ts
import { useContext } from 'react'
import { CounterContext } from '../../context/CounterContext.tsx'

export function useCounter() {
  const context = useContext(CounterContext)
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider')
  }
  return context
}
```
