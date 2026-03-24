Desenvolvimento de Sistema
Sistema de Emissão de Documento e Repositório
À

Associação dos Fabricantes de Gelatina e Colágeno da América do Sul

No mercado desde 2003, entregando serviços de alto desempenho e confiabilidade, a Wab Agência Digital é
uma empresa brasileira especialista em soluções online.
Esta proposta comercial contém a solução Wab idealizada pela nossa equipe após o estudo do quadro
apresentado, assim como o detalhe e escopo técnico de cada item proposto para atender você e sua empresa.

Além das soluções oferecidas, sua empresa terá acesso aos especialistas da Agência Wab em atendimento
personalizado para você ter alta tecnologia, segurança e facilidade que precisa para conduzir os negócios de sua
empresa. Nossos departamentos podem ser contatados tanto pelo telefone (16) 98179-0888 quanto pelo
e-mail wab@wab.com.br.
Estamos à disposição para esclarecer quaisquer detalhes necessários sobre o projeto.

Araraquara, 10 de dezembro de 2021.

_____________________________________​
Jonas Ernesto Poli​
CPF: 296.652.468-52
M. DUDALSKI & CIA SOLUÇÕES EM INTERNET LTDA - ME
CNPJ: 07.270.504/0001-70

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 1

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Descrição do orçamento
O objetivo deste documento é descrever o orçamento para o desenvolvimento do sistema de emissão de
documento comercial e manter um repositório documental e a guarda dos documentos dessa emissão,
sendo construído em módulos, podendo evoluir para existência de outros módulos neste sistema.

Cenário Geral
De forma geral, o sistema deverá permitir que seja emitido o documento comercial. Também deverá permitir
que sejam cadastrados pelos curtumes, as matérias-primas (peles) recebidas com seus respectivos documentos.
O curtume ainda deverá cadastrar os subprodutos gerados que serão transportados à indústria, bem como
permitir a organização destes subprodutos informando seus lotes e organizando estes lotes em cargas, tanto na
entrada dos materiais que recebe do frigorífico quanto na saída que envia para as indústrias.
A origem para o curtume é sempre um frigorífico e a origem para a indústria é sempre um curtume.
O sistema deverá permitir que as Indústrias de gelatina e colágeno acessem os dados cadastrados pelos
curtumes e acessem as cargas enviadas e toda a documentação anexada.

Acesso ao sistema
Para que os usuários acessem o sistema, será utilizado um sistema de verificação em duas vias. O usuário que
efetuar login no sistema receberá imediatamente um e-mail contendo um código que deverá ser informado ao
sistema. O sistema solicitará esta confirmação a cada nova sessão.
Futuramente, este sistema deverá evoluir para enviar o código de confirmação via SMS, o que acarretará um
custo maior de manutenção devido aos custos das mensagens.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 2

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Painel Administrativo
Existirá, no novo sistema, um usuário mestre que definirá quem são as outras entidades que poderão acessar o
sistema. Para isso, o novo sistema possuirá um painel administrativo por onde será possível gerenciar as
seguintes áreas:

Dashboard do Administrador
Neste painel serão apresentados:
●​
●​
●​
●​

A quantidade total de indústrias cadastradas;
A quantidade total de curtumes cadastrados;
A quantidade total de entidades governamentais cadastradas;
A quantidade total de frigoríficos cadastrados.

Também será apresentado um gráfico de linha dos últimos 6 meses com a evolução do total, em toneladas, das
cargas que saem dos curtumes para as indústrias.
Ainda no dashboard será apresentada a listagem de curtumes cadastrados que aguardam a moderação do
usuário mestre.

Moderação do Cadastro de Curtumes
Quando o administrador do sistema acessar o painel de moderação de cadastro de curtumes, o sistema exibirá
uma lista de curtumes cadastrados que estão aguardando a aprovação.
Quando o administrador escolher moderar um curtume, o sistema apresentará um formulário com todos os
campos preenchidos pelo curtume no ato do cadastro. O administrador deverá analisar visualmente os dados e
tomar uma das decisões:
●​ Aprovar o cadastro do curtume
○​ Ao realizar esta ação, o administrador deverá informar quais são as indústrias para onde o
curtume em questão poderá enviar suas cargas.
○​ O curtume receberá um aviso por e-mail e poderá efetuar login no sistema.
●​ Reprovar o cadastro do curtume
○​ Para reprovar, o administrador deverá preencher um formulário com os motivos da reprova.
○​ O Curtume receberá um e-mail dizendo que seu cadastro foi reprovado, com os motivos
informados pelo administrador. O acesso ao sistema por este curtume estará bloqueado.

Cadastro de Curtumes
O administrador poderá visualizar a lista dos curtumes cadastrados no sistema e editá-los. Poderá alterar os
dados cadastrados pelo curtume, alterar a lista de indústrias associadas e aprovar e reprovar o cadastro.

Cadastro de Associado (Indústrias de gelatina e colágeno)
Para que as indústrias acessem o sistema, deverão antes ser cadastradas pelo administrador.
Este cadastro será dividido em duas etapas, pois o administrador deverá cadastrar a empresa (pessoa jurídica) e
o usuário (pessoa física) que acessará o sistema.
●​ Dados da pessoa Jurídica
○​ CNPJ
○​ Nome Fantasia
○​ Razão Social
○​ e-mail
○​ telefone principal
○​ Endereço
■​ CEP
■​ Logradouro
■​ Número
Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 3

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

■​ Complemento
■​ Município
■​ Estado
●​ Dados da pessoa física
○​ Nome
○​ CPF
○​ e-mail
○​ telefone celular
O sistema não deverá permitir que sejam cadastrados CPF, CNPJ, Telefone e e-mail em formato inválido.
O usuário cadastrado pelo administrador será o "Usuário Mestre" do cadastro do associado.
O usuário mestre poderá alterar os dados do perfil da empresa e manter o cadastro dos outros usuários do
sistema associados à empresa.
Quando o cadastro for finalizado, o sistema enviará um e-mail para o novo usuário com o link para acessar o
sistema e criar uma senha de acesso.

Cadastro de acesso governamental
Para que os órgãos do governo acessem o sistema, deverão antes ser cadastrados pelo administrador. Também
será dividido em duas partes, onde teremos a entidade jurídica e os usuários pessoas físicas.
●​ Dados da pessoa Jurídica
○​ CNPJ
○​ Nome Fantasia
○​ Razão Social
○​ e-mail
○​ telefone principal
○​ Endereço
■​ CEP
■​ Logradouro
■​ Número
■​ Complemento
■​ Município
■​ Estado
○​ Lista de indústrias associadas
●​ Dados da pessoa física
○​ Nome
○​ CPF
○​ e-mail
○​ telefone celular
O sistema não deverá permitir que sejam cadastrados CPF, CNPJ, Telefone e e-mail em formato inválido.
Cada entidade governamental deverá ser associada a uma ou mais indústrias. Uma entidade governamental só
poderá acessar os dados dos associados informados pelo administrador.
Quando o cadastro for finalizado, o sistema enviará um e-mail para o novo usuário com o link para acessar o
sistema e criar uma senha de acesso.

Cadastro de acesso externo (Client)
Para que sistemas externos acessem o novo sistema, deverão antes ser cadastrados pelo administrador.
Os sistemas externos que acessarão este sistema serão chamados de clients.
Para cada um dos clients, o sistema gerará uma Chave única de 128 caracteres.
Cada sistema externo (client) será associado a uma única empresa. Caso um associado deseje ter mais de um
acesso, deverá ter 2 clients cadastrados.
Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 4

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Cadastro de frigoríficos
O administrador poderá manter os dados dos frigoríficos cadastrados pelos Curtumes.

Estatísticas
O administrador possuirá acesso a relatórios estatísticos.
Relatório de acesso
O sistema será capaz de gerar uma listagem completa de todos os acessos realizados pelos usuários, com data,
hora e o login que acessou o sistema. Este relatório poderá ser filtrado por usuário e por período. Dessa forma
será possível saber quando e por quem o sistema foi acessado.
Relatório de acesso Client
O sistema será capaz de gerar uma listagem completa de todos os acessos realizados pelos usuários do tipo
client, com data, hora e a requisição feita. Este relatório poderá ser filtrado por client e por período.
Evolução de cadastros dos curtumes
O sistema fornecerá um relatório contendo a evolução dos cadastros dos curtumes. Com isso será possível
identificar a evolução mensal de cada curtume, com base na quantidade de matérias-primas cadastradas como
entrada e saída. Será possível prever, de acordo com a projeção estatística, a capacidade produtiva dos
próximos meses.
Multiplicação de matéria-prima
O sistema fornecerá um relatório com a taxa de multiplicação de matéria-prima de cada curtume, com sua
evolução mês a mês. Este relatório poderá ser utilizado para identificar aumento ou queda na taxa de
multiplicação de matéria-prima de cada curtume, alertando sobre possíveis fraudes.
Documentos Comerciais
O administrador geral do sistema terá acesso a uma lista completa de todos os documentos comerciais
emitidos. Ao visualizar o detalhe de um documento comercial, o sistema apresentará todos os documentos
referentes associados e o detalhamento da carga, que saiu do curtume sendo enviada a indústria.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 5

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Acesso do Curtume
Existirá uma área de acesso no sistema específico para os usuários do tipo "Curtume".

Primeiro acesso
Quando o usuário representante de um curtume acessar o sistema pela primeira vez, deverá realizar o cadastro
tanto da pessoa jurídica (CNPJ) quanto da pessoa física (CPF).
●​ Dados da pessoa Jurídica
○​ CNPJ
○​ Nome Fantasia
○​ Razão Social
○​ e-mail
○​ telefone principal
○​ Endereço
■​ CEP
■​ Logradouro
■​ Número
■​ Complemento
■​ Município
■​ Estado
●​ Dados da pessoa física
○​ Nome
○​ CPF
○​ e-mail
○​ telefone celular
O sistema não deverá permitir que sejam cadastrados CPF, CNPJ, Telefone e e-mail em formato inválido.
Assim que terminar o cadastro, o visitante será informado de que seu cadastro será analisado e, assim que
aprovado, receberá um e-mail informando.
No e-mail existirá um link para validar seu cadastro e criar uma senha.
O usuário que se cadastrar será convertido a usuário mestre, o que permitirá que mantenha o cadastro da
pessoa jurídica e dos outros usuários do tipo pessoa física.

Dashboard do Curtume
Quando o usuário do tipo curtume acessar o sistema, será redirecionado para o Dashboard. Este painel conterá
dados que agilizem o trabalho deste usuário:
●​
●​
●​
●​

O número total acumulado de toneladas de material que já saiu do curtume.
O número total de cargas já enviadas.
O número de cargas em trânsito.
Gráfico de linhas dos últimos 6 meses com a quantidade total de cada mês de toneladas de material
que já saiu do curtume.
●​ Uma listagem dos últimos documentos comerciais emitidos, contendo:
○​ Nome da indústria que receberá
○​ Data e hora da saída
○​ Placa da carreta
○​ Placa do cavalo
○​ Quantidade total em toneladas da carga
○​ Identificação da Carga
○​ Status do documento (em trânsito / recebido)

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 6

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Manutenção do perfil
Será permitido ao usuário mestre manter os cadastros do perfil do curtume, do seu próprio perfil e dos demais
usuários do sistema. Este usuário também poderá deixar de ser usuário do tipo mestre em favor de um novo
mestre.

Cadastro de Frigoríficos
O Curtume poderá cadastrar os frigoríficos que lhe enviam materiais.
O cadastro do Frigorífico será em duas etapas:
●​ Passo 1 - Informar o CNPJ
○​ CNPJ já existe
■​ Caso o CNPJ do frigorífico já esteja cadastrado por outro curtume, o sistema apenas
apresenta os dados e pergunta ao usuário se deseja importar os dados.
■​ Caso o curtume aprove os dados do frigorífico, este será associado automaticamente e
aparecerá na listagem de frigoríficos no cadastro de entrada de matéria-prima.
○​ CNPJ ainda não cadastrado
■​ Passo 2 - Informar os outros dados do cadastro do Frigorífico
●​ CNPJ
●​ Nome Fantasia
●​ Razão Social
●​ e-mail
●​ telefone principal
●​ Endereço
○​ CEP
○​ Logradouro
○​ Número
○​ Complemento
○​ Município
○​ Estado

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 7

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Entrada de Matéria-Prima
Existirá um painel específico para que o curtume cadastre as cargas de matéria-prima que chegam dos
frigoríficos. Deverá ser cadastrado o peso de entrada de cada lote para ser usado como parâmetro de análise de
possíveis fraudes pelo administrador do sistema. Na entrada de matéria-prima, o curtume deverá cadastrar,
através do escaneamento, os documentos que recebeu do frigorífico. A entrada de matéria-prima possuirá os
seguintes dados:
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

Selecionar um frigorífico da lista dos já cadastrados
Data e horário - Campo gerado automaticamente, mas permite a alteração
Identificação (campo texto de entrada livre)
Finalidade (campo texto de entrada livre)
Produtos
○​ Cada entrada deverá ter seus produtos cadastrados. Cada produto cadastrado como entrada
deverá ser adicionado com:
■​ Nomenclatura (campo texto de entrada livre)
■​ Data de Produção (campo texto de entrada livre)
■​ Data de Validade (campo texto de entrada livre)
■​ Natureza dos volumes (campo texto de entrada livre)
■​ Peso Líquido
■​ Número dos volumes
■​ Numero do Lote do frigorífico
Total de volumes (calculado automaticamente)
Total do peso líquido (calculado automaticamente)
Temperatura dos produtos: Ambiente
Descrição dos documentos respaldados (Nota fiscal, CSN, DCPOA, CIS-E e demais documentos
relevantes para comprovar a rastreabilidade):
Documentos
○​ Cada um dos documentos que acompanham a matéria-prima deverão ser cadastrados com:
■​ Nome do documento
■​ Imagem do arquivo escaneado

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 8

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Emissão de documento Comercial
O curtume deverá cadastrar os documentos comerciais que emite às indústrias.
O sistema gerará um código individual para cada documento comercial. Este código será sequencial, contendo 3
dígitos de verificação.
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

Número do documento comercial - Gerado automaticamente
Destinatário - Deverá ser selecionado da lista dos associados permitidos para este curtume
Nº de registro no Serviço de Inspeção Federal - SIF Nº (campo texto de entrada livre)
Verificação do veículo
○​ Data - detectado do sistema, com permissão de alteração
○​ Horário - detectado do sistema, com permissão de alteração
○​ Carreta Placa (campo texto de entrada livre)
○​ Placa do cavalo (campo texto de entrada livre)
○​ Condições Gerais do contentor (campo texto de entrada livre)
○​ Condições Higiênicas do contentor (campo texto de entrada livre)
○​ Gerador de frio (campo texto de entrada livre)
○​ Funcionamento (campo texto de entrada livre)
Verificação do carregamento
○​ Data de início - detectado do sistema, com permissão de alteração
○​ Horário de início - detectado do sistema, com permissão de alteração
○​ Data de fim - detectado do sistema, com permissão de alteração
○​ Horário de fim - detectado do sistema, com permissão de alteração
○​ Identificação (Marca de Embarque, se aplicável - campo texto de entrada livre)
Finalidade: (ex. Industrialização, comercialização, exportação, outras) (campo texto de entrada livre)
Os programas de Autocontrole referentes aos produtos embarcados foram revisados e estão
conformes? (campo texto de entrada livre)
Foi utilizada matéria-prima proveniente de estabelecimento estrangeiro? (campo texto de entrada
livre)
As matérias-primas utilizadas para produção dos produtos acima descritos estão devidamente
habilitados para exportação ao Brasil, conforme documento de respaldo para importação DAT
(Declaração Agropecuária de Trânsito Internacional) (campo texto de entrada livre)
Descrever o(s) Nº(os) da(s) DAT(s) para o caso de produtos importados (campo texto de entrada livre)
Rastreabilidade dos Produtos embarcados (campo texto de entrada livre)
Produtos
○​ Cada carga de saída deverá ter seus produtos cadastrados. Cada produto cadastrado na saída
deverá ser adicionado com:
■​ Nomenclatura (campo texto de entrada livre)
■​ Código de Rastreabilidade (campo texto de entrada livre)
■​ Data de Produção (campo texto de entrada livre)
■​ Data de Validade (campo texto de entrada livre)
■​ Número do Lote
■​ Natureza dos volumes (campo texto de entrada livre)
■​ Peso Líquido
■​ Número dos volumes
■​ Número do Lote no curtume
Total de volumes (calculado automaticamente)
Total do peso líquido (calculado automaticamente)
Temperatura dos produtos: Ambiente

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 9

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

●​ Data e hora da emissão detectado do sistema, com permissão de alteração
●​ Descrição dos documentos respaldados (Nota fiscal, CSN, DCPOA, CIS-E e demais documentos
relevantes para comprovar a rastreabilidade)
○​ Neste ponto, deverão ser apontados os lotes cadastrados como matéria-prima de entrada
■​ Cada lote de entrada associado, terá seus documentos compartilhados com a matéria
prima de saída

Observações sobre o documento comercial
Toda matéria-prima que sai para às indústrias de gelatina e colágeno deverá ser acompanhada de um
documento comercial. Cada carga deverá ter seu próprio e único documento que descreve toda a carga.
A carga pode ser dividida em diversos lotes e cada lote pode ser composto por diversos lotes de entrada e um
mesmo lote de entrada (que veio do frigorífico ao curtume) pode ser decomposto em diversos lotes de saída,
dessa maneira, o sistema deverá permitir que um mesmo lote de entrada possua seus documentos associados a
diversos documentos comerciais.
Esta saída poderá ser organizada em lotes, conforme a logística do curtume já que cada curtume tem seu
próprio sistema de geração de número de lotes.
Cada lote que compões a carga deverá ser associado aos DCPOA/Documento Sanitário que acompanham a
entrada de matéria-prima.
O Curtume apenas deverá visualizar as empresas apontadas pelo Administrador do sistema.
Este documento deverá ser impresso com a geração de um código de validação.
O sistema não permitirá que a data e hora do fim do carregamento seja anterior da data e hora do início do
carregamento.

Alteração de documento comercial
Quando o curtume resolver alterar um documento comercial, o sistema criará uma carta de correção, que é
uma cópia do documento comercial com as alterações foram realizadas.
O curtume deverá informar as justificativas que o levaram a alterar o cadastro. Após este momento, este novo
documento será associado ao documento original em todas as etapas do processo.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 10

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Indústria
Quando o usuário do tipo indústria acessar o sistema, será redirecionado para o Dashboard. Este painel conterá
a listagem dos documentos comerciais que saíram de curtumes e estão a caminho da indústria logada
contendo:
●​
●​
●​
●​
●​
●​
●​

Número do documento comercial
Nome do curtume que enviou o documento comercial
Data e hora da saída
Placa da carreta
Placa do cavalo
Quantidade total em toneladas da carga
Identificação da Carga

Recebimento de Documento Comercial
A indústria informa o código do documento comercial gerado pelo sistema e o sistema apresenta seus dados.
Caso o código não seja encontrado no sistema, apresentará um alerta.
A única alteração que a indústria poderá realizar no documento comercial é marcar como:
●​ Recebido
●​ Rechaçado (devolvido, não aceito por algum motivo, alguma inconformidade). Neste caso, deverão ser
informados os motivos dessa devolução e a destinação dada ao material.
A indústria deverá escolher uma de três opções:
1.​ Ignorar
a.​ Mantém o documento comercial com o status de ainda em trânsito
2.​ Aceitar
a.​ Marca o documento comercial como recebido.
b.​ Neste ponto, o sistema enviará uma mensagem para o curtume que o enviou, avisando do seu
recebimento.
3.​ Recusar
a.​ Marca o documento comercial como Rechaçado.
b.​ Neste caso o usuário deverá informar:
i.​ Motivo da recusa (campo texto de entrada livre)
ii.​ Destinação dada (campo texto de entrada livre)
c.​ Neste ponto, o sistema enviará uma mensagem para o curtume que o enviou, avisando da sua
recusa e da destinação dada.

Documentos Comerciais em Trânsito
A indústria terá acesso a todos os documentos comerciais que os todos os curtumes estiverem cadastrados
como tendo como destinatário a indústria logada.
Os dados que a indústria poderá visualizar de cada documento comercial são os dados cadastrados pelo
curtume e visíveis no Documento Comercial Consolidado. Ou seja, a indústria poderá visualizar todos os dados
cadastrados pelo curtume no documento, seus lotes de produtos e os documentos anexados.

Documentos Comerciais já Recebidos
Será uma listagem histórica de todos os documentos comerciais que a empresa já recebeu de um curtume. A
indústria poderá visualizar todos os dados e documentos cadastrados.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 11

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Entidade Governamental
Quando uma entidade governamental acessar o sistema, terá acesso a um painel que lista todas as indústrias
cadastradas (associados).
Uma entidade governamental só poderá acessar os dados dos associados informados pelo administrador.
Ao escolher uma das empresas, a entidade governamental acessará o sistema como se fosse uma dessas
empresas, tendo acesso de leitura a todos os documentos comerciais que a indústria já recebeu e todos os que
estão em trânsito. Ao visualizar um documento comercial, poderá visualizar todos os dados associados, como
os documentos escaneados.

Acesso externo aos dados do sistema
Será possível que sistemas externos (Clients) acessem os dados deste sistema. Este acesso será realizado via API
e os dados serão fornecidos no formato JSON.
Para que sistemas externos acessem, deverão ser previamente cadastrados pelo administrador.

Login dos Clients
Para cada acesso de listagem ou detalhamento o Client deverá informar a chave gerada no momento de seu
cadastro.

Listagem de documentos comerciais
O sistema fornecerá uma listagem de matéria-prima da empresa associada ao Client.
Os dados que serão: Código do documento comercial, nome do curtume de origem, data e hora da saída da
carga, data e hora da chegada da carga na indústria, texto da identificação da carga, placa da carreta e placa do
cavalo.

Detalhe de um documento comercial
O sistema fornecerá todos os dados de um lote, bem como todos os documentos associados ao lote.
Os demais dados fornecidos neste detalhamento são os dados presentes no Documento Comercial
Consolidado.
Os documentos fornecidos serão apresentados com sua URL.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 12

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Estrutura física da aplicação
Para manter a estrutura do sistema online, é necessária a contratação de um plano de hospedagem.
Recomendamos um plano de hospedagem inicial conforme especificação abaixo:

Serviços necessários:
●​

Gerenciamento em estrutura desconectada
○​ Este serviço implica na existência de um serviço de gerenciamento em outra estrutura,
separada de onde o sistema ficará hospedado. Isso permite que o gerenciamento do servidor
seja realizado mesmo que o servidor esteja fora do ar.

●​

Ambiente de homologação
○​ Será disponibilizado um ambiente de testes, onde poderão ser realizados testes no sistema. O
ambiente de homologação será disponibilizado em um endereço paralelo para que testes de
implementação possam ser realizados antes de irem ao ar definitivamente no ambiente de
produção, garantindo maior segurança ao processo.

●​

Serviço de backup diário
○​ Este serviço garante que o sistema e seu banco de dados sejam copiados uma vez por dia para
outro servidor separado da hospedagem principal. Isso garante que, em caso de alguma
catástrofe, o backup do sistema seja acessado mesmo que a estrutura do sistema não esteja
mais disponível.
○​ Poderão ser disponibilizados os 15 últimos backups mediante solicitação devidamente
formalizada.
○​ Também será possível restaurar um backup no sistema de homologação.

●​

Análise externa do servidor com Monitoramento 24h
○​ Será implantado um sistema de monitoramento, instalado em diversos computadores
espalhados pelo mundo que nos informarão imediatamente caso o serviço fique indisponível.
Isso permite que as ações de recuperação possam ser executadas o mais rápido possível.

●​

Hospedagem de arquivos na Amazon S3
○​ Todos os arquivos enviados ao sistema serão armazenados no S3 da Amazon, construído para
armazenar e recuperar qualquer volume de dados de qualquer local. Isso permitirá que o
volume de dados do sistema e seu banco de dados sejam bem menores, o que possibilitará
uma rápida ação de backup e de recuperação deste backup.
○​ O gerenciamento do espaço disponível do S3 é elástico, pago por uso.

●​

Restauração de cópia do sistema
○​ Caso seja necessário, uma cópia do servidor poderá ser instanciada com os dados de backup.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 13

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Mapa da estrutura
Abaixo segue um mapa de como planejamos montar a estrutura física que conterá o sistema:

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 14

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

CONTRATAÇÃO DE PLANOS
PLANO DE MANUTENÇÃO
Para que possam ser realizadas manutenções periódicas, poderá ser contratado um plano de manutenção para
o desenvolvimento ágil de soluções.
A WAB oferece planos de manutenção em pacotes de horas, que possuem um desconto crescente de acordo
com a quantidade de horas contratadas no pacote.
●​ A prestação de serviço será limitada aos projetos em questão e sua extensão.
●​ A prestação será executada dentro do horário comercial: De segunda à sexta-feira das 9h00 às 18h00 de 10 de Janeiro à 20 de Dezembro.
●​ O prazo para a qualificação do atendimento é de 3 (três) dias úteis para qualquer solicitação.
●​ O prazo de execução será flutuante, variando de acordo com a sua complexidade.
●​ Os chamados deverão ser abertos enviando e-mails para nosso sistema de tickets, para uma conta
e-mail específica a ser definida.
●​ Para cada chamado será contabilizado no mínimo 1h técnica, devido à necessidade de processos
operacionais como a análise do código-fonte, publicação em homologação e produção, versionamento,
entre outros. Além do total de horas alocadas para o atendimento do item.
●​ Será calculado como hora trabalhada todo o intervalo de tempo utilizado para atender o cliente,
incluindo os itens abaixo, mas não se limitando a eles:
○​ Correção de problemas (bugs)
○​ Implantação de soluções e novas funcionalidades
○​ Consultoria
○​ Ajustes
■​ Visuais
■​ Estruturais
■​ Funcionais
○​ Testes
■​ Teste Funcional
■​ Teste de Usabilidade
■​ Teste de Desempenho
■​ Teste de Compatibilidade
■​ Teste de Segurança
○​ Investigações em códigos ou em banco de dados
○​ Análise de viabilidade de soluções
○​ Desenvolvimento de relatórios
○​ Reuniões para apresentação de relatórios
Os 3 primeiros meses após a entrega do sistema será cedido ao cliente o plano de manutenção de até 30h sem
custo.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 15

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

HORA EXCEDENTE
Caso a quantidade de horas contratadas não sejam suficientes para a execução das manutenções necessárias,
esta ainda será possível desde que sejam contratadas horas avulsas. Para esta finalidade, disponibilizamos
nosso corpo técnico para a execução de trabalhos, quando necessário, até o limite de 50% da quantidade de
horas contratadas. O valor da hora excedente será cobrado de acordo com a tabela de preços vigente.
Serão consideradas Horas Excedentes:
●​ Todo o trabalho executado fora do limite de horas contratadas
●​ Todo o trabalho executado fora do horário (ou dia) comercial

HORA TÉCNICA
Caso seja necessário, a Wab disponibiliza seu corpo técnico para possíveis e eventuais ajustes que possam ser
realizados no site depois que este já estiver finalizado. Caso isso ocorra, o serviço será cobrado por hora técnica,
de acordo com a tabela de preços vigente.
O valor da hora técnica para este contrato é de R$ 240,00.

HOSPEDAGEM DA APLICAÇÃO
Para manter a estrutura do sistema online, é necessária a contratação de um plano de hospedagem.
Recomendamos um plano de hospedagem inicial conforme especificação abaixo:
●​ CPU:​2 cores de processamento
●​ RAM: ​8GB de memória
●​ Hard Disk: ​75GB de espaço em disco
●​ Banco de Dados: ​MySQL 5.5
●​ Servidor Web: ​Apache/2.2.31
Serviços adicionais:
Serviço de Backup DIÁRIO (até 75GB)

DESLOCAMENTO
Caso seja identificada a necessidade de deslocamento da equipe WAB para atendimento, análise ou visita
técnica, todos os custos relativos à visita deverão ser pagos pelo cliente.

PRAZO DE ENTREGA
O sistema previsto neste documento possui o prazo de entrega de 6 meses a contar da data de aceite. O
sistema será considerado entregue quando as funcionalidades descritas neste documento estiverem
desenvolvidas ou estiver publicado em seu endereço de produção.
Caso este escopo seja alterado, o prazo de entrega será prorrogado conforme as novas necessidades.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 16

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

CONDIÇÕES COMERCIAIS
Descrição

Valor

1

Desenvolvimento do Sistema

R$ 171.205,65

2

Hospedagem

R$ 6.400,00 mensal

Plano de Manutenção de 30h​

R$ 6.300,00 mensal

3

A partir do terceiro mês

O desenvolvimento deverá ser pago em 6x, sendo a primeira de 25% do valor do desenvolvimento e as demais
(5 parcelas de 15%) serão pagas nos meses subsequentes.
A última parcela, a sexta parcela, será paga no ato da publicação do aplicativo.

_______________________________
Jonas Ernesto Poli
CPF: 296.652.468-52
M. DUDALSKI & CIA SOLUÇÕES EM INTERNET LTDA - ME
CNPJ: 07.270.504/0001-70

De acordo: ​

___________________________________________

Nome:
CPF:

Araraquara, ______________________ de 202__.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-211201-2
Página 17

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

