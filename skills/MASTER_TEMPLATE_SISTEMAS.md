# MASTER TEMPLATE: SISTEMAS WAB

Este é o guia de **ADESÃO OBRIGATÓRIA** para orçamentos de **SISTEMAS**.
Projetos de sistema exigem um detalhamento completo de cada função. Você deve seguir as regras abaixo para garantir que o escopo esteja totalmente descrito, sem resumos.

> [!IMPORTANT]
> **REGRA DE DETALHAMENTO:** Todo o conteúdo gerado deve estar em **Português do Brasil (PT-BR)**. É PROIBIDO o uso de "etc", "..." ou qualquer termo que encurte a explicação. A proposta final DEVE SER COMPLETA e detalhada (o objetivo é ter um documento robusto que demonstre o valor do trabalho).

# DIRETRIZES GERAIS
> [!IMPORTANT]
> **ESTILO DE ESCRITA (OBRIGATÓRIO):** Antes de gerar qualquer texto, você DEVE ler o arquivo `skills/forma-de-escrever.md`. Este documento é atualizado com frequência e contém as regras mais recentes de tom de voz, vocabulário e estilo que devem ser seguidas fielmente.

Leia o arquivo `diretrizes.md` e siga o modelo como uma base fixa para o texto.

## Organização de Dados e Telas (Etapa Inicial)
Antes de escrever o orçamento, você deve organizar as informações do sistema criando um arquivo interno (`ENTITIES_[CLIENTE].md`) na pasta do projeto, mapeando:
- **Áreas Principais do Sistema** (O que o sistema gerencia)
- **Como as informações se conectam**
- **Tipos de Usuários e Níveis de Acesso**
- **Definição OBRIGATÓRIA de Telas**:
  > **REGRA DE TELAS:** Para **CADA** item principal do sistema, você deve listar, obrigatoriamente, NO MÍNIMO DUAS TELAS: 1 Tela de Listagem (Tabela de dados) e 1 Tela de Formulário (Para cadastrar ou editar informações).

*Somente APÓS organizar esses pontos, comece a escrever o documento do cliente.*

---

## ESTRUTURA DA PROPOSTA (O Documento para o Cliente)
O arquivo final (.md) deve conter as seguintes seções, exatamente nesta ordem:

### 1. Início
- **Palavras Iniciais**: Carta de apresentação de forma clara (mínimo 2 parágrafos).
- **Resumo do Orçamento** e **Cenário Geral**: Explique as necessidades que serão atendidas de forma detalhada.
- **Sobre o Sistema**: Uma apresentação rápida e objetiva sobre o que o sistema fará na prática.

### 2. O que será desenvolvido (Módulos e Telas)
**ESTA É A SEÇÃO MAIS IMPORTANTE. USE O "MODELO DE DESCRIÇÃO DE TELA" (Do MASTER_TEMPLATE.md) PARA CADA ITEM.**
- **Acesso ao Sistema e Segurança**: Detalhe como os usuários entrarão no sistema (senha, níveis de permissão, etc).
- **Tipos de Usuários**: Para cada tipo de usuário, descreva o que ele poderá ver ou fazer.
- **Telas do Sistema**: A lista de telas deve seguir o que foi planejado na etapa inicial.
  - **Regras das Tabelas**: Todas as listagens de dados devem ter um campo de "Ação" com botões para Editar ou Ver Detalhes.
  - **Visualização de Detalhes**: Ao ver os detalhes de um item principal (ex: um Cliente), o sistema deve mostrar as informações relacionadas a ele (ex: os Pedidos desse cliente).
  - **MODELO OBRIGATÓRIO:** Use o Modelo de Descrição de Tela com os tópicos: Objetivo, Estrutura e Como funciona a interação.

### 3. O que não faz parte do projeto
(Explique claramente as regras sobre conteúdo, integrações com outros sites e revisões).

### 4. Suporte e Atendimento
(Explique como o cliente pode entrar em contato: e-mail ou telefone).

### 5. Valores Adicionais
(Valor padrão de R$ 220,00 para pedidos extras que não estavam no plano original).

### 6. Como o sistema será entregue
(Informações sobre onde o código ficará guardado e como ele será colocado no ar).

### 7. Hospedagem e Segurança
**Estrutura do Servidor**, **Primeiros passos da Hospedagem** e **Serviços Inclusos** (Cópia de segurança/Backup, Proteção e Certificado de Segurança SSL).

### 8. Plano de Manutenção (Cuidado contínuo)
**O que está incluso**, **Prazo de atendimento** e **Horas extras**.

### 9. Prazo e Outros Detalhes
**Deslocamento** e **Prazo de Entrega**.

### 10. Material Necessário
Quais documentos ou acessos o cliente precisa enviar para começarmos.

### 11. Cronograma de Trabalho
Tabela dividida por etapas: Estrutura do Banco de Dados, Criação das Telas, Testes e Colocação no Ar.

### 12. Validade da Proposta
(15 dias).

### 13. Tabela de Valores e Aceite
Valores do desenvolvimento, valores da hospedagem e o espaço para a assinatura.
