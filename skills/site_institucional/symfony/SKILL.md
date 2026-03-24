---
name: Gerador de Orçamento Site Symfony (ARQUITETURA DE SISTEMAS)
description: Cria orçamentos gigantescos, técnicos e comerciais para aplicações Symfony, baseados estritamente na estrutura de 13 seções para Sistemas.
---

# Skill: Gerador de Orçamento Site Symfony (ARQUITETURA DE SISTEMAS)

**REGRA DE OURO:** SISTEMAS SÃO DIFERENTES DE SITES. Você não deve usar a espinha dorsal comum. O seu trabalho é seguir estritamente o `/Volumes/Dados/work/documentos/skills/MASTER_TEMPLATE_SISTEMAS.md` e os arquivos de referência em `/Volumes/Dados/work/documentos/modelos/extracao_automatica/sistema/`.

Este processo possui **DUAS FASES OBRIGATÓRIAS**: Modelagem de Banco de Dados e Geração de Documento.

## 1. DESCOBERTA RÁPIDA
Solicite ao usuário:
1. "Resumo do objetivo do sistema."
2. "Nome da Empresa cliente?"
3. "Existem tipos de usuários diferentes? (Ex: Admin, Funcionário, Cliente)?"

## 2. FASE 1: A REGRA DAS ENTIDADES (OBRIGATÓRIO)
**PARE E GERE ISSO PRIMEIRO.**
Antes de pensar em front-end ou gerar o orçamento, você deve arquitetar as entidades.
Gere o arquivo `ENTITIES_[CLIENTE].md` e salve na pasta do cliente (`/Volumes/Dados/work/documentos/orcamentos_gerados/[CLIENTE]/`).
Este documento deve conter:
- **Tabelas Principais / Entidades do Domínio**: Liste as tabelas, campos essenciais (Ex: Clientes: id, nome, cnpj, status).
- **Tipos de Usuários (Roles)**: Defina controle de acesso (Ex: Admin vê tudo, Vendedor vê seus clientes).
- **Mapeamento de CRUDs e Telas**: Baseado nas entidades, faça uma lista exaustiva de EXATAMENTE quais telas (html) você precisará codificar no Passo 3. 
  - **ATENÇÃO À REGRA DO DATATABLE E MESTRE-DETALHE**: Se uma entidade possui filhos (ex: Cliente possui Projetos), você OBRIGATORIAMENTE deve listar uma tela de "Detalhes do Cliente" que lista os projetos dele. Toda listagem deve ter botões de ação contextuais.

## 3. FASE 2: PROTOCOLO DE PROTOTIPAGEM (TELAS)
Usando a lista de telas gerada na Fase 1:
1. Vá para `mockups/` dentro da pasta do cliente.
2. Usando um design unificado (Sidebar/Footer consistentes), codifique TODAS as telas em HTML. A WAB não aceita orçamentos de sistema onde uma tela citada não tem imagem. **Se o sistema tem 15 áreas, você gera 15 mockups.**
3. **DATATABLES E AÇÕES:** Nas telas de listagem, simule DataTables complexos. Se for a lista de "Clientes", coloque uma coluna "Ações" com botões [Editar], [Ver Projetos], [Detalhes]. 
4. **TELA DE DETALHES:** Para entidades mestres (ex: Cliente), a tela de "Visualização" NÃO é o formulário de edição. É uma tela de Detalhes que possui informações do cliente no topo e um DataTable embutido com seus filhos (Projetos) e um botão [Novo Projeto]. Verifique todo o fluxo (para onde cada botão aponta) antes de seguir.
5. Capture todos os prints.

## 4. FASE 3: A EXPANSÃO DO ORÇAMENTO (O CORE)
Ao gerar o documento final (MD e HTML), obrigatoriamente siga as **13 seções do MASTER_TEMPLATE_SISTEMAS.md**.

**Instruções Específicas para as 13 Seções:**
- **Início**: Mínimo de 4 parágrafos de storytelling sobre o problema do cliente.
- **Escopo e Módulos**: Divida por Tipos de Usuário. Cole as imagens capturadas na Fase 2. Explique a lógica de negócio por trás de cada tela (ex: "O grid possui filtros AJAX para CNPJ").
- **Relatórios**: Pense em relatórios inteligentes que o Symfony pode gerar (PDF/Excel) cruzando os dados das Entidades.
- **Condições de SLA e Hospedagem**: Utilize o boilerplate padrão da WAB (Hospedagem Inicial 10GB/1GB = R$ 1.430, SLA de 2h/4h/8h, Suporte Técnico).
- **Condições Comerciais e Hora Técnica**: Especifique a hora a R$ 220,00 e plano de pagamento 30/30/30/10.

## 5. GERAÇÃO E SALVAMENTO FINAL
- Gere o `ORCAMENTO_SYMFONY_[CLIENTE].md` e o `ORCAMENTO_SYMFONY_[CLIENTE].html`.
- Garanta que as imagens estejam incorporadas (Base64) ou linkadas de forma que funcionem perfeitamente ao colar no Google Docs.
- **ATENÇÃO AO ARQUIVO HTML**: O arquivo HTML DEVE conter tags HTML reais e semânticas (`<h1>`, `<h2>`, `<p>`, `<table>`, `<div class="mockup">`, etc) com CSS limpo. **NUNCA** apenas envolva texto Markdown cru em uma tag `<pre>` ou injete markdown não-processado dentro do `.html`. Ele deve ser um documento rico formatado para exibição visual imediata no navegador.
