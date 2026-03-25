# Modelagem de Entidades: Guilherme Martins - Gerenciamento de Arquivos

## 1. Entidades do Banco de Dados

### 1.1. User (Usuário)
- **id**: int (primary key)
- **role**: string (ROLE_ADMIN, ROLE_USER)
- **status**: string (PENDENTE, APROVADO, BLOQUEADO)
- **email**: string (unique)
- **password**: string (hashed)
- **data_pj_cnpj**: string
- **data_pj_nome_fantasia**: string
- **data_pj_razao_social**: string
- **data_pj_email**: string
- **data_pj_telefone_principal**: string
- **data_endereco_cep**: string
- **data_endereco_logradouro**: string
- **data_endereco_numero**: string
- **data_endereco_complemento**: string
- **data_endereco_municipio**: string
- **data_endereco_estado**: string
- **data_pf_nome**: string
- **data_pf_cpf**: string
- **data_pf_email**: string
- **data_pf_telefone_celular**: string
- **created_at**: datetime

### 1.2. FileType (Tipo de Arquivo)
- **id**: int
- **name**: string (Ex: Nota Fiscal, Contrato, Laudo)
- **description**: text

### 1.3. File (Documento/Arquivo)
- **id**: int
- **user_id**: fk (User)
- **file_type_id**: fk (FileType)
- **identification**: string (entrada livre)
- **purpose**: text (entrada livre)
- **title**: string
- **file_path**: string (armazenamento físico)
- **recipient_name**: string
- **recipient_email**: string
- **status**: string (EM_TRANSITO, RECEBIDO)
- **hash_tracking**: string (para detectar download)
- **created_at**: datetime (editável)

---

## 2. Mapeamento de Telas (Regra Matemática)

### 2.1. Módulo Administrador Geral
- **Tela: Dashboard Geral** (KPIs de usuários, documentos, admins).
- **Tela: Listagem de Usuários** (DataTable com filtros de status e botões [Moderar], [Detalhes]).
- **Tela: Detalhes/Moderação de Usuário** (Visualização Master-Detail dos dados PF/PJ e botão [Aprovar/Reprovar]).
- **Tela: Listagem de Tipos de Arquivo** (DataTable com botões [Editar], [Novo]).
- **Tela: Cadastro de Tipo de Arquivo** (Formulário Simples).

### 2.2. Módulo Usuário Comum
- **Tela: Registro Inicial** (Formulário exaustivo com campos PJ, Endereço e PF).
- **Tela: Dashboard do Usuário** (Contadores, Gráfico de Envios 6 meses, Lista de Documentos Recentes).
- **Tela: Listagem de Meus Arquivos** (DataTable com status Em trânsito/Recebido).
- **Tela: Cadastro de Novo Arquivo** (Formulário com Select de Tipo, Upload e Dados do Destinatário).
- **Tela: Visualização de Arquivo** (Detalhes do envio e histórico de download).

### 2.3. Área Externa (Pública)
- **Tela: Landing de Download** (Detecta abertura para alterar status e libera arquivo).
