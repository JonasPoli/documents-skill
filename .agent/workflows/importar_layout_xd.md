---
description: Como importar layouts do Adobe XD para a biblioteca de componentes e usar nos orçamentos.
---

Este workflow descreve o processo de conversão de designs estáticos (Adobe XD) em componentes HTML/CSS ("Galleria de Partes") que podem ser usados para gerar mockups automáticos em novos orçamentos.

## 1. PREPARAÇÃO NO ADOBE XD
1.  No Adobe XD, selecione a artboard (prancheta) contendo a seção específica (ex: Hero, Footer, Grid de Produtos).
2.  Tire um print (screenshot) nítido da seção.
3.  Copie o texto (copy) da seção, se houver.

## 2. IMPORTAÇÃO PARA O ASSISTENTE
Envie no chat:
*   O print da seção (pode ser o path do arquivo ou as imagens anexadas).
*   Uma breve descrição de qual categoria este componente pertence (ex: "Sessão de Depoimentos", "Tabela de Preços Luxury").

## 3. PROCESSAMENTO PELO ASSISTENTE
Ao receber os inputs, o assistente irá:
1.  **Analisar Visualmente:** Identificar cores (HEX), tipografia, espaçamentos e sombras do print.
2.  **Gerar Código:** Criar um arquivo HTML/CSS (Bootstrap + Estilos inline) que mimetiza o design do XD.
3.  **Armazenar:** Salvar o arquivo em `/Volumes/Dados/work/documentos/biblioteca_de_componentes/[CATEGORIA]/[NOME].html`.
4.  **Registrar:** Adicionar o componente ao catálogo `/Volumes/Dados/work/documentos/biblioteca_de_componentes/galeria.md`.

## 4. USO NOS ORÇAMENTOS
Uma vez na biblioteca, você pode solicitar:
> "Use o layout 'Hero Luxury 01' da galeria para este orçamento."

O assistente buscará o HTML na biblioteca, injetará o conteúdo do novo cliente e gerará o print automaticamente.
