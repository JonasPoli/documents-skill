# **MASTER TEMPLATE - BIBLIOTECA DE COMPONENTES DE ORÇAMENTO**

Este documento contém a "espinha dorsal" e os blocos de construção para todos os orçamentos da WAB Agência Digital. Use estes exemplos para garantir que cada proposta seja enorme, detalhada e rica em "wireframes" textuais.

> [!IMPORTANT]
> **REGRA DE IDIOMA E VOLUME:** Todas as interfaces descritas devem utilizar o idioma **Português do Brasil (PT-BR)**.
> **REGRA ANTI-RESUMO (CRÍTICA):** É EXTRETAMENTE PROIBIDO resumir o conteúdo. NÃO utilize reticências ("..."), NÃO utilize "etc", NÃO agrupe funcionalidades. Se o cliente pediu "um blog", você DEVE detalhar exaustivamente listagem, tags, categorias, busca, autor, SEO, cache, comentários. Escreva parágrafos longos e densos.

---

## 0. REFERÊNCIAS REAIS (BIBLIOTECA DE EXTRAÇÃO)
Para garantir máxima fidelidade, a IA deve SEMPRE consultar os arquivos Markdown extraídos em:
`/Volumes/Dados/work/documentos/modelos/extracao_automatica/`

## 0.1. DESCRIÇÕES DE LAYOUT (WIREFRAMES TEXTUAIS) - FORMATO OBRIGATÓRIO
Sempre que o orçamento descrever módulos ou landing pages, a IA deve gerar **descrições textuais detalhadas** para **CADA SESSÃO SIGNIFICATIVA/TELA**.

> [!CAUTION]
> **REGRA DE LAYOUT:** É ABSOLUTAMENTE PROIBIDO criar arquivos HTML, utilizar `browser_subagent`, `generate_image`, ou Base64. Toda a interface deve ser descrita em texto.

**TEMPLATE ESTRITO DE WIREFRAME TEXTUAL:**
Para **CADA** tela ou seção (ex: Home, Quem Somos, Dashboard, Configurações), você **DEVE, OBRIGATORIAMENTE,** copiar e preencher a seguinte estrutura exata em Markdown. Não pule nenhum tópico:

```markdown
### 🖥️ Tela/Seção: [Nome Exato da Tela ou Seção]

**Objetivo Estratégico:**
[Escreva exatamente 1 parágrafo longo descrevendo qual dor do usuário esta tela resolve e qual a sua importância no sistema/site.]

**Estrutura de Componentes e Layout:**
- **Cabeçalho/Navegação:** [Descreva os menus, breadcrumbs, logos e links visíveis no topo desta tela específica.]
- **Área Principal (Conteúdo):** [Descreva exaustivamente o grid, a tabela, o texto hero ou os formulários. É OBRIGATÓRIO citar pelo menos 4 campos, colunas ou elementos visuais presentes aqui.]
- **Botões e CTAs:** [Liste todos os botões visíveis, suas cores sugeridas (ex: 'Botão primário verde [Salvar]') e para onde eles apontam.]

**Fluxo de Interação e Regras:**
[Escreva 1 parágrafo explicando o que acontece quando o usuário interage com a tela. Ex: 'Ao clicar em Salvar, o sistema valida o CPF via API externa e emite um alerta de sucesso toast no canto superior direito.']
```


## 0.2. ORGANIZAÇÃO E ENTREGA
Protocolo de salvamento estrito:
1. **Pasta Exclusiva:** `/Volumes/Dados/work/documentos/orcamentos_gerados/[NOME_DO_CLIENTE]_[PROJETO]/`
2. **Formato:** Salvar como `[NOME_DO_ARQUIVO].md`.

## 1. COMPONENTES ESTRUTURAIS OBRIGATÓRIOS (ESPINHA DORSAL FUNDECITRUS)
A IA deve inserir estas seções EXATAMENTE nesta ordem. **NÃO INVENTE SEÇÕES NOVAS. NÃO REMOVA SEÇÕES.**

### A. Capa e Carta de Apresentação
### B. Descrição do Orçamento
"O objetivo deste documento é descrever o desenvolvimento de [Projeto] para [Cliente]..." (expanda em pelo menos 2 parágrafos).
### C. Cenário Geral
Contextualize a dor do cliente. (mínimo de 3 parágrafos longos).
### D. Tecnologia Utilizada
Liste pelo menos 4 vantagens em bullet points detalhados (Segurança, Flexibilidade, Desempenho, Escalabilidade).
### E. Estrutura do Novo Sistema/Site (O Core do Orçamento)
Para *cada* módulo/página, aplique o **TEMPLATE ESTRITO DE WIREFRAME TEXTUAL** (item 0.1).
### F. Itens Não Inclusos
(Copie as cláusulas no Mínimo: Conteúdo do cliente, APIs de terceiros não logadas, SLA após entrega).
### G. Prazo de Entrega e Material
### H. Condições Comerciais, Validade e Pagamento


---

## 2. ESTRUTURAS DE EXEMPLO PARA INSPIRAÇÃO

### Seção: Banner Principal (Hero)
- **Persuasiva**: "Ocupará a largura total da tela com fotografia real 4K..."
- **Técnica**: "Canvas full-width com lazy loading..."

### Seção: Dashboard de Controle
- **Gestão Operacional**: "Foco na produtividade: lista de tarefas, filtros rápidos..."

### Seção: Hospedagem
- **Segurança Máxima**: "Firewall Ativo contra DDoS, monitoramento 24/7..."

## 6. CLÁUSULAS PADRÃO
**Responsabilidade de Conteúdo:** "O cliente compromete-se com a veracidade..."
**Validade:** "Proposta válida por 30 dias..."
