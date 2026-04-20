# **Proposta Comercial: Desenvolvimento de Site – CPA Citros**

**À Diretoria e Gestão do CPA Citros (Fundecitrus / Esalq-USP / Fapesp)**

A equipe da WAB Agência Digital agradece a oportunidade e apresenta esta proposta. Com mais de 20 anos de experiência em comunicação web e desenvolvimento de sistemas, estamos prontos para entregar uma solução digital à altura do trabalho científico conduzido pelo CPA Citros.

Estamos à disposição pelos telefones **(16) 98179‑0888 / (16) 3332‑7798** ou pelo e-mail **wab@wab.com.br**. Este documento, datado de 17 de abril de 2026, descreve o que está previsto para o desenvolvimento do site oficial e da área restrita do Centro de Pesquisa Aplicada em Inovação e Sustentabilidade da Citricultura.

---

## **Descrição e Objetivo do Projeto**

O **CPA Citros** é uma rede de inteligência científica que reúne 17 instituições de pesquisa nacionais e internacionais, com foco em desenvolver soluções para a citricultura — em especial no combate ao Huanglongbing (HLB/greening), a maior ameaça à cultura citrícola no mundo.

O objetivo principal é criar e publicar o novo site oficial do CPA Citros, desenvolvido do zero usando o framework **Symfony**. O sistema terá uma interface moderna e fácil de usar, um painel administrativo completo para a equipe de comunicação gerenciar todos os conteúdos, e suporte a dois idiomas (Português e Inglês) para atender à comunidade acadêmica internacional.

---

## **Requisitos Funcionais**

Foram definidos os módulos e telas que compõem o sistema, detalhando as funcionalidades previstas para cada área do site e para o painel de gerenciamento.

### Design e Interface Pública

#### ***Cabeçalho e Navegação***

- Barra superior com acesso ao login dos pesquisadores e troca de idioma (PT/EN).
- Menu fixo com efeito translúcido (glassmorphism), ativo em todas as páginas.
- Logo com comportamento responsivo: maior e centralizado no mobile ao carregar a página, reduzindo de tamanho ao rolar mantendo o alinhamento centralizado; no desktop, alinhado à esquerda com a navegação principal à direita.

#### ***Página Inicial (Home)***

**Banner principal:** Seção de destaque com impacto visual imediato, apresentando o CPA Citros de forma clara e atrativa.

- Título e subtítulo com a proposta do centro.
- Chamadas de ação diretas: "Conheça as Pesquisas" e "Acesse a Área Restrita".

**Destaques do CPA:** Blocos interativos no estilo Bento Grid apresentando os principais temas do centro.

- Bloco dedicado ao HLB: o que é, por que é urgente e como o CPA atua.
- Bloco de parcerias institucionais nacionais e internacionais.
- Indicadores dinâmicos gerenciados pelo admin (número de pesquisadores ativos, projetos em andamento, publicações, etc.).

**Feed de Notícias:** Listagem das últimas publicações do canal de comunicação, atualizada automaticamente.

**Rodapé:** Presente em todas as páginas do site.

- Links rápidos para as áreas principais.
- Contato institucional e selos das organizações apoiadoras.
- Logotipos dos parceiros com links externos.

#### ***Página "Sobre o CPA Citros"***

- **Quem Somos e Proposta:** Textos que apresentam a missão, os objetivos e a estrutura do centro de forma clara e estratégica.
- **Rede de Parceiros:** Grade visual com as logomarcas das 17 instituições parceiras, com destaque ao passar o mouse e link para cada organização. Inclui a possibilidade de mapa interativo.
- **Governança e Comitês:** Apresentação da estrutura organizacional com membros por categoria (Conselho, Científico, Gestão), com foto, nome e função.
- **FEALQ:** Espaço dedicado à apresentação da instituição interveniente financeira oficial.

#### ***Página "Pesquisa"***

**Linhas de Pesquisa:** Apresentação das três grandes frentes de atuação do CPA.

- Manejo e controle do HLB.
- Interação Genômica.
- Mitigação e sustentabilidade.

**Projetos em Andamento:** Listagem com busca integrada por linha de pesquisa ou pesquisador responsável.

- Nome do projeto, resumo do objetivo e pesquisador responsável.

**Pesquisadores:** Grade com foto, nome, área de atuação e link para o currículo Lattes.

- Ao clicar, abre perfil detalhado com projetos vinculados e publicações.

**Publicações Científicas:** Listagem completa com filtros por ano, tipo (artigo, abstract, dissertação) e pesquisador.

- Download direto do PDF ou redirecionamento para o link DOI.

#### ***Página "Comunicação"***

**Canal de Notícias:** Matérias completas com imagem de destaque, título, resumo, corpo do texto, autor e data.

- Suporte a vídeos incorporados (YouTube, Vimeo).

**Na Mídia (Clipping):** Registro de matérias publicadas por outros veículos sobre o CPA Citros.

- Imagem, título, resumo e link para o veículo original.

**Vídeos e Podcasts:** Incorporação de conteúdos de plataformas externas como YouTube e Spotify.

#### ***Página "Eventos e Oportunidades"***

**Eventos Futuros:** Apresentação da agenda com banner, período do evento, formato (presencial, online ou híbrido) e texto de convite.

**Eventos Realizados:** Repositório histórico com fotos, apresentações, PDFs e gravações dos eventos concluídos.

**Oportunidades:** Listagem de vagas abertas para pesquisadores, bolsistas e pós-doutorandos.

- Perfil desejado, titulação mínima e prazo de inscrição.
- Status configurável entre "Aberto" e "Encerrado".

#### ***Página "Contato"***

- Formulário de contato com proteção antispam (reCAPTCHA/hCaptcha) e envio sem recarregar a página.
- Exibição de contatos institucionais (e-mail e telefone).

---

### Área Restrita dos Pesquisadores

Um ambiente fechado e seguro para os membros cadastrados do CPA Citros.

#### ***Login e Perfis***

- Acesso via barra superior com autenticação por e-mail e senha.
- Dois perfis de acesso: **Administrador** e **Pesquisador**.
- Criptografia de senhas (Bcrypt/Argon2i) e proteção contra ataques comuns (XSS, CSRF, SQL Injection).

#### ***Repositório de Arquivos***

- Administradores criam pastas e publicam documentos restritos: relatórios, dados primários e outros materiais internos.
- Pesquisadores cadastrados acessam e baixam os arquivos disponibilizados.

---

### Área Administrativa

O painel de gerenciamento será desenvolvido para dar total independência à equipe do Fundecitrus, sem necessidade de conhecimento técnico. Cada área do site terá um painel próprio de gerenciamento, permettindo cadastrar, visualizar, editar e excluir informações de forma organizada.

#### ***1. Painel de Controle (Dashboard)***

- Indicadores rápidos: visualizações, notícias publicadas, projetos cadastrados e logins de pesquisadores.
- Acesso rápido aos principais módulos de gerenciamento.

#### ***2. Configurações da Página Inicial***

- **Banners:** Cadastro ilimitado com imagem, título, subtítulo, botão de ação e ordenação.
- **Textos institucionais:** Edição dos blocos "Sobre nós" e "Mais sobre o HLB".
- **Indicadores Dinâmicos:** Atualização manual dos números exibidos na home (pesquisadores, projetos, publicações).
- **Parceiros do Rodapé:** Adição e organização de logotipos com link externo.

#### ***3. Sobre e Governança***

- Edição de textos com editor rico (negrito, itálico, listas, links).
- Cadastro de membros dos comitês por categoria, com foto, nome e função.
- Gerenciamento das logomarcas de parceiros com nome, link e destaque por região/país.

#### ***4. Pesquisa Científica***

- Cadastro e edição das linhas de pesquisa e seus textos descritivos.
- Gerenciamento de projetos com vínculo ao pesquisador responsável.
- Cadastro completo de pesquisadores com foto, Lattes e área de atuação.
- Publicações com upload de PDF, link DOI, autores, ano e tipo.

#### ***5. Comunicação***

- Criação de notícias com editor completo e suporte a mídia embarcada.
- Cadastro de clippings externos (Na Mídia) e conteúdos multimídia.

#### ***6. Eventos e Oportunidades***

- Gerenciamento da agenda de eventos futuros e repositório de eventos realizados.
- Cadastro e controle de status das oportunidades abertas.

#### ***7. Usuários e Permissões***

- Cadastro de pesquisadores com definição de perfil de acesso.
- Ativação e desativação de contas sem excluir os dados do pesquisador.

---

## **Suporte a Dois Idiomas**

O sistema será configurado para operar em **Português (pt-BR)** como idioma principal e **Inglês (en-US)**. Os administradores poderão cadastrar o conteúdo nos dois idiomas diretamente pelo painel de controle. A troca de idioma pelo visitante estará disponível na barra superior em todas as páginas.

---

## **Infraestrutura e Hospedagem**

O projeto em Symfony requer um servidor adequado ao volume de dados e ao tráfego esperado. Recomendamos o pacote **VPS Dedicado WAB Host**, que inclui:

- Servidor virtual privado Linux com alta disponibilidade (99,8% de uptime).
- Certificado de segurança SSL (HTTPS).
- Backups automáticos do banco de dados (diário) e dos arquivos (semanal).
- Proteção contra ataques DDoS.
- Acesso via SFTP e deploy automatizado por pipeline.

*(Os valores exatos de infraestrutura serão definidos em proposta complementar, após análise do volume estimado do repositório de arquivos.)*

---

## **Manutenção e Suporte (SLA WAB)**

A WAB oferece pacotes de horas mensais para garantir melhorias contínuas, correções e suporte técnico ao sistema.

- Chamados abertos pelo portal de atendimento WAB.
- Para um projeto do porte do CPA Citros, indicamos pacotes de **20 horas/mês**.
- **Suporte pós-publicação:** 30 dias de suporte sem custo adicional para garantir a estabilidade de todos os módulos após a publicação.

---

## **O Que Não Está Incluído**

Com a clareza que orienta nossos projetos, listamos abaixo o que não está previsto neste orçamento:

1. **Produção de conteúdo:** A criação de textos, revisão e fotografia ficará a cargo da equipe do CPA Citros. O escopo aqui previsto é a inserção dos materiais já finalizados no sistema.
2. **Integração automática com portais acadêmicos:** A integração com sistemas como CAPES ou importação automática do Lattes não está prevista. Os vínculos serão feitos manualmente por campos de link no painel.
3. **Aplicativos mobile:** O site será responsivo e funcionará bem em celulares, mas não está previsto o desenvolvimento de apps para Android ou iOS.
4. **Gestão de marketing digital:** Serviços como SEO contínuo, Google Ads ou e-mail marketing não fazem parte deste escopo.

---

## **Prazo e Cronograma**

O desenvolvimento será dividido em entregas por etapas (sprints), com duração total estimada de **65 a 85 dias úteis**:

- **Sprint 1:** Configuração do servidor, banco de dados, autenticação e estrutura base do Symfony.
- **Sprint 2:** Desenvolvimento do CMS com os módulos principais: notícias, pesquisadores, banners, sobre e parceiros.
- **Sprint 3:** Criação das interfaces visuais e integração com os dados do painel.
- **Sprint 4:** Módulos de projetos, publicações, área restrita e suporte a idiomas.
- **Sprint 5:** Publicação em ambiente de homologação, testes e ajustes finais com a equipe do CPA.

O prazo conta com a entrega dos conteúdos textuais pela equipe do CPA e a validação do layout pelos responsáveis de Comunicação e TI.

---

## **Investimento e Condições de Pagamento**

| Descrição | Categoria | Valor (R$) |
| :--- | :---: | ---: |
| **Desenvolvimento do site: frontend, backend Symfony e CMS personalizado** (suporte a idiomas, módulos informativos, banco de dados) | Desenvolvimento | R$ 34.800,00 |
| **Área Restrita:** login, perfis de pesquisadores e repositório de arquivos | Módulos complementares | R$ 12.500,00 |
| **Manutenção mensal (20h/mês)** — a partir de | Plano de Evolução Contínua | R$ 2.400,00/mês |

**Valor total do desenvolvimento:** **R$ 47.300,00**

**Condições de pagamento sugeridas:**
- 40% na assinatura do contrato.
- 30% na metade do desenvolvimento (entrega do Sprint 3).
- 30% na entrega final e publicação.

Os valores estão sujeitos a adequação conforme as regras de aquisição das instituições públicas envolvidas. Os custos mensais de hospedagem serão definidos em contrato separado.

> **Aprovação:** A leitura e aceitação deste documento consolidam as bases do projeto. O próximo passo será a formalização do contrato.

---
Atenciosamente,

**WAB Agência Digital**
Diretorias Comercial e de Planejamento
*(Contato Institucional Documentado)*
