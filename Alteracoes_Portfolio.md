# Alterações do Portfólio - Certificação Febracon (FCB-100)

Abaixo está o prompt consolidado e o registro das modificações realizadas no portfólio profissional para referência ou importação futura.

---

## 📝 Prompt de Contexto das Alterações

> Adicione a certificação **FCB-100 Correspondente Bancário Completo** na aba **Certificações** da seção de trajetória com as seguintes especificações:
> - **Instituição**: Febracon (Federação Brasileira dos Correspondentes Bancários)
> - **Código da Credencial**: 24.459
> - **Período**: Emitido em 2026, com expiração em 2028 (`2026 — 2028`)
> - **Status**: Finalizado (`finalizado`)
> - **Categoria**: Certificações (`certificacoes`)
> - **Visualização**: Sem botão de visualizar anexo (omitido por não possuir arquivo físico)
> - **Logo**: Logotipo oficial da Febracon salvo em `/public/logo-febracon.png`

---

## 📂 Arquivos Modificados e Criados

### 1. Dados do Portfólio
* **Caminho**: `/src/data/portfolioData.tsx`
* **Alteração**: Adicionado o objeto correspondente no array `certificates`:
```typescript
  {
    title: "FCB-100 Correspondente Bancário Completo",
    institution: "Febracon",
    category: "certificacoes",
    status: "finalizado",
    year: "2026 — 2028",
    logo: "/logo-febracon.png",
    desc: "Certificação profissional de correspondente bancário completo em conformidade com as resoluções do Banco Central. Código da credencial: 24.459."
  }
```

### 2. Imagem do Logotipo
* **Caminho**: `/public/logo-febracon.png`
* **Origem**: Download efetuado da imagem oficial (`https://www.febracon.org.br/wp-content/uploads/2022/07/ferbracon-logo-site.png`)

---

## 🛡️ Verificação de Tipagem
A compilação do TypeScript foi executada localmente para garantir a integridade estrutural e de tipagem do portfólio:
```bash
npx tsc --noEmit
# Saída: Sem erros detectados
```
