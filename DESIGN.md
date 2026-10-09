---
name: Amada Cosméticos
description: Um atlas cromático editorial, direto e expansivo.
colors:
  plum: "#37112f"
  plum-deep: "#22091d"
  paper: "#f7dfe4"
  paper-light: "#fff3fb"
  coral: "#ff674d"
  lilac: "#b99aff"
  lime: "#d9f36b"
  ink: "#24101f"
  white: "#fffdf9"
typography:
  display:
    fontFamily: "Anton Local, Arial Narrow, sans-serif"
    fontSize: "clamp(3.25rem, 8vw, 10.8rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Archivo Local, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo Local, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  square: "0"
  round: "50%"
spacing:
  page: "clamp(1.25rem, 3vw, 3rem)"
  section: "clamp(6rem, 12vw, 11rem)"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.plum-deep}"
    rounded: "{rounded.square}"
    padding: "0.9rem 1.35rem"
    height: "3.35rem"
  button-dark:
    backgroundColor: "{colors.plum-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "0.9rem 1.35rem"
    height: "3.35rem"
---

# Design System: Amada Cosméticos

## Overview

**Creative North Star: "Atlas Cromático Desdobrável"**

O sistema trata cor como estrutura: ameixa, coral, lilás e lima ocupam campos completos, como folhas de um mostruário físico sendo abertas. A voz visual é editorial, condensada e direta, com assimetria controlada e pouco ornamento. A personalidade vem de escala, contraste e articulação entre painéis — não de imagens ou alegações ainda inexistentes.

**Key Characteristics:**
- Campos cromáticos inteiros em sequência, nunca uma coleção de pequenos acentos.
- Titulares condensados em grande escala, com texto corrido sóbrio e legível.
- Cantos retos, regras finas e formas circulares reservadas à marca e aos pinos do mostruário.
- Movimento curto, físico e opcional; conteúdo permanece visível sem animação.

## Colors

A paleta é de compromisso total: fundos escuros e campos saturados alternam ritmo, enquanto os papéis rosados oferecem descanso.

### Primary
- **Ameixa de base:** campo escuro principal, navegação e contraste institucional.
- **Ameixa profunda:** fechamento, texto escuro e zonas de máxima densidade.

### Secondary
- **Coral presença:** grandes superfícies de energia e palavras-chave.
- **Lilás expressão:** contraponto frio em superfícies inteiras.
- **Lima ação:** chamadas para ação, foco e o campo de encerramento.

### Neutral
- **Papel rosado:** seção editorial calma e contraste com a paleta saturada.
- **Papel claro:** fundo de leitura e detalhe claro sobre fundos escuros.
- **Tinta:** texto sobre campos luminosos.
- **Branco:** títulos e controles sobre ameixa.

### Named Rules

**The Full-Field Color Rule.** Uma cor de destaque deve possuir uma região inteira ou uma função nítida; não salpicar acentos sem hierarquia.

## Typography

**Display Font:** Anton Local (com Arial Narrow apenas como fallback técnico)
**Body Font:** Archivo Local (com Arial como fallback técnico)

**Character:** Anton fornece compressão vertical e presença de cartaz; Archivo sustenta parágrafos claros, controles e notas sem disputar o protagonismo.

### Hierarchy
- **Display** (400, escala fluida de 3.25rem a 10.8rem, 0.82–0.95): títulos de seção e palavras editoriais.
- **Title** (400, escala fluida de 4rem a 9rem, 0.9): nomes dos princípios.
- **Body** (400, 1rem a 1.35rem, 1.5–1.55): narrativa com medida máxima próxima de 67 caracteres.
- **Label** (700, 0.7rem a 0.82rem, caixa alta somente em rótulos curtos): navegação e metadados.

### Named Rules

**The Condensed Voice Rule.** A fonte display fala em frases breves e grandes; parágrafos nunca usam a voz condensada.

## Layout

A página usa largura total e respiro lateral fluido. Seções alternam composições em duas colunas e grandes bandas cromáticas. O breakpoint principal em 820px transforma duas colunas em uma, converte a navegação em painel controlado por botão e reorganiza as palavras em uma pilha vertical. Abaixo de 520px, os princípios sobrepõem letras decorativas ao fundo, mantendo o conteúdo na frente.

## Elevation & Depth

O sistema é majoritariamente plano. A única profundidade expressiva pertence às lâminas do mostruário no primeiro viewport; controles recebem elevação suave apenas em hover. Divisões editoriais usam cor, sobreposição e regras finas.

### Shadow Vocabulary
- **Lâmina:** `15px 20px 40px rgba(20,0,14,.18)` para separar as folhas articuladas.
- **Ação em hover:** `0 8px 20px rgba(20,0,14,.2)` como retorno breve ao movimento vertical.

## Shapes

Cantos são retos. Círculos aparecem apenas no monograma e no pino que articula as lâminas. Bordas de 1px marcam navegação, notas e divisões; não encapsulam todo conteúdo em cartões.

## Components

### Buttons
- **Shape:** retângulo reto, altura mínima de 3.35rem.
- **Primary:** lima sobre ameixa profunda, com padding de 0.9rem por 1.35rem.
- **Hover / Focus:** deslocamento de 3px com sombra suave; foco externo de 3px em lima.
- **Dark:** ameixa profunda sobre lima, invertendo para lima no hover.

### Navigation
- Desktop usa links curtos em caixa alta, com sublinhado lima animado.
- Mobile usa botão com `aria-expanded`, painel lima com divisões escuras e fechamento por link ou tecla Escape.

### Folding Swatches
- Três lâminas saturadas compartilham um ponto de articulação, rotação escalonada e movimento sutil por ponteiro.
- Preferência de movimento reduzido fixa a composição sem perder informação.

## Do's and Don'ts

### Do:
- **Do** use campos cromáticos grandes para criar ritmo entre densidade e pausa.
- **Do** preserve contraste forte, cantos retos e hierarquia tipográfica evidente.
- **Do** reorganize composições no mobile em vez de apenas reduzi-las.
- **Do** mantenha todo conteúdo essencial disponível sem movimento ou JavaScript.

### Don't:
- **Don't** use gradientes, vidro, halos ou sombras sem deslocamento.
- **Don't** transforme o sistema em uma grade de cartões uniformes.
- **Don't** use a fonte display em texto corrido.
- **Don't** introduza imagens de produto, claims ou prova comercial sem conteúdo aprovado.
