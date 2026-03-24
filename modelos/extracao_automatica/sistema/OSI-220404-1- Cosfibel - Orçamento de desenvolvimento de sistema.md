Desenvolvimento de Sistema
Repositório de Arquivos
À

Guilherme Martins

No mercado desde 2003, entregando serviços de alto desempenho e confiabilidade, a Wab Agência Digital é
uma empresa brasileira especialista em soluções online.
Esta proposta comercial contém a solução Wab idealizada pela nossa equipe após o estudo do quadro
apresentado, assim como o detalhe e escopo técnico de cada item proposto para atender você e sua empresa.

Além das soluções oferecidas, sua empresa terá acesso aos especialistas da Agência Wab em atendimento
personalizado para você ter alta tecnologia, segurança e facilidade que precisa para conduzir os negócios de sua
empresa. Nossos departamentos podem ser contatados tanto pelo telefone (16) 98179-0888 quanto pelo
e-mail wab@wab.com.br.
Estamos à disposição para esclarecer quaisquer detalhes necessários sobre o projeto.

Araraquara, 14 de abril de 2021.

_____________________________________​
Jonas Ernesto Poli
Wab Agência Digital - Diretor Técnico

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-220404-1
Página 1

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Descrição do orçamento
O objetivo deste documento é descrever o orçamento para o desenvolvimento do sistema de gerenciamento de
arquivos online.

Acesso ao sistema
Para um visitante usar o sistema, deverá fazer sua ativação em duas vias. O usuário que efetuar login no sistema
receberá imediatamente um e-mail contendo um código que deverá ser informado ao sistema. O sistema
solicitará esta confirmação a cada nova sessão.
Futuramente, este sistema deverá evoluir para enviar o código de confirmação via SMS, o que acarretará um
custo maior de manutenção devido aos custos das mensagens.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-220404-1
Página 2

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Painel Administrativo
Existirá, no novo sistema, um usuário mestre que definirá quem são as outras entidades que poderão acessar o
sistema. Para isso, o novo sistema possuirá um painel administrativo por onde será possível gerenciar as
seguintes áreas:

Dashboard do Administrador
Neste painel serão apresentados:
●​ A quantidade total de usuários cadastradas;
●​ A quantidade total de documentos cadastrados;
●​ A quantidade total de administradores cadastrados;
Também será apresentado um gráfico de linha dos últimos 6 meses com a evolução do total, em arquivos, dos
usuários.
Ainda no dashboard será apresentada a listagem de usuários cadastrados que aguardam a moderação do
usuário mestre.

Moderação do Cadastro de Usuários
Quando o administrador do sistema acessar o painel de moderação de cadastro de usuários, o sistema exibirá
uma lista de usuários cadastrados que estão aguardando a aprovação.
Quando o administrador escolher moderar um usuário, o sistema apresentará um formulário com todos os
campos preenchidos pelo usuário no ato do cadastro. O administrador deverá analisar visualmente os dados e
tomar uma das decisões:
●​ Aprovar o cadastro do usuário
○​ Ao realizar esta ação, o usuário passa a poder utilizar o sistema
○​ O usuário receberá um aviso por e-mail e poderá efetuar login no sistema.
●​ Reprovar o cadastro do usuário
○​ Para reprovar, o administrador deverá preencher um formulário com os motivos da reprova.
○​ O usuário receberá um e-mail dizendo que seu cadastro foi reprovado, com os motivos
informados pelo administrador. O acesso ao sistema por este usuário estará bloqueado.

Cadastro de usuários
O administrador poderá visualizar a lista dos usuários cadastrados no sistema e editá-los. Poderá alterar os
dados cadastrados pelo usuário e aprovar e reprovar o cadastro.

Estatísticas
O administrador possuirá acesso a relatórios estatísticos.
Relatório de acesso
O sistema será capaz de gerar uma listagem completa de todos os acessos realizados pelos usuários, com data,
hora e o login que acessou o sistema. Este relatório poderá ser filtrado por usuário e por período. Dessa forma
será possível saber quando e por quem o sistema foi acessado.
Evolução de cadastros dos usuários
O sistema fornecerá um relatório contendo a evolução dos cadastros dos usuários. Com isso será possível
identificar a evolução mensal de cada usuário, com base na quantidade de arquivos cadastradas, será possível
prever, de acordo com a projeção estatística, a capacidade necessária para próximos meses.

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-220404-1
Página 3

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Acesso do usuário
Existirá uma área de acesso no sistema específico para os usuários do tipo "usuário".

Primeiro acesso
Quando o usuário representante de um usuário acessar o sistema pela primeira vez, deverá realizar o cadastro
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

Dashboard do usuário
Quando o usuário acessar o sistema, será redirecionado para o Dashboard. Este painel conterá dados que
agilizem o trabalho deste usuário:
●​ O número total de arquivos já enviados
●​ Gráfico de linhas dos últimos 6 meses com a quantidade total de arquivos de cada mês.
●​ Uma listagem dos últimos documentos contendo:
○​ Nome do documento
○​ Data e hora de cadastro
○​ Tipo
○​ Status do documento (em trânsito / recebido)
○​ Nome do destinatário do documento
○​ E-mail do destinatário

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-220404-1
Página 4

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Manutenção do perfil
Será permitido ao usuário mestre manter os cadastros do perfil do usuário, do seu próprio perfil e dos demais
usuários do sistema. Este usuário também poderá deixar de ser usuário do tipo mestre em favor de um novo
mestre.

Entrada de arquivo
Existirá um painel específico para que o usuário cadastre os arquivos com os seguintes dados:
●​
●​
●​
●​
●​
●​
●​
●​

Selecionar um tipo da lista dos já cadastrados
Data e horário - Campo gerado automaticamente, mas permite a alteração
Identificação (campo texto de entrada livre)
Finalidade (campo texto de entrada livre)
Título do arquivo
Upload do documento
Nome do destinatário
E-mail do destinatário

Quando um arquivo for cadastrado, ao finalizar o cadastro o sistema envia um e-mail ao destinatário explicando
que um novo arquivo está no ar aguardando o download.
Quando o destinatário abrir seu e-mail e clicar no link para inciar o download, o sistema deverá detectar que o
download foi solicitado e alterar o status do arquivo de "em trânsito" para "recebido"

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-220404-1
Página 5

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

Orçamento OSI-220404-1
Página 6

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

Mapa da estrutura
Abaixo segue um mapa de como planejamos montar a estrutura física que conterá o sistema:

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-220404-1
Página 7

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

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-220404-1
Página 8

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

Orçamento OSI-220404-1
Página 9

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

CONDIÇÕES COMERCIAIS
Descrição

Valor

1

Desenvolvimento do Sistema

R$ 76.790,00

2

Hospedagem

R$ 6.400,00 mensal

Plano de Manutenção de 30h​

R$ 6.300,00 mensal

3

A partir do terceiro mês

Sobre a forma de pagamento, poderá ser realizada em até 3 etapas, sendo a primeira no ato da aprovação do
orçamento.

Araraquara, ___________________ de 2022.

_______________________________
Jonas Ernesto Poli
Wab Agência Digital - Diretor Técnico

De acordo: ​

___________________________________________

Nome:
CPF:

Wab Agência Digital
Padre Duarte. 151 - Sala 152

Orçamento OSI-220404-1
Página 10

Tel 16 3332 7798 - 3332 1705
Edifício América - Araraquara - SP

