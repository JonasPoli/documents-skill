PROPOSTA TÉCNICA COMERCIAL
DESENVOLVIMENTO DE SISTEMA DE EVENTOS,
INSCRIÇÕES E NEWSLETTER
AO

Fundecitrus
Viviane / Guilherme / Denise

Primeiramente, gostaríamos de agradecer pela oportunidade de trabalhar com a sua empresa.
A WAB Agência Digital é uma empresa brasileira especializada em soluções digitais para auxiliar outras
empresas a alcançarem seus objetivos de negócio. Atuamos com o desenvolvimento de sites personalizados,
sistemas sob demanda, aplicativos móveis, integração de sistemas, hospedagem web, consultoria em
tecnologia e marketing digital.
A solução apresentada nesta proposta foi elaborada por nossa equipe após análise das necessidades
levantadas em reunião, considerando o cenário atual do Fundecitrus e a necessidade de criar uma estrutura
reutilizável para a gestão de eventos, inscrições e comunicação por e-mail.
A nossa equipe está à disposição para quaisquer esclarecimentos adicionais ou para discutir os detalhes do
projeto pelos telefones (16) 98179-0888 / (16) 3332-7798 ou pelo e-mail wab@wab.com.br.

Araraquara, 13 de março de 2026.

_____________________________________​
Jonas Ernesto Poli​
CPF: 296.652.468-52
M. DUDALSKI & CIA SOLUÇÕES EM INTERNET LTDA - ME
CNPJ: 07.270.504/0001-70

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 1

Tel 16 3332 7798
Edifício América - Araraquara - SP

DESENVOLVIMENTO DE SISTEMA
DESCRIÇÃO DO ORÇAMENTO

O objetivo deste documento é descrever o desenvolvimento de um novo sistema em Symfony para o
Fundecitrus, voltado à gestão de eventos, inscrições e newsletters.
A proposta contempla a criação de uma plataforma própria para centralizar a divulgação dos eventos, o
recebimento de inscrições, o gerenciamento administrativo dos participantes, a criação de newsletters e a
validação técnica dos e-mails antes dos disparos.
O sistema será planejado para atender inicialmente aos eventos gratuitos do Fundecitrus, mas já nascerá
estruturado para permitir evolução futura, contemplando novas demandas como múltiplos tipos de evento,
novas regras de inscrição, automações adicionais e ampliação das rotinas de comunicação.

CENÁRIO GERAL
Atualmente, o Fundecitrus possui a necessidade de disponibilizar inscrições online para eventos, com maior
controle administrativo sobre participantes, envio de confirmações e comunicação com o público inscrito.
Além da inscrição em si, foi identificada a necessidade de uma estrutura mais robusta, capaz de atender
diferentes eventos ao longo do tempo, com gestão centralizada, reaproveitamento de dados de participantes,
administração de newsletters e relatórios relacionados aos envios.
Dessa forma, a proposta da WAB não se limita à criação de um formulário isolado, mas sim ao
desenvolvimento de uma plataforma reutilizável, institucional e administrativa, preparada para atender o
Fundecitrus de forma contínua.

TECNOLOGIA UTILIZADA
O desenvolvimento do sistema será realizado utilizando o framework Symfony, reconhecido por sua segurança,
robustez e flexibilidade para projetos que exigem maior controle, escalabilidade e possibilidade de evolução
futura. Nos orçamentos da WAB, o Symfony é apresentado justamente como base sólida, segura, modular e
adequada para crescimento e integrações futuras.
Entre as vantagens do Symfony para este projeto, destacam-se:
●​ Segurança avançada: proteção contra vulnerabilidades comuns, com estrutura adequada para
autenticação, controle de acesso e integridade dos dados;
●​ Flexibilidade: arquitetura preparada para novas funcionalidades futuras, sem comprometer a base
inicial do projeto;
●​ Desempenho otimizado: estrutura leve, organizada e adequada para aplicações corporativas;
●​ Escalabilidade: possibilidade de ampliação da plataforma com novos módulos, integrações e regras de
negócio;
●​ Suporte de longo prazo: utilização de tecnologia consolidada e adotada em projetos empresariais de
médio e grande porte.
O sistema também será desenvolvido com suporte multilíngue, contemplando desde esta primeira fase os
idiomas: Português do Brasil, Inglês e Espanhol.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 2

Tel 16 3332 7798
Edifício América - Araraquara - SP

ESTRUTURA DO NOVO SISTEMA
ÁREA PÚBLICA
A área pública será desenvolvida para apresentar os eventos do Fundecitrus de forma clara, moderna e
responsiva, permitindo que os visitantes conheçam os eventos disponíveis e realizem suas inscrições online.

Home de Eventos
A home será a página principal da plataforma e terá como objetivo apresentar os eventos disponíveis de forma
organizada e atrativa.
Nesta área, poderão ser exibidos:
●​
●​
●​
●​
●​
●​
●​

evento em destaque;
listagem de próximos eventos;
eventos com inscrições abertas;
eventos já realizados;
filtros e busca;
chamadas para inscrição;
banners e imagens institucionais.​

A estrutura da home será pensada para facilitar a navegação do visitante e destacar rapidamente as principais
ações do Fundecitrus.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 3

Tel 16 3332 7798
Edifício América - Araraquara - SP

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 4

Tel 16 3332 7798
Edifício América - Araraquara - SP

Página do Evento
Cada evento possuirá uma página própria, com URL amigável e conteúdo específico.
Nesta página poderão ser exibidos:
●​
●​
●​
●​
●​
●​
●​
●​
●​
●​
●​
●​

título do evento;
subtítulo;
banner principal;
descrição resumida;
descrição completa;
programação;
data e horário;
local;
endereço;
materiais complementares;
botão de inscrição;
status do evento.

Os eventos poderão ser classificados com status como:
●​
●​
●​
●​
●​
●​

em breve;
inscrições abertas;
últimas vagas;
inscrições encerradas;
evento realizado;
cancelado.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 5

Tel 16 3332 7798
Edifício América - Araraquara - SP

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 6

Tel 16 3332 7798
Edifício América - Araraquara - SP

Formulário de Inscrição
Cada evento contará com formulário de inscrição próprio, integrado ao sistema.
Inicialmente, o formulário trabalhará com campos base, como:
●​
●​
●​
●​
●​
●​
●​
●​
●​

nome completo;
e-mail;
telefone;
CPF;
instituição / empresa;
cargo / função;
cidade;
estado;
país.​

Ao informar um e-mail já cadastrado anteriormente, o sistema poderá localizar os dados existentes e
preencher automaticamente as informações já conhecidas, facilitando a inscrição em novos eventos.
Após o envio, o participante visualizará uma confirmação clara da inscrição e receberá um e-mail de
confirmação com os dados do evento.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 7

Tel 16 3332 7798
Edifício América - Araraquara - SP

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 8

Tel 16 3332 7798
Edifício América - Araraquara - SP

Controle de Vagas
No cadastro do evento, o administrador poderá definir se o evento terá:
●​ vagas ilimitadas; ou
●​ quantidade máxima de vagas.
Quando houver limite de vagas, o sistema deverá respeitar essa restrição, impedindo novas inscrições ao
atingir o número informado.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 9

Tel 16 3332 7798
Edifício América - Araraquara - SP

ÁREA ADMINISTRATIVA
A área administrativa do sistema, acessível apenas por usuários autorizados mediante login e senha, permitirá
o gerenciamento completo dos eventos, inscrições, newsletters, imagens e validações de e-mail. Esse formato
de separar claramente Área Pública e Área Administrativa também aparece de forma recorrente nos
orçamentos mais recentes da WAB.

Dashboard
O sistema contará com um painel inicial com visão resumida das principais informações operacionais, como:
●​
●​
●​
●​
●​
●​
●​

total de eventos cadastrados;
eventos com inscrições abertas;
total de inscritos;
newsletters cadastradas;
newsletters disparadas;
status das validações de e-mail;
indicadores resumidos de operação.

​

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 10

Tel 16 3332 7798
Edifício América - Araraquara - SP

Cadastro de Tipos de Evento
Será desenvolvido um módulo para cadastro de tipos de evento, permitindo organização e padronização da
plataforma.
Exemplos de tipos:
●​
●​
●​
●​
●​
●​

workshop;
congresso;
encontro técnico;
palestra;
curso;
seminário.

Cadastro de Eventos
O sistema permitirá o cadastro completo dos eventos, com informações estratégicas como:
●​
●​
●​
●​
●​
●​
●​
●​
●​
●​
●​
●​
●​
●​
●​
●​
●​

tipo de evento;
título;
subtítulo;
slug;
resumo;
descrição completa;
datas;
horários;
local;
formato do evento;
imagem do card da home;
banner principal;
arquivos complementares;
período de inscrição;
definição de vagas;
idioma;
status do evento.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 11

Tel 16 3332 7798
Edifício América - Araraquara - SP

Essa estrutura permitirá que o Fundecitrus utilize a mesma base para múltiplos eventos futuros, sem
necessidade de recriar o sistema a cada nova ação.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 12

Tel 16 3332 7798
Edifício América - Araraquara - SP

Gestão de Inscritos
O sistema contará com painel para visualização e gerenciamento dos inscritos em cada evento.
Entre as funcionalidades previstas:
●​
●​
●​
●​
●​
●​
●​

listagem de inscritos por evento;
busca por nome, e-mail, CPF e instituição;
filtros por status;
visualização detalhada da inscrição;
data e hora da inscrição;
exportação para Excel e CSV;
reenvio de e-mail de confirmação.

A estrutura ficará preparada para trabalhar com diferentes status administrativos, como inscrito, confirmado,
cancelado, presente, ausente e pendente.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 13

Tel 16 3332 7798
Edifício América - Araraquara - SP

MÓDULO DE NEWSLETTER
O sistema contará com um módulo próprio para cadastro, edição, visualização e gerenciamento de newsletters
vinculadas aos eventos ou utilizadas de forma independente.

Cadastro de Imagens para Newsletter
Será desenvolvido um painel específico para cadastro de imagens, separado do cadastro das newsletters,
permitindo o reaproveitamento de materiais em campanhas futuras.
Neste módulo será possível:
●​
●​
●​
●​
●​

realizar upload de imagens;
gerar e visualizar a URL pública;
cadastrar nome interno da imagem;
informar descrição ou observação interna;
reutilizar a imagem em diferentes newsletters.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 14

Tel 16 3332 7798
Edifício América - Araraquara - SP

Cadastro de Newsletter
Cada newsletter poderá ser cadastrada no sistema com informações como:
●​
●​
●​
●​
●​
●​
●​
●​
●​

título interno;
idioma;
evento relacionado;
assunto do e-mail;
pré-cabeçalho;
status da newsletter;
HTML da peça;
data de criação;
data de disparo.

​

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 15

Tel 16 3332 7798
Edifício América - Araraquara - SP

Modelo Padrão de Newsletter
Será criado um modelo padrão de newsletter para eventos, utilizando automaticamente dados já cadastrados
no sistema, como:
●​
●​
●​
●​
●​
●​
●​

nome do evento;
data;
horário;
local;
imagem principal;
resumo;
link de inscrição.

Esse modelo servirá como base para acelerar a produção das comunicações.

Estrutura Técnica do HTML
O HTML fornecido para as newsletters será construído com a técnica de Ghost Tables, utilizando comentários
condicionais para Microsoft Office, com o objetivo de preservar corretamente o layout em clientes de e-mail
como o Outlook Desktop, inclusive em cenários de duas colunas e largura fixa de 700px, sem perder a
responsividade em dispositivos móveis.

Edição do HTML
O administrador poderá:
●​ utilizar o HTML gerado automaticamente pelo sistema;
●​ editar o HTML gerado antes do envio;
●​ substituir a newsletter por um HTML completamente novo.
Essa flexibilidade permitirá tanto o reaproveitamento de um padrão institucional quanto a criação de
campanhas específicas sob medida.

Pré-visualização
Cada newsletter poderá ser testada internamente por meio de botões de visualização em:
●​ formato desktop;
●​ formato mobile.
Essa funcionalidade permitirá validar a aparência da peça antes do disparo.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 16

Tel 16 3332 7798
Edifício América - Araraquara - SP

DISPARO DE E-MAILS
O sistema enviará os e-mails por meio do pacote wab-ninjas/wmailer-transport, utilizando a
infraestrutura SendGrid adotada pela WAB.
Os disparos serão controlados pelo sistema e vinculados às newsletters cadastradas, permitindo maior
rastreabilidade e organização do histórico de envio.
Somente poderão ser enviados e-mails previamente validados pela rotina externa de saneamento.

RELATÓRIOS
O sistema contará com relatórios em tela, permitindo ao Fundecitrus acompanhar não apenas os inscritos, mas
também os resultados das validações e disparos de e-mail.
Entre os dados previstos:
●​
●​
●​
●​
●​
●​
●​
●​
●​

status de cada e-mail validado;
data da última validação;
motivo da classificação;
indicação se o e-mail já recebeu disparo;
data do disparo;
newsletter relacionada ao envio;
totais por status técnico;
totais disparados;
totais bloqueados por ausência de saneamento.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 17

Tel 16 3332 7798
Edifício América - Araraquara - SP

ITENS NÃO INCLUSOS
Apenas para documentar, segue uma lista de itens não contemplados por esta proposta e que, caso sejam
solicitados, serão cobrados à parte, de acordo com sua complexidade e disponibilidade da equipe. Esse tipo de
bloco aparece de forma consistente nos modelos da WAB, geralmente com linguagem objetiva e em lista.
●​ Conteúdo: o conteúdo textual definitivo, imagens institucionais, artes e materiais necessários para
alimentação do sistema deverão ser fornecidos pelo cliente;
●​ Correção de material: a WAB não se responsabiliza por eventuais erros de ortografia ou de
interpretação nos textos inseridos pelo cliente utilizando a área administrativa;
●​ Suporte a ferramentas de terceiros: não está incluso neste orçamento o suporte à utilização de
ferramentas externas como editores de imagem, softwares de terceiros, plataformas externas e
serviços não administrados pela WAB;
●​ Ferramentas e serviços de terceiros: custos relacionados a serviços externos, APIs pagas, plataformas
complementares ou recursos contratados de terceiros não estão inclusos, salvo quando expressamente
indicados;
●​ Manutenção contínua: a atualização contínua do sistema, inclusão de novas funcionalidades,
correções evolutivas e melhorias futuras não estão inclusas neste orçamento;
●​ Atendimento ao público final: possíveis suportes aos participantes ou usuários finais quanto ao uso do
sistema não estão inclusos nesta proposta;
●​ Integrações não descritas: quaisquer integrações futuras com meios de pagamento, sistemas externos,
CRM, ERP, emissão de certificados ou automações adicionais serão orçadas separadamente.​

PRAZO DE ENTREGA
O prazo de desenvolvimento será definido conforme a validação final do escopo, das prioridades de
implantação e da aprovação formal da proposta.
O cronograma poderá ser organizado por etapas, priorizando inicialmente os módulos essenciais para a
abertura das inscrições dos primeiros eventos.
Caso ocorram alterações de escopo, inclusão de novos módulos ou atraso no envio de materiais e validações
por parte do cliente, o cronograma poderá ser revisto.

MATERIAL PARA DESENVOLVIMENTO
Todo o material necessário para o desenvolvimento do sistema, incluindo textos, imagens, banners, artes e
demais conteúdos que precisem ser inseridos na plataforma, deverá ser enviado pelo cliente em formato
digital.
Eventuais atrasos no envio desses materiais poderão impactar diretamente o prazo de desenvolvimento e
publicação. Esse tipo de cláusula também é recorrente nos orçamentos da WAB.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-260304-1
Página 18

Tel 16 3332 7798
Edifício América - Araraquara - SP

VALIDADE DA PROPOSTA
Esta proposta é válida por 30 dias. Após este período, poderá sofrer reajuste. Essa cláusula aparece nos
modelos analisados e ajuda a manter o padrão comercial da WAB.

1

Módulo

Estimativa

Divulgação dos eventos

100h

Inscrição

105h

Gestão de newsletters

195h

Sistema de Disparo

140h

Apresentação dos eventos, detalhe dos eventos

2

Formulário de inscrição, controle de vagas

3

Geração de HTML, gestão das imagens

4

Controle do envio, relatório de enviados

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

Orçamento OSI-260304-1
Página 19

Tel 16 3332 7798
Edifício América - Araraquara - SP

