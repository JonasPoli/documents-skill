---
name: Gerador de Orçamento Sistema (EXPANSÃO MASSIVA)
description: Transforma uma explicação curta do usuário em um orçamento de sistema enorme (15+ páginas), detalhado e modular.
---

# Skill: Gerador de Orçamento Sistema (Desenvolvimento)

**REGRA DE OURO:** O seu trabalho é **AMPLIAR PROFUNDAMENTE** a explicação do usuário. Consulte os exemplos reais em `/Volumes/Dados/work/documentos/modelos/extracao_automatica/sistema/`. **EXTRA:** Gere **um mockup visual (Base64) para cada módulo principal** (Dashboard, CRUDs, Relatórios) seguindo o workflow `generate_ui_mockup.md`.

**IMPORTANTE:** Todos os mockups, botões e textos de UI/UX devem estar estritamente em **Português do Brasil (PT-BR)**.


## 1. DESCOBERTA E TOM
Pergunte ao usuário apenas o essencial:
1. "Resuma o problema que o sistema vai resolver e cite as principais entidades (ex: Alunos, Vendas, Produtos)."
2. "Qual o nome do Cliente?"
3. "Qual o Tom Desejado? (Institucional, Técnico Robusto, Foco em ROI/Lucro)."

## 2. INSTRUÇÃO DE EXPANSÃO (O SEGREDO DO TAMANHO)
Ao receber a resposta do usuário, você **NÃO DEVE** fazer um orçamento curto. Você deve aplicar a **ESPINHA DORSAL FUNDECITRUS** (Seção 1 do `MASTER_TEMPLATE.md`).

> [!IMPORTANT]
> **REGRA DE TRANSCRIÇÃO EXAUSTIVA:** NUNCA "resuma" ou omita os campos, regras de negócio, dados de cadastro (ex: Nome, E-mail, CPF, Endereço completo, etc.) ou quantitativos descritos no prompt do usuário! Reflita e transcreva 100% de cada mínimo detalhe apontado em sua respectiva tela no documento do orçamento. A omissão de campos solicitados prejudica as restrições contratuais da agência.

Para a seção **E. Estrutura do Novo Sistema**:
Se o usuário pediu "um sistema de gestão de vendas", você deve subdividir isso em:
- **ÁREA DE AUTENTICAÇÃO E SEGURANÇA** (detalhe telas de login, recuperação de senha, logs de auditoria).
- **ÁREA ADMINISTRATIVA - DASHBOARD** (detalhe os gráficos visuais, atalhos, alertas do sistema).
- **MÓDULO DE GESTÃO DE CLIENTES** (detalhe a tabela CRUD, filtros avançados, validação de CPF/CNPJ, exportação de Excel).
- **MÓDULO DE VENDAS E CARRINHO** (detalhe a lógica de cálculo, cupons, gateway de pagamento).
- **MÓDULO DE RELATÓRIOS** (detalhe geração de relatórios de comissão, DRE técnico).
*Para cada página dessa, escreva 2 a 3 parágrafos de "Wireframe Textual" descrevendo como a tela se parece e como funciona.*

## 3. GERAÇÃO EM MARKDOWN
Gere o conteúdo em Markdown usando cabeçalhos (`#` e `##`) para estruturar as 8 seções obrigatórias da Espinha Dorsal Fundecitrus. Inclua também as seções Padrão de Tecnologia, Itens Não Inclusos, Prazo e a Tabela de Preços estruturada por Módulos.

## 4. SALVAMENTO E ENTREGA
Siga rigorosamente a seção **0.2. ORGANIZAÇÃO E ENTREGA** do `MASTER_TEMPLATE.md`:
1. Crie a pasta `/Volumes/Dados/work/documentos/orcamentos_gerados/[CLIENTE]_[PROJETO]/`.
2. Salve as versões `.md` e `.html`.
3. Crie a subpasta `mockups/` e mova para lá os arquivos HTML usados na geração das imagens.
