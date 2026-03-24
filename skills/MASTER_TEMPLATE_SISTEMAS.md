# MASTER TEMPLATE: SISTEMAS WAB

Este é o molde DE OBRIGATÓRIA ADESÃO para orçamentos de **SISTEMAS** (ex: Symfony, Laravel, CRMs, ERPs).
Os orçamentos de sistemas são fundamentalmente diferentes de sites institucionais. Eles exigem um nível de detalhamento brutal, com ampla carga textual e mapeamento completo da arquitetura de banco de dados e telas.

> [!IMPORTANT]
> **REGRA DE IDIOMA OBRIGATÓRIA:** Todo o conteúdo gerado, incluindo botões, textos de interface, listagens, legendas de mockups e qualquer elemento de UI/UX, deve estar rigorosamente em **Português do Brasil (PT-BR)**. Proibi-se o uso de termos em inglês ou placeholders genéricos em outro idioma.


## A REGRA DAS ENTIDADES (Passo Interno, Pré-Orçamento)
Antes de escrever o orçamento final, a Skill deve SEMPRE gerar um arquivo markdown interno (chamado `ENTITIES_[CLIENTE].md`) na pasta do orçamento.
Neste arquivo, você mapeará a Estrutura do Banco de Dados:
- **Tabelas Principais / Entidades do Domínio**
- **Relacionamentos (1:N, N:N)**
- **Tipos de Usuários (Roles/Acessos)**
- **Definição de CRUDs**: Baseado nas entidades, liste EXATAMENTE quais telas de listagem e formulário precisarão existir para gerir o sistema.
*Apenas APÓS ter esse arquivo interno de entidades, a Skill pode prosseguir para gerar as telas e a Estrutura do Orçamento.*

---

## ESTRUTURA DO ORÇAMENTO (O Documento do Cliente)
O arquivo final (MD e HTML) deve OBRIGATORIAMENTE conter as seguintes seções EXATAS, nesta mesma ordem (Use `##` para os cabeçalhos principais):

### 1. Início
- **Parágrafos Iniciais**: Carta de apresentação formal abordando os 20 anos da agência e a solução proposta.
- **Descrição do Orçamento**: O que está sendo orçado, de forma executiva.
- **Cenário Geral**: Contextualização do problema atual do cliente e por que o sistema é necessário.
- **Resumo do Sistema**: Um "Elevator Pitch" técnico da plataforma a ser desenvolvida.

### 2. Escopo e Módulos
Aqui a densidade precisa ser colossal.
- **Acesso ao Sistema e Proteção**: Detalhe os métodos de autenticação, níveis de segurança, 2FA, RBAC.
- **Módulos / Tipos de Usuário**:
  - Ex: *Módulo Administrador*, *Módulo Usuário Tipo A*, *Área Pública*...
  - Para cada módulo, descreva exaustivamente as permissões e funcionalidades disponíveis.
- **Telas**: Baseado nas Entidades pré-geradas, descreva CADA tela do sistema (Dashboards, Todos os CRUDs, Cadastros, Detalhes).
  - **A REGRA DO DATATABLE**: Todas as listagens devem simular um DataTable. É obrigatório ter uma coluna de "Ação" com botões contextuais (ex: Editar, Ver Projetos, Detalhes, Histórico) garantindo que cada botão abra uma tela específica. Se a entidade X possui Y, a listagem de X deve ter um botão para ver Y.
  - **A REGRA DO MESTRE-DETALHE (MASTER-DETAIL)**: Toda vez que estiver visualizando (não editando) um registro Mestre (ex: Cliente), a tela de "Detalhes" DEVE listar seus registros filhos (ex: Projetos deste cliente) com botões de ação e um botão "Novo [Filho]".
  - **OBRIGATÓRIO:** Para CADA TELA (toda listagem, todo form, todo dashboard, todo profile/detalhe), deve haver um **Print (Layout HTML)** colado com uma descrição explicativa do uso prático da tela para o usuário final. Exemplo: *![Form Cliente](base64)* "Esta tela destina-se ao registro rápido de dados..."
  - **Verificação de Fluxo**: Antes de gerar o orçamento, assegure-se de que todas as áreas projetadas tenham um caminho visual (link/botão) para serem abertas.
- **Relatórios**: Liste e descreva todos os possíveis relatórios que o sistema deve gerar cruzando os dados das entidades (ex: Extratos, Consolidados por Vendedor, Funil).

### 3. Itens não Inclusos
- Descrever conteúdo, integrações externas de terceiros, revisões ortográficas não inerentes.

### 4. Suporte Técnico
- Como funciona o canal de dúvidas (e-mail, telefone).

### 5. Hora Técnica
- Definir o valor padrão de hora técnica para projetos WAB e esclarecer que manutenções fora de escopo são taxadas por esta hora (R$ 220,00).

### 6. Logística do Sistema
- Definição técnica dos repositórios, versionamento e subida em produção.

### 7. Hospedagem
- **Estrutura Física**: Onde o servidor se encontra, proteção.
- **Hospedagem Inicial & Da Aplicação**: Explicitar que a inicial pode mudar com o uso.
- **Serviços Inclusos**: Backup (12h/7d), Firewall de Rede, SSL, Uptime monitor, Email (Sendgrid).

**Mapa da estrutura**  
Abaixo segue um mapa de como planejamos montar a estrutura física que conterá o sistema:

# 

# **![][image1]**

[image1]: <data:image/png;base64,INSERA_O_CÓDIGO_AQUI>

### 8. Evolução Contínua (Plano de Manutenção e Suporte)
- **Objetivo**: Garantir a estabilidade da ferramenta.
- **Serviços Inclusos**: Correção de bugs a longo prazo, updates de framework de segurança.
- **Condições de Atendimento & SLA**: Tabela de criticidade.
- **Horas Excedentes & Contratação de Planos**: Explicar custos mensais e o que acontece se passar a franquia.

### 9. Outros Dados
- **Deslocamento**: Políticas de viagem se necessário implantar localmente.
- **Prazo de Entrega**: Definido em semanas a partir do OK, sujeito a aprovações lentas do cliente.

### 10. Material Para Desenvolvimento
- Documentos necessários da contratante (Marca, Manuais, API keys de parceiros).

### 11. Cronograma
- Tabela com: "Fase", "Mês/Semanas" e "Principais Atividades".
- Dividido estrategicamente em backend/database, frontend/telas, fase de testes/homologação e go-live.

### 12. Validade da Proposta
- Geralmente 15 dias.

### 13. Condições Comerciais
- Tabela de desenvolvimento e tabela de hospedagem mensal.
- Plano de Pagamento faseado.
- Bloco de Aceite de Assinatura com RG, nome, CPF.
