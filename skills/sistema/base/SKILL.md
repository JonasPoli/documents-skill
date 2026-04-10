---
name: Gerador de Orçamento de Sistema (Detalhamento Completo)
description: Transforma informações simples do usuário em uma proposta de sistema completa, detalhada e bem organizada.
---

# Skill: Gerador de Orçamento de Sistema (Desenvolvimento)

**INSTRUÇÃO DE ESTILO:** Antes de começar, leia fielmente o arquivo `skills/forma-de-escrever.md` para garantir que o vocabulário e o tom de voz estejam atualizados.

**REGRA DE OURO:** Os blocos de texto padrão da agência já estão prontos em arquivos `.md`. Sua tarefa é COPIAR O CONTEÚDO DELES EXATAMENTE como estão para dentro do orçamento. Você NÃO deve reescrever ou resumir esse blocos. Os textos são padronizados e fundamentais para a segurança comercial e jurídica da agência.

**REGRA DE DETALHAMENTO:** Não utilize pontos suspensivos ("..."), "etc", nem resuma as funções do sistema. Apresente de forma completa todos os pontos que o usuário informou.

**REGRA DE VISUAL:** Não use ícones ou emojis. Siga uma apresentação limpa e profissional.

---

## 1. ENTENDIMENTOS INICIAIS
Pergunte ao usuário:
1. "Qual o objetivo principal do sistema e o que ele irá gerenciar?"
2. "Qual o nome do cliente e o tom de voz do texto?"

---

## 2. ORGANIZAÇÃO DAS INFORMAÇÕES (ETAPA INICIAL)
Antes de escrever o orçamento, organize as informações:
- Para CADA item principal: 1 Tela de Listagem (Tabela) + 1 Tela de Formulário (Cadastro).
- Se o item tiver informações relacionadas: adicionar 1 Tela de Detalhes.

---

## 3. GERAÇÃO DA PROPOSTA (14 SEÇÕES EM ORDEM)

### SEÇÃO 1: Apresentação da Empresa (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/00_apresentacao.md` e cole o conteúdo todo aqui. Não altere nada. Esta é a primeira parte da proposta.

---

### SEÇÃO 2: Introdução (CONTEÚDO GERADO PELA IA)
Escreva pelo menos 4 parágrafos claros contando a história do projeto, as necessidades do cliente e como a WAB irá resolvê-las.

---

### SEÇÃO 3: O que será desenvolvido (CONTEÚDO GERADO PELA IA)
Para cada tela planejada, use a seguinte estrutura:
```
### Tela: [Nome da Tela]

**Objetivo do item:**
[1 parágrafo claro explicando para que serve a tela]

**Estrutura e Organização:**
- **Topo e Navegação:** [menus e caminhos da tela]
- **Conteúdo Principal:** [o que aparece na tela — cite pelo menos 4 pontos]
- **Botões e Ações:** [lista de botões com os textos exatos]

**Como funciona a interação:**
[1 parágrafo explicando como o usuário usa a tela]
```

---

### SEÇÃO 4: O que não faz parte do projeto (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/01_itens_nao_inclusos.md` e cole o conteúdo todo aqui.

---

### SEÇÃO 5: Planejamento e Mudanças no Plano (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra os arquivos `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/02_planejamento_metodologia.md` e `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/02_regras_change_request.md` e cole o conteúdo de ambos aqui.

---

### SEÇÃO 6: Garantia e Suporte (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/03_garantia_sla.md` e cole o conteúdo todo aqui, incluindo a tabela de prazos.

---

### SEÇÃO 7: Treinamento e Entrega (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/04_transicao_treinamento.md` e cole o conteúdo todo aqui.

---

### SEÇÃO 8: Hospedagem e Servidores (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/05_hospedagem_inicial.md` e cole o conteúdo aqui. REMOVA desenhos técnicos (Mermaid) desta parte.

---

### SEÇÃO 9: Organização da Estrutura (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/08_mapa_da_estrutura.md` e cole o conteúdo todo aqui. Este bloco contém a imagem técnica da estrutura.

---

### SEÇÃO 10: Plano de Manutenção (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/07_plano_manutencao.md` e cole o conteúdo todo aqui.

---

### SEÇÃO 11: Prazos e Materiais (CONTEÚDO GERADO PELA IA)
- Prazo estimado em semanas.
- O que o cliente precisa nos enviar para começarmos.

---

### SEÇÃO 12: Cronograma (CONTEÚDO GERADO PELA IA)
Tabela simples com: Etapa, Atividade e Tempo estimado.

---

### SEÇÃO 13: Validade da Proposta (CONTEÚDO GERADO PELA IA)
Informe que a proposta vale por 15 dias.

---

### SEÇÃO 14: Valores e Pagamento (COPIAR EXATAMENTE + Tabela de Preços)
> **INSTRUÇÃO:** Antes do texto padrão, insira:
> 1. Tabela com os valores de cada parte do sistema.
> 2. O valor total do investimento.
> 3. Em seguida, abra `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/06_condicoes_comerciais.md` e cole o conteúdo incluindo a forma de pagamento e os dados de assinatura da WAB. Troque `[NOME_DO_CLIENTE]` pelo nome real do cliente.

---

## 4. CONFERÊNCIA FINAL
Antes de salvar, confirme:
- [ ] A Apresentação da Empresa é a primeira seção?
- [ ] A introdução reflete bem as necessidades do cliente?
- [ ] Todos os blocos obrigatórios foram copiados sem alterações?
- [ ] O texto está limpo, sem ícones ou emojis?
- [ ] O texto está claro e sem termos como "etc" ou pontos suspensivos?

Salve o arquivo na pasta do cliente.
