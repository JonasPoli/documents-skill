PROPOSTA TÉCNICA COMERCIAL
SISTEMA DE CONTROLE
À

Máxima Indústria e Comércio de Coifas Ltda-ME
Primeiramente, gostaríamos de agradecer pela oportunidade de trabalhar com a sua empresa.
A WAB Agência Digital é uma empresa com mais de 20 anos de experiência em comunicação pela Internet.
Somos especializados em oferecer soluções abrangentes, que incluem desenvolvimento de sites
personalizados, sistemas sob demanda, aplicativos móveis, hospedagem web, integração de sistemas e
marketing digital.
A solução apresentada nesta proposta foi criada por nossa equipe de especialistas, após uma análise de suas
necessidades.
A nossa equipe está à sua disposição para qualquer dúvida ou para esclarecer os detalhes do projeto pelos
telefones (16) 98179-0888 / (16) 3332-7798 ou pelo e-mail wab@wab.com.br.

Araraquara, 02 de fevereiro de 2026

_____________________________________​
Jonas Ernesto Poli​
CPF: 296.652.468-52
M. DUDALSKI & CIA SOLUÇÕES EM INTERNET LTDA - ME
CNPJ: 07.270.504/0001-70

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 1

Tel 16 3332 7798
Edifício América - Araraquara - SP

DESENVOLVIMENTO DE SISTEMA
DESCRIÇÃO DO ORÇAMENTO

O objetivo deste documento é descrever o desenvolvimento do Sistema de Gestão Empresarial (ERP) sob
medida para a Máxima, sendo construído em módulos escalonáveis que evoluirão para atender a todas as
necessidades operacionais e de crescimento da empresa.

CENÁRIO GERAL
O Máxima Gestão deve oferecer visibilidade completa ao ciclo de vendas, desde a criação de propostas e
orçamentos até a gestão de pedidos, logística e agendamento de instalações. A segurança é fundamental,
garantindo restrição de acesso a usuários autorizados e proteção de dados sensíveis dos clientes e das
informações comerciais.
O sistema deverá abranger o ciclo completo da cadeia de valor, desde o cadastro de clientes e parceiros até o
faturamento, gestão de pedidos de compra e acompanhamento de instalações em campo. Ele gerenciará
diversos perfis de usuários, como vendedores, coordenadores de logística, técnicos de campo e
administradores. Durante o andamento dos pedidos, os usuários poderão registrar atualizações e os
administradores poderão acompanhar o status e controlar os prazos de entrega.

ACESSO AO SISTEMA
Para garantir a segurança, será utilizada a tecnologia de verificação em duas etapas. O usuário que efetuar
login receberá imediatamente um e-mail contendo um código de segurança. Esse processo se repetirá a cada
novo login.

RESPONSIVIDADE
O sistema será desenvolvido seguindo os padrões de visualização responsiva, o que significa que o layout será
otimizado para adaptar-se a diferentes resoluções de tela. Isso incluirá telas grandes de até 1680px de largura,
iPads em modo paisagem e retrato, iPhones em modo paisagem e retrato, entre outros dispositivos.
●​
●​
●​
●​
●​

1680px​de largura
1022px​de largura
768px​ de largura
478px​ de largura
320px​ de largura

É importante destacar que, caso seja necessário adaptar o sistema para outras dimensões de tela, esse recurso
poderá ser desenvolvido opcionalmente. Se essa opção for escolhida, o custo será orçado separadamente,
considerando a complexidade do ajuste necessário.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 2

Tel 16 3332 7798
Edifício América - Araraquara - SP

Introdução
Este documento apresenta a proposta técnica e comercial para o desenvolvimento de um sistema de gestão
empresarial (ERP) sob medida para a empresa "Máxima". O objetivo central do projeto é substituir a
plataforma atual, "Smart Sistemas", que se mostrou limitada para suportar a complexidade e as necessidades
específicas das operações da Máxima.

Declaração do Problema
A análise da reunião de levantamento de requisitos revelou deficiências operacionais que impedem o
crescimento e a eficiência da Máxima. Os problemas centrais incluem uma severa fragmentação de processos,
com equipes recorrendo a ferramentas externas e manuais como o Canva para a criação de orçamentos e o
WhatsApp para comunicação interna essencial. Esta dependência de soluções paliativas resulta em gargalos de
comunicação entre os departamentos de vendas, logística e compras, além de uma desconexão completa com
as operações de campo, que dependem de cronogramas impressos e não possuem um canal para feedback em
tempo real.

Solução Proposta
A solução proposta é o desenvolvimento de um ecossistema de software integrado, composto por uma
aplicação web central construída sobre o framework Symfony e uma aplicação móvel dedicada para técnicos e
instaladores de campo. Esta solução unificada servirá como uma única fonte de verdade para toda a empresa,
automatizando fluxos de trabalho chave, desde a geração de propostas profissionais até a gestão de instalações
em campo, e elevando a qualidade da apresentação da marca Máxima aos seus clientes.

Visão Geral do Escopo
O escopo do projeto abrange o desenvolvimento de módulos essenciais que cobrem todo o ciclo de vida de um
pedido. Isso inclui a gestão de produtos, clientes e parceiros, um fluxo de vendas integrado com geração de
propostas, módulos de operações para compras, logística e expedição, e uma aplicação móvel para o serviço de
campo. Cada módulo será projetado para resolver os pontos de dor específicos identificados e para funcionar
de forma coesa dentro do ecossistema.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 3

Tel 16 3332 7798
Edifício América - Araraquara - SP

Parte I: Especificação Funcional
Arquitetura do Sistema e Utilizadores
Visão Geral do Ecossistema
O sistema "Máxima Gestão" será composto por dois componentes principais que operam de forma sinérgica
para abranger todas as facetas do negócio:
●​ Aplicação Web Central: Será o centro de todas as operações empresariais, acessível através de
navegadores web modernos. Esta será a interface primária para as equipes de vendas, logística, compras
e gestão. Todas as atividades de back-office, desde o cadastro de clientes e produtos até ao faturamento e
relatórios gerenciais, serão realizadas nesta plataforma.
●​ Aplicação Móvel para Técnicos de Campo: Uma aplicação móvel (híbrida ou nativa para iOS e Android)
projetada especificamente para as necessidades dos técnicos e instaladores. A aplicação sincronizará
dados em tempo real com a Aplicação Web Central através de uma API REST segura, garantindo que a
informação flua de forma bidirecional e instantânea entre o escritório e o campo.

Usuários e Controle de Acesso
Para garantir a segurança das informações e que cada pessoa veja e faça apenas o que é permitido, o
sistema terá níveis de acesso por função.
Assim, cada usuário poderá acessar somente as partes do sistema relacionadas ao seu papel.

A observação de que "cada vendedor só vê o seu" é um requisito de segurança básico, mas o problema
fundamental deve-se ao fato da coordenadora de logística não ter visibilidade de atualizações críticas sem uma
notificação manual via WhatsApp. Isto demonstra que o modelo de permissões precisa ser mais sofisticado do
que a simples propriedade de registros. A nova arquitetura de permissões será dinâmica: por exemplo, quando
o estado de um Pedido muda para "Pronto para Agendamento", o sistema concederá automaticamente
permissões de leitura e edição à função de Logística, facilitando a transição de responsabilidades de forma
segura e automatizada.
As funções de utilizador definidas são:
●​ Administrador: Acesso completo ao sistema, incluindo gestão de utilizadores, configurações globais e
parametrização de módulos.
●​ Gestão/Proprietário: Acesso irrestrito a todos os dados operacionais, relatórios financeiros e à visão
"Gerencial" com margens de custo e lucro por pedido.
●​ Representante de Vendas (Vendedor): Acesso restrito aos seus próprios clientes, orçamentos, pedidos e
agendamentos. Terá permissão para criar e gerir orçamentos, convertê-los em pedido e gerir o
"Acompanhamento da Obra" para os seus projetos.
●​ Coordenador(a) de Logística (Jéssica): Gere a expedição, o agendamento de instalações, o planejamento
de rotas (roteiro via Google Maps) e monitoriza o estado das instalações. Receberá notificações
automáticas quando um pedido estiver pronto para ser agendado.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 4

Tel 16 3332 7798
Edifício América - Araraquara - SP

●​ Agente de Compras: Gere os pedidos de compra para fornecedores e realize a reconciliação dos
"fechamentos" de pagamento da fábrica.
●​ Técnico de Campo (Instalador): Utilizador da aplicação móvel. Acesso aos agendamentos diários, detalhes
do trabalho, checklists e realiza o upload de mídias (fotos/vídeos) diretamente do local da obra.

Análise das Telas e Requisitos Funcionais
Esta seção detalha o funcionamento de cada tela do sistema atual, identifica os problemas e define os
requisitos para o novo sistema "Máxima Gestão".

Dashboard (Tela Inicial)
●​ Funcionamento Atual: A tela inicial exibe widgets personalizáveis pelo usuário, uma estimativa de acesso
de cada funcionário, aniversariantes e mensagens do dia. Possui também uma agenda que deveria ser
compartilhada, mas na prática não funciona, pois cada um utiliza a sua, impedindo a visibilidade sobre
agendamentos.
●​ Problemas Identificados: A agenda compartilhada é ineficaz. Faltam indicadores de negócio (KPIs)
relevantes para a gestão. A informação é genérica e pouco acionável.
●​ Requisitos para o "Máxima Gestão":
○​ Dashboard por Função: Criar dashboards personalizados baseados na função do usuário.
○​ Vendedores: Verão um funil de vendas (Orçamentos > Pedidos Aprovados), metas e comissões.
○​ Logística: Verá um painel de pedidos aguardando agendamento, instalações do dia/semana e status
das entregas.
○​ Gestão: Terá uma visão consolidada com KPIs como faturamento, ticket médio, margem de lucro e
volume de pedidos por status.
○​ Central de Notificações: Um widget central que exibe notificações acionáveis (ex: Pedido 123
atualizado por Vendedor X, Checklist do Pedido 456 preenchido).

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 5

Tel 16 3332 7798
Edifício América - Araraquara - SP

Módulo de Cadastros
Este módulo centraliza as entidades fundamentais do negócio.

Clientes
●​ Funcionamento Atual: Cadastro padrão com campos como CNPJ, Inscrição Estadual e abas para Endereço
de Cobrança, Endereço de Entrega e Dados Adicionais/Financeiros. A distinção entre endereço de
cobrança e entrega é um ponto importante e funcional.
●​ Problemas Identificados: O cadastro é funcional, mas isolado. Não há um histórico consolidado de
interações ou um perfil completo do cliente.
●​ Requisitos para o "Máxima Gestão": Manter os campos atuais e enriquecer o cadastro para se tornar um
verdadeiro CRM. Adicionar um histórico completo de todos os orçamentos, pedidos, interações do
"Acompanhamento da Obra" e notas fiscais, tudo visível em uma única tela.

Fornecedores
●​ Funcionamento Atual: Um cadastro simples para registrar fornecedores, utilizado como base para o
módulo de "Contas a Pagar".
●​ Problemas Identificados: Não há vínculo claro entre fornecedores, produtos e pedidos de compra,
dificultando o rastreamento.
●​ Requisitos para o "Máxima Gestão": Evoluir o cadastro para incluir informações como catálogos de
produtos, tabelas de preços de custo, prazos de entrega e histórico de pedidos de compra, vinculando-o
diretamente ao módulo de PIM e Compras.

Funcionários
●​ Funcionamento Atual: Cadastro de informações dos funcionários, usado principalmente para criar suas
contas de usuário no sistema.
●​ Requisitos para o "Máxima Gestão": Manter a funcionalidade e integrá-la ao sistema de RBAC (Regras de
login), onde cada funcionário será associado a uma ou mais funções (Vendedor, Logística, etc.) que
definirão suas permissões.

Arquitetos
●​ Funcionamento Atual: Não existe uma tela dedicada. A informação é vinculada a um pedido de venda. Há
a necessidade de registrar a qual associação um arquiteto pertence para fins de pontuação e relatórios,
um processo que hoje é manual.
●​ Problemas Identificados: Falta de um cadastro centralizado, dificultando a gestão de parcerias e o cálculo
de comissões ou pontos.
●​ Requisitos para o "Máxima Gestão": Criar um módulo dedicado para "Parceiros", permitindo cadastrar
arquitetos, associá-los a projetos e gerar relatórios de desempenho e pontuação de forma automática.
Futuramente será desenvolvido relatórios de pontuação por associação.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 6

Tel 16 3332 7798
Edifício América - Araraquara - SP

Produtos
●​ Funcionamento Atual: Descrito como "gigante e confuso". Exige o cadastro de "Linha, Grupo, Subgrupo",
informações que não vêm do fornecedor, mas são uma exigência do sistema. Para isso, é preciso primeiro
cadastrar um "Produto Auxiliar" com essas categorias antes de cadastrar o produto final. A gestão de
preços é problemática: tabelas antigas não podem ser desativadas e continuam aparecendo, poluindo a
interface, pois os produtos vendidos não podem ser excluídos.
●​ Problemas Identificados:
1.​ Estrutura Rígida: A categorização "Linha, Grupo, Subgrupo" é inflexível e gera trabalho extra com o
"Produto Auxiliar".
2.​ Ciclo de Vida: A impossibilidade de arquivar tabelas de preços antigas torna o sistema poluído e
suscetível a erros.
3.​ Produtos Compostos: A forma como "subprodutos" (componentes de um item customizado) são
tratados no pedido de venda é confusa, sem uma hierarquia visual clara.
●​ Requisitos para o "Máxima Gestão":
1.​ Atributos Dinâmicos: Substituir a estrutura rígida por um sistema de atributos flexível.
Administradores poderão criar conjuntos de atributos (ex: Acabamento, Elétrica) e associá-los a
categorias de produtos, eliminando a necessidade do "Produto Auxiliar" e permitindo ambos
produtos padrão e feitos sob medida.
2.​ Versionamento de Preços: Implementar um ciclo de vida para tabelas de preços com status
(Rascunho, Ativa, Arquivada). Apenas tabelas Ativas serão usadas em novos orçamentos, enquanto as
Arquivadas serão mantidas para consulta histórica, resolvendo a "explosão lógica" mencionada.
3.​ Modelagem de Produtos Configuráveis: Criar uma distinção clara entre "Produto Base" e
"Componentes". A interface de criação de pedido permitirá adicionar componentes a um produto
base, exibindo uma hierarquia visual clara (ex: com indentação), para que fique óbvio que "o item 2
faz parte do item 1". O sistema deve permitir a venda de componentes separadamente.
4.​ Exclusão Lógica: O sistema deve permitir que produtos sejam apagados “logicamente” retirando da
lista dos usuários, mas mantendo seus dados para uso em orçamentos já realizados, criando uma
funcionalidade para o administrador possa ver os produtos apagados. Produtos inativos devem ter o
filtro padrão como invisível.
5.​ Controle de estoque: Gerenciamento de estoque de produtos e vinculação opcional de itens do
estoque aos clientes.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 7

Tel 16 3332 7798
Edifício América - Araraquara - SP

Módulo Comercial
Orçamentos
●​ Funcionamento Atual: A tela de orçamento é idêntica à de pedido de venda. O sistema gera um
documento "padrão", uma simples lista de itens. Devido ao público exigente, a equipe cria uma proposta
visualmente mais rica no Canva, com fotos e descrições, e a anexa ao orçamento do sistema. Quando o
cliente aprova, o vendedor dá um "OK" no sistema e o orçamento é convertido em Pedido de Venda.
●​ Problemas identificados: Processo manual, ineficiente e que gera inconsistência de marca. A imagem
profissional da empresa depende de uma ferramenta externa.
●​ Requisitos para o "Máxima Gestão":
○​ Gerador de Propostas Profissionais: Implementar um construtor de modelos (template builder) que
permite criar layouts de orçamento com a identidade visual da Máxima.
○​ Integração com PIM: Os modelos devem puxar automaticamente imagens, descrições e atributos dos
produtos cadastrados.
○​ Saída em PDF: O sistema deve gerar um PDF de alta qualidade com um clique, eliminando a
necessidade do Canva. Para isso, bibliotecas como PDF ou uma solução baseada em "headless
Chrome" são recomendadas. Este PDF será um orçamento visual detalhado para o cliente com um
layout ainda a ser definido.
○​ Componentes opcionais ou separados: Deve ser possível visualizar o preço separado de
componentes opcionais ou vendidos separadamente, com indicação de quais componentes são parte
de qual produto.

Pedidos de Venda
●​ Funcionamento Atual: É a tela central do sistema. Possui abas para Produtos, Faturamento, Dados de
Entrega, Acompanhamento e Gerencial. Um pedido é "finalizado" (liberado para outros setores) quando o
contrato assinado pelo cliente é recebido, mas não há um campo para anexar o contrato.
●​ Problemas Identificados:
1.​ Comunicação Quebrada: A aba Acompanhamento (ou diário do cliente) é onde o vendedor anexa as
fotos e desenhos da obra para o checklist. No entanto, qualquer atualização aqui não notifica a
logística ou compras, exigindo comunicação manual via WhatsApp.
2.​ Falta de "Trava": O processo de checklist que libera o pedido para agendamento é feito
informalmente. Não há uma "trava" no sistema que impeça o agendamento antes que o checklist
(com fotos obrigatórias) seja concluído. Deverá ser um sistema com solicitação de informações passo
a passo, obrigando o envio de informações obrigatórias, como “Foto de frente” e “Foto de lado”.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 8

Tel 16 3332 7798
Edifício América - Araraquara - SP

●​ Requisitos para o "Máxima Gestão":
1.​ Hub de Comunicação Integrado: A aba Acompanhamento será transformada em um hub de projeto
com um feed cronológico de atualizações. Implementar um sistema de menções que envie
notificações na aplicação para os usuários mencionados (ex: Jéssica), eliminando a necessidade do
WhatsApp. Terá um controle de “mensagem lida” e “não lida” para que o remetente saiba se a
mensagem foi lido ou não.
2.​ Workflow com "Travas" (Checklist Digital): Criar um módulo de checklist onde administradores
definem modelos com itens obrigatórios (incluindo upload de fotos). Um pedido só poderá avançar
para o status "Pronto para Agendamento" após o preenchimento completo do checklist,
automatizando a "trava" de segurança.
3.​ Gestão de Contratos: Adicionar uma funcionalidade para upload do contrato assinado. O ato de
anexar o contrato mudará o status do pedido para "Confirmado", disparando as próximas etapas do
fluxo.

Devolução de Produtos
●​ Funcionamento Atual: Quando um cliente desiste de um item após a compra, esta tela é usada para
registrar a devolução e gerar um crédito (haver) para o cliente.
●​ Requisitos para o "Máxima Gestão": Manter a funcionalidade, garantindo que o crédito gerado seja
facilmente rastreável e aplicável em futuros pedidos na tela de faturamento. Considerando que o cliente
pode trocar o produto do pedido meses depois do pedido inicial e ter ou não alteração no valor da
transação.
●​ “Em haver”: Quando um cliente realizar a devolução de um produto e/ou equipamento, o valor
correspondente deverá ser registrado como crédito em seu cadastro. Caso esse cliente efetue uma nova
compra utilizando esse crédito, o sistema de cálculo de comissão deverá desconsiderar esse valor,
garantindo que não seja gerada comissão sobre montantes pagos com crédito de devolução.

Módulo de Compras
●​ Funcionamento Atual: A partir de um Pedido de Venda finalizado, o usuário seleciona os itens a serem
produzidos e clica em "Criar Pedido de Compra". O sistema então gera o PO. O principal problema reside
no pagamento: a Máxima não paga a fábrica por pedido, mas sim por um lote de itens prontos
("fechamento"). O sistema atual não tem como agrupar vários POs em um "fechamento", tornando a
reconciliação financeira um processo manual e complexo.
●​ Problemas Identificados: Desconexão entre os pedidos de compra e o processo de pagamento real,
gerando retrabalho e falta de controle financeiro.
●​ Requisitos para o "Máxima Gestão":
○​ Módulo de "Fechamento de Fábrica": Criar uma nova entidade que permita agrupar múltiplos
Pedidos de Compra em um único lote de pagamento.
○​ Ciclo de Vida do Fechamento: O "Fechamento" terá seus próprios status (ex: Aberto, Enviado para
Pagamento, Pago), permitindo um controle financeiro preciso e a reconciliação automática dos

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 9

Tel 16 3332 7798
Edifício América - Araraquara - SP

pagamentos com os POs correspondentes.

Módulo de Expedição
●​ Funcionamento Atual: Apresenta uma lista de todos os pedidos com entrega pendente. O coordenador
de logística seleciona os produtos que ficaram prontos, clica em "Entregas e Instalações" e agenda uma
data. O instalador recebe a programação em um papel impresso pela manhã.
●​ Problemas Identificados:
1.​ Fluxo de Informação Manual: A logística precisa buscar informações (como o desenho do arquiteto,
"eixo") na aba Acompanhamento do pedido e as reanexa no agendamento. Um processo redundante
e propenso a erros.
2.​ Entrega Parcial: O sistema não lida bem com entregas parciais de um mesmo item de linha, onde
parte do produto é entregue antes. O status é binário (entregue ou não), o que não reflete a
realidade e causa confusão.
3.​ Falta de Otimização: Não há uma ferramenta para planejar a sequência de visitas do instalador (o
"roteiro").
●​ Requisitos para o "Máxima Gestão":
1.​ Agendamento Inteligente: A tela de agendamento deve exibir automaticamente todos os
documentos e checklists do pedido, sem necessidade de cópia manual.
2.​ Rastreamento Granular de Itens: Cada item de linha (e componente) de um pedido terá seu próprio
status de entrega (Pendente, Agendado, Entregue, Parcialmente entregue). Isso permitirá o
gerenciamento preciso de entregas parciais.
3.​ Funcionalidade de Roteiro: Implementar uma interface de arrastar e soltar (drag-and-drop) para que
o coordenador de logística possa definir a ordem das visitas de cada técnico, otimizando a rota diária.
Esta rota será sincronizada com a aplicação móvel do técnico.

Módulo Financeiro
●​ Funcionamento Atual: Inconsistente por peculiaridades de logística da empresa.
●​ Requisitos para o "Máxima Gestão":
1.​ À receber sem data definida
2.​ Relatórios: Devem levar em consideração devoluções e trocas
3.​ Emissão de nota fiscal parcial: O sistema deve permitir selecionar os produtos presentes em cada
nota.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 10

Tel 16 3332 7798
Edifício América - Araraquara - SP

Aplicação Móvel do Técnico de Campo
●​ Funcionamento Atual: Inexistente. Toda a comunicação é feita via papel e WhatsApp.
●​ Problemas identificados: Falta de informação em tempo real, ausência de feedback do campo,
dependência de processos manuais e impressos, baixa qualidade e padronização na coleta de dados
(fotos/vídeos).
●​ Requisitos para o "Máxima Gestão":
1.​ Agenda e Rota Diária: O técnico verá sua lista de trabalhos do dia, na ordem definida pelo "Roteiro".
Cada trabalho exibirá o endereço (com link para mapas), contato do cliente e detalhes dos itens a
instalar.
2.​ Acesso à Documentação: O técnico terá acesso a todos os arquivos do "Acompanhamento da Obra"
(desenhos, fotos do checklist, etc.) diretamente no aplicativo.
3.​ Checklists Digitais e Captura de Mídia: O técnico preencherá checklists (ex: pós-instalação) e fará o
upload de fotos e vídeos diretamente do local, com possíveis regras de padronização (ex: foto de
frente obrigatória).
4.​ Atualizações de Status em Tempo Real: O técnico poderá atualizar o status do trabalho (Em
andamento, Concluído, Problema Reportado), e essas atualizações serão refletidas instantaneamente
na aplicação web central com notificação para o setor apropriado.
5.​ Captura de Latitude e Longitude: O módulo do técnico de campo deve possuir a capacidade de
capturar os dados do GPS para o cadastro ou atualização dos dados de uma obra.

Aplicação Móvel equipe comercial
●​ Funcionamento Atual: Inexistente. Toda a comunicação é feita via papel e WhatsApp.
●​ Problemas identificados: Falta de informação em tempo real
●​ Requisitos para o "Máxima Gestão":
1.​ Cadastro de atendimento: O vendedor precisa informar ao sistema a visita ao cliente. Não só a visita,
mas precisa poder incluir as diversas informações sobre o projeto, como enviar fotos, descrição de
itens. O projeto do cliente pode possuir diversos itens e cada item suas respectivas documentações.
2.​ Gerenciamento de arquitetos: O vendedor deve ter acesso no sistema aos seus contatos arquitetos e
poderá associar os atendimentos aos arquitetos.
3.​ Captura de Latitude e Longitude: O módulo da equipe comercial de campo deve possuir a
capacidade de capturar os dados do GPS para o cadastro ou atualização dos dados de uma obra.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 11

Tel 16 3332 7798
Edifício América - Araraquara - SP

Funcionalidades existentes
Abaixo estão descritas, de forma resumida, as funcionalidades que já existem na plataforma Smart Sistemas
("Smart Cloud") e que deverão ser reavaliadas e implementadas de forma equivalente, respeitando as
necessidades operacionais da Máxima e a arquitetura do novo sistema.

Módulo Agenda e Atendimento
●​ Agenda – calendário mensal para registrar compromissos, entregas e tarefas. Cada evento possui campos
para data/hora inicial e final, descrição, responsável, status (pendente, concluído, cancelado), categoria
(reunião, instalação, visita técnica), alerta/lembrança e anexos (documentos ou fotos).
●​ Atendimento – tela para controle de chamados e visitas. Campos para número do atendimento, cliente,
data/hora de abertura, motivo, descrição detalhada, prioridade, responsável, prazo de atendimento,
status (aberto, em andamento, fechado) e histórico de interações. Permite anexar fotos e documentos,
gerar ordens de serviço, registrar deslocamento e horas trabalhadas e encaminhar pendências a outros
departamentos.

Módulo Cadastros (subdivide diversos registros
mestre)
●​ Financeiro – planos de contas (hierarquia de centros de custo), categorias de receitas e despesas,
carteiras de cobrança, tipos de títulos e outras parametrizações financeiras. Cada plano de contas possui
código, descrição, natureza (receita ou despesa), centro de custo pai, analítico/sintético e status.
●​ Fornecedores – cadastro completo dos fornecedores da empresa, com informações como dados
cadastrais (CNPJ, inscrições estadual e municipal), responsável pelo atendimento, contatos comerciais,
condições de pagamento negociadas, prazos de entrega, categorias de produtos fornecidos, dados
bancários, endereços de faturamento e entrega, além de limite de crédito.
●​ Funcionários/Representantes – cadastro de colaboradores e representantes de vendas. Campos incluem
nome completo, CPF, RG, data de nascimento, endereço, contato, cargo, departamento, matrícula, data
de admissão e demissão, salário ou comissão, usuário de acesso, senha, perfil de acesso, número de CNH
(para motoristas) e habilitação de funções (ex.: vendas, telemarketing, compras). Podem ser usados para
compor a lista de aniversariantes exibida na página inicialdrive.google.com.
●​ Polo Lojas – cadastro de filiais ou lojas: código, descrição, CNPJ, inscrição estadual, endereço completo,
telefone, gerente responsável, estoque associado e status.
●​ Produtos – cadastro extensivo de itens. Além de código interno e descrição, inclui código de barras,
referência do fabricante, unidade de medida, linha/grupo/subgrupo, marca, modelo, peso, dimensões,
cor, material, NCM, CFOP, CST, alíquotas de IPI/ICMS/PIS/COFINS, preço de custo, preço de venda,
markup, múltiplos de venda, estoque mínimo/máximo, foto e ficha técnica. Há suporte a itens compostos
(produto principal + componentes), produtos com grade (variações de tamanho e cor), produtos auxiliares
e tabelas de preços diferentes por cliente
●​ Produtos Auxiliar – tabela para materiais ou acabamentos auxiliares de fabricação, ou revenda; campos

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 12

Tel 16 3332 7798
Edifício América - Araraquara - SP

para código, descrição, unidade, aplicação, custo e preço sugerido.
●​ Serviços – registro de serviços oferecidos (instalação, manutenção, inspeção). Campos: código, descrição,
categoria, tempo estimado, preço, equipe responsável, NBS/NCM, impostos, checklist de execução e
observações.

Módulo Comercial / Orçamento / Pedidos de Venda
●​ Orçamentos – criação de propostas comerciais com validade. Campos: número, data, cliente, vendedor,
itens (produto/serviço, quantidade, preço, desconto, impostos), observações, condição de pagamento,
validade, anexos e status (em edição, enviado, aprovado, rejeitado). Permite duplicar orçamentos, gerar
PDF, enviar por e‑mail e converter em pedido de venda
●​ Pedidos de Venda – tela central para registrar pedidos de clientes. Possui abas para:
○​ Produtos – lista de itens, quantidades, preço unitário, descontos, impostos, total por item e total do
pedido.
○​ Faturamento – condição de pagamento (à vista, boleto, cartão), parcelado, centro de custo,
vendedor, tabela de preço, comissão, alíquotas de impostos, transportadora, frete e descontos
gerais.
○​ Dados de Entrega – endereço de entrega, data e hora pretendida, forma de entrega (transportadora
ou retirada), contatos, observações logísticas e possibilidade de escalonamento (entrega parcial).
○​ Acompanhamento – histórico do pedido (data de criação, última alteração, responsável), status (em
edição, aguardando aprovação, aprovado, em produção, faturado, expedido, entregue), checklist de
conferência, anexos (contratos, desenhos), comentários internos e campo para assinatura digital.
○​ Gerencial – análise de margem, impostos, custo, receita prevista, comissão e lucros.
●​ Devolução de Produtos – módulo para registrar devoluções de mercadorias. Campos: número, cliente,
data, pedido original, itens devolvidos (produto, quantidade, motivo da devolução), laudo de qualidade,
responsável, observações e valor do crédito gerado. O valor devolvido transforma‑se em crédito em haver
que poderá ser abatido em compras futuras; o sistema de comissões ignora valores pagos com crédito de
devolução.

Financeiro – contas e relatórios
●​ Contas a Pagar e Contas a Receber – registros de títulos financeiros, com campos como número do
documento, tipo (boleto, duplicata, cheque), fornecedor ou cliente, emissão, vencimento, valor original,
juros/multa, desconto, valor pago, data de pagamento, banco/carteira, centro de custo, histórico e anexo
digital (XML ou PDF da nota). Permite parcelamento, classificação por plano de contas, baixas parciais e
geração de remessas e retornos CNAB.
●​ Contas Bancárias e Conciliação OFX – importação de extratos bancários (arquivo OFX), conciliação
automática com lançamentos internos, classificação de despesas/receitas, transferência entre contas,
cálculo de saldo atualizado e emissão de relatórios de conciliação.
●​ Fluxo de Caixa e DRE (Demonstrativo de Resultados) – relatórios gerenciais que consolidam receitas e

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 13

Tel 16 3332 7798
Edifício América - Araraquara - SP

despesas por período. Permitem filtrar por centro de custo, loja, vendedor, produto ou cliente e exibir
gráficos e indicadores de performance. A área gerencial também fornece dashboards, ranking de vendas,
curva ABC de clientes e produtos e indicadores de produtividade.
●​ Emissão de Notas Fiscais – emissão de NF‑e, NFC‑e e notas de serviços. Campos: natureza da operação,
CFOP, série, número, data de emissão, destinatário, itens (produto/serviço), base de cálculo, impostos
federais e estaduais, transportadora, volume, valores de frete, seguro, desconto e observações. O sistema
permite emissão parcial conforme entrega dos produtos.
●​ Emissão de Boletos – geração de boletos bancários com nosso número, carteira, banco, vencimento,
juros/multa, desconto e instruções de cobrança; envio por e‑mail, registro online e baixa automática no
retorno.
●​ Comissões – cálculo e controle de comissões de vendedores. Define‑se alíquota por produto, grupo ou
vendedor e regras de pagamento (sobre faturamento ou recebimento). Relatórios mostram comissões
geradas, pagas, pendentes. Neste módulo, o sistema deve sempre calcular as comissões de venda levando
em consideração que o vendedor não recebe comissões quando o pagamento é feito com créditos do
“Em haver”.

Compras / NF de Entrada
●​ Central de Compras – ambiente para reunir requisições de compra, cotações e aprovações. Inclui seleção
automática de melhor fornecedor, comparativo de preços, prazos e fretes
●​ Pedidos de Compra – campos: número, data, fornecedor, itens (produto, quantidade, preço, prazo),
condições de pagamento, prazo de entrega, observações e status (enviado, confirmado, recebido).
Permite acompanhamento e geração de NF‑e de entrada.
●​ Nota Fiscal de Entrada – escrituração de notas de compra (XML). Importa dados fiscais e cria
automaticamente contas a pagar e entradas de estoque. Campos: número, série, fornecedor, chave de
acesso, data de emissão, data de entrada, CFOP, itens (produto, NCM, quantidade, valor unitário,
impostos), frete e dados adicionais

Expedição e Logística
●​ Lista de Pedidos para Entrega – painel que mostra pedidos prontos para expedição com filtros por data
de entrega, rota, status e região. Permite selecionar vários pedidos e gerar romaneios
●​ Romaneio de Entrega – documento com relação de produtos por pedido, endereço de entrega, telefone
do cliente, responsável pelo recebimento, volumes e instruções especiais. Utilizado para separação e
carregamento.
●​ Separação de Produtos (Picking) – lista de separação com código de barras, descrição, quantidade e
localização no estoque. Possibilita usar leitores de código de barras para confirmação dos itens.
●​ Etiquetas de Identificação – impressão de etiquetas por volume ou item com dados do pedido, produto,
cliente e endereço de entrega, facilitando a conferência.
●​ Entregas Mobile – aplicativo móvel para motoristas registrarem saídas, entregas e coletas; captura de
fotos e assinatura digital do cliente, geolocalização e registro de ocorrências. Integra‑se ao sistema para

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 14

Tel 16 3332 7798
Edifício América - Araraquara - SP

atualizar o status do pedido em tempo real.

Checkout (PDV)
●​ Módulo de venda rápida em balcão ou loja física. Permite pesquisa de produtos por código de barras,
aplicação de descontos, uso de cupons, cálculo automático de troco, integração com TEF/cartões de
crédito e débito, emissão de NFC‑e, controle de abertura/fechamento de caixa e impressão de recibo.

Telemarketing / CRM Simplificado
●​ Tela para ligações ativas e receptivas. Inclui lista de leads/clientes, discador integrado, roteiro de
abordagem, classificação do contato (novo, interessado, orçamento enviado, venda concluída, sem
interesse), agendamento de retorno, registro de observações e geração de orçamento/pedido a partir da
ligação. Permite enviar SMS ou e‑mail e segmentar leads por origem ou campanha.

Outros recursos essenciais
●​ Controle de estoque com entradas, saídas, inventário, ajuste e alerta de mínimo/máximo.
●​ Precificação de produtos com definição de diferentes tabelas de preços e margem de lucro por grupo ou
cliente.
●​ RT de Arquitetos – módulo específico para registrar e acompanhar responsáveis técnicos (arquitetos ou
engenheiros) vinculados a cada obra, com campos para número de RRT/ART, profissional, número do
CAU/CREA, validade e anexos.
●​ Integração com agenda de instalação – após a venda, gera solicitações de instalação/serviço que
alimentam a agenda de técnicos.
●​ Cadastro de Serviços Auxiliares – lista de serviços extras, como frete, montagem ou manutenção,
integrados ao pedido.
●​ Relatórios e dashboards gerenciais – relatórios de vendas por período, vendedor, produto, região;
ranking de clientes e produtos; relatório de devoluções; acompanhamento de produção; indicadores de
performance (KPI) e gráficos de acesso dos funcionários.
●​ Segurança e controle de acesso – cada usuário possui perfil com permissões específicas (cadastro,
consulta, edição, exclusão, aprovação), log de alterações e trocas de senha.
●​ Importação/Exportação de dados – importação de planilhas (ex.: atualização de tabela de preços) e
exportação de cadastros e relatórios para Excel; integração com contabilidade via arquivos padrão.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 15

Tel 16 3332 7798
Edifício América - Araraquara - SP

ITENS NÃO INCLUSOS
Apenas para documentar, segue uma lista de itens não contemplados por esta proposta e que, caso sejam
solicitados, serão cobrados à parte, de acordo com sua complexidade e disponibilidade da equipe.
●​ Suporte a ferramentas de terceiros: Não está incluso neste orçamento o suporte à utilização de
ferramentas como Adobe Photoshop, CorelDraw, Internet Explorer, Gateways de pagamento, Correios,
etc.
●​ ​Conteúdo: O conteúdo do sistema, incluindo textos, imagens e outros recursos, serão fornecidos pelo
cliente antes do início do desenvolvimento.
●​ Correção de material: A Wab não se responsabiliza por eventuais erros de ortografia ou de
interpretação nos textos inseridos pelo cliente utilizando a área administrativa do sistema.
●​ Tecnologia dos navegadores: Embora o sistema funcione perfeitamente em quase todos os
navegadores existentes, a Wab garante que o sistema a ser desenvolvido funcionará corretamente nos
navegadores Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari e Opera.
●​ Atualizações e manutenção do sistema: A manutenção contínua do sistema, incluindo atualizações de
conteúdo, correções de erros e aprimoramentos, não está incluída nesta proposta. Serviços de
manutenção do sistema podem ser contratados separadamente, se necessário.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 16

Tel 16 3332 7798
Edifício América - Araraquara - SP

PLANEJAMENTO DO PROJETO E
METODOLOGIA
Cronograma Estimado (Semanas Úteis)
O projeto será executado em 4 fases principais, com uma estimativa total de 45 semanas de
desenvolvimento, após a fase de Levantamento de Requisitos e Assinatura do Contrato.
Fase

Descrição

Duração
Estimada

Marcos de Entrega

Fase 1: Estrutura e
Cadastros (Backend)

Configuração
da
arquitetura
principal
(Symfony), Base de Dados. Desenvolvimento
dos módulos de Cadastros (Clientes,
Fornecedores,
Funcionários,
Parceiros/Arquitetos) e PIM (Produtos com
Atributos Dinâmicos e Versionamento).

14 Semanas

Homologação
Módulos
de
Cadastros e PIM.

Fase 2: Comercial e
Financeiro

Desenvolvimento dos módulos de Orçamentos
(Gerador de Propostas), Pedidos de Venda
(Checklist Digital, Hub de Comunicação),
Devolução e Módulo Financeiro (Contas a
Pagar/Receber, Fechamento de Fábrica).

17 Semanas

Homologação
Módulos Comercial e
Financeiro.

Fase 3: Logística e
Campo (Mobile)

Desenvolvimento dos módulos de Expedição e
Logística
(Agendamento
Inteligente,
Rastreamento Granular, Funcionalidade de
Roteiro) e da Aplicação Móvel para Técnico de
Campo e Equipe Comercial.

10 Semanas

Beta da Aplicação
Móvel e Testes de
Integração.

Fase 4: Implantação e
Transição

Migração de dados legados, Treinamento,
Testes Finais (UAT), Ajustes de Go-Live e
Publicação em Produção.

4 Semanas

Go-Live do Sistema.

Total

Wab Agência Digital
Padre Duarte. 151 - Sala 152

45 Semanas

Orçamento OSI-260103-1
Página 17

Tel 16 3332 7798
Edifício América - Araraquara - SP

Regras de Alteração de Escopo
(Change Request)
Qualquer alteração, funcionalidade adicional ou ajuste de requisito solicitado pela Máxima que não
esteja explicitamente detalhado nesta Proposta será considerada uma alteração de escopo (Change
Request).
●​ Processo: Toda solicitação de alteração deverá ser documentada por escrito.
●​ Orçamento: A WAB Agência Digital fornecerá um orçamento de horas técnicas, custo e prazo
adicionais para a implementação da alteração.
●​ Aprovação: O trabalho de alteração de escopo só será iniciado após a aprovação formal (por
e-mail ou assinatura) da Máxima sobre o novo orçamento.
●​ Base de Custo: A hora técnica para Change Requests será aplicada conforme a Tabela de
Hora Técnica vigente da WAB.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 18

Tel 16 3332 7798
Edifício América - Araraquara - SP

GARANTIA E NÍVEL DE SERVIÇO
(SLA)
Garantia de Software (Bugfix)
A WAB Agência Digital oferece uma garantia de 180 dias (seis meses) a partir da data do Go-Live
(Publicação em Produção) para a correção de quaisquer erros de programação (bugs) ou falhas que
desviem do comportamento e requisitos descritos nesta proposta até o limite de 30 horas.
●​ As correções de bugs dentro deste período serão realizadas sem custo adicional para a
Máxima.
●​ A garantia não cobre problemas causados por modificações feitas no código-fonte pela
Máxima ou por terceiros não autorizados pela WAB, nem problemas decorrentes da
infraestrutura ou de ferramentas de terceiros.

Acordo de Nível de Serviço (SLA) para Suporte
Após a utilização do pacote inicial de 30 horas de suporte técnico, a Máxima poderá contratar
pacotes de horas adicionais. O SLA para os serviços de suporte (para problemas ou dúvidas, não
cobertos pela garantia de bugfix) será:
Prioridade

Definição

Tempo Máximo de Resposta
(Início do Atendimento)

Crítica

Falha que impede a operação do sistema (ex:
Login não funciona, Pedido de Venda
indisponível).

2 Horas Úteis

Alta

Falha que compromete uma função
essencial, mas permite a operação alternativa
(ex: Relatório com erro de cálculo, Checkout
lento).

4 Horas Úteis

Média/Baixa

Dúvidas de uso, ajustes de layout ou falhas
não operacionais.

8 Horas Úteis

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 19

Tel 16 3332 7798
Edifício América - Araraquara - SP

TRANSIÇÃO E TREINAMENTO
Plano de Migração de Dados
A transição para o novo sistema Máxima Gestão exige a migração de dados históricos do sistema
Smart Sistemas.
●​ Responsabilidade: A Máxima é responsável por extrair os dados legados (Clientes,
Fornecedores, Produtos, Pedidos Concluídos e Contas a Pagar/Receber) do sistema Smart
Sistemas em formato de planilha (CSV ou Excel) com colunas devidamente mapeadas e
definidas em conjunto com a WAB.
●​ Importação: A WAB desenvolverá os scripts necessários para a importação e validação
desses dados no novo sistema.
●​ Dados a Migrar: Serão migrados dados cadastrais (Clientes, Fornecedores,
Funcionários/Representantes) e dados transacionais críticos (Pedidos Concluídos dos
últimos 2 anos, Contas a Pagar/Receber Ativas).

Treinamento de Usuários
O treinamento visa garantir que todas as equipes da Máxima utilizem o novo sistema de forma
eficiente.
●​ Público-Alvo: O treinamento será segmentado por funções (Vendas, Logística/Expedição,
Compras e Administração/Gestão).
●​ Duração e Formato: A WAB fornecerá 20 horas de treinamento, distribuídas conforme o
cronograma de implantação, em formato online ou presencial (a ser acordado), com foco na
operação do novo sistema e nas novas funcionalidades de workflow (Checklist Digital, Hub de
Comunicação, Aplicativo Móvel).
●​ Conteúdo: O treinamento abrangerá a criação de Orçamentos, Pedidos de Venda, o uso do
Aplicativo Móvel, a Gestão de Compras (Fechamento de Fábrica) e a emissão de Notas
Fiscais/Boletos.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 20

Tel 16 3332 7798
Edifício América - Araraquara - SP

HOSPEDAGEM INICIAL
Para manter a estrutura do sistema, é necessário a contratação de um plano de hospedagem. Recomendamos
um plano de hospedagem inicial conforme tabela abaixo.
Em caso de alteração de escopo, o cliente poderá ter a necessidade de um novo plano de hospedagem.

SERVIÇOS INCLUSOS
SSL para navegação segura (HTTPS): Será implementado um certificado SSL para garantir que todas as
comunicações com o seu sistema sejam criptografadas e seguras.
Bcrypt para Criptografía de Senhas: Utilizaremos o algoritmo Bcrypt para criptografar as senhas dos usuários,
garantindo alta segurança.
Acesso ao Servidor Apenas por SSH com Chave: O acesso ao servidor será restrito apenas a usuários
autorizados por meio de autenticação SSH com chaves, garantindo maior segurança.
Sistema de Envio de E-mails pelo Sendgrid: Implementaremos o Sendgrid para garantir um sistema confiável
de envio de e-mails.
Firewall dentro da Rede: Será configurado um firewall de rede para proteger o seu sistema contra ameaças
externas.
Monitoramento de Uptime 24h por Dia: Implementaremos um sistema de monitoramento 24 horas por dia
para garantir que o seu sistema esteja sempre disponível.
Backup Recorrente a Cada 12h por 7 Dias: Realizaremos backups recorrentes a cada 12 horas e manteremos os
últimos 7 dias de backups disponíveis..
Versionamento do Projeto com Bitbucket: Utilizaremos o Bitbucket para o versionamento do seu projeto,
garantindo o controle de alterações e a colaboração eficiente.
Deploy Seguro Apenas com SSH: O deploy do seu projeto será realizado de forma segura, apenas por meio de
autenticação SSH.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 21

Tel 16 3332 7798
Edifício América - Araraquara - SP

PLANOS DE HOSPEDAGEM
O custo da hospedagem do sistema nos servidores da WAB varia conforme a tabela abaixo.

Inicial

Básico

Médio

Avançado

Espaço em disco

10GB

20GB

40GB

70GB

Memória RAM

1GB

2GB

4GB

8GB

Transferência

1TB

1TB

2TB

4TB

1

1

2

4

1.430,00

2.200,00

3.850,00

6.200,00

vCPUs

Custo (R$)

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 22

Tel 16 3332 7798
Edifício América - Araraquara - SP

CONDIÇÕES COMERCIAIS
Segue a tabela de valores detalhada para facilitar a compreensão dos investimentos envolvidos.

Descrição

Valor

1

Desenvolvimento do Sistema

R$ 213.000,00

2

Hospedagem

R$ 6.200,00/mês

CONDIÇÕES COMERCIAIS E
FINANCEIRAS
Plano de Pagamento

O pagamento pelo desenvolvimento do sistema será dividido em marcos de entrega (milestones),
conforme a tabela abaixo:

Etapa de
Pagamento

Descrição

Percentual

Sinal/Início

Na assinatura desta Proposta e início do desenvolvimento.

Entrega Fase 1

Na conclusão e homologação dos Módulos de Cadastros e
PIM.

30%

Entrega Fase 2

Na conclusão e homologação dos Módulos Comercial e
Financeiro.

30%

Go-Live

Após o Go-Live, conclusão da Migração de Dados e
Treinamento.

20%

Total

Wab Agência Digital
Padre Duarte. 151 - Sala 152

20%

100%

Orçamento OSI-260103-1
Página 23

Tel 16 3332 7798
Edifício América - Araraquara - SP

_______________________________
Jonas Ernesto Poli
CPF: 296.652.468-52
M. DUDALSKI & CIA SOLUÇÕES EM INTERNET LTDA - ME
CNPJ: 07.270.504/0001-70

De acordo: ​

___________________________________________

Nome:
RG:
CPF:

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260103-1
Página 24

Tel 16 3332 7798
Edifício América - Araraquara - SP

