# Guilherme Ferreira - Portfólio Profissional

Este documento resume todas as evoluções, decisões de design e implementações realizadas no dia de hoje no projeto do portfólio.

---

## 🛠️ O que foi feito hoje

### 1. 🎨 Identidade Visual & Design System
* **Paleta de Cores Monocromática**: Transição para uma estética minimalista *high-contrast* usando tons de preto profundo (`#000000`), cinza escuro zinc (`#09090b` / `#141416`) e detalhes em branco brilhante.
* **Tipografia Premium**: Substituição das fontes padrão pelas fontes **Plus Jakarta Sans** (para títulos marcantes e dinâmicos) e **Geist Mono** (para tags técnicas, métricas e detalhes técnicos).

### 2. 🌐 Background Interativo & Grid Moderno
* **Grid Menor**: Redução das dimensões dos quadradinhos do grid de `60px` para `30px` com linhas finas e sutis (`rgba(255, 255, 255, 0.045)`), criando profundidade e sensação de que o site é maior.
* **Spotlight interativo (radial-glow)**: Efeito de iluminação suave que acompanha o cursor do mouse em tempo real com aceleração por GPU.

### 3. 🚀 Reformulação da Seção Início (Hero)
* **Layout Centralizado**: Centralização completa dos títulos, descrição e botões de chamada para ação (CTA).
* **Remoção de Widget Fictício**: Exclusão do bloco terminal de código (`// MinhaStack.js`), gerando um visual limpo, moderno e muito mais profissional.

### 4. 🧭 Menu Superior (Floating Pill Header)
* **Navbar Flutuante**: O menu tradicional fixo foi substituído por uma barra suspensa estilo *pílula* centralizada com bordas ultra-finas e efeito translúcido (*glassmorphism* com `backdrop-filter`).
* **Micro-interações de Navegação**: Efeitos de hover modernos com fundos arredondados de opacidade sutil nos links, combinando com o grid de fundo.

### 5. 📈 Seção Trajetória (Alternando Esquerda/Direita)
* **Introdução Organizada**: Nova estrutura com biografia/estatísticas do lado esquerdo e grade de competências do lado direito.
* **Timeline Alternada**: Cards dispostos de forma alternada (esquerda e direita) com linha central de alto contraste e pontos interativos destacados.
* **Conteúdo Real (LinkedIn)**:
  1. *QA Engineer Junior* — Centrus Inteligência Artificial (abr de 2026 - momento)
  2. *Especialista CX* — Pulse Client Experts (mar de 2025 - momento)
  3. *Equipe de Parcerias | B2C* — AIESEC no Brasil (fev de 2026 - abr de 2026)
  4. *Estudante voluntário | A.I League* — Brain Facens (fev de 2023 - out de 2023)

### 6. 🏷️ Favicon & Marcas de Projeto
* **Favicon do "G" Metálico**: Configuração do novo ícone oficial da aba a partir da imagem do "G" prateado gerada e salva em `public/favicon.png`.
* **Remoção de Elementos Externos**: O título do menu e rodapé foi simplificado para exibir apenas **"Guilherme Ferreira"** de forma limpa, sem imagens adicionais.
* **Bypass de Cache**: Implementação de query parameter (`?v=2`) no link do favicon para evitar que o navegador exiba ícones salvos em cache de outros projetos do `localhost:5173`.

---

## 💻 Comandos e Validação
* A integridade do projeto foi testada através do comando:
  ```bash
  tsc && vite build
  ```
  O build de produção foi gerado sem nenhum erro de compilação ou de estilização CSS.
