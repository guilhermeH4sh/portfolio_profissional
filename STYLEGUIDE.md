# Guia de Estilo e Padrões de Qualidade (Styleguide)

Este documento estabelece as diretrizes de design, princípios de interação, padrões de qualidade de código e copy, e convenções de mercado para o desenvolvimento do projeto.

---

## 🎯 Identidade do Projeto

* **Produto**: Interface web voltada para o mercado brasileiro (PMEs). Usuário final não é técnico.
* **Referência visual**: Linear.app, Vercel Dashboard, Raycast. Visual limpo, alto contraste entre hierarquias e sem ornamentações desnecessárias.
* **Tom de comunicação**: Direto, técnico e profissional. Sem superlativos e sem jargões de marketing.

---

## 🎨 DNA Visual — Tokens de Design

*Estas definições têm prioridade sobre qualquer padrão do Tailwind ou Shadcn.*

### Paleta de Cores
* **Primária**: Violet-600 (`#7C3AED`). Nunca utilizar `blue-500` como cor de ação primária.
* **Fundo de Página**: `slate-950` (dark) / `white` (light).
* **Superfície de Card**: `slate-900` (dark) / `slate-50` (light).
* **Borda Padrão**: `slate-800` (dark) / `slate-200` (light), opacidade de 60%.
* **Feedback Semântico**:
  * **Erro**: `red-500`
  * **Sucesso**: `emerald-500`
  * **Aviso**: `amber-400`

### Tipografia
* **Família**: Inter (configurada via Tailwind). Nunca utilizar a fonte padrão do sistema.
* **Heading**: `font-semibold` (600) para h1/h2, `font-medium` (500) para h3 em diante.
* **Body**: `font-normal` (400). Nunca utilizar `font-semibold` em parágrafos corridos.
* **Tamanho Mínimo**: `text-sm` (14px) para qualquer texto de interface funcional.

### Espaçamento
* **Grid Base**: 4px. Utilizar sempre múltiplos: 8, 12, 16, 24, 32, 48, 64.
* **Card Padding**: `p-6` (24px) como padrão mínimo interno.
* **Gap de Seção**: `gap-8` ou `gap-12` entre seções de página.

### Bordas e Arredondamento
* **Card**: `rounded-2xl`
* **Inputs, Selects, Botões**: `rounded-lg`
* **Badges e Tags**: `rounded-full`
* *Nota*: Nunca misturar `rounded-md` e `rounded-xl` no mesmo contexto visual.

### Sombras e Foco
* **Elevação**: Apenas `shadow-sm` para elevação sutil. Evitar sombras decorativas intensas (como `shadow-xl`).
* **Sombra de Foco**: `ring-2 ring-violet-500/40` em inputs.

---

## ✨ Princípios de Interação

### Botões
* **Botão Primário**: Transição suave (`transition-all duration-200`) e feedback ativo (`active:scale-[0.97]`).
* **Estado Hover**: Leve clareamento (`hover:brightness-110`) — nunca uma cor completamente diferente.
* **Estado Loading**: Substituir a label por um spinner inline, mantendo a largura fixa para evitar layout shift.
* **Estado Disabled**: Opacidade em 40% (`opacity-40`), cursor não permitido (`cursor-not-allowed`) e tooltip explicativo obrigatório.

### Inputs e Formulários
* **Focus**: Aplicar `ring-2 ring-violet-500/40 border-violet-500`.
* **Erro**: Aplicar `border-red-500` acompanhado de mensagem explicativa abaixo com a classe `text-sm text-red-400`.
* **Validação**: Nunca exibir erro antes do primeiro `blur` do campo.

### Feedback
* **Toasts**: Exibir no canto inferior direito (`z-50`), auto-dismiss em 3 segundos, com ação de "Desfazer" (undo) quando aplicável.
* **Skeleton Loaders**: Utilizados em vez de spinners para áreas de conteúdo (tabelas, listagens).
* **Spinners**: Reservados apenas para ações pontuais (submit de formulário, upload).

### Animações
* **Entrada**: Fade-in combinado com translação vertical (`fade-in + translate-y-[8px] → translate-y-0`), com duração de 180ms e curva `ease-out`.
* **Modais e Diálogos**: Transição de escala e opacidade (`scale-95 opacity-0 → scale-100 opacity-100`), com duração de 150ms.
* *Nota*: Respeitar sempre a diretiva `prefers-reduced-motion`.

---

## 🚫 Barra de Qualidade — Anti-padrões

* **Estrutura de Componentes**:
  * Não utilize `<Table>` para listagens com menos de 4 colunas — dê preferência a cards.
  * Não centralize blocos de texto com mais de 2 linhas (`text-center` apenas para títulos curtos).
  * Não posicione mais de 2 cores de destaque na mesma tela.
  * Não empilhe mais de 3 níveis de hierarquia visual na mesma seção.
* **Texto e Copy**:
  * Nunca utilize "Lorem ipsum" ou placeholders fictícios genéricos.
  * Descreva ações exatas nos botões (ex: "Salvar alterações", em vez de "Confirmar" ou "OK").
  * Mensagens de erro devem ser informativas e indicar como o usuário pode resolver o problema.
* **Código**:
  * Não utilize `any` em TypeScript sem um comentário justificando a necessidade.
  * Mantenha regras de negócio separadas de componentes puros de interface (UI).
  * Não utilize valores de pixels (`px`) fixos em fontes — utilize as classes utilitárias do Tailwind.

---

## 🇧🇷 Contexto de Mercado e Localização

### Formatação Obrigatória
* **Moeda**: Exibição em Real (ex: `R$ 1.299,90`).
* **Data**: Formato brasileiro (`DD/MM/AAAA`).
* **Telefone**: Máscara com DDD (ex: `(11) 99999-9999`).
* **Documentos**: Exibição formatada com máscara para CPF/CNPJ (armazenando o valor limpo no banco).

### Idioma
* **Tom**: Português brasileiro coloquial e profissional. Tratar o usuário por "você" (nunca por "o usuário" ou "o cliente").
* **Imperativo para Ação**: Verbos no imperativo para botões e links de ação (ex: "Acesse", "Configure", "Salve").
