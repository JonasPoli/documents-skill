---
name: Gerador de Orçamento Site Symfony (ARQUITETURA DE SISTEMAS)
description: Cria orçamentos gigantescos, técnicos e comerciais para aplicações Symfony, baseados estritamente na estrutura de 13 seções para Sistemas.
---

# Skill: Gerador de Orçamento Site Symfony (ARQUITETURA DE SISTEMAS)

**REGRA SUPREMA:** Os blocos de texto boilerplate desta agência JÁ ESTÃO ESCRITOS como arquivos `.md` prontos. Sua tarefa é COPIAR O CONTEÚDO DELES PALAVRA POR PALAVRA para dentro do orçamento. Você NÃO deve reescrever, resumir ou parafrasear esses blocos. Copie o texto integral de cada arquivo conforme mapeado nesta Skill. Nenhuma criatividade ou interpretação deve ser usada no conteúdo dos blocos — eles são textos jurídico-comerciais da agência.

---

## 1. DESCOBERTA RÁPIDA
Solicite ao usuário:
1. "Resumo do objetivo do sistema."
2. "Nome da Empresa cliente?"
3. "Existem tipos de usuários diferentes? (Ex: Admin, Funcionário, Cliente)?"

---

## 2. FASE 1: MODELAGEM DE ENTIDADES (OBRIGATÓRIO — EXECUTAR ANTES DO ORÇAMENTO)
Gere o arquivo `ENTITIES_[CLIENTE].md` em `/Volumes/Dados/work/documentos/orcamentos_gerados/[CLIENTE]/`.

**Passo 1.1:** Liste todas as Tabelas/Entidades do banco, seus campos e roles.
**Passo 1.2:** A REGRA MATEMATICA DE TELAS. Para CADA entidade mestre, defina obrigatoriamente:
- 1 Tela de Listagem (DataTable com colunas de busca e coluna de Ações).
- 1 Tela de Formulário de Cadastro/Edição.
- 1 Tela de Detalhes Master-Detail (se a entidade tiver filhos).

---

## 3. FASE 2: GERAÇÃO DO ORÇAMENTO (14 SEÇÕES EM ORDEM)

O arquivo final é `ORCAMENTO_SYMFONY_[CLIENTE].md`. Siga esta ordem EXATA. Use o MASTER_TEMPLATE_SISTEMAS.md como referência das seções.

> [!CAUTION]
> **PROIBIDO usar emojis, ícones ou símbolos especiais** nos textos gerados. Consulte `diretrizes.md`.

---

### SECAO 1: Apresentação Institucional (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/00_apresentacao.md` e cole o conteúdo integral aqui. NÃO REESCREVA. NÃO RESUMA. COPIE PALAVRA POR PALAVRA. Esta é a primeira seção do documento.

---

### SECAO 2: Início (CONTEUDO GERADO PELA IA)
Escreva exatamente 4 parágrafos de storytelling técnico descrevendo o problema do cliente e a solução da WAB, a partir do input do usuário.

---

### SECAO 3: Escopo e Módulos (CONTEUDO GERADO PELA IA)
Esta é a seção mais importante. Use o Template Estrito de Wireframe Textual para cada tela derivada da Fase 1.

Estrutura de cada tela:
```
### Tela: [Nome da Tela]

**Objetivo Estratégico:**
[1 parágrafo longo explicando a finalidade]

**Estrutura de Componentes e Layout:**
- **Cabecalho/Navegação:** [descrição dos menus e breadcrumbs]
- **Área Principal (Conteúdo):** [grid, campos, colunas do DataTable — MÍNIMO 4 campos citados]
- **Botões e Ações:** [lista de botões com textos exatos, ex: [Salvar], [Cancelar], [Ver Detalhes]]

**Fluxo de Interação e Regras:**
[1 parágrafo explicando o que acontece ao usar a tela]
```

---

### SECAO 4: Itens Não Inclusos (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/01_itens_nao_inclusos.md` e cole o conteúdo integral aqui. NÃO REESCREVA. NÃO RESUMA. COPIE PALAVRA POR PALAVRA.

---

### SECAO 5: Planejamento e Metodologia + Change Request (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/02_planejamento_metodologia.md` e cole o conteúdo integral. Em seguida, abra `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/02_regras_change_request.md` e cole o conteúdo integral. NÃO REESCREVA. NÃO RESUMA.

---

### SECAO 6: Garantia e SLA (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/03_garantia_sla.md` e cole o conteúdo integral aqui. NÃO REESCREVA. NÃO RESUMA. COPIE PALAVRA POR PALAVRA.

---

### SECAO 7: Transição e Treinamento (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/04_transicao_treinamento.md` e cole o conteúdo integral aqui. NÃO REESCREVA. NÃO RESUMA. COPIE PALAVRA POR PALAVRA.

---

### SECAO 8: Hospedagem (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/05_hospedagem_inicial.md` e cole o conteúdo integral aqui. NÃO REESCREVA. NÃO RESUMA. COPIE PALAVRA POR PALAVRA. REMOVA o diagrama Mermaid deste bloco, pois usaremos a versão de alta fidelidade na próxima seção.

---

### SECAO 9: Mapa da Estrutura (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/08_mapa_da_estrutura.md` e cole o conteúdo integral aqui. Este bloco contém o diagrama de arquitetura de alta fidelidade (Base64). COPIE PALAVRA POR PALAVRA.

---

### SECAO 10: Plano de Manutenção Contínua (COPIAR VERBATIM)
> **INSTRUCAO CRITICA:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/07_plano_manutencao.md` e cole o conteúdo integral aqui. NÃO REESCREVA. NÃO RESUMA. COPIE PALAVRA POR PALAVRA.

---

### SECAO 11: Prazo, Deslocamento e Material (CONTEUDO GERADO PELA IA)
- **Prazo:** Estime o prazo em semanas baseado na complexidade do escopo.
- **Material:** Liste os documentos que o cliente precisa entregar.

---

### SECAO 12: Cronograma (CONTEUDO GERADO PELA IA)
Tabela Markdown com colunas: Fase, Atividade Principal, Período (em semanas).

---

### SECAO 13: Validade da Proposta (CONTEUDO GERADO PELA IA)
Informe que a validade da proposta é de 15 dias corridos.

---

### SECAO 14: Condições Comerciais (COPIAR VERBATIM + Tabela de Investimento)
> **INSTRUCAO CRITICA:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/06_condicoes_comerciais.md` e cole o conteúdo integral incluindo a tabela de plano de pagamento e o bloco de assinatura com os dados da WAB. NÃO REESCREVA. NÃO RESUMA. Antes do conteúdo do bloco, insira também:
> - Uma tabela Markdown de Investimento em Desenvolvimento com os módulos do sistema e seus valores estimados.
> - Uma linha de total geral.
> - Substitua `[NOME_DO_CLIENTE]` pelo nome real do cliente.

---

## 4. VERIFICACAO FINAL ANTES DE SALVAR
Antes de salvar o arquivo, confirme mentalmente:
- [ ] `00_apresentacao.md` foi copiada como a SEÇÃO 1?
- [ ] O Stories da SEÇÃO 2 reflete o problema do cliente?
- [ ] O bloco `01_itens_nao_inclusos.md` foi copiado integralmente?
- [ ] O bloco `02_planejamento_metodologia.md` foi copiado integralmente?
- [ ] O bloco `02_regras_change_request.md` foi copiado integralmente?
- [ ] O bloco `03_garantia_sla.md` foi copiado integralmente com a tabela de SLA?
- [ ] O bloco `04_transicao_treinamento.md` foi copiado integralmente?
- [ ] O bloco `05_hospedagem_inicial.md` foi copiado integralmente (sem o Mermaid)?
- [ ] O bloco `08_mapa_da_estrutura.md` foi copiado integralmente (com imagem Base64)?
- [ ] O bloco `07_plano_manutencao.md` foi copiado integralmente?
- [ ] O bloco `06_condicoes_comerciais.md` foi copiado integralmente com assinatura da WAB?
- [ ] O arquivo final NÃO contém emojis nem ícones?
- [ ] O arquivo final NÃO contém reticências (...) ou "etc"?

Salve em `/Volumes/Dados/work/documentos/orcamentos_gerados/[CLIENTE]_[PROJETO]/ORCAMENTO_SYMFONY_[CLIENTE].md`.
