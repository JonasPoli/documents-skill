---
name: Gerador de Orçamento de Sistema Symfony (Desenvolvimento de Sistemas)
description: Cria orçamentos detalhados e completos para sistemas personalizados, seguindo a estrutura de 14 seções da WAB.
---

# Skill: Gerador de Orçamento Site Symfony

**INSTRUÇÃO DE ESTILO:** Antes de começar, leia fielmente o arquivo `skills/forma-de-escrever.md` para garantir que o vocabulário e o tom de voz estejam atualizados.

**REGRA DE OURO (MÁXIMA PRIORIDADE):** O usuário enviará um pedido curto. O SEU DEVER É DETALHAR essa proposta para que ela seja completa e robusta. Você não deve enviar respostas curtas. Use obrigatoriamente o **Modelo de Descrição de Tela** para CADA página do site.

**REGRA DE OURO:** Os blocos de texto padrão da agência já estão prontos em arquivos `.md`. Sua tarefa é COPIAR O CONTEÚDO DELES EXATAMENTE como estão para dentro do orçamento. Você NÃO deve reescrever ou resumir esses blocos. Copie o texto integral de cada arquivo. Esses textos são padronizados e não devem ser alterados.

---

## 1. ENTENDIMENTOS INICIAIS
Pergunte ao usuário:
1. "Qual o objetivo principal do sistema?"
2. "Qual o nome da empresa?"
3. "Quem serão os usuários? (Ex: Administrador, Funcionário, Cliente)?"

---

## 2. ETAPA 1: ORGANIZAÇÃO DAS INFORMAÇÕES (OBRIGATÓRIO)
Gere o arquivo `ENTITIES_[CLIENTE].md` na pasta do orçamento com os seguintes pontos:

**Passo 1.1:** Liste o que o sistema irá gerenciar e quem terá acesso a cada parte.
**Passo 1.2:** REGRA DE TELAS. Para cada item principal, defina obrigatoriamente:
- 1 Tela de Listagem (Tabela com busca e botões de ação).
- 1 Tela de Formulário (Para cadastrar ou editar).
- 1 Tela de Detalhes (Caso o item tenha informações relacionadas).

---

## 3. ETAPA 2: GERAÇÃO DA PROPOSTA (14 SEÇÕES EM ORDEM)

O arquivo final deve ser salvo como `ORCAMENTO_SYMFONY_[CLIENTE].md`. Siga esta ordem exata:

> [!CAUTION]
> **PROIBIDO usar emojis ou ícones** nos textos. Use uma linguagem limpa e profissional.

---

### SEÇÃO 1: Apresentação da Empresa (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/00_apresentacao.md` e cole o conteúdo todo aqui. Não altere nada.

---

### SEÇÃO 2: Introdução (CONTEÚDO GERADO PELA IA)
Escreva 4 parágrafos claros explicando o problema do cliente e como a solução da WAB irá ajudar, de forma direta e fácil de entender.

---

### SEÇÃO 3: O que será desenvolvido (CONTEÚDO GERADO PELA IA)
Esta é a parte principal. Use o **Modelo de Descrição de Tela** para cada tela planejada na Etapa 1.

Estrutura de cada tela:
```
### Tela: [Nome da Tela]

**Objetivo do item:**
[1 parágrafo explicando para que serve a tela]

**Estrutura e Organização:**
- **Topo e Navegação:** [menus e caminhos da tela]
- **Conteúdo Principal:** [o que aparece na tela — cite pelo menos 4 pontos]
- **Botões e Ações:** [lista de botões com os textos exatos, ex: [Salvar], [Cancelar]]

**Como funciona a interação:**
[1 parágrafo explicando como usar a tela]
```

---

### SEÇÃO 4: O que não faz parte do projeto (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/01_itens_nao_inclusos.md` e cole o conteúdo todo aqui.

---

### SEÇÃO 5: Planejamento e Mudanças no Plano (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra os arquivos `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/02_planejamento_metodologia.md` e `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/02_regras_change_request.md` e cole o conteúdo de ambos aqui.

---

### SEÇÃO 6: Garantia e Suporte (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/03_garantia_sla.md` e cole o conteúdo todo aqui.

---

### SEÇÃO 7: Treinamento e Entrega (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/04_transicao_treinamento.md` e cole o conteúdo todo aqui.

---

### SEÇÃO 8: Hospedagem e Servidores (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/05_hospedagem_inicial.md` e cole o conteúdo todo aqui. REMOVA desenhos técnicos (Mermaid) desta parte.

---

### SEÇÃO 9: Organização da Estrutura (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/08_mapa_da_estrutura.md` e cole o conteúdo todo aqui. Este bloco contém a imagem da estrutura do sistema.

---

### SEÇÃO 10: Plano de Manutenção (COPIAR EXATAMENTE)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/07_plano_manutencao.md` e cole o conteúdo todo aqui.

---

### SEÇÃO 11: Prazos e Materiais (CONTEÚDO GERADO PELA IA)
- **Prazo:** Informe o prazo estimado em semanas.
- **Material:** Liste o que o cliente precisa nos enviar para começar o trabalho.

---

### SEÇÃO 12: Cronograma (CONTEÚDO GERADO PELA IA)
Tabela simples com: Etapa, Atividade e Tempo estimado.

---

### SEÇÃO 13: Validade da Proposta (CONTEÚDO GERADO PELA IA)
Informe que a proposta vale por 15 dias.

---

### SEÇÃO 14: Valores e Pagamento (COPIAR EXATAMENTE + Tabela de Preços)
> **INSTRUÇÃO:** Abra o arquivo `/Volumes/Dados/work/documentos/skills/sistema/blocos_orcamento/06_condicoes_comerciais.md` e cole o conteúdo aqui. Antes disso, insira:
> - Uma tabela com os valores de cada parte do sistema.
> - O valor total do investimento.
> - Troque `[NOME_DO_CLIENTE]` pelo nome real do cliente.

---

## 4. CONFERÊNCIA FINAL
Antes de salvar, confirme:
- [ ] Todas as seções obrigatórias foram incluídas?
- [ ] O texto está claro e fácil de entender?
- [ ] Não existem siglas técnicas sem explicação?
- [ ] Não existem ícones ou emojis nos textos?
- [ ] Não existem termos como "etc" ou pontos suspensivos (...)?

Salve o arquivo na pasta do cliente como `ORCAMENTO_SYMFONY_[CLIENTE].md`.
cias (...) ou "etc"?

Salve em `/Volumes/Dados/work/documentos/orcamentos_gerados/[CLIENTE]_[PROJETO]/ORCAMENTO_SYMFONY_[CLIENTE].md`.
