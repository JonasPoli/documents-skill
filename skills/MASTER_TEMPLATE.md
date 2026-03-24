# **MASTER TEMPLATE - BIBLIOTECA DE COMPONENTES DE ORÇAMENTO**

Este documento contém a "espinha dorsal" e os blocos de construção para todos os orçamentos da WAB Agência Digital. Use estes exemplos para garantir que cada proposta seja enorme, detalhada e rica em "wireframes" textuais.

> [!IMPORTANT]
> **REGRA DE IDIOMA - UI/UX:** Todas as interfaces, botões, listagens e mockups gerados para os orçamentos devem utilizar obrigatoriamente o idioma **Português do Brasil (PT-BR)**.


---

## 0. REFERÊNCIAS REAIS (BIBLIOTECA DE EXTRAÇÃO)
Para garantir máxima fidelidade aos orçamentos históricos da WAB, a IA deve SEMPRE consultar os arquivos Markdown extraídos em:
`/Volumes/Dados/work/documentos/modelos/extracao_automatica/`

**Importante:** Procure na subpasta correspondente à categoria (sistema, hospedagem, tráfego, etc.) e use os textos reais como base para o tom de voz e detalhamento técnico.

## 0.1. PROTÓTIPOS VISUAIS (MOCKUPS AUTOMÁTICOS)
Sempre que o orçamento descrever módulos ou landing pages, a IA deve gerar protótipos visuais para **CADA SESSÃO SIGNIFICATIVA** descrita (ex: Hero, Galeria, Tabela de Preço, Cronograma). 

> [!CAUTION]
> **REGRA DE MOCKUP:** É ABSOLUTAMENTE PROIBIDO utilizar a ferramenta de AI Text-to-Image (`generate_image`). Toda captura deve ser feita construindo código HTML na máquina e mandando o `browser_subagent` salvá-la em `/tmp/mockup.png`.

Para cada sessão:
1. Criar um arquivo HTML/CSS/JS individual para a sessão em `/tmp/[sessao]_mockup.html`.
2. Renderizar e capturar um print com o `browser_subagent`.
3. Converter para Base64 e inserir no documento.
4. **Preservação:** Todos os arquivos HTML de cada sessão devem ser salvos na subpasta `mockups/` do projeto.
5. Inserir no orçamento usando a sintaxe:
   `![Módulo [Nome]][image_ref]`
   E ao final do documento:
   `[image_ref]: <data:image/png;base64,[CONTEÚDO_BASE64]>`

## 0.2. ORGANIZAÇÃO E ENTREGA
Para garantir a organização e facilidade de uso pelo cliente, a IA deve seguir este protocolo de salvamento:
1. **Pasta Exclusiva:** Cada orçamento deve ter sua própria pasta em `/Volumes/Dados/work/documentos/orcamentos_gerados/[NOME_DO_CLIENTE]_[PROJETO]/`.
2. **Formatos de Arquivo:** Dentro desta pasta, devem ser gerados:
   - `[NOME_DO_ARQUIVO].md`: O arquivo fonte original em Markdown.
   - `[NOME_DO_ARQUIVO].html`: Versão OBRIGATÓRIA formatada em HTML puro. Não exportar este arquivo é considerado falha crítica de roteiro.
   - `mockups/`: Uma subpasta contendo todos os arquivos `.html` originais usados para gerar os prints dos mockups.

## 5. COMPATIBILIDADE GOOGLE DOCS E GERAÇÃO HTML EXATA (DICA DE OURO):
Como o Google Docs não processa Base64 diretamente do texto Markdown, a IA deve SEMPRE gerar o arquivo espelho em formato **.html** seguindo a organização descrita no item 0.2.
- NUNCA referencie mockups locais (`<img src="file:///...">`) no arquivo HTML. Você DEVE OBRIGATORIAMENTE embutir os prints caputrados como **Base64** dentro das tags `<img>` do HTML (`<img src="data:image/png;base64,...">`).
- Instrua o usuário a abrir o `.html` no navegador, copiar tudo (Ctrl+A / Ctrl+C) e colar no Google Docs. Isso garante que as imagens e formatação sejam importadas com 100% de fidelidade.

> [!IMPORTANT]
> **REGRA DE CSS E ESTRUTURA HTML OBRIGATÓRIA:** Todo arquivo `.html` gerado para propostas técnico-comerciais deve OBRIGATORIAMENTE usar o seguinte esqueleto exato (copie e cole este `<style>` e a div `.hero`):

```html
<!DOCTYPE html><html><head><meta charset='utf-8'>
<style>
    body { font-family: 'Inter', 'Segoe UI', sans-serif; line-height: 1.7; color: #333; max-width: 1000px; margin: 60px auto; padding: 50px; background: #fff; box-shadow: 0 0 50px rgba(0,0,0,0.05); }
    h1, h2, h3, h4 { color: #1a1e2b; margin-top: 45px; margin-bottom: 20px; font-weight: 700; }
    h2 { border-bottom: 2px solid #FF8364; padding-bottom: 12px; border-left: 8px solid #1a1e2b; padding-left: 20px; background-color: #fafafa; font-size: 1.6rem; text-transform: uppercase; letter-spacing: 0.5px; }
    h3 { font-size: 1.3rem; border-left: 4px solid #FF8364; padding-left: 15px; margin-top: 35px; }
    p, li { font-size: 1.05rem; }
    ul { margin-bottom: 30px; }
    li { margin-bottom: 10px; }
    .mockup-img { width: 100%; border-radius: 12px; margin: 25px 0 45px 0; border: 1px solid #eee; }
    .mockup-container { margin-bottom: 60px; }
    .spec-table { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 40px;}
    .spec-table th, .spec-table td { padding: 15px; border: 1px solid #ddd; text-align: left; }
    .spec-table th { background: #1a1e2b; color: #fff; }
</style>
</head><body>
<div class='hero' style="text-align: center; border-bottom: 2px solid #ddd; padding-bottom: 30px; margin-bottom: 30px;">
    <h1 style="color: #1a1e2b; font-weight: 800; font-size: 2.5rem; margin-bottom: 10px;">PROPOSTA TÉCNICA COMERCIAL</h1>
    <h2 style="color: #FF8364; border: none; background: transparent; padding: 0;">NOME DO SISTEMA / PROJETO AQUI</h2>
</div>

<!-- Resto do conteúdo aqui. Exemplo de mockup: -->
<div class='mockup-container'>
    <h4 style='color: #FF8364;'>Nome do Módulo/Tela</h4>
    <p>Descrição explicativa da tela.</p>
    <img src="data:image/png;base64,INSERA_O_BASE64_AQUI" class="mockup-img">
</div>
<!-- Fim do exemplo de mockup -->

</body></html>
```

## 1. COMPONENTES ESTRUTURAIS OBRIGATÓRIOS (ESPINHA DORSAL FUNDECITRUS)
Todo orçamento deve seguir esta hierarquia exata para garantir o volume e o detalhamento profissional:

### A. Capa e Carta de Apresentação
*(Ver opções de estilo de escrita)*

### B. Descrição do Orçamento
"O objetivo deste documento é descrever o desenvolvimento de [Projeto] para [Cliente], voltado à [Objetivo Principal]. A proposta contempla a criação de uma plataforma para centralizar [Funcionalidades Principais]..."

### C. Cenário Geral
"Atualmente, o [Cliente] possui a necessidade de [Descrever dor inicial]. Além dessa necessidade, foi identificada uma estrutura técnica capaz de atender [Escalabilidade]. Dessa forma, a proposta da WAB não se limita a uma entrega isolada, mas sim ao desenvolvimento de uma plataforma institucional preparada para o futuro..."

### D. Tecnologia Utilizada
*(Ver opções de stack tecnológica)*
Deve listar vantagens em bullet points:
- **Segurança avançada**: proteção contra vulnerabilidades.
- **Flexibilidade**: arquitetura preparada para novas funcionalidades.
- **Desempenho Otimizado**: estrutura leve e organizada.
- **Escalabilidade**: ampliação com novos módulos.

### E. Estrutura do Novo Sistema (O Core do Orçamento)
Deve ser dividido em módulos (Ex: **ÁREA PÚBLICA**, **ÁREA ADMINISTRATIVA**).
Para *cada* módulo/página ou tela, a IA deve inventar detalhes exuberantes baseados na solicitação curta do usuário. (ex: se o usuário pediu "um blog", detalhe listagem, tags, categorias, busca, autor, SEO, cache, etc.).

### F. Itens Não Inclusos
*(Cláusula mandatória)*
- "Conteúdo definitivo, textos e imagens devem ser fornecidos pelo cliente."
- "Ferramentas de terceiros e APIs pagas não estão incluídas, salvo expresso."
- "Manutenção contínua após entrega faturada (exige plano à parte)."
- "Atendimento ao público final."

### G. Prazo de Entrega e Material
"O prazo será definido conforme a validação do escopo e envio de materiais. Todo material precisa ser enviado digitalmente..."

### H. Condições Comerciais, Validade e Pagamento
*(Ver opções comerciais)*


---

## 2. CARTAS DE APRESENTAÇÃO (VARIAÇÕES DE ESTILO)

## 2. ESTRUTURAS E "WIREFRAMES" TEXTUAIS (SITES)

### Seção: Banner Principal (Hero)
- **Opção 1 (Persuasiva/Marketing)**: "Ocupará a largura total da tela com uma fotografia real de alta resolução que conecta emocionalmente o visitante à marca. No topo, uma tipografia de impacto com o valor central do negócio e um botão de ação (CTA) em cor vibrante para conversão imediata."
- **Opção 2 (Técnica/Direta)**: "Canvas full-width com carregamento otimizado (Lazy loading) e overlay de opacidade para garantir leitura perfeita em qualquer dispositivo. Texto em H1 estruturado para SEO e botão com link âncora para formulário de contato."
- **Opção 3 (Focada em Autoridade)**: "Exibição de imagem institucional de grande porte, sobreposta por subtítulo que destaca anos de mercado ou prêmios da empresa. O design limpo foca na credibilidade logo no primeiro impacto visual."

### Seção: Estrutura de Conteúdo (Seções da Home)
- **Opção 1 (Modular/Atalhos)**: "Seção organizada em grids (3 ou 4 colunas) com ícones customizados que representam os pilares da empresa. Cada bloco contém um título conciso e botão 'Saiba Mais' para aprofundamento."
- **Opção 2 (Storytelling)**: "Blocos alternados de texto e imagem que guiam o usuário por uma narrativa sobre como a empresa resolve seus problemas, culminando em uma seção de prova social."

---

## 3. COMPONENTES DE SISTEMA (SISTEMAS PERSONALIZADOS)

### Seção: Dashboard de Controle
- **Opção 1 (Visual/KPIs)**: "Painel de controle com cards dinâmicos que piscam ou mudam de cor conforme o status de alertas críticos. Gráficos de barras comparativos que permitem entender a saúde do negócio em segundos."
- **Opção 2 (Gestão Operacional)**: "Foco na produtividade: lista de tarefas pendentes, filtros rápidos por data/responsável e acesso a um clique para as funções mais usadas do sistema."

### Seção: Relatórios e Gráficos
- **Opção 1 (Exportação/Dados)**: "Geração de relatórios em tempo real com opção de download em PDF, Excel ou CSV. Tabelas robustas com sistema de busca inteligente em qualquer campo."
- **Opção 2 (Insights/Performance)**: "Transformação de dados brutos em gráficos inteligentes que mostram tendências e sazonalidades, ajudando na tomada de decisão estratégica."

---

## 4. TECNOLOGIA E INFRAESTRUTURA

### Seção: Stack Tecnológica
- **Opção 1 (WordPress - Benefício)**: "Utilizamos WordPress pela facilidade incomparável de gestão de conteúdo para o cliente final. O ecossistema permite expansão rápida e atualizações de segurança constantes."
- **Opção 2 (Symfony - Robusto)**: "Desenvolvemos em Symfony para projetos que exigem arquitetura sólida, alto tráfego e integrações complexas que o mercado exige, garantindo estabilidade a longo prazo."

### Seção: Hospedagem
- **Opção 1 (Segurança Máxima)**: "Nossa infraestrutura inclui Firewall Ativo contra ataques DDoS, monitoramento 24/7 e backups redundantes. Sua paz de espírito é nossa prioridade técnica."
- **Opção 2 (Performance Pura)**: "Servidores otimizados com discos NVMe e cache avançado em nível de objeto, garantindo que seu site ou sistema carregue em menos de 1 segundo."

---

## 5. CONDIÇÕES COMERCIAIS E PAGAMENTO

### Seção: Formas de Pagamento
- **Opção 1 (Parcelado Padrão)**: "Entrada na assinatura do contrato + parcelas 30/60 dias via boleto bancário."
- **Opção 2 (Faseado por Entrega - Milestones)**: "Pagamento distribuído por etapas validadas: 40% Início, 30% Protótipo, 30% Publicação Final."
- **Opção 3 (Recorrência/Mensalidade)**: "Valor mensal fixo cobrindo licenciamento, suporte e evolução contínua das funcionalidades."

---

De acordo: 	___________________________________________

Nome: 
RG:
CPF: 

---

## 6. CLÁUSULAS PADRÃO

### Responsabilidade de Conteúdo
"O cliente compromete-se com a veracidade e licenciamento de todos os materiais enviados (textos, imagens, logos). A WAB não se responsabiliza por infrações de direitos autorais de terceiros fornecidos pelo contratante."

### Validade e Pagamento
"Proposta válida por 30 dias. Pagamento via boleto bancário nas datas acordadas. Eventuais atrasos podem impactar o cronograma de entrega das fases subsequentes."
