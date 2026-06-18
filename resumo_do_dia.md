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

### 7. 🎓 Novo Certificado
* **ONE | Imersão Agentes de IA**: Adicionado o certificado de conclusão da imersão em parceria com a Alura e Oracle Next Education, com a logo oficial salva em `public/logo-oracle-one.png` e o arquivo PDF copiado para `public/certificados/234843_imersao_oracle.pdf`.

### 8. 🤖 Remoção da Animação 3D do Robô (Spline)
* **Remoção do Componente**: Removido o componente `InteractiveRobotSpline` e os pacotes relacionados do código fonte por não se adequarem ao design minimalista desejado.
* **Limpeza e Simplificação**: Removidos os estilos específicos da animação Spline no arquivo `style.css` e limpada a estrutura da página principal (`HeroPage.tsx`), garantindo um visual mais limpo, leve e focado no conteúdo de texto e na grade interativa de spotlight.

### 9. 📈 Carrossel Vertical de Projetos Recentes (Hero Section)
* **Estrutura de Projetos**: Substituído o formato de texto simples de conquistas/certificações por um carrossel de projetos recentes com imagens de visualização real.
* **Importação de Mídias Reais**: Adicionadas as imagens `/project-worky-ui.png` (interface do app Worky) e `/project-worky-presentation.jpg` (mostra de projetos acadêmica ADS) à pasta pública e vinculadas ao carrossel.
* **Redimensionamento da Hero & Proporção dos Cards**:
  * As colunas do layout principal da Hero foram reajustadas para `1fr 1.25fr` no desktop com largura máxima expandida para `1320px`, ampliando significativamente a área de projetos.
  * O tamanho dos cards de projetos foi aumentado para **`350px`** de altura (com **`235px`** dedicados à imagem) e o contêiner do carrossel vertical foi ampliado para **`680px`** de altura no desktop, garantindo total destaque.
* **Ajuste de Escala do Texto (Hero)**: 
  * Ampliado o tamanho da fonte do título principal para **`6.2rem`** no desktop (criando enorme impacto visual) com um recuo à esquerda de **`3.5rem`** (`padding-left`) no bloco de texto.
  * Aumentado o tamanho da descrição abaixo do título para **`1.22rem`** e expandido sua largura máxima para **`680px`**.
  * Aumentado o tamanho dos botões de ação ("Ver Portfólio" e "Fale Comigo") para **`0.95rem`** com paddings maiores de **`0.9rem 2.2rem`**.
* **Efeitos de Hover Modernos**: Implementado efeito de zoom sutil nas imagens ao passar o mouse (`transform: scale(1.06)`), juntamente com a elevação do card e ampliação do brilho.

---

## 💻 Comandos e Validação
* A integridade do projeto foi testada através do comando:
  ```bash
  tsc && vite build
  ```
  O build de produção foi gerado sem nenhum erro de compilação ou de estilização CSS.

