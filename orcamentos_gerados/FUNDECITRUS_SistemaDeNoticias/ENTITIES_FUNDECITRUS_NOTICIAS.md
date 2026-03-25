# MAPEAMENTO DE ENTIDADES — Sistema de Notícias Fundecitrus
**Orçamento:** OSI-260324-1  
**Data:** 24 de março de 2026

---

## 1. Entidade: Categoria

| Campo | Tipo | Regra |
|---|---|---|
| id | INT (PK) | Auto-incremento |
| nome | VARCHAR(100) | Obrigatório, único |
| slug | VARCHAR(120) | Gerado do nome, único, URL-friendly |
| descricao | TEXT | Opcional |
| cor | VARCHAR(7) | Hex opcional, ex: #008D36 |
| ativo | BOOLEAN | Padrão: true |
| created_at | DATETIME | Automático |
| updated_at | DATETIME | Automático |

**Relacionamentos:**
- Uma Categoria tem muitas Notícias (1:N)

**Telas Admin:**
- Listagem (DataTable): nome, slug, notícias vinculadas, status
- Formulário Criar/Editar

---

## 2. Entidade: Noticia

| Campo | Tipo | Regra |
|---|---|---|
| id | INT (PK) | Auto-incremento |
| titulo | VARCHAR(255) | Obrigatório |
| subtitulo | VARCHAR(500) | Opcional |
| slug | VARCHAR(300) | Obrigatório, único, URL-friendly |
| resumo | TEXT | Opcional (max 300 chars)|
| conteudo | LONGTEXT | Obrigatório — Rich Text HTML |
| imagem_capa | VARCHAR(255) | Caminho do arquivo |
| autor | VARCHAR(150) | Opcional |
| status | ENUM | rascunho / aguardando_revisao / publicada / despublicada |
| publicado_em | DATETIME | Data/hora de publicação (suporta agendamento) |
| categoria_id | INT (FK) | Chave estrangeira para Categoria |
| created_at | DATETIME | Automático |
| updated_at | DATETIME | Automático |

**Relacionamentos:**
- Uma Notícia pertence a uma Categoria (N:1)
- Uma Notícia pode ter muitas Tags (N:N via tabela pivô)

**Fluxo de Status:**
```
rascunho → aguardando_revisao → publicada
publicada → despublicada
despublicada → publicada
rascunho → publicada (acesso direto pelo Administrador)
```

**Telas Admin:**
- Listagem (DataTable): título, categoria, status, data, ações
  - Filtros: status, categoria, período
  - Busca textual: título
- Formulário Criar/Editar com:
  - Rich Text Editor para conteúdo
  - Upload de imagem de capa
  - Seleção de categoria
  - Gerenciamento de tags
  - Status e data de publicação (agendamento)

**Telas Públicas:**
- Home: listagem paginada, filtros, busca, destaque
- Página de Leitura: visualização completa com metadata

---

## 3. Entidade: Usuario

| Campo | Tipo | Regra |
|---|---|---|
| id | INT (PK) | Auto-incremento |
| nome | VARCHAR(150) | Obrigatório |
| email | VARCHAR(200) | Obrigatório, único — usado como login |
| senha_hash | VARCHAR(255) | Obrigatório — Bcrypt |
| perfil | ENUM | administrador / editor |
| ativo | BOOLEAN | Padrão: true |
| ultimo_acesso | DATETIME | Automático |
| created_at | DATETIME | Automático |
| updated_at | DATETIME | Automático |

**Telas Admin (acesso restrito ao Administrador):**
- Listagem (DataTable): nome, e-mail, perfil, status
- Formulário Criar/Editar
- Ações: ativar/desativar, redefinir senha

---

## 4. Entidade: Tag (opcional / fase 2)

| Campo | Tipo | Regra |
|---|---|---|
| id | INT (PK) | Auto-incremento |
| nome | VARCHAR(80) | Obrigatório, único |
| slug | VARCHAR(100) | Gerado do nome |

**Tabela Pivô:** noticia_tag (noticia_id, tag_id)

---

## 5. Resumo das Telas

### Área Pública
| # | Tela | Rota |
|---|---|---|
| 1 | Home do Portal de Notícias | `/noticias` |
| 2 | Página de Leitura | `/noticias/{slug}` |
| 3 | Listagem por Categoria | `/noticias/categoria/{slug}` |
| 4 | Busca | `/noticias/busca?q=` |

### Área Administrativa
| # | Tela | Rota |
|---|---|---|
| 1 | Login | `/admin/login` |
| 2 | Recuperação de Senha | `/admin/recuperar-senha` |
| 3 | Dashboard | `/admin/dashboard` |
| 4 | Listagem de Notícias | `/admin/noticias` |
| 5 | Criar Notícia | `/admin/noticias/criar` |
| 6 | Editar Notícia | `/admin/noticias/{id}/editar` |
| 7 | Listagem de Categorias | `/admin/categorias` |
| 8 | Criar Categoria | `/admin/categorias/criar` |
| 9 | Editar Categoria | `/admin/categorias/{id}/editar` |
| 10 | Listagem de Usuários | `/admin/usuarios` |
| 11 | Criar Usuário | `/admin/usuarios/criar` |
| 12 | Editar Usuário | `/admin/usuarios/{id}/editar` |
