PROPOSTA TÉCNICA COMERCIAL
Pesquisa e Desenvolvimento de ChatBot

À

Embrapa – Empresa Brasileira de Pesquisa
Agropecuária
A WAB Agência Digital agradece pela oportunidade de apresentar esta proposta para o desenvolvimento do
Chatbot da Embrapa, uma solução inovadora de atendimento automatizado e gestão de conhecimento
baseada em Inteligência Artificial.
O objetivo é criar um chatbot conectado ao Ambiente Virtual de Aprendizagem (AVA) da Embrapa, com coleta
automatizada de dados via API do Moodle, processamento por arquitetura RAG (Retrieval-Augmented
Generation) e integração direta com plataformas de inferência (Chatbase e OpenAI).
O sistema permitirá comunicação via Kommo e WhatsApp, oferecendo atendimento inteligente, atualizado e
seguro, com administração central via painel web.

Araraquara, 10 de novembro de 2025.

_____________________________________​
Jonas Ernesto Poli​
CPF: 296.652.468-52
M. DUDALSKI & CIA SOLUÇÕES EM INTERNET LTDA - ME
CNPJ: 07.270.504/0001-70

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 1

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

RESUMO EXECUTIVO
O presente projeto representa uma iniciativa de pesquisa e desenvolvimento tecnológico aplicada à educação
corporativa e à transferência de conhecimento da Embrapa, alinhada às diretrizes de inovação, transformação
digital e gestão do conhecimento que orientam as ações da empresa pública.
O Chatbot Embrapa será desenvolvido como um projeto-piloto de inovação, voltado à experimentação do uso
de inteligência artificial para apoio ao aprendizado, atendimento automatizado e disseminação de
conteúdos técnicos produzidos pela instituição. O sistema poderá ser utilizado por usuários do Ambiente
Virtual de Aprendizagem (AVA), ampliando o alcance e a eficiência dos processos de capacitação interna e de
extensão rural digital. Além dos usuários do AVA, o chatbot também poderá ser acessado por outros públicos
externos, como estudantes, produtores rurais, técnicos de instituições parceiras e cidadãos interessados nas
áreas de pesquisa da Embrapa. Dessa forma, a ferramenta atuará como um canal de aproximação entre a
Embrapa e a sociedade, permitindo que mais pessoas conheçam seus cursos, projetos e tecnologias,
fortalecendo o papel institucional da empresa como referência nacional em inovação agropecuária e difusão
de conhecimento científico.
Durante a fase inicial, o projeto contemplará uma etapa de pesquisa e viabilidade técnica, em que serão
comparadas duas abordagens distintas de arquitetura de IA — Chatbase e OpenAI — com o objetivo de
identificar o modelo mais eficiente, seguro e economicamente sustentável para o contexto da Embrapa. Essa
análise incluirá também aspectos de governança de dados, privacidade, conformidade com a LGPD e
compatibilidade com as políticas institucionais de tecnologia da informação.
A WAB Agência Digital atuará como parceira tecnológica da Embrapa, responsável pelo desenho da
arquitetura, implementação do protótipo, integração com os sistemas corporativos (Moodle, Kommo,
WhatsApp Business) e validação do desempenho da solução. A proposta prevê uma estrutura escalável e
modular, que permitirá futuras expansões para outras unidades, cursos e programas da Embrapa,
consolidando o Chatbot como um instrumento estratégico de inovação e de fortalecimento do ecossistema de
P&D da empresa.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 2

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

RESUMO DO SISTEMA
O Chatbot Embrapa será uma aplicação web + integração de IA, construída em Symfony (PHP) e Python,
hospedada na Digital Ocean e gerenciada via RunCloud.​
Seu núcleo realizará:
●​
●​
●​
●​

Coleta e processamento de dados do Moodle (textos e vídeos transcritos);
Integração com Chatbase e OpenAI (assistants e vector store);
Interação com usuários por WhatsApp (via Kommo);
Painel administrativo para gestão de versões, logs, usuários e monitoramento.

A aplicação será modular, com foco em segurança, escalabilidade e manutenção futura, seguindo boas
práticas de desenvolvimento e documentação completa.

FASE DE PESQUISA
Antes do desenvolvimento completo do Chatbot, o projeto incluirá uma fase de Pesquisa e Desenvolvimento
(P&D) dedicada à análise comparativa entre duas arquiteturas possíveis de inteligência artificial:

CENÁRIO A — PLATAFORMA CHATBASE:
Utiliza a infraestrutura gerenciada do Chatbase, que permite conectar fontes de dados, treinar o chatbot e
gerenciar o fluxo de conversas com custos previsíveis por créditos de uso.

CENÁRIO B — PLATAFORMA OPENAI
Baseia-se no uso direto da API “Assistants” da OpenAI, permitindo que o sistema desenvolvido pela WAB
assuma o controle integral do armazenamento vetorial e do fluxo de inferência.

OBJETIVO DA FASE DE PESQUISA
Esta etapa servirá para avaliar a viabilidade técnica e financeira de cada abordagem, identificando:
●​
●​
●​
●​

Desempenho e precisão das respostas obtidas;
Facilidade de atualização e manutenção da base de conhecimento;
Custos variáveis de operação (armazenamento, tokens, créditos e manutenção);
Impactos na arquitetura do backend Symfony e no cronograma futuro.

ENTREGÁVEIS
Ao final dessa fase, serão apresentados:
●​ Relatório Técnico Comparativo com resultados de testes realizados em ambas as plataformas;
●​ Projeção de Custos de Operação para cada cenário (Chatbase e OpenAI);
●​ Recomendação Técnica da solução mais adequada para o ambiente da Embrapa.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 3

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

IMPORTÂNCIA PARA O PROJETO
Esta fase é essencial para garantir segurança na tomada de decisão e otimização dos investimentos futuros,
evitando retrabalho e garantindo que a arquitetura definitiva seja escolhida com base em dados concretos de
desempenho e custo-benefício.​
Somente após a conclusão desta etapa o projeto avançará para o desenvolvimento completo da solução
escolhida.
Durante a fase de pesquisa e desenvolvimento experimental, será realizada a coleta controlada de dados
reais provenientes do Ambiente Virtual de Aprendizagem (AVA) da Embrapa.​
Essa coleta se concentrará inicialmente em um curso-piloto de capacitação técnica, previamente selecionado
pela equipe da Embrapa, para garantir relevância prática, controle de variáveis e adesão às políticas de uso de
dados institucionais.
A pesquisa também compreenderá a execução de testes de usabilidade e precisão do chatbot. Esses usuários
participarão de forma supervisionada, avaliando a qualidade das respostas, a clareza das interações e a
utilidade do chatbot nos processos de aprendizado e disseminação de conhecimento técnico.
Além da análise técnica e comparativa entre Chatbase e OpenAI, esta fase incluirá a avaliação da integração
entre os mecanismos de IA e os repositórios internos da Embrapa, abrangendo o AVA Moodle, bases
documentais institucionais e, futuramente, a intranet corporativa. Essa abordagem permitirá identificar as
melhores práticas de interoperabilidade e segurança entre os ambientes da Embrapa e as plataformas de
inteligência artificial.
Questões éticas, de privacidade e conformidade com a Lei Geral de Proteção de Dados (LGPD) também serão
parte integrante desta etapa.​
Antes da coleta de qualquer dado real, serão definidos os procedimentos de anonimização, consentimento e
limitação de escopo de uso, assegurando que o projeto esteja em conformidade com as políticas internas da
Embrapa e com a legislação vigente.
A pesquisa seguirá uma metodologia experimental baseada em métricas objetivas e qualitativas, incluindo:
●​
●​
●​
●​

Acurácia das respostas (relevância e correção em relação às fontes originais);
Tempo médio de resposta e latência de inferência;
Custo médio por requisição, considerando o consumo de tokens nas APIs;
Análise de feedback qualitativo dos usuários participantes, por meio de questionários estruturados e
registros de uso.

Essas métricas subsidiarão o Relatório Técnico Comparativo e a Recomendação de Arquitetura Definitiva,
garantindo que a decisão final seja embasada em dados de desempenho, custo e experiência do usuário.

GATE DE DECISÃO
A evolução para o desenvolvimento do protótipo ficará condicionada à aprovação do Comitê Técnico da
Embrapa com base no Relatório Técnico Comparativo (desempenho, custo, segurança e LGPD). A ata de

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 4

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

aprovação registrará a arquitetura escolhida (Cenário A – Chatbase ou Cenário B – OpenAI), parâmetros
operacionais, limites de consumo e eventuais ajustes no cronograma.

ETAPAS DO PROJETO-PILOTO
O desenvolvimento do Chatbot Embrapa será conduzido em quatro etapas principais, estruturadas de acordo
com a metodologia de pesquisa e desenvolvimento (P&D) descrita neste documento.​
Cada fase contempla objetivos específicos, entregas técnicas e marcos de validação, assegurando a
rastreabilidade dos resultados e a construção progressiva do sistema.

ETAPA 1 — LEVANTAMENTO E PLANEJAMENTO TÉCNICO
Objetivo:
Realizar o estudo técnico e conceitual que fundamentará o projeto-piloto, avaliando a infraestrutura atual da
Embrapa e definindo as diretrizes de integração e governança de dados.
Atividades Principais:
●​
●​
●​
●​
●​

Levantamento de requisitos junto às equipes de TI e Educação Corporativa;
Diagnóstico do AVA (Moodle) e identificação dos fluxos de dados e APIs;
Mapeamento dos conteúdos elegíveis para o piloto (textos, vídeos, apostilas, FAQs);
Definição das métricas experimentais (acurácia, tempo de resposta, custo e satisfação);
Planejamento da arquitetura inicial (servidores, banco de dados, segurança e LGPD).

Entregável:
Relatório técnico de planejamento e documento de arquitetura preliminar do chatbot.

ETAPA 2 — DESENVOLVIMENTO DO PROTÓTIPO FUNCIONAL
Objetivo:
Construir o protótipo operacional do Chatbot, integrando-o ao AVA da Embrapa e às plataformas de IA
(Chatbase e OpenAI) para teste inicial com conjunto limitado de dados e usuários.

Atividades Principais:
●​
●​
●​
●​
●​

Implementação da coleta de dados via API REST do Moodle;
Processamento e normalização de conteúdos (textos, legendas de vídeos e metadados);
Criação do backend (Symfony), painel administrativo e interface de monitoramento;
Configuração da infraestrutura em nuvem (Digital Ocean + RunCloud);
Implantação do canal de interface via WhatsApp Business.

Entregável:
Versão Alfa do Chatbot, apta para testes internos e validação técnica inicial.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 5

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

ETAPA 3 — TESTES CONTROLADOS E VALIDAÇÃO INSTITUCIONAL
Objetivo:
Executar testes controlados e supervisionados com usuários internos (técnicos, pesquisadores e
extensionistas), medindo o desempenho real da IA e a efetividade do chatbot como ferramenta de aprendizado
e extensão.

Atividades Principais:
●​
●​
●​
●​
●​

Realização de testes comparativos (Chatbase × OpenAI);
Coleta de métricas (acurácia, tempo de resposta, custo por requisição e nível de satisfação);
Registro e análise de feedbacks qualitativos dos usuários;
Ajustes de prompts, parâmetros e fluxos de interação;
Avaliação institucional e validação de segurança e LGPD com a equipe de TI da Embrapa.

Entregável:
Relatório Técnico Comparativo contendo análise de desempenho, recomendações e validação oficial para
implantação.

ETAPA 4 — EXPANSÃO E IMPLEMENTAÇÃO EVOLUTIVA
Objetivo:
Preparar o ambiente para a expansão gradual e sustentável do Chatbot, documentando a arquitetura e
capacitando a equipe da Embrapa para sua gestão autônoma.

Atividades Principais:
●​
●​
●​
●​
●​

Ampliação da infraestrutura para novos cursos e unidades;
Integração de novos conteúdos e módulos no AVA;
Implementação dos dashboards de analytics e relatórios de aprendizagem;
Treinamento e transferência de conhecimento à equipe Embrapa;
Formalização do plano de manutenção e monitoramento contínuo da IA.

Entregável:
Versão Beta Final do Chatbot Embrapa, com documentação completa, plano de expansão e equipe treinada.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 6

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

CRONOGRAMA TÉCNICO-OPERACIONAL
O desenvolvimento do Chatbot Embrapa seguirá um cronograma de execução distribuído em cinco meses.​
Cada mês representa um marco técnico de entrega, com fases progressivas de pesquisa, desenvolvimento,
validação e expansão.

Mês

Fase

Principais Atividades

Mês 1 – Levantamento Diagnóstico técnico do AVA Moodle,
e Planejamento Técnico definição de requisitos, análise de
LGPD e estrutura de coleta de dados.

Documento de requisitos técnicos e
plano de integração Moodle.

Mês
2
– Implementação do backend Symfony, Protótipo funcional (versão Alfa) com
Desenvolvimento
do coleta inicial via API Moodle, pipeline painel básico e fluxo operacional
Protótipo (Versão Alfa) Python para tratamento de dados e inicial.
integração preliminar com Chatbase e
OpenAI.
Mês
3
–
Testes Execução de testes internos com Relatório de desempenho e versão
Controlados e Ajustes usuários da Embrapa, avaliação de Beta.
Técnicos
desempenho, ajustes de prompts e
fluxos, e validação de segurança.
Mês 4 – Expansão de Ampliação da base de dados do AVA, Versão Beta Final com analytics e
Conteúdo e Integração integração com Kommo/WhatsApp, exportação de relatórios.
Avançada
adição de módulo de analytics e
dashboards.
Mês 5 – Homologação e Testes finais de homologação Versão Estável e relatório técnico
Implementação
conduzidos pela equipe de TI da final com recomendações de
Institucional
Embrapa,
revisão
de
LGPD, expansão.
documentação e capacitação da
equipe.

Observações
●​ As durações são estimativas baseadas na complexidade média das tarefas e poderão sofrer ajustes
conforme o ritmo de validação técnica da Embrapa.
●​ Cada marco mensal representará uma entrega verificável, acompanhada de relatório técnico e reunião
de acompanhamento com a equipe da Embrapa.
●​ A WAB manterá acompanhamento contínuo via ferramentas de versionamento e controle de progresso
(Github e RunCloud Deploy Tracker).

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 7

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

ESCOPO E MÓDULOS
O Chatbot Embrapa será composto por módulos interdependentes que cobrem toda a cadeia operacional,
desde a infraestrutura de nuvem até o painel analítico e a governança dos dados.​
A seguir, estão detalhados os principais componentes e suas responsabilidades.

INFRAESTRUTURA E CONFIGURAÇÃO
●​ Servidor Cloud: Provisionamento na Digital Ocean (8 GB RAM, 4 vCPUs, 160 GB SSD);
●​ Gerenciamento: Configuração via RunCloud Business Plan, com deploy automatizado (Git CI/CD);
●​ Segurança de ambiente: Certificados SSL automáticos, firewall de aplicação, logs e backups
automáticos;
●​ Monitoramento contínuo: Verificação de uptime e consumo de recursos 24h/dia.

COLETA E PROCESSAMENTO DE DADOS (PYTHON)
●​ Integração com AVA Moodle: Extração de conteúdos via API oficial do Moodle;
●​ Transcrição de vídeos: Integração com yt-dlp para captura e processamento de legendas de vídeos no
YouTube;
●​ Tratamento de dados: Pipeline Python para limpeza (HTML para texto puro), organização e
estruturação;
●​ Armazenamento intermediário: Dados em formato JSON/TXT em UTF-8, classificados por
curso/tópico;
●​ Upload automatizado: Envio estruturado de conteúdo para a IA escolhida.

BACKEND SYMFONY (API CENTRAL)
●​
●​
●​
●​

Arquitetura: API RESTful central integrando Python, Moodle, Chatbase/OpenAI e Kommo;
Segurança: Controle de acesso (tokens, roles, logs, cache e auditoria);
Automação: Cron interno para atualização incremental e versionamento (1.0, 1.1, etc.);
Documentação: Endpoints documentados e padronizados.

INTEGRAÇÕES INTELIGENTES
INTEGRAÇÃO COM O MOODLE (COLETA DE DADOS)
A comunicação com o Ambiente Virtual de Aprendizagem (AVA) será feita por meio da API REST oficial do
Moodle, com tokens criptografados e autenticação segura.​
A coleta de conteúdos será incremental, processando apenas novos materiais a cada execução, com logs
automáticos e auditoria de sincronizações.

INTEGRAÇÃO COM CHATBASE/OPENAI
●​
●​
●​
●​

Envio automático de documentos processados à I.A. via API;
Sincronização de memória e aprendizado contínuo do chatbot;
Cenário alternativo “B”: integração direta com OpenAI Assistants + Vector Store;
Monitoramento de créditos, consumo e alertas automáticos de uso.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 8

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

INTEGRAÇÃO COM KOMMO E WHATSAPP
●​ Criação de conta Kommo e configuração da WhatsApp Business API;
●​ Desenvolvimento do SalesBot Kommo conectado ao backend Symfony;
●​ Fluxo completo de comunicação:​
Usuário, WhatsApp, Kommo, Symfony, Chatbase/OpenAI, Symfony, Kommo, WhatsApp, Usuário;
●​ Armazenamento de logs e estatísticas no painel administrativo.

Uso Temporário do Telegram para Testes
Durante a fase de desenvolvimento e homologação, o Telegram poderá ser utilizado como canal temporário de
interface para testes e validação dos fluxos de comunicação do chatbot, antes da ativação do número oficial
do WhatsApp Business. Essa etapa permite realizar ajustes de usabilidade, validação de respostas e medições
de desempenho de forma segura e controlada, sem a necessidade imediata de vincular um número
institucional.
Os dados de interação gerados no ambiente de testes do Telegram serão armazenados internamente, de
forma segura e rastreável, para análise técnica e aprimoramento da IA. Nenhum dado sensível será divulgado
ou transferido para terceiros.
Após a validação técnica e a aprovação da Embrapa, o sistema será configurado para operar com a API oficial
do WhatsApp Business, o que exigirá a disponibilização de um número de celular corporativo a ser fornecido
pela Embrapa. Esse número será vinculado ao ambiente de produção do chatbot, substituindo o uso
temporário do Telegram e garantindo o funcionamento definitivo dentro dos padrões de comunicação
institucional.

Canal WhatsApp como Interface Segura
O WhatsApp será apenas um canal de interface, nunca um repositório de dados.​
As mensagens trafegadas terão tratamento transitório, processadas em tempo real e armazenadas somente
com metadados anonimizados (ID da sessão, data e tipo de interação).​
A comunicação seguirá criptografia ponta a ponta e controle de sessão pelo backend.

Etapa de Homologação Institucional
Antes da publicação em produção, a equipe de TI da Embrapa realizará homologação técnica completa,
validando:
●​
●​
●​
●​

O fluxo de mensagens e a integridade dos dados trafegados;
O cumprimento das normas de segurança, sigilo e comunicação digital;
A conformidade com a política institucional da Embrapa.
A liberação do sistema ocorrerá apenas após aprovação formal dessa equipe.​

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 9

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

BANCO DE DADOS E MONITORAMENTO
BANCO DE DADOS INTERNO
●​ Banco MySQL 8.0 hospedado no mesmo ambiente da aplicação;
●​ Armazenamento de logs, metadados, histórico de conversas e cache de consultas;
●​ Dados tratados de forma anonimizada e estruturados para consultas analíticas e relatórios.

MONITORAMENTO DE LOGS DE INTELIGÊNCIA ARTIFICIAL
●​ Registro de perguntas, respostas, tempos de resposta e falhas;
●​ Dados disponíveis no painel administrativo para auditoria técnica da Embrapa.

SEGURANÇA E GOVERNANÇA
SEGURANÇA DAS CHAVES DE API
●​ Criptografia AES-256 em variáveis de ambiente (dotenv);
●​ Rotação periódica de chaves e autenticação exclusiva via SSH;
●​ Acesso limitado a dispositivos identificados da WAB durante o desenvolvimento.​

ISOLAMENTO E GOVERNANÇA DOS DADOS
Durante o desenvolvimento, o acesso ao servidor e às chaves será restrito a computadores autenticados pelas
chaves SSH da WAB.​
Após a entrega, todas as credenciais serão transferidas formalmente à Embrapa, que assumirá o controle total
dos ambientes.​
Os dados institucionais permanecerão sob propriedade da Embrapa, sem cópias externas ou transferência
para terceiros.​
Todo o fluxo de dados será auditável, versionado e conforme a LGPD.

ADMINISTRAÇÃO, DASHBOARDS E RELATÓRIOS
O módulo administrativo, desenvolvido em Symfony, atua como o backend central de gestão do Chatbot
Embrapa.​
Seu propósito é permitir o acompanhamento operacional e o monitoramento de desempenho.​
Por meio desse painel, administradores, técnicos e gestores poderão auditar interações e gerar relatórios.

PAINEL ADMINISTRATIVO
●​
●​
●​
●​
●​

Login seguro e gestão de perfis e permissões;
Monitoramento de exceções, logs de falhas e consumo de APIs;
Auditoria de conversas e respostas de IA;
Verificação dos sincronismos e histórico de integrações com o Moodle;
Dashboard geral com status dos serviços e versão do sistema.

O painel funcionará como núcleo de controle e auditoria, permitindo rastreabilidade e transparência das
operações.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 10

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

MÓDULO DE ANALYTICS E FEEDBACK
Esse módulo coleta e processa dados de uso do chatbot, transformando-os em indicadores estratégicos para as
áreas de Educação Corporativa, TI e Gestão do Conhecimento da Embrapa.
Principais Métricas:
●​ Quantidade total de perguntas realizadas e respondidas;
●​ Tempo médio de resposta e taxa de acerto da IA;
Essas informações são armazenadas no banco interno MySQL e tratadas de forma anonimizada, conforme a
LGPD, permitindo análises seguras e consistentes.

EXPORTAÇÃO DE RELATÓRIOS
O sistema disponibilizará exportação de relatórios em formatos CSV, com filtros por período.​
Esses relatórios incluirão dados de uso, logs para auditoria e métricas de desempenho, podendo ser integrados
a sistemas internos da Embrapa, como um BI corporativo.
●​ Exportação autenticada e restrita a usuários autorizados;
●​ Controle de permissões para geração e download;

TESTES E PÓS-LANÇAMENTO
Antes da implantação definitiva, serão conduzidos testes integrados end-to-end, validando todo o fluxo
técnico:​
(coleta, processamento, IA, resposta, registro).​
Após os testes, será realizado um ciclo de estabilização com suporte técnico dedicado.
Atividades previstas:
●​
●​
●​
●​

Testes de aceitação com usuários-piloto;
Ajustes de prompts, desempenho e interface;
Monitoramento de performance e carga;
Garantia técnica de 80 horas pós-lançamento, cobrindo correções e otimizações.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 11

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

ITENS NÃO INCLUSOS
Apenas para documentar, segue uma lista de itens não contemplados por esta proposta e que, caso sejam
solicitados, serão cobrados à parte, de acordo com sua complexidade e disponibilidade da equipe.
●​
●​
●​
●​
●​

Suporte técnico individual a usuários finais (fora do contrato principal);
Licenças de terceiros não mencionadas (ex.: Adobe, Office, etc.);
Conteúdo textual ou audiovisual a ser fornecido pela Embrapa;
Traduções, revisões ou adequações de textos;
Integrações futuras não descritas nesta proposta.

HORA TÉCNICA
A WAB Agência Digital disponibiliza um plano contínuo de manutenção e suporte técnico voltado à evolução
do Chatbot Embrapa após o término do projeto-piloto.
Esse plano abrange ajustes corretivos, preventivos e evolutivos, garantindo a atualização constante do
sistema, a segurança da infraestrutura e a estabilidade operacional.​
Entre as atividades contempladas estão:
●​
●​
●​
●​

Atualização periódica de bibliotecas, dependências e APIs;
Correção de eventuais falhas e otimizações de desempenho;
Apoio técnico para integração de novos conteúdos e cursos no AVA;
Suporte consultivo para expansão da arquitetura de IA.

O atendimento será prestado em dias úteis, das 9h às 18h (horário de Brasília), mediante abertura de
chamado técnico via e-mail institucional.​
Cada solicitação será contabilizada com um mínimo de 1 (uma) hora técnica, considerando as etapas de
análise, execução e homologação.
Caso seja necessário ultrapassar o limite de horas contratado, as horas excedentes poderão ser adquiridas de
forma avulsa, conforme tabela vigente da WAB Agência Digital.​
Todos os serviços serão realizados com registro em sistema de chamados e versionamento de código,
assegurando transparência, rastreabilidade e conformidade com as políticas de governança da Embrapa.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 12

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

PLANO DE MANUTENÇÃO E SUPORTE
OBJETIVO
O objetivo deste plano é garantir o funcionamento contínuo, seguro e atualizado do Chatbot Embrapa, bem
como viabilizar o desenvolvimento evolutivo do sistema ao longo de sua operação.​
Diferentemente de sistemas tradicionais, este projeto envolve inteligência artificial, pipelines de dados e
integrações com APIs externas, exigindo monitoramento e otimizações constantes.
O plano oferecerá um conjunto de horas de consultoria, manutenção técnica e desenvolvimento contínuo,
assegurando que o chatbot permaneça eficiente, confiável e em conformidade com as diretrizes de tecnologia
da Embrapa.

SERVIÇOS INCLUSOS
MANUTENÇÃO E ATUALIZAÇÕES
●​
●​
●​
●​

Correção de bugs e ajustes de funcionalidades no backend (Symfony/Python);
Atualização de dependências e bibliotecas (PHP, Composer, NPM, pip);
Verificação de compatibilidade com versões mais recentes das APIs do Moodle, Chatbase e OpenAI;
Revisão de segurança de tokens, credenciais e políticas de acesso.

DESENVOLVIMENTO EVOLUTIVO
●​ Criação de novas rotinas de integração entre sistemas internos da Embrapa e o Chatbot;
●​ Implementação de novos módulos no painel administrativo (estatísticas, monitoramento, exportação
de dados etc.);
●​ Evoluções no fluxo de mensagens, UX conversacional e relatórios automáticos de uso;
●​ Ampliação da base de conhecimento com novos cursos e conteúdos do AVA.

MONITORAMENTO E OTIMIZAÇÃO DE PERFORMANCE
●​
●​
●​
●​

Monitoramento 24h de uptime, consumo de CPU e memória;
Ajustes periódicos no desempenho do crawler e do pipeline de limpeza de dados;
Revisão e reindexação de bases de conhecimento (Vector Store);
Otimização de custos e tokens das APIs externas, visando economia operacional.

RELATÓRIOS E CONSULTORIA TÉCNICA
●​ Reuniões de acompanhamento técnico e consultivo;
●​ Relatórios trimestrais de desempenho do chatbot e uso de créditos Chatbase/OpenAI;
●​ Recomendações de aprimoramento contínuo com base em métricas reais de uso.​

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 13

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

CONDIÇÕES DE ATENDIMENTO
●​ Horário de Atendimento: O suporte será prestado de segunda a sexta-feira, das 9h às 18h, no período
de 10 de janeiro a 20 de dezembro.
●​ Prazo para Início do Atendimento: O tempo de resposta para solicitações de suporte ou
desenvolvimento será de até 2 (dois) dias úteis.
●​ Prazo de Execução: O tempo para execução das demandas dependerá da complexidade da solicitação,
sendo estimado no momento do atendimento.
●​ Deslocamento: Para atendimentos fora da cidade de Araraquara–SP, despesas com translado,
alimentação e hospedagem serão repassadas ao cliente.
●​ Tempo Mínimo de Cobrança: Cada solicitação de suporte ou desenvolvimento será contabilizada com
um mínimo de 1 (uma) hora técnica, levando em consideração atividades como análise da arquitetura
do código-fonte, homologação, publicação em produção, e versionamento.

SLA POR SEVERIDADE
●​ S1 — Indisponibilidade total: resposta em 2h úteis, contorno/correção em até 16h úteis;
●​ S2 — Função crítica degradada: resposta em 4h úteis, correção/contorno em até 32h úteis;
●​ S3 — Ajustes/consultas: resposta em 1 dia útil, execução conforme fila técnica.​
Canais oficiais: e-mail institucional e portal de chamados, com registro, evidências e histórico.

HORAS EXCEDENTES
●​ Caso o volume de horas contratadas seja excedido, horas adicionais poderão ser adquiridas conforme a
tabela vigente de Hora Técnica WAB.
●​ Trabalhos realizados fora do horário comercial ou em caráter emergencial serão considerados horas
excedentes.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 14

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

GESTÃO DE INFRAESTRUTURA
Caso a GESTÃO DE INFRAESTRUTURA seja contratada, a WAB disponibilizará camadas adicionais de proteção e
monitoramento no ambiente do chatbot, sem repasse de licenças de terceiros para a Embrapa. Esses serviços
complementares reforçam segurança, disponibilidade e observabilidade da aplicação.

CAMADA DE PROTEÇÃO APLICACIONAL E REDE
●​ Firewall de aplicação (WAF) + proteção anti-bot com listas de reputação globais, bloqueio por
comportamento e desafio por captcha para tráfego suspeito;
●​ Mitigação de varreduras e força bruta, incluindo rate limiting por IP/ASN e greylisting adaptativo;
●​ Inteligência de ameaças com atualizações contínuas de IPs maliciosos, C&C, proxies anônimos e TOR
exit nodes;
●​ Regras ativas por país/ASN mediante política acordada (ex.: bloqueio por geolocalização para áreas
administrativas);
●​ Relatórios de segurança com evidências de bloqueios, tentativas e tendências semanais/mensais.

MONITORAMENTO DE DISPONIBILIDADE (UPTIME)
●​ Sondas globais de disponibilidade (múltiplas regiões) com verificação contínua de HTTP/HTTPS e
latência;
●​ Alertas em tempo real (e-mail) para indisponibilidade, degradação de resposta e anomalias de
latência;
●​ Histórico de SLA com gráficos de uptime, tempos médios e janelas de manutenção;

PRIVACIDADE, LGPD E DADOS
●​ Não há coleta de conteúdo das conversas; o monitoramento trabalha com telemetria técnica (status,
latência, IP/origem, país/ASN, códigos de resposta).
●​ Logs e relatórios gerados permanecem sob controle da Embrapa, com retenção conforme política
definida no documento (padrão 90 dias).
●​ Sem compartilhamento de dados pessoais com terceiros; uso restrito a finalidades de segurança e
operação.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 15

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

CUSTOS
FIXOS
TERCEIROS (OPEX)

MENSAIS

DE

Os itens abaixo referem-se a serviços de terceiros necessários à operação do Chatbot Embrapa e não fazem
parte do valor de desenvolvimento da WAB. A contratação e o faturamento serão em nome da Embrapa, com
apoio da WAB na configuração inicial, definição de limites de consumo e alertas de custo.
O custo estimado é de $221,00 (duzentos e vinte e um dólares).
SERVIÇO

O QUE COBRE

MODELO DE
COBRANÇA

QUEM CONTRATA

PLANO MENSAL

DIGITALOCEAN (CLOUD)

Servidor
(CPU/RAM/SSD),
tráfego, snapshots

Mensal por tamanho
de máquina +
armazenamento

Embrapa

$48.00

RUNCLOUD (BUSINESS)

Gestão do servidor,
deploy (CI/CD), SSL,
automações

Mensal por
assinatura/servidor

Embrapa

$49.00

CHATBASE (CENÁRIO A)

Base de
conhecimento e
orquestração do
chatbot

Mensalidade +
franquia/uso

Embrapa

$150.00

OPENAI (CENÁRIO B)

Inferência (tokens) +
Vector Store

Pay-as-you-go
(mensal por uso)

Embrapa

$150.00

KOMMO (CRM + BOT)

Canal de mensageria
e automações
(SalesBot)

Mensal por
plano/usuários

Embrapa

$25.00

WHATSAPP BUSINESS
API (BSP)

Canal oficial de
mensagens

Mensalidade do BSP
+ por
sessão/mensagem

Embrapa

______

NÚMERO TELEFÔNICO
(WHATSAPP)

Linha dedicada ao
WA Business

Mensal
(operadora/BSP)

Embrapa

______

TELEGRAM
(HOMOLOGAÇÃO)

Canal temporário de
testes

Gratuito

—

Sem custo fixo

O WhatsApp requer um número corporativo fornecido pela Embrapa e contratação de BSP. A cobrança
depende de categorias do plano contratado diretamente com a operadora de mensagem.
Opcionalmente a Embrapa pode contratar a WAB para gerenciar a hospedagem. Caso isso seja feito, os custos
com DigitalOcean e Runcloud serão absorvidos pela WAB.​

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 16

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

CONDIÇÕES COMERCIAIS
A seguir, apresentamos a tabela detalhada de investimentos correspondentes às etapas de desenvolvimento,
manutenção e infraestrutura do projeto Chatbot Embrapa.
Os valores incluem o escopo técnico completo descrito neste documento, contemplando todas as fases do
projeto-piloto, desde a pesquisa e desenvolvimento até a homologação e entrega final.

1

2

3

Descrição

Detalhamento

Valor

Desenvolvimento e Deploy
do Chatbot

Implementação completa do sistema,
incluindo
levantamento
de
requisitos, desenvolvimento backend
(Symfony), integração com Moodle,
Chatbase/OpenAI e Kommo, criação
do painel administrativo, protótipo
funcional,
testes
controlados,
homologação
institucional
e
documentação técnica final.

113.000,00

Plano de Manutenção e
Suporte Técnico Mensal
(opcional)

Pacote de 20 horas mensais para
atendimento corretivo, preventivo e
evolutivo,
com
atualização
de
bibliotecas,
monitoramento
de
desempenho, ajustes técnicos e
consultoria de expansão.

R$ 4.800,00

Gestão da Infraestrutura
Pela WAB (opcional)

Servidor dedicado com 2 vCPUs, 4 GB
de RAM, 120 GB SSD, SSL, backup
automático a cada 12h, firewall de
aplicação e monitoramento contínuo
de disponibilidade.

R$ 2.230,00

Forma de Pagamento do Desenvolvimento
Pagamento por marcos: 30% (início) + 40% (Protótipo Alfa) + 30% (Entrega na Homologação).

Reajuste de Planos Opcionais
Planos opcionais de manutenção/hospedagem poderão ter reajuste anual pelo índice oficial (IGPM da FGV),
conforme contrato específico.

WAB Agência Digital​
CNPJ: 07.270.504/0001-70​
Representante Legal: Jonas Ernesto Poli​
CPF: 296.652.468-52​
Cargo: Diretor Técnico​
E-mail: jonas@wab.com.br​
Telefone: (16) 3333-3020​
Site:wab.com.br

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-251105-1
Página 17

Telefone (16) 3332-7798 ou (16) 98179-0888
Edifício América - Araraquara - SP

