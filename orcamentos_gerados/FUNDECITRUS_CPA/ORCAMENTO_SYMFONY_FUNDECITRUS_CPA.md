# **Proposta Comercial: Desenvolvimento de Site Symfony – CPA Citros**

**À Diretoria e Gestão do CPA Citros (Fundecitrus / Esalq-USP / Fapesp)**

Primeiramente, a equipe da WAB Agência Digital agradece pela oportunidade de elaborar esta proposta de desenvolvimento. Com mais de 20 anos de experiência no mercado de inovação tecnológica, comunicação web e construção de sistemas robustos sob medida, nossa agência está preparada para entregar uma solução digital de altíssimo nível, alinhada à magnitude do esforço científico e institucional conduzido pelo CPA Citros.

Estamos à disposição para sanar quaisquer dúvidas e aprofundar os detalhes técnicos ou de negócios pelos telefones (16) 98179‑0888 / (16) 3332‑7798, ou e-mail wab@wab.com.br. Este documento, datado de 17 de Abril de 2026, descreve o escopo detalhado, funcionalidades, requisitos de infraestrutura e termos comerciais para a materialização do site oficial e área restrita do Centro de Pesquisa Aplicada em Inovação e Sustentabilidade da Citricultura.

---

## **1. Cenário Geral e Visão do Projeto**

O **CPA Citros** atua como uma rede global de inteligência científica, unindo 17 instituições de pesquisa nacionais e internacionais, com o objetivo de desenvolver soluções tecnológicas e inovadoras aplicadas ao campo para garantir a sustentabilidade da cadeia produtiva citrícola — com especial foco no combate ao Huanglongbing (HLB/greening), a maior ameaça à citricultura mundial. 

Neste cenário de extrema relevância global, o CPA Citros requer uma plataforma web (site) que transcenda o formato de um mero portfólio digital. O site deverá atuar como um **portal robusto de comunicação científica e repositório de pesquisas**, capaz de dar máxima visibilidade às atividades desenvolvidas, às linhas de pesquisa e projetos conduzidos, ao corpo de pesquisadores envolvidos e aos resultados (publicações e tecnologias) gerados para a sociedade. Além disso, o ambiente precisa prever uma **Área Restrita** eficiente onde a comunidade de investigadores do centro possa interagir ativamente.

### **1.1. Objetivos Tecnológicos do Projeto**

O objetivo primário deste escopo é o desenvolvimento e implantação do novo site oficial do CPA Citros, construído do zero sob a arquitetura e linguagem do framework **Symfony**. O sistema contará com uma interface rica, intuitiva e amigável, um painel administrativo poderoso (CMS) completo para gestão de todos os conteúdos dinâmicos por parte da equipe de comunicação, além do suporte bilíngue (Português/Inglês) para garantir acesso irrestrito à comunidade acadêmica internacional.

---

## **2. Requisitos Não Funcionais**

### **2.1. Arquitetura e Stack (Symfony)**
Todo o motor de processamento do site (Back-End) e a área restrita serão construídos em **Symfony** (framework PHP de alta performance, excelência e escalabilidade). O banco de dados relacional (MySQL/MariaDB ou equivalente) será dimensionado para garantir integridade, relacionamentos complexos (como Pesquisadores > Projetos > Publicações) e segurança de senhas. 

### **2.2. Idiomas e Internacionalização**
O framework será configurado para gerenciar traduções de interface e suporte para rotas (URLs) dinâmicas no padrão Bilíngue: **Português (pt-BR)** como idioma principal e **Inglês (en-US)**. Os administradores poderão alimentar todo o conteúdo nas duas linguagens simultaneamente por meio do painel de controle.

### **2.3. Design Responsivo e Interface Pública (Front-End)**
O front-end (visualização externa para o público) obedecerá estritamente ao layout desenhado em alta fidelidade ("Premium Aesthetic"). O estilo adotado engloba um **Design System moderno**, com aplicação de _Glassmorphism_ (efeitos translúcidos e de vidro), fundos padronizados com gradientes radiais suaves e uma tipografia limpa (Inter). Destacam-se as seguintes entregas baseadas no layout oficial:

*   **Header e Navegação Integrada:** Uma "Topbar Restrita" superior (barra escura) dedicada exclusivamente ao login seguro dos pesquisadores e alternância instantânea de idiomas (PT/EN). Logo abaixo, um menu principal de acesso rápido (Sticky Header) com efeito translúcido para navegação entre as grandes áreas do CPA.
*   **Home Page Dinâmica:** "Hero Section" moderna com chamadas textuais sobre inovação para retenção imediata. A página contará com blocos no formato "Bento Grid" interativo (descrevendo o HLB e as parcerias) e um "Magazine Feed" atualizando o radar de notícias e comunicados em tempo real, com efeitos de sombra e agrupamento.
*   **Páginas Institucionais (Sobre):** Layout de apresentação sofisticado (Split Layout) com fotos de alta qualidade e divisão em colunas para missões metodológicas. A seção "Parceiros" incluirá um robusto "Bento Cloud Grid", exibindo logomarcas e listagens oficiais das organizações parceiras no Brasil e no Mundo, e a governança dedicada pela FEALQ.
*   **Vitrine Científica (Pesquisa):** Construção estética baseada em três grandes verticais (Manejo, Interação Genômica, Mitigação). Exibição interativa da equipe através de um "Avatar Grid" inteligente, que aplica filtros progressivamente ao hover nas fotos dos pesquisadores, conectando-os ao Lattes. Será inclusa a renderização de listagens ou tabelas dinâmicas para elencar "Projetos em Execução", permitindo buscas fáceis pela comunidade.
*   **Footer Institucional Monolítico:** Um vasto rodapé contemplando acessos rápidos da Central de Atendimento, e os selos chancelados de transparência com fundos escuros e matrizes monocromáticas.

Toda essa casca visual manterá **Responsividade plena**, adaptando toda a elegância destas proporções visualmente às extremas restrições dos mobiles (celulares), sem abrir mão da complexidade artística e tecnológica proposta.

### **2.4. Acesso ao Sistema e Segurança**
A segurança aos acessos administrativos ou da área restrita (pesquisadores) envolverá camadas de autenticação nativas do Symfony Security, criptografia de dados críticos (Bcrypt/Argon2i), restrição por papéis (Roles de Administrador Geral e de Pesquisador). O ambiente incluirá mecanismos de rastreamento de acessos anômalos e proteção contra ataques comuns da web (XSS, CSRF, SQL Injection).

---

## **3. Requisitos Funcionais e Módulos do Sistema**

O sistema será desmembrado modularmente em sua estrutura interna, de forma que cada área do projeto possa ser nutrida autonomamente. Conforme a Estrutura CPA proposta, detalhamos a seguir os módulos que comporão o painel de gerenciamento (CMS), gerenciando a exibição final ao usuário:

### **3.1. Painel de Controle (Dashboard Administrativo)**
Um painel exclusivo, acessado pelos colaboradores da equipe de comunicação, consolidará acessos rápidos aos principais cruds (cadastros). O painel oferecerá painéis numéricos de informações como visualizações, total de notícias cadastradas, projetos em aberto e logins de pesquisadores.

### **3.2. Módulo: Configurações Globais (Home e Rotativos)**
*   **Gestão de Banners:** Cadastro ilimitado de banners principais (Hero/Banners institucionais "full-width"), com envio de imagens em alta resolução, títulos, subtítulos ("Esalq - USP, Fundecitrus unindo esforços..."), botão de ação e ordenação configurável.
*   **Gestão Textual da Home:** Acesso rápido à alteração dos resumos textuais como "Sobre nós" e "Mais sobre o HLB", exibidos diretamente na primeira página.
*   **Rodapé Parametrizável:** Seção no CMS para adicionar e organizar os logotipos dos parceiros e instituições apoiadoras, com o devido link apontando para suas páginas oficiais.

### **3.3. Módulo Institucional: Sobre e Inovação**
*   **Quem Somos e Estrutura:** Edição dos grandes blocos de texto (editor rico formatação HTML - bold, italico, listas e links).
*   **Organograma / Comitês:** Upload de documentos visuais contendo organogramas, ou montagem via sistema de "Membros" vinculados as categorias (Conselho, Científico, Gestão).
*   **Gestão de Parceiros:** CRUD para inserção de Instituições Governamentais, Fundações, SPs (São Paulo), Instituições Estrangeiras (por Ordem Alfabética). Cada instituição terá Logo, Título, Estado/País, link externo. Possibilidade de implementação de **Mapa Interativo** on-hover com aumento das logomarcas.
*   **Página Inovação:** Gestor padrão de conteúdo estruturado, programado de forma que o Administrador possa ativar/desativar toda a exibição da página visando seu status de inserção no futuro.

### **3.4. Módulo Científico: Pesquisa**
O núcleo da base de conhecimento da plataforma. Será construído um modelo relacional que suporte a apresentação rica de dados acadêmicos:
*   **Textos Fixos e Linhas de Pesquisa:** Áreas editáveis para a contextualização do combate ao HLB e descrição das 3 linhas principais ("O manejo do greening...", "O entendimento das interações...", "Aumento da produção e mitigação...").
*   **Projetos de Pesquisa:** Cadastro englobando os campos: Módulo, Nome/Título do Projeto, Resumo do Objetivo e a seleção/associação do Pesquisador Responsável. 
*   **Pesquisadores:** Cadastro do capital intelectual (Diretório Lattes em destaque). Perfil com Foto, Divisão de Área de Atuação, Nome Completo, Resumo, URL para currículo e possibilidade de vincular Projetos a esse autor.
*   **Publicações Técnicas e Científicas:** Uma estrutura robusta para cadastro de trabalhos. Campo para Título da publicação, Arquivo PDF/Link Externo DOI, Autores, Ano de Publicação, Tipo (Artigo, Abstract, Dissertação). Isso possibilitará listagem completa no site ou filtragem associada ao pesquisador.

### **3.5. Módulo Institucional: Comunicação (News/Media)**
*   **Canal de Notícias:** Gestão e criação de reportagens com interface de fácil utilização. Campos: Imagem Destaque obrigatória, Título da Matéria, Resumo, Texto da Matéria, Autor, e Data/Hora de postagem. Suporte a vídeos incorporados. Emissão de blocos formatados para exibição da rotina do laboratório, idas a campo e descobertas.
*   **Na Mídia / Clipping:** Um formato ligeiramente modificado para armazenar matérias publicadas por outros veículos de comunicação referentes ao CPA Citros (Imagem, Título Específico, Resumo e Link direto ao jornal/revista).
*   **Vídeos e Podcasts:** Listagem com embed de plataformas oficiais de mídia do centro da USP/Fundecitrus (Ex. iFrames de Spotify e Youtube).

### **3.6. Módulo Institucional: Eventos e Oportunidades**
*   **Agenda de Eventos (Futuros):** Ferramenta de disparo informativo sobre datas reservadas e grandes chamadas. Inclusão de banners, período (Ida/Volta), formato (híbrido/online/fisico) e textos gerais do convite.
*   **Eventos Realizados (Repositório Cursos/Treinamentos):** O CMS permitirá migrar eventos que já ocorreram para a aba "Realizados", associando à respectiva edição seus recortes de mídia, apresentações de Slides, PDFs, Fotos e Gravações, criando um acervo da história da instituição e transferindo o conhecimento perpetuamente aos assinantes e visualizadores abertos do site.
*   **Oportunidades (Vagas/Bolsas/Pós-Doc):** Árvore dedicada aos talentos. Cadastro simplificado de vagas contendo Perfil Almejado, Titulação e Prazo. Status selecionável entre "Aberto" para recepção de inscrições/currículos e "Encerrado".

### **3.7. Módulo Restrito: Área do Pesquisador (Login e Repositório Interno)**
A exigência de compartilhamento científico protegido será suprida com um acesso fechado a participantes:
*   **Login Customizável (Área Restrita):** Um menu fixo no topo da aplicação proverá acesso à interface de login segura (Login e Senha). O portal validará automaticamente usuários com papel/permissão de PESQUISADOR versus ADMINS da equipe digital.
*   **Gestor de Arquivos Confidenciais/Base de Dados:** Os administradores criarão diretórios ou publicações fechadas por pastas para repositório do "estado da arte" nas investigações em curso, relatórios gerenciais das pesquisas ou dados tabulares primários onde os pesquiadores cadastrados logarão e conseguirão descarregar essas mídias para acompanhamento de longo prazo interno na equipe global.
*   *(Nota: O sistema de envio direto pelo pesquisador poderá ser discutido em aprofundamento, optando-se inicialmente por um repositório distribuído via gerenciador master ou um permissionamento individual).*

### **3.8. Módulo de Contatos**
*   **Formulário Fale Conosco:** Geração de tela para envio direto de mensagens do usuário visitante pelo site para os destinos pré-moldados (como contato@cpacitros.com.br).
*   Proteção contra lixo eletrônico (ReCAPTCHA/Hcaptcha invisible) aplicada. Integração assíncrona que não recarrega todo o navegador, garantindo agilidade.


---

## **4. Infraestrutura e Hospedagem Cloud (WAB)**

O ambiente completo em Symfony exige uma configuração server profissional otimizada. Recomendamos a adoção do pacote **Cloud Intermediário / Avançado (VPS Dedicado WAB Host)** para sustentar as exigentes capacidades de banco de dados e tráfego decorrente da demanda global da comunidade acadêmica ao site da USP/Fundecitrus.

**Estão Inclusos neste modelo:**
*   Disponibilização de Servidor Virtual Privado Linux de alta disponibilidade (99.8% Uptime).
*   Certificado de Segurança SSL Let's Encrypt padrão (HTTPS obrigatório).
*   Sistema de rotinas de Backups (Banco de Dados Diários e FileSystem Semanal/Diário dependendo da parametrização).
*   Sistemas de mitigação de DDOS em camadas externas.
*   Utilização restrita por SFTP e Automações de Deploy via pipeline contínua. 
*(Os orçamentos exatos de infraestrutura seguirão em aditivo a pedido específico após lançamento e volumetria provável de dados do repositório ser analisada)*.

---

## **5. Manutenção e Suporte Técnico (SLA WAB)**

Prezamos pela estabilidade a longo prazo dos ecossistemas digitais que desenvolvemos. A WAB oferta pacotes fechados por horas mensais para garantir melhorias evolutivas, sanar dificuldades esporádicas e prestar auxílios periciais focados.
*   Os chamados tramitarão pelo portal corporativo de Service Desk WAB.
*   Para o porte do CPA Citros, indicamos os pacotes a partir de **10 a 20 horas/mês**. 
*   **Gratuidade Inicial:** O projeto conta com 15 a 30 dias integrais de suporte contra bugs garantidos pós-publicação, sem incidência de franquia de pacotes de suporte, consolidando a estabilidade e o bom funcionamento de todos os módulos reportados.

---

## **6. Itens NÃO Inclusos Neste Escopo**

Com a clareza e transparência com a qual pautamos nossos projetos, enfatizamos que os seguintes tópicos ou tarefas não estão cobertos no respectivo orçamento, podendo tornar-se aditivos posteriormente ou encargo direto da gerência:
1.  **Criação Textual, Copidesque ou Fotografia:** Geração dos textos iniciais e curadoria jornalística ou de material audiovisual ficará por conta das agências parceiras, Assessoria Institucional da própria Fundecitrus/Esalq, limitando-se o presente orçado à transposição ("cargo de dados") dos volumes cedidos finalizados.
2.  **Soluções ou Integrações Acadêmicas Nativas:** Integração robotizada automática aos Portais CAPES/MEC ou currículo Lattes por Webservice não está prevista abertamente hoje (todo referenciamento ocorrerá mediante campo preenchível com link manualmente ou scraping sob avaliação futura não faturada aqui).
3.  **Desenvolvimento de Apps Mobile Nativos:** O sistema será 100% web com interface responsiva mobile perfeita; mas sem publicações nas lojas virtuais Android/iOS dedicadas a Apps, já que tal arquitetura não se justifica inicialmente no plano.
4.  **Gestão Externa:** Serviços de acompanhamento como SEO Contínuo, campanhas no Google Ads ou disparo de e-mail marketing corporativo.

---

## **7. Metodologia de Trabalho, Prazos e Cronograma**

O ciclo de desenvolvimento WAB envolverá entregas fracionadas e metódicas para transparência do andamento:
*   **Sprint 1:** Configuração da infraestrutura, arquitetura de banco de dados (BDD), definições essenciais, autenticações de segurança, mapeamento do padrão Symfony. 
*   **Sprint 2:** Implantação do CMS – Tela de controle com os blocos fundamentais de Notícias, Equipes, Banners, Sobre, Parceiros.
*   **Sprint 3:** Conversão das interfaces visuais, e acoplamento (ligamento) dos Módulos Públicos da Home e Páginas Específicas à renderização das informações cadastradas.
*   **Sprint 4:** Implementação da robustez de pesquisadores, Projetos e Publicações e codificação da complexidade da Área Restrita e Internacionalização (inglês/pt).
*   **Sprint 5:** Deploy de Homologação, período de alimentação e Testagem por parte do Corpo Gestor CPA Citros. Emissão de reportes de finalização.

O prazo natural estipulado para toda a execução é de aproximadamente **65 a 85 dias úteis**, condicionado ao rápido fornecimento de insumos textuais definitivos aos técnicos e pronta validação do layout de componentes por parte dos diretores de TI/Comunicação.

---

## **8. Investimento Estimado e Condições Padrões WAB**

A estimativa orçamentária WAB é balizada pelas horas de engenharia necessárias à elaboração singular e sofisticada do núcleo da aplicação utilizando as mais consistentes regras do mercado corporativo Symfony.

| Descritivo Geral | Categoria | Investimento Previsto (R$) |
| :--- | :---: | :--- |
| **Desenvolvimento Software Web: Frontend + Backend Symfony + CMS Customizado (Inclui Idiomas, Módulos Informativos e Arquitetura Banco de Dados)** | Serviços Engenharia e Customização Core | R$ 34.800,00 |
| **Arquitetura Área Restrita (Login/Pesquisadores/Repositório) e Organização de Entidades Acadêmicas** | Serviços Interativos Modulares | R$ 12.500,00 |

*Valor total referencial estimado (Desenvolvimento Completo, Homologações e Lançamento):* **R$ 47.300,00**

**Condições Gerais Comuns WAB de Pagamento:**
*   A serem tratadas com o departamento comercial: Pode-se admitir diluições ao longo dos meses correspondentes a produção - ex: (35% na Assinatura, 30% em Meio Período/Progresso, 35% na Entrega Oficial do App em Produção).
*   As quantias são passíveis de validação frente ao modelo de aquisições de centros públicos envolvidos.  
*   Taxas fixas mensais posteriores relativas à Suporte e Hospedagem de Servidores serão geradas após termo efetivado de infraestrutura (Início médio de servidor institucional forte em R$ 980 a R$ 1600 mensais com serviços WAB incluídos, dependendo do storage necessário para repositório acadêmico).

> **Aprovação do Diagnóstico:** A leitura e o encerramento da fase deste documento consolidam as premissas acordadas. O próximo passo consistirá na chancela formal para formalização do Contrato.

---
Atenciosamente,

**WAB Agência Digital**  
Diretorias Comercial e de Planejamento  
*(Contato Institucional Documentado)*
