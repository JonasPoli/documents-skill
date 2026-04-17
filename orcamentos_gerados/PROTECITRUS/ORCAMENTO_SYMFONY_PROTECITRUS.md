# Proposta Comercial: Novo Site ProteCitrus (Symfony)

## 1. Apresentação da Empresa
Primeiramente, gostaríamos de agradecer pela oportunidade de trabalhar com a sua empresa.

**Sobre a WAB Agência Digital:**
A WAB é uma empresa de tecnologia focada em criar soluções que realmente funcionam para o dia a dia de outras empresas. Nosso objetivo é transformar processos complicados em sistemas simples e eficientes, ajudando nossos clientes a crescerem com organização e segurança. A solução apresentada nesta proposta foi criada por nossa equipe de especialistas, após uma análise de suas necessidades. A nossa equipe está à sua disposição para qualquer dúvida pelos telefones (16) 98179-0888 / (16) 3332-7798 ou pelo e-mail wab@wab.com.br.

## 2. Introdução

O setor de citricultura exige um rigoroso controle sobre as substâncias utilizadas no manejo das plantações para garantir a conformidade com as normas nacionais e internacionais de exportação. O atual sistema ProteCitrus foi idealizado pelo Fundecitrus para compilar, organizar e fornecer a lista de ingredientes ativos e formulações autorizadas para o combate às principais pragas, no escopo da Produção Integrada de Citros (PIC). 

No entanto, o site atual que apresenta essas informações aos produtores e técnicos foi desenvolvido com base em tecnologias legadas, e apresenta limitações visuais e de usabilidade em dispositivos móveis. Existe uma necessidade urgente de modernizar a camada de visualização dos dados, provendo uma experiência de uso imersiva, com um design moderno, rápido, dinâmico e mais focado na experiência do citricultor.

Para solucionar essa questão, a WAB Agência Digital propõe o desenvolvimento de um novo portal front-end dedicado ao ProteCitrus, construído na robusta infraestrutura do framework Symfony. Este novo site consumirá as informações atualizadas diretamente e em tempo real, comunicando-se via integração (API) com o backend (sistema fundecitrus-listapic-v2), sem a necessidade de migração da base, garantindo agilidade técnica e centralização das regras de negócio originais.

Esta solução garante que as áreas da listagem de produtos defensivos, linha do tempo de aprovações, notícias e a lista internacional inglesa sejam carregadas em uma interface incrivelmente responsiva. Na prática, o produtor agrícola acessará e filtrará dezenas de produtos aprovados com facilidade tanto no trator, acessando por um celular, quanto no escritório de planejamento.

## 3. O que será desenvolvido (Módulos e Telas)

### Tela: Página Principal (Dashboard de Ativos e Produtos)
**Objetivo do item:** Esta será a página inicial de acesso ao site, concentrando as informações elementares do programa ProteCitrus, bem como a grade principal de produtos agrícolas autorizados. O usuário terá uma visão macro das últimas notícias e documentos em destaque no mesmo ambiente.
**Estrutura e Organização:**
- **Topo e Navegação:** Logotipo ProteCitrus/Fundecitrus, Menu de navegação principal ancorado (Home, Produtos, Notícias, Linha do Tempo, Contato).
- **Conteúdo Principal:** 
  - Bloco de Destaque principal ou banner rotativo para apresentar informativos visuais do segmento;
  - Tabela principal interativa listando os produtos e ingredientes ativos (A Grade de Produtos);
  - Bloco visual exibindo as 3 últimas notícias do setor em formato de cartões (Cards com imagem, título e resumo);
  - Caixa com o link em destaque para o download direto da versão da "Lista PIC em Inglês";
  - Visualização resumida e dinâmica da Linha do Tempo de inclusões e exclusões de produtos.
- **Botões e Ações:** [Buscar Produto], [Pesquisar], [Filtrar por Praga/Doença], [Baixar Lista em Inglês], [Ver Todas Notícias], [Ver Mais].
**Como funciona a interação:** O produtor entrará no site, visualizando logo os chamativos visuais e notícias. No centro, estará a tabela estruturada com dados em colunas. As linhas da tabela mostrarão informações primárias do produto químico. Ao digitar na barra de pesquisa, a grade atualizará instantaneamente ocultando itens que não conferem com o termo. O usuário poderá clicar em botões como [Ver Todas Notícias] para ser redirecionado para a seção completa ou clicar em alguma inclusão da linha do tempo.

### Tela: Detalhamento Específico do Produto Químico
**Objetivo do item:** Tem a função prática de apresentar o detalhamento técnico minucioso sobre um produto ou ingrediente ativo selecionado a partir da tabela da página principal. Ele quebra dados complexos e técnicos em uma leitura visual limpa e amigável.
**Estrutura e Organização:**
- **Topo e Navegação:** Menu padrão com trilha de navegação interativa (Home > Produtos > Nome do Produto).
- **Conteúdo Principal:**
  - Título principal com o nome comercial do ingrediente ativo ou produto selecionado;
  - Quadro de informações e dados químicos básicos (Fórmula, Grupo Químico, Classe de Uso e Natureza do Registro);
  - Quadro indicando de maneira gráfica a classificação toxicológica e também listar as pragas alvo aprovadas;
  - Observações e notas adicionais de restrições por países importadores.
- **Botões e Ações:** [Voltar para a Lista Geral], [Imprimir Ficha Detalhada], [Compartilhar].
**Como funciona a interação:** Originado da grade interativa na primeira página, o usuário aperta num determinado ativo químico. O site consultará o sistema de fundos instantâneamente pela API e renderizará todas as propriedades únicas dessa química nesta tela.

### Tela: Listagem Completa de Notícias
**Objetivo do item:** Agrupar e organizar de maneira sequencial todas as atualizações postadas pelo Fundecitrus em relação ao projeto ProteCitrus e as orientações sobre as atividades da pic.
**Estrutura e Organização:**
- **Topo e Navegação:** Cabeçalho padrão, com título da página bem evidente indicando "Notícias".
- **Conteúdo Principal:**
  - Área de exibição de conteúdo formatada em blocos;
  - Novidades e notícias dispostas em retângulos contendo de fato uma foto de capa (quando disponível), título do evento, a data exata de publicação e as linhas de resumo de texto lide;
  - Indicadores numéricos de paginação.
- **Botões e Ações:** [Ler Mais Notícia], [Página Anterior], [Próxima Página].
**Como funciona a interação:** O visitante desce a tela e analisa os quadros de últimas notícias ou dicas rurais lançados. Ao identificar um letreiro que chama a atenção, ele realiza a ação de clique para ler o documento completo da novidade ou pode ir circulando pelas edições passadas pelas numerações de página.

### Tela: Seção Fale Conosco e Contato Técnico
**Objetivo do item:** Estabelecer um canal seguro focado na obtenção de suporte e esclarecimentos diretos entre o funcionário ou citricultor e os especialistas do Fundecitrus.
**Estrutura e Organização:**
- **Topo e Navegação:** Navegação rápida superior que centraliza a orientação visual no formulário.
- **Conteúdo Principal:**
  - Formulário contendo as áreas exatas para: preencher o Nome do requisitante, definir o E-mail, telefone para ligar e o campo vasto da Mensagem de retorno;
  - Mecanismo integrado oficial invisível do reCaptcha do Google;
  - Disposições em painel das demais formas de contato e o e-mail de linha do time.
- **Botões e Ações:** [Enviar a Mensagem], [Limpar].
**Como funciona a interação:** O produtor redige as queixas e dúvidas completas informando a casuística dele. Ao clicar no bloco "Enviar a Mensagem", o servidor constrói uma mensagem formalizada no bastidor e lança imediatamente pelos serviços de correspondência remota pro pessoal da técnica tratar a dúvida do lado de dentro. 

## 4. Itens não inclusos
*   **Identidade Visual:** Criação de logotipos ou artes.
*   **Conteúdos e Imagens:** O cliente deve enviar textos e fotos.
*   **Taxas de Terceiros:** Domínios, hospedagem externa, gateways de pagamento.
*   **Limpeza de Dados Antigos:** Tratamento de bases desorganizadas.
*   **Equipamentos:** Hardware em geral.
*   **Manutenção:** Atualizações pós-entrega (contratadas separadamente).

## 5. Planejamento e Mudanças
**Metodologia:**
1. Desenho do Projeto; 2. Criação Visual (Frontend); 3. Programação (Integrações); 4. Homologação; 5. Entrega Oficial (Go-Live).
**Change Request:** Mudanças de escopo custam R$ 220,00 por hora técnica e exigem aprovação formal.

## 6. Garantia e Suporte
Garantia de 180 dias contra erros técnicos, limitada a 30 horas de trabalho.
**Prazos de Atendimento:** Crítico (2h úteis), Alta (4h úteis), Média/Baixa (8h úteis).

## 7. Treinamento e Entrega
Oferecemos 20 horas de treinamento (online ou presencial). A aplicação dos dados será automática nesta demanda via o consumo ininterrupto e ao vivo da rede de API original entregue e conectada de modo transparente.

## 8. Hospedagem e Servidores
**Inclusos:** SSL, Criptografia de senhas, Firewall, Backup a cada 12h, Monitoramento 24h.
**Planos Sugeridos (vCPU/RAM/Disco):**
- Inicial: R$ 380,00 (1 vCPU/1GB)
- Básico: R$ 2.200,00 (1 vCPU/2GB)
- Médio: R$ 3.850,00 (2 vCPU/4GB)
- Avançado: R$ 6.200,00 (4 vCPU/8GB)

## 9. Organização da Estrutura
O sistema será instalado em uma infraestrutura física organizada conforme o diagrama técnico da WAB (Arquitetura LAMP/LEMP otimizada para Symfony).

## 10. Plano de Manutenção
Manutenção preventiva e corretiva disponível em pacotes de horas mensais.

## 11. Prazos e Materiais
O prazo oficial prático exigirá entre 7 e 9 semanas intensivas de produção total para aprovação geral no decorrer do projeto. Exige-se pelo solicitante repassar os endpoints devidos (tokens autorizadores chaves da interface), diretrizes de serviço SMTP, e a concordância formal da maquete antes das linhas de programação iniciarem.

## 12. Cronograma
| Etapa | Atividade | Tempo Estimado |
| :--- | :--- | :--- |
| 1 | Desenho Visual e Aprovações de Layout do Site Responsivo | 2 semanas |
| 2 | Programação da Camada de Visualização em Symfony | 3 semanas |
| 3 | Mapeamento da API atual Listapic com o Banco Visual | 2 semanas |
| 4 | Homologação Geral Final e Deploy de Entrega Oficializada | 2 semanas |

## 13. Validade da Proposta
Proposta válida por 15 dias.

## 14. Valores e Pagamento
| Módulo / Etapa | Custo |
| :--- | :--- |
| Layout Frontend Responsivo (UI/UX) Completo | R$ 3.800,00 |
| Desenvolvimento Core do Novo Site em Lógica Symfony | R$ 7.900,00 |
| Execuções das Integrações (API Grade, Notícias e Serviço SMTP) | R$ 3.500,00 |

**Valor total: R$ 15.200,00**

**Forma de Pagamento:** 40% Sinal, 30% Entrega do Visual, 30% Entrega Final.

---
**Assinaturas:** 

___________________________________
WAB Agência Digital


___________________________________
FUNDECITRUS - ProteCitrus
