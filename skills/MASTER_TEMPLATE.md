# **MASTER TEMPLATE - BIBLIOTECA DE COMPONENTES DE ORÇAMENTO**

Este documento contém a estrutura principal e os blocos básicos para todos os orçamentos da WAB Agência Digital. Use estes exemplos para garantir que cada proposta seja completa, detalhada e traga descrições claras de como as telas serão organizadas.

> [!IMPORTANT]
> **ESTILO DE ESCRITA (OBRIGATÓRIO):** Antes de gerar qualquer texto, você DEVE ler o arquivo `skills/forma-de-escrever.md`. Este documento é atualizado com frequência e contém as regras mais recentes de tom de voz, vocabulário e estilo que devem ser seguidas fielmente.
> **REGRA DE IDIOMA E DETALHAMENTO:** Todas as interfaces descritas devem utilizar o idioma **Português do Brasil (PT-BR)**.
> **REGRA PARA O CONTEÚDO (MUITO IMPORTANTE):** É fundamental não resumir o conteúdo. NÃO utilize pontos suspensivos ("..."), NÃO utilize "etc" e NÃO agrupe funcionalidades. Se o cliente pediu "um blog", você DEVE detalhar de forma completa a listagem, as tags, categorias, busca, autor, SEO, cache e comentários. Escreva parágrafos claros e bem explicados.

---

## 0. REFERÊNCIAS REAIS
Para garantir que as informações estejam corretas, a IA deve SEMPRE consultar os arquivos Markdown em:
`/Volumes/Dados/work/documentos/modelos/extracao_automatica/`

## 0.1. DESCRIÇÕES DE TELAS (FORMATO OBRIGATÓRIO)
Sempre que o orçamento descrever módulos ou páginas, a IA deve gerar **descrições detalhadas** para **CADA SEÇÃO OU TELA IMPORTANTE**.

> [!CAUTION]
> **REGRA DE APRESENTAÇÃO:** Não crie arquivos HTML, não use o `browser_subagent`, `generate_image`, ou códigos de imagem (Base64). Toda a interface deve ser explicada apenas em texto.

**MODELO DE DESCRIÇÃO DE TELA:**
Para **CADA** tela ou seção (ex: Home, Quem Somos, Painel de Controle, Configurações), você **DEVE** seguir esta estrutura em Markdown. Não pule nenhum tópico:

```markdown
### 🖥️ Tela/Seção: [Nome Exato da Tela ou Seção]

**Objetivo do item:**
[Escreva um parágrafo claro descrevendo qual problema esta tela resolve e por que ela é importante para o sistema ou site.]

**Estrutura e Organização:**
- **Topo e Navegação:** [Descreva os menus, caminhos (breadcrumbs), logotipos e links que aparecem no topo desta tela.]
- **Conteúdo Principal:** [Descreva detalhadamente o que aparece na tela (tabelas, textos, formulários). Cite pelo menos 4 campos ou elementos visuais.]
- **Botões e Ações:** [Liste os botões disponíveis, sugerindo cores simples (ex: 'Botão verde para [Salvar]') e para onde eles levam o usuário.]

**Como funciona a interação:**
[Explique em um parágrafo o que acontece quando o usuário clica nos itens. Ex: 'Ao clicar em Salvar, o sistema confere os dados e mostra uma mensagem de sucesso no alto da tela.']
```


## 0.2. ORGANIZAÇÃO E ENTREGA
Regras para salvar o arquivo:
1. **Pasta do Cliente:** `/Volumes/Dados/work/documentos/orcamentos_gerados/[NOME_DO_CLIENTE]_[PROJETO]/`
2. **Nome do Arquivo:** Salvar como `[NOME_DO_ARQUIVO].md`.

## 1. COMPONENTES OBRIGATÓRIOS DA PROPOSTA
A IA deve inserir estas seções EXATAMENTE nesta ordem. **NÃO CRIE SEÇÕES NOVAS. NÃO REMOVA SEÇÕES.**

### A. Capa e Carta de Apresentação
### B. Resumo do Orçamento
"O objetivo deste documento é apresentar o que está previsto para o desenvolvimento do [Projeto] para o cliente [Cliente]..." (escreva pelo menos 2 parágrafos).
### C. Cenário Geral
Explique o contexto e as necessidades do cliente. (mínimo de 3 parágrafos).
### D. Tecnologia Utilizada
Liste pelo menos 4 vantagens de forma clara (Segurança, Facilidade de uso, Rapidez, Crescimento do sistema).
### E. Estrutura do Novo Sistema/Site (A parte principal)
Para *cada* módulo ou página, use o **MODELO DE DESCRIÇÃO DE TELA** (item 0.1).
### F. Itens Não Inclusos
(Copie as regras sobre: Conteúdo do cliente, sistemas de terceiros, suporte após a entrega).
### G. Prazo de Entrega e Materiais Necessários
### H. Valores, Validade e Formas de Pagamento


---

## 2. EXEMPLOS PARA INSPIRAÇÃO

### Seção: Banner Principal (Destaque)
- **Visual**: "Ocupará toda a largura da tela com uma foto de alta qualidade..."
- **Técnico**: "Espaço principal com carregamento rápido das imagens..."

### Seção: Painel de Controle
- **Uso no dia a dia**: "Focado em produtividade: lista de tarefas e filtros rápidos..."

### Seção: Hospedagem
- **Segurança**: "Proteção ativa contra ataques e monitoramento 24 horas..."

## 6. REGRAS PADRÃO
**Responsabilidade pelo Conteúdo:** "O cliente é responsável pela veracidade das informações fornecidas..."
**Validade:** "Esta proposta é válida por 30 dias..."
