---
name: Gerador de Orçamento Sistema (EXPANSÃO MASSIVA)
description: Transforma uma explicação curta do usuário em um orçamento de sistema enorme (15+ páginas), detalhado e modular.
---

# Skill: Gerador de Orçamento Sistema (Desenvolvimento)

**REGRA SUPREMA:** Os blocos de texto boilerplate desta agência JÁ ESTÃO ESCRITOS como arquivos `.md` prontos em `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/`. Sua tarefa é COPIAR O CONTEÚDO DELES PALAVRA POR PALAVRA para dentro do orçamento. Você NÃO deve reescrever, resumir ou parafrasear esses blocos. Eles são textos jurídico-comerciais da agência e qualquer alteração compromete contratos.

**REGRA ANTI-RESUMO:** É PROIBIDO usar "...", "etc", resumir módulos ou omitir campos que o usuário citou. Transcreva 100% dos campos e funcionalidades informados.

**REGRA DE ÍCONES:** Não use emojis ou ícones (proibido por `diretrizes.md`).

---

## 1. DESCOBERTA
Pergunte ao usuário:
1. "Resuma o problema que o sistema vai resolver e cite as principais entidades."
2. "Nome do Cliente e Tom Desejado."

---

## 2. MODELAGEM DE ENTIDADES (PASSO INTERNO)
Antes do orçamento, liste mentalmente todas as entidades e aplique:
- Para CADA entidade: 1 Tela de Listagem (DataTable) + 1 Tela de Formulário.
- Para entidades com filhos: adicionar 1 Tela de Detalhes Master-Detail.

---

## 3. GERACAO DO ORÇAMENTO (14 SEÇÕES EM ORDEM)

### SECAO 1: Apresentação Institucional (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/00_apresentacao.md` e cole o conteúdo INTEGRAL. Copie PALAVRA POR PALAVRA. Este é a primeira seção do orçamento.

---

### SECAO 2: Início (CONTEUDO GERADO PELA IA)
Escreva mínimo 4 parágrafos de storytelling com contexto do cliente e a proposta da WAB.

---

### SECAO 3: Escopo e Módulos (CONTEUDO GERADO PELA IA)
Para cada tela derivada da modelagem, use a seguinte estrutura:
```
### Tela: [Nome da Tela]

**Objetivo Estratégico:**
[1 parágrafo longo]

**Estrutura de Componentes e Layout:**
- **Cabecalho/Navegação:** [...]
- **Área Principal:** [Mínimo 4 campos ou colunas citadas explicitamente]
- **Botões e Ações:** [Lista dos botões com texto exato]

**Fluxo de Interação e Regras:**
[1 parágrafo explicando o que acontece]
```

---

### SECAO 4: Itens Não Inclusos (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/01_itens_nao_inclusos.md` e cole o conteúdo INTEGRAL. Copie PALAVRA POR PALAVRA.

---

### SECAO 5: Planejamento, Metodologia e Change Request (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/02_planejamento_metodologia.md` e cole o conteúdo INTEGRAL. Em seguida abra `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/02_regras_change_request.md` e cole o conteúdo INTEGRAL. Copie PALAVRA POR PALAVRA.

---

### SECAO 6: Garantia e SLA (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/03_garantia_sla.md` e cole o conteúdo INTEGRAL incluindo a tabela de SLA. Copie PALAVRA POR PALAVRA.

---

### SECAO 7: Transição e Treinamento (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/04_transicao_treinamento.md` e cole o conteúdo INTEGRAL. Copie PALAVRA POR PALAVRA.

---

### SECAO 8: Hospedagem (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/05_hospedagem_inicial.md` e cole o conteúdo INTEGRAL. Este bloco contém a tabela de planos. REMOVA o diagrama Mermaid deste bloco, pois usaremos a versão de alta fidelidade na próxima seção. Copie PALAVRA POR PALAVRA (exceto o Mermaid).

---

### SECAO 9: Mapa da Estrutura (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/08_mapa_da_estrutura.md` e cole o conteúdo INTEGRAL. Este bloco contém o diagrama de arquitetura de alta fidelidade (Base64). Copie PALAVRA POR PALAVRA.

---

### SECAO 10: Plano de Manutenção Contínua (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/07_plano_manutencao.md` e cole o conteúdo INTEGRAL. Copie PALAVRA POR PALAVRA.

---

### SECAO 11: Prazo, Deslocamento e Material (CONTEUDO GERADO PELA IA)
- Prazo estimado em semanas.
- Material que o cliente deve fornecer.

---

### SECAO 12: Cronograma (CONTEUDO GERADO PELA IA)
Tabela com: Fase | Atividade Principal | Período.

---

### SECAO 13: Validade da Proposta (CONTEUDO GERADO PELA IA)
Validade de 15 dias corridos.

---

### SECAO 14: Condições Comerciais (COPIAR VERBATIM + Tabela de Investimento)
> **INSTRUCAO CRITICA:** Antes do conteúdo do bloco, insira:
> 1. Tabela de Investimento em Desenvolvimento com os módulos e valores.
> 2. Total geral em destaque.
> 3. Em seguida, abra `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/06_condicoes_comerciais.md` e cole o conteúdo INTEGRAL incluindo a tabela de pagamento e os dados de assinatura da WAB. Substitua `[NOME_DO_CLIENTE]` pelo nome real. Copie PALAVRA POR PALAVRA.

---

## 4. VERIFICACAO FINAL
Antes de salvar, confirme:
- [ ] `00_apresentacao.md` é a PRIMEIRA seção do orçamento?
- [ ] O Stories da SEÇÃO 2 reflete o problema do cliente?
- [ ] `01_itens_nao_inclusos.md` copiado integralmente?
- [ ] `02_planejamento_metodologia.md` copiado integralmente?
- [ ] `02_regras_change_request.md` copiado integralmente?
- [ ] `03_garantia_sla.md` copiado integralmente com tabela de SLA?
- [ ] `04_transicao_treinamento.md` copiado integralmente?
- [ ] `05_hospedagem_inicial.md` copiado integralmente (sem o Mermaid)?
- [ ] `08_mapa_da_estrutura.md` copiado integralmente com a imagem Base64?
- [ ] `07_plano_manutencao.md` copiado integralmente?
- [ ] `06_condicoes_comerciais.md` copiado com assinatura Jonas/WAB?
- [ ] Nenhum emoji ou ícone no documento?

Salve em `/Volumes/Dados/work/documentos/orcamentos_gerados/[CLIENTE]_[PROJETO]/`.
