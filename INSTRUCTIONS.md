# Guia de Configuração do Ambiente React (Shadcn + Tailwind + TypeScript)

Este repositório contém a estrutura de componentes React em `components/` e `lib/`. Como a base do projeto atual é estática (HTML/CSS/JS), você precisará configurar o ambiente para TypeScript, Tailwind CSS e React para utilizá-los. 

Siga o passo a passo abaixo para rodar ou migrar este projeto.

---

## 🛠️ Passo a Passo para Configuração

### 1. Preparar o Repositório ou Criar Novo Projeto
Caso queira migrar este diretório para React + TypeScript utilizando Vite:

```bash
# Inicialize um projeto React com TypeScript no diretório atual
npm create vite@latest . -- --template react-ts
```

### 2. Instalar e Configurar o Tailwind CSS
Instale o Tailwind CSS e seus parceiros (PostCSS e Autoprefixer):

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Adicione os caminhos no arquivo `tailwind.config.js` recém-criado:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
    },
  },
  plugins: [],
}
```

### 3. Configurar Path Aliases (`@/*`) em TypeScript
Para fazer as importações como `@/components/ui/dialog` funcionarem, edite o `tsconfig.json` (ou `tsconfig.app.json` criado pelo Vite):

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

E no `vite.config.ts`, instale a dependência de paths:
```bash
npm install -D vite-tsconfig-paths
```
Atualize o `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})
```

### 4. Inicializar o Shadcn UI
O Shadcn CLI automatiza a estruturação básica e a criação de variáveis CSS para temas de cores (claro/escuro).

Execute o CLI:
```bash
npx shadcn@latest init
```

*Responda às perguntas sugeridas do CLI:*
- Style: **Default**
- Base color: **Slate**
- CSS variables: **Yes**

### 5. Instalar as Dependências Requisitadas
Caso não tenha instalado ainda, rode:
```bash
npm install lucide-react @radix-ui/react-dialog clsx tailwind-merge
```

---

## 📂 Por que usamos o caminho `/components/ui`?

No ecossistema **Shadcn UI**, a pasta `/components/ui` é reservada exclusivamente para os **blocos de construção (primitivos)** de interface (como botões, inputs, modais e tooltips). 

### Importância dessa estrutura:
1. **Convenção do CLI:** Ferramentas automáticas como `npx shadcn add button` irão descarregar o código-fonte do botão diretamente dentro de `/components/ui/button.tsx`.
2. **Separação de Preocupações:** Mantém os componentes puramente estéticos e reutilizáveis (UI) isolados dos seus componentes de negócio, páginas ou fluxos complexos (que devem ficar na raiz de `/components` ou `/features`).
3. **Legibilidade das Importações:** Torna óbvia a origem do componente nas páginas:
   - `import { Button } from '@/components/ui/button'` (Elemento básico de UI)
   - `import { ProjectCard } from '@/components/ProjectCard'` (Componente de Negócio/Customizado)
