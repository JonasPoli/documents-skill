---
description: Como gerar um mockup de UI e converter para Base64 para orçamentos.
---

Este workflow descreve os passos para criar uma imagem de protótipo visual e inseri-la em um orçamento Markdown.

> [!CAUTION]
> **PROIBIÇÃO ABSOLUTA DA FERRAMENTA `generate_image`:** É terminantemente proibido utilizar ferramentas baseadas em DALL-E (text-to-image) ou `generate_image`! Você DEVE usar estritamente o `browser_subagent` renderizando um arquivo HTML codificado por você para gerar as imagens, pois geramos wireframes de sistemas e interfaces reais de Bootstrap 5 e não imagens fantasiosas geradas por IA.

1. **Criar o HTML do Mockup**: Use `write_to_file` para criar um arquivo em `/tmp/mockup.html` usando Bootstrap 5 para uma aparência moderna e minimalista. Use cores harmoniosas e componentes reais (cards, forms, navbars).
2. **Capturar Screenshot**: Use `browser_subagent` para:
   - Abrir `file:///tmp/mockup.html`.
   - Tirar um screenshot da página inteira ou da área relevante.
   - Salvar em `/tmp/mockup.png`.
3. **Otimizar e Redimensionar**: Use o comando `sips` (nativo do Mac) para garantir que a imagem não seja gigantesca em tokens:
   `sips -Z 800 /tmp/mockup.png` (Redimensiona proporcionalmente para largura máx 800px).
4. **Converter para Base64**:
   `base64 -i /tmp/mockup.png -o /tmp/mockup.b64`
5. **Ler e Inserir**: Use `view_file` para ler o conteúdo de `/tmp/mockup.b64` e insira-o no final do seu orçamento Markdown. Use a sintaxe:
   `![Descrição do Mockup][image1]`
   E ao final do documento:
   `[image1]: <data:image/png;base64,[CONTEÚDO_DA_EXTRAÇÃO]>`
