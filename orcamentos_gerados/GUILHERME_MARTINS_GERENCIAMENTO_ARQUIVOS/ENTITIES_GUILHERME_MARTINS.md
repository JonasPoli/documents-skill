# ENTITIES: GUILHERME MARTINS - GERENCIAMENTO DE ARQUIVOS

## 1. Tipos de Usuários (Roles)
- **ROLE_ADMIN_GERAL**: Administrador do sistema. Pode moderar usuários, ver dashboards globais e gerenciar tipos de arquivos.
- **ROLE_USER**: Usuário normal (Pessoa Jurídica/Física). Precisa de aprovação após o cadastro. Pode enviar arquivos e ver seu próprio dashboard.

## 2. Tabelas / Entidades do Domínio

### Tabela: `usuarios`
- `id` (INT, PK)
- `email` (VARCHAR, Unique)
- `password` (VARCHAR)
- `roles` (JSON)
- `status_aprovacao` (ENUM: 'pendente', 'aprovado', 'bloqueado')
- `data_cadastro` (DATETIME)

### Tabela: `dados_empresa` (Relacionada a `usuarios` 1:1)
- `id` (INT, PK)
- `usuario_id` (INT, FK)
- `cnpj` (VARCHAR)
- `nome_fantasia` (VARCHAR)
- `razao_social` (VARCHAR)
- `email_corporativo` (VARCHAR)
- `telefone_principal` (VARCHAR)
- `cep` (VARCHAR)
- `logradouro` (VARCHAR)
- `numero` (VARCHAR)
- `complemento` (VARCHAR)
- `municipio` (VARCHAR)
- `estado` (VARCHAR)

### Tabela: `dados_pessoa_fisica` (Relacionada a `usuarios` 1:1)
- `id` (INT, PK)
- `usuario_id` (INT, FK)
- `nome` (VARCHAR)
- `cpf` (VARCHAR)
- `email_pessoal` (VARCHAR)
- `telefone_celular` (VARCHAR)

### Tabela: `tipos_arquivo`
- `id` (INT, PK)
- `nome` (VARCHAR) - Ex: PDF, DOCX, Imagem

### Tabela: `arquivos`
- `id` (INT, PK)
- `usuario_id` (INT, FK) - Quem enviou
- `tipo_id` (INT, FK) - Qual o tipo
- `data_horario` (DATETIME)
- `identificacao` (VARCHAR)
- `finalidade` (VARCHAR)
- `titulo` (VARCHAR)
- `nome_arquivo` (VARCHAR) - Nome físico no servidor
- `nome_destinatario` (VARCHAR)
- `email_destinatario` (VARCHAR)
- `hash_link` (VARCHAR, Unique) - Para o link de download único
- `status` (ENUM: 'em trânsito', 'recebido') - Default 'em trânsito'
- `data_recebimento` (DATETIME, Nullable)

## 3. Fluxos de Negócio / CRUDs
- **CRUD Usuários (Admin)**: Listagem de usuários pendentes de aprovação, bloqueio/desbloqueio.
- **Formulário de Cadastro (Público/Registro)**: Captura de dados PJ e PF.
- **Dashboard Admin**: KPIs (Total usuários, Total documentos, Total admins).
- **Dashboard Usuário**: KPIs (Total enviados), Gráfico (6 meses), Listagem últimos docs.
- **Formulário Entrada de Arquivo (Usuário)**: Seleção de tipo, dados do destinatário, upload.
- **Lógica de Download**: Quando acessado via `hash_link`, dispara alteração de `status` para 'recebido' e grava `data_recebimento`.
