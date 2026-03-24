# MAPEAMENTO DE ENTIDADES: SISTEMA CRM UIA

**Data:** 23 de Março de 2026
**Cliente:** Agência UIA (Joaquim da Silva)
**Objetivo:** Centralizar clientes, projetos e histórico multimídia.

---

## 1. TIPOS DE USUÁRIOS (ROLES)
1. **ROLE_ADMIN**: Gestor da Agência UIA. Visão total sobre todos os clientes, projetos e faturamento.
2. **ROLE_MANAGER**: Gerente de Projetos. Cria projetos e adiciona histórico/arquivos.
3. **ROLE_CLIENT** (Opcional Expansão): Acesso restrito apenas aos seus próprios projetos na timeline.

---

## 2. ENTIDADES DE BANCO DE DADOS (DOMÍNIO)

### Entidade `User` (Usuários do Sistema)
- `id` (int, PK)
- `email` (string, Unique)
- `password` (string, Bcrypt hash)
- `roles` (json)
- `name` (string)
- `is_active` (boolean)

### Entidade `Customer` (Clientes da Agência)
- `id` (int, PK)
- `corporate_name` (string)
- `trade_name` (string)
- `cnpj_cpf` (string, Unique)
- `contact_email` (string)
- `contact_phone` (string)
- `created_at` (datetime)
- **Relacionamentos**: Possui N `Project`.

### Entidade `Project` (Projetos em Execução)
- `id` (int, PK)
- `title` (string)
- `status` (enum: pending, active, paused, finished)
- `start_date` (date)
- `end_date` (date, nullable)
- `customer_id` (int, FK -> Customer.id)
- **Relacionamentos**: Possui N `TimelineItem`.

### Entidade `TimelineItem` (Histórico de Interações)
- `id` (int, PK)
- `project_id` (int, FK -> Project.id)
- `user_id` (int, FK -> User.id) (Quem registrou)
- `description` (text)
- `created_at` (datetime)

### Entidade `MediaAttachment` (Arquivos e Mídias)
- `id` (int, PK)
- `timeline_item_id` (int, FK -> TimelineItem.id)
- `file_path` (string, caminho no S3/Storage)
- `file_type` (string, ex: audio/mpeg, image/png)
- `file_size` (int)

---

## 3. MAPEAMENTO DE TELAS DE UI (CRUDs)
Baseado nas entidades acima, o sistema exigirá OBRIGATORIAMENTE as seguintes telas:

### Módulo Administrativo / Gerencial (Global)
1. **Dashboard Overview**: Cards com totais (Clientes, Projetos Ativos, Mídias), gráficos de projetos mensais.
2. **Lista de Clientes (CRUD - Read)**: Tabela de `Customer` estilo DataTable com botões (Editar, Detalhes, Projetos).
3. **Tela de Detalhes do Cliente (Master-Detail)**: Visão consolidada do `Customer` contendo uma DataTable embutida listando todos os seus `Project` (com botão 'Novo Projeto').
4. **Formulário de Cliente (CRUD - Create/Update)**: Cadastro completo.
5. **Lista de Projetos (CRUD - Read)**: Tabela de `Project` estilo DataTable com botões de Ação.
6. **Tela de Detalhes do Projeto (Master-Detail)**: Visão consolidada do `Project` contendo uma DataTable embutida com todo o `TimelineItem` daquele projeto (com botão 'Novo Histórico/Mídia').
7. **Formulário de Projeto (CRUD - Create/Update)**: Associação de cliente existente e definição de prazos.
8. **Timeline de Histórico (CRUD - Read)**: Visão geral.
9. **Registro de Histórico e Mídia (CRUD - Create)**: Upload multipart.

### Relatórios (Reports)
10. **Relatório de Produção do Projeto**: PDF consolidado.

*Total Exato de Telas Mapeadas para Prototipagem:* **10 Telas**.
