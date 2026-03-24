# **Modelo de Orçamento de Desenvolvimento de Sistemas – WAB Agência Digital**

Este modelo foi elaborado para auxiliar a equipe da WAB e o agente de IA a gerar propostas comerciais de desenvolvimento de sistemas de forma **completa, profissional e adaptável**. O objetivo é cobrir todas as áreas necessárias e servir como referência para diferentes tipos de projetos, minimizando retrabalhos e garantindo clareza ao cliente. O documento está organizado em duas partes:

1. **Guia de Elaboração de Orçamentos** – instruções detalhadas sobre como estruturar o orçamento e quais informações coletar.  
2. **Exemplos de Texto** – trechos exemplificativos, baseados nas melhores propostas existentes, aprimorados e adaptados para inspirar a redação de cada seção.

---

## **Parte 1 – Guia de Elaboração de Orçamentos**

### **1.1 Coleta de Informações**

Antes de redigir a proposta, reúna dados detalhados sobre o projeto e o cliente. Pergunte sobre:

* **Dados do cliente**: razão social, endereço, CNPJ/CPF, contato responsável, segmento de atuação.  
* **Objetivos do projeto**: problema a ser solucionado, valor esperado do sistema para o negócio.  
* **Público-alvo e perfis de acesso**: quem usará o sistema (administradores, operadores, clientes, pacientes, parceiros) e o que cada perfil deve poder fazer.  
* **Módulos e funcionalidades**: áreas do sistema (ex.: cadastro de usuários, painel de cargas, módulo de agendamento) e suas funcionalidades (CRUD, relatórios, dashboards, integrações, aprovação de fluxos).  
* **Integrações necessárias**: APIs externas (pagamentos, e‑mail, SMS, EDI), sistemas legados, login social, geolocalização, chatbots, inteligência artificial.  
* **Requisitos técnicos**: base de dados, tecnologia back‑end (Symfony), front‑end (Twig/React), ambientes (dev, homologação, produção), arquitetura (monolítica/microserviços), performance, escalabilidade.  
* **Segurança e conformidade**: autenticação em duas etapas, criptografia de dados, backups, logs de auditoria, LGPD/GDPR.  
* **Interface e usabilidade**: responsividade, acessibilidade, design e experiência do usuário, suporte a idiomas, necessidade de aplicativos móveis ou PWA.  
* **Infraestrutura**: preferência de hospedagem (cloud WAB ou do cliente), dimensionamento inicial (CPU, memória, disco, banda), serviços adicionais (SSL, firewall, CDN).  
* **Suporte e manutenção**: pacote de suporte pós-implantação, plano de manutenção, garantia, SLAs desejados.  
* **Cronograma e marcos**: prazo para início e término, entregas parciais, dependência de aprovações, data limite para aceite da proposta.  
* **Orçamento e limitações**: valor máximo disponível, forma de pagamento, parcelamento.

### **1.2 Estrutura do Documento de Orçamento**

O orçamento deve seguir uma estrutura organizada, com seções que facilitem a leitura e deixem claras as responsabilidades e entregas. Abaixo estão as principais partes que não podem faltar:

#### **1.2.1 Capa**

* Informações da WAB (endereço, telefones, e‑mail, CNPJ).  
* Destinatário (cliente) e nome do projeto.  
* Data de emissão.  
* Breve introdução apresentando a WAB e agradecendo pela oportunidade.

#### **1.2.2 Sumário Executivo**

* Resumo do projeto, objetivos e benefícios esperados.  
* Diferenciais da WAB.

#### **1.2.3 Descrição e Objetivo do Projeto**

* Explique o propósito do sistema de forma clara e direta.  
* Informe que o sistema será modular e passível de expansão.

#### **1.2.4 Cenário Geral**

* Contextualize o problema a ser resolvido e o ambiente de negócios.  
* Indique os principais desafios atuais e as oportunidades de melhoria.

#### **1.2.5 Requisitos Funcionais**

* Descreva detalhadamente cada módulo solicitado pelo cliente.  
* Para cada módulo, apresente perfis de usuários, telas, campos, funcionalidades, regras de negócio, fluxos de trabalho e relatórios.  
* Se houver módulos móveis, portais externos ou API pública, documente-os separadamente.

#### **1.2.6 Requisitos Não Funcionais**

* Defina normas de segurança, performance, disponibilidade, escalabilidade, usabilidade, compatibilidade de navegadores e acessibilidade.  
* Especifique exigências de legislação e compliance (LGPD, GDPR, setoriais).

#### **1.2.7 Arquitetura Técnica**

* Descreva a stack e a arquitetura proposta (Symfony, banco de dados, serviços de cache, filas, microserviços).  
* Aborde repositórios de código, pipelines de CI/CD, monitoramento e logging.

#### **1.2.8 Infraestrutura e Hospedagem**

* Detalhe planos de hospedagem e alternativas (planos de VPS, cloud dedicados, containerização, serverless).  
* Liste serviços inclusos (SSL, backups, monitoramento, versão de banco).  
* Informe eventuais custos extras e requisitos de infraestrutura local (internet dedicada, UPS).

#### **1.2.9 Planos de Manutenção e Suporte**

* Apresente pacotes de manutenção e suporte técnico (horas mensais, preços e regras de atendimento).  
* Explique limite de horas, prazo de resposta, horário comercial, abertura de chamados e serviços contemplados.  
* Esclareça sobre horas excedentes e valores de hora técnica isolada.

#### **1.2.10 Itens Não Inclusos**

* Liste explicitamente serviços ou produtos fora do escopo (criação de conteúdo, suporte a softwares de terceiros, hardware, marketing digital, atualizações contínuas, alterações de requisitos não previstos).

#### **1.2.11 Cronograma**

* Proponha um cronograma com etapas, atividades, datas de entrega e prazos de aprovação.  
* Destaque a dependência da aprovação do orçamento e do fornecimento de materiais para cumprir o cronograma.

#### **1.2.12 Termos Comerciais e Valores**

* Apresente uma tabela de valores discriminados: desenvolvimento por módulo, hospedagem, manutenção, suporte técnico, outros serviços.  
* Informe a forma de pagamento (percentuais, parcelas, prazos) e a validade da proposta.  
* Inclua campos para assinatura e dados de quem aprova a proposta.

#### **1.2.13 Estimativa de Complexidade e Cálculo de Custo**

* Classifique cada módulo por complexidade (baixa, média, alta) conforme número de telas, integrações, volume de dados e regras de negócio.  
* Estime horas com base na complexidade e aplique o valor da hora técnica definido pela WAB.  
* Adicione custos de licenças, serviços de terceiros e margem de lucro.

#### **1.2.14 Riscos, Premissas e Recomendações**

* Enumere premissas e riscos identificados (atraso de informações, mudanças de escopo, indisponibilidade de APIs).  
* Sugira boas práticas e melhorias futuras (acessibilidade, testes automatizados, metodologias ágeis, análise de dados, etc.).

---

## **Parte 2 – Exemplos de Texto para Cada Seção**

A seguir, apresentam-se exemplos de textos completos para cada parte do orçamento, baseados nas melhores versões das propostas existentes e aprimorados para servir como modelo. Os trechos utilizam informações reais dos orçamentos analisados, com ajustes para abranger diferentes contextos e refletir uma abordagem mais atual.

### **2.1 Exemplo de Introdução / Capa**

**À \[Nome do Cliente\]**

Primeiramente, gostaríamos de agradecer pela oportunidade de trabalhar com a sua empresa. A WAB Agência Digital é uma empresa com mais de 20 anos de experiência em comunicação pela Internet, especializada em soluções abrangentes que incluem desenvolvimento de sites personalizados, sistemas sob demanda, aplicativos móveis, hospedagem web, integração de sistemas e marketing digital. A solução apresentada nesta proposta foi criada por nossa equipe de especialistas, após uma análise detalhada das suas necessidades.

Estamos à disposição para esclarecer quaisquer detalhes sobre o projeto pelos telefones (16) 98179‑0888 / (16) 3332‑7798 ou pelo e‑mail wab@wab.com.br. Esta proposta comercial, datada de \[Data Atual\], tem como objetivo descrever o escopo técnico, prazos e investimentos necessários para a construção do sistema.

**Melhoria:** adicione sempre que possível o contexto e agradeça pela confiança do cliente. Mencione a experiência da WAB de forma clara e inclua todos os dados de contato.

### **2.2 Exemplo de Descrição e Objetivo**

**Descrição do Orçamento**

O objetivo deste documento é descrever o desenvolvimento do sistema de controle de gestão de \[descrever finalidade\], construído em módulos e com possibilidade de evoluir para incluir novos módulos no futuro. A proposta busca sanar os problemas identificados, proporcionando visibilidade aos processos, planejamento eficiente e monitoramento dos prazos.

De forma geral, o sistema deverá abranger o ciclo completo de \[transporte/atendimento/documentos\], desde o cadastro inicial até a conclusão das atividades, permitindo o gerenciamento de diversos elementos (cargas, pacientes, documentos, usuários), além do registro de ocorrências e controle de status.

**Melhoria:** personalize o texto com o cenário específico do cliente, destacando como o sistema atende às necessidades identificadas e quais benefícios concretos ele trará ao negócio.

### **2.3 Exemplo de Cenário Geral**

**Cenário Geral**

Atualmente, \[descrever como o cliente realiza as operações e as principais dores\]. O processo carece de visibilidade, controle e integração entre as partes envolvidas, o que resulta em retrabalho, atrasos e perda de informações. Um sistema moderno e automatizado permitirá organizar as atividades, monitorar status em tempo real e garantir a integridade dos dados.

Além de atender às demandas operacionais, o sistema deve assegurar a segurança das informações e restringir o acesso a usuários autorizados, protegendo dados sensíveis. Será capaz de gerenciar todos os fluxos de trabalho, desde o cadastramento até a entrega ou finalização do serviço.

**Melhoria:** contextualize o cenário com informações fornecidas pelo cliente (problemas de comunicação, demandas de auditoria, carência de relatórios, etc.).

### **2.4 Exemplo de Acesso ao Sistema**

**Acesso ao Sistema**

Para garantir a segurança, o acesso ao sistema será realizado por meio de login com credenciais individuais. Após digitar e‑mail e senha, o usuário receberá um código de verificação por e‑mail para confirmar a identidade; esse procedimento será repetido a cada nova sessão. Futuramente, o envio do código poderá ocorrer via SMS, dependendo da opção contratada.

O sistema também oferecerá recursos de "esqueci minha senha", permitindo ao usuário solicitar a redefinição e receber um link para criar uma nova senha. Todas as senhas serão criptografadas com algoritmos robustos (bcrypt ou Argon2) e armazenadas de forma segura.

**Melhoria:** sugira autenticação multifatorial opcional, como app autenticador, e destaque que as sessões expiram após inatividade.

### **2.5 Exemplo de Responsividade**

**Responsividade**

O novo sistema será desenvolvido seguindo padrões de visualização responsiva, o que significa que o layout será otimizado para diferentes resoluções de tela. Isso inclui telas grandes de até 1680 px, notebooks de 1022 px, tablets (768 px), smartphones em modo retrato (478 px) e smartphones menores (320 px). Caso seja necessário adaptar o sistema para outras dimensões ou dispositivos específicos, essa extensão poderá ser orçada separadamente, considerando a complexidade do ajuste.

**Melhoria:** acrescente a possibilidade de desenvolver aplicativos nativos para iOS e Android ou uma Progressive Web App (PWA) para funcionar off‑line e notificar usuários.

### **2.6 Exemplo de Painel Administrativo e Módulos**

**Painel Administrativo**

O sistema terá um painel de administração que concede ao administrador a capacidade de gerenciar recursos e usuários de maneira centralizada. O painel exibirá indicadores-chave de desempenho (KPIs) como número total de cargas cadastradas, cargas em andamento, atrasadas e no prazo, além de listagens de itens aguardando moderação. Um menu lateral simplificará o acesso aos principais módulos.

**Módulo Recepção e Cadastro** (exemplo de módulo)

Usuários: Atendente, Administrador.

Telas e funcionalidades:

* **Tela de Login:** Permitir que usuários autorizados acessem o sistema de forma segura; campos de e‑mail e senha; funcionalidades de autenticação, login/logout e recuperação de senha.  
* **Dashboard do Atendente:** Fornecer uma visão geral das atividades do dia, com KPIs de pacientes aguardando, atendidos e faltantes; visualização das métricas em um painel dinâmico.  
* **Tela de Cadastro de Pacientes:** Facilitar o registro e gerenciamento dos dados de pacientes; campos incluem número do prontuário, dados pessoais (nome completo, nome social, estado civil, CPF), endereço completo, contatos, dados de saúde (cartão SUS, alergias, histórico de Covid), e condições socioeconômicas. Essa tela permitirá adicionar, visualizar, atualizar e remover informações, bem como anexar documentos e gerar relatórios.

Em sistemas de outras naturezas, substitua "pacientes" por "clientes", "produtos" ou "cargas", e ajuste os campos conforme o domínio de negócio.

**Melhoria:** para cada módulo do projeto, siga esse exemplo detalhado, incluindo objetivos, usuários, campos, ações (CRUD, exportação, impressão) e regras de negócio específicas.

### **2.7 Exemplo de Plano de Manutenção**

**Planos de Manutenção**

Para garantir a evolução contínua e correção de eventuais problemas, poderá ser contratado um plano de manutenção em pacotes de horas. A WAB oferece planos de manutenção com desconto progressivo, variando conforme a quantidade de horas. A prestação de serviço é limitada aos projetos em questão, realizada em horário comercial, de segunda a sexta‑feira, das 9 h às 18 h, de 10 de janeiro a 20 de dezembro.

O prazo para qualificação do atendimento é de três dias úteis e o prazo de execução varia de acordo com a complexidade da solicitação. Cada chamado é aberto via e‑mail ou sistema de tickets, e é contabilizada no mínimo 1 h técnica devido aos processos de análise, homologação e versionamento. Estão contempladas horas para correção de bugs, implementação de novas funcionalidades, consultoria, ajustes visuais, estruturais e funcionais, além de testes funcionais, de usabilidade, desempenho, compatibilidade e segurança. Os três primeiros meses após a entrega incluem gratuitamente 30 h de manutenção.

Caso a quantidade de horas contratadas não seja suficiente, o cliente poderá contratar horas excedentes até o limite de 50 % do pacote, sendo cobrado o valor de hora técnica vigente. A hora técnica avulsa atualmente é de R$ 240,00.

**Melhoria:** ajuste os valores e condições conforme negociação específica; considere oferecer SLAs diferenciados para clientes que exigem tempo de resposta mais rápido.

### **2.8 Exemplo de Itens Não Inclusos**

**Itens Não Inclusos**

Esta proposta contempla apenas os itens descritos no escopo funcional e não inclui serviços adicionais como:

* Suporte técnico de dúvidas de operação.  
* Suporte a ferramentas de terceiros (Photoshop, CorelDraw, gateways de pagamento, Correios).  
* Criação ou revisão de conteúdo: textos, imagens, vídeos e multimídia devem ser fornecidos pelo cliente.  
* Correção de material fornecido pelo cliente (ortografia, diagramação).  
* Suporte a navegadores obsoletos ou não homologados; garantimos funcionamento nos navegadores Chrome, Firefox, Edge, Safari e Opera.  
* Atualizações e manutenções contínuas além do escopo desta proposta; tais serviços podem ser contratados em planos de manutenção ou suporte técnico avulso.

**Melhoria:** sempre acrescente quaisquer itens fornecidos pelo cliente ou combinados previamente; itens não incluídos ajudam a delimitar o escopo e evitar mal-entendidos.

### **2.9 Exemplo de Hospedagem**

**Hospedagem da Aplicação**

Para manter a estrutura do sistema online, recomendamos a contratação de um plano de hospedagem adequado ao volume de utilização. A WAB oferece diferentes opções, como planos **Inicial**, **Básico**, **Médio** e **Avançado**, variando em CPU, memória, espaço de disco e transferência de dados. Por exemplo, o plano Inicial inclui 1 vCPU, 1 GB de RAM, 10 GB de armazenamento e 1 TB de transferência. Planos superiores oferecem mais recursos e são indicados para sistemas de maior porte.

Todos os planos incluem certificado SSL para navegação segura, criptografia de senhas com Bcrypt, acesso ao servidor por SSH com chave, sistema de envio de e‑mails via Sendgrid, firewall interno, monitoramento de uptime 24 × 7 e backups recorrentes a cada 12 h por 7 dias. Utilizamos Bitbucket para versionamento e deploy seguro.

Caso haja necessidade de escalabilidade, podemos migrar para infraestrutura dedicada ou em nuvem (AWS, Google Cloud, Azure), implementar clusters de aplicação, bancos de dados replicados e balanceadores de carga.

**Melhoria:** apresente diferentes cenários de consumo de recursos e recomende o plano adequado de acordo com o número de usuários simultâneos e volume de dados previsto.

### **2.10 Exemplo de Cronograma**

**Cronograma de Implementação**

Visando uma implementação organizada e eficiente, propomos o seguinte cronograma:

* **Entrega da Área Administrativa**: desenvolvimento da interface administrativa, implementação das funcionalidades previstas, testes internos de funcionalidade e usabilidade, ajustes e otimizações, treinamento remoto da equipe administrativa de até 2 h. Previsão de entrega: \[data definida\].  
* **Entrega do Aplicativo Mobile**: desenvolvimento da interface do aplicativo (quando aplicável), implementação das funcionalidades específicas, testes de segurança e desempenho, integração com o sistema administrativo, testes piloto com grupo selecionado de usuários, ajustes com base no feedback dos usuários e publicação nas lojas de aplicativos. Previsão de entrega: \[data definida\].

Ressaltamos que o cumprimento do cronograma depende da aprovação do orçamento até \[data\] e do fornecimento de todas as informações necessárias. Atrasos na confirmação do aceite ou na entrega de materiais impactarão diretamente as datas previstas.

**Melhoria:** personalize as datas de acordo com o início real do projeto e o escopo; inclua marcos adicionais (análise de requisitos, prototipação, homologação, implantação) quando necessário.

### **2.11 Exemplo de Condições Comerciais e Valores**

**Condições Comerciais**

Segue a tabela de investimentos previstos:

| Descrição | Valor (R$) |
| ----- | ----- |
| Desenvolvimento do Sistema | 134.376,00 |
| Hospedagem (Plano Inicial) | 1.430,00/mês |
| Plano de Manutenção de 30 h (opcional) | 6.300,00/mês |

O valor do desenvolvimento poderá ser parcelado em 6 vezes, sendo 25 % de sinal na assinatura do contrato e 5 parcelas mensais de 15 % cada; a última parcela será paga no ato da publicação do aplicativo. Valores de hospedagem e manutenção são cobrados mensalmente, a partir da publicação do sistema. Outras opções de parcelamento podem ser negociadas.

Esta proposta é válida por 30 dias. Caso concorde com os termos, favor preencher o campo de aceite com nome, RG e CPF/CNPJ e assinar nos espaços indicados.

**Melhoria:** ajuste os valores aos custos reais do projeto e informe claramente o que cada item contempla. Especifique a forma de reajuste (anual, pela inflação) e a política de cancelamento.

---

## **Considerações Finais**

* **Personalize** cada texto conforme o projeto e o cliente, mantendo a estrutura e a consistência da proposta.  
* **Detalhe** o escopo com cuidado, listando o máximo de informações para evitar omissões.  
* **Cite** sempre as funcionalidades e requisitos de forma objetiva, utilizando exemplos como os apresentados acima para orientar a redação de novos orçamentos.  
* **Revise** as seções periódicamente para incorporar novas tecnologias, legislações e práticas de mercado.

Este modelo exemplificado visa ser um ponto de partida abrangente para a criação de orçamentos completos e de alta qualidade, refletindo a experiência e o profissionalismo da WAB Agência Digital.
