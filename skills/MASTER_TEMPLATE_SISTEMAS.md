# MASTER TEMPLATE: SISTEMAS WAB

Este é o molde DE OBRIGATÓRIA ADESÃO para orçamentos de **SISTEMAS**.
Projetos de sistema exigem densidade técnica absoluta. Modelos de IA devem seguir regras matemáticas estritas aqui para não resumirem o escopo.

> [!IMPORTANT]
> **REGRA ANTI-RESUMO E VOLUME:** Todo o conteúdo gerado deve estar em **Português do Brasil (PT-BR)**. É PROIBIDO O USO DE "etc", "...", ou jargões que encurtem a explicação. O orçamento gerado final DEVE SER EXAUSTIVO (objetivo: gerar um documento longo o suficiente para justificar o valor comercial).

# DIRETRIZES GERAIS
Leia o arquivo `diretrizes.md`. Siga o modelo `.md` como uma máscara rígida. Não alucine formatos fora deste padrão.


## A REGRA MATEMÁTICA DAS ENTIDADES (Passo Interno, Pré-Orçamento)
Você deve SEMPRE gerar um arquivo markdown interno (`ENTITIES_[CLIENTE].md`) na pasta do orçamento mapeando:
- **Tabelas Principais / Entidades do Domínio**
- **Relacionamentos (1:N, N:N)**
- **Tipos de Usuários (Roles/Acessos)**
- **Definição OBRIGATÓRIA de CRUDs**:
  > **REGRA MATEMÁTICA ESTREITA:** Para **CADA** entidade (tabela) listada acima, você DEVE listar, obrigatoriamente, NO MÍNIMO DUAS TELAS: 1 Tela de Listagem (DataTable) e 1 Tela de Formulário (Cadastro/Edição). Exceção apenas se for tabela de relação oculta.

*Somente APÓS gerar este arquivo interno, avance para a estrutura do documento.*

---

## ESTRUTURA DO ORÇAMENTO (O Documento do Cliente)
O arquivo final (.md) deve OBRIGATORIAMENTE conter as seguintes 13 seções EXATAS, nesta mesma ordem (sem remover NENHUMA):

### 1. Início
- **Parágrafos Iniciais**: Carta de apresentação formal (mínimo 2 parágrafos).
- **Descrição do Orçamento** e **Cenário Geral**: Explicar a dor resolvida exaustivamente.
- **Resumo do Sistema**: Um "Elevator Pitch" técnico.

### 2. Escopo e Módulos
**ESTA É A SEÇÃO MAIS IMPORTANTE. APLIQUE O "TEMPLATE ESTRITO DE WIREFRAME TEXTUAL" (Do MASTER_TEMPLATE.md) PARA CADA TELA.**
- **Acesso ao Sistema e Proteção**: Detalhe os métodos (2FA, RBAC, etc).
- **Módulos / Tipos de Usuário**: Para cada módulo, descreva exaustivamente as permissões.
- **Telas (Baseadas nas Entidades)**: A lista de telas deve ser obrigatoriamente a mesma do `ENTITIES_[CLIENTE].md`.
  - **A REGRA DO DATATABLE**: Todas as listagens devem ter uma coluna "Ação" com botões contextuais (Editar, Detalhes).
  - **A REGRA DO MESTRE-DETALHE**: A tela de "Detalhes" de um registro Mestre (ex: Cliente) DEVE listar seus filhos (ex: Projetos).
  - **OBRIGATÓRIO:** Use o Template Estrito de Wireframe Textual com tópicos Exatos (Objetivo Estratégico, Estrutura de Componentes, Fluxo de Interação). Nenhuma tela pode ter menos de referenciar 4 campos de dados.
- **Relatórios**: Liste e descreva pelo menos 3 formulários de relatórios PDF/Excel.

### 3. Itens não Inclusos
(Transcrever regras sobre conteúdo, integrações externas, revisões ortográficas).

### 4. Suporte Técnico
(Explicar canais: e-mail, telefone).

### 5. Hora Técnica
(Valor padrão R$ 220,00 para fora do escopo).

### 6. Logística do Sistema
(Repositórios, versionamento, deployment).

### 7. Hospedagem
**Estrutura Física**, **Hospedagem Inicial & Da Aplicação**, **Serviços Inclusos** (Backup, Firewall, SSL).
**Mapa da estrutura**  
Abaixo segue um mapa de como planejamos montar a estrutura física que conterá o sistema:

# 

# **![][image1]**

[image1]: <data:image/png;base64,INSERA_O_CÓDIGO_AQUI>

### 8. Evolução Contínua (Plano de Manutenção e Suporte)
**Serviços Inclusos**, **Condições de Atendimento & SLA**, **Horas Excedentes**.

### 9. Outros Dados
**Deslocamento** e **Prazo de Entrega**.

### 10. Material Para Desenvolvimento
Documentos necessários da contratante.

### 11. Cronograma
Tabela dividida em: Backend/Database, Frontend/Telas, Testes/Homologação, Go-live.

### 12. Validade da Proposta
(15 dias).

### 13. Condições Comerciais
Tabela de desenvolvimento, tabela de hospedagem e bloco de aceite.
