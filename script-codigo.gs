function formatarDocumentoCompleto() {
  atualizarTitulos();
  formatarTabelas();
  aplicarBordasEmTodasAsCelulas();
}

function onOpen() {
  DocumentApp.getUi()
    .createMenu('WAB')
    .addItem('Formatar títulos', 'atualizarTitulos')
    .addItem('Formatar tabelas', 'formatarTabelas')
    .addItem('Formatar documento completo', 'formatarDocumentoCompleto')
    .addItem('Bordas brancas', 'aplicarBordasEmTodasAsCelulas')
    .addToUi();
}

function atualizarTitulos() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var paragraphs = body.getParagraphs();

  for (var i = 0; i < paragraphs.length; i++) {
    var p = paragraphs[i];
    var heading = p.getHeading();
    var texto = p.getText();

    // TÍTULO 1
    if (heading == DocumentApp.ParagraphHeading.HEADING1) {
      p.setHeading(DocumentApp.ParagraphHeading.HEADING1);

      if (texto && texto.trim() !== "") {
        p.setText(texto.toUpperCase());
      }

      p.setBold(true);
      p.setItalic(false);
      p.setFontSize(25);
      p.setForegroundColor('#1f4e79');
      p.setFontFamily("Open Sans");
      p.setSpacingBefore(0);
      p.setSpacingAfter(0);
    }

    // TÍTULO 2
    if (heading == DocumentApp.ParagraphHeading.HEADING2) {
      p.setHeading(DocumentApp.ParagraphHeading.HEADING2);

      if (texto && texto.trim() !== "") {
        p.setText(texto.toUpperCase());
      }

      p.setBold(true);
      p.setItalic(false);
      p.setFontSize(22);
      p.setForegroundColor('#2e74b5');
      p.setFontFamily("Open Sans");
      p.setSpacingBefore(0);
      p.setSpacingAfter(0);
    }

    // TÍTULO 3
    if (heading == DocumentApp.ParagraphHeading.HEADING3) {
      p.setHeading(DocumentApp.ParagraphHeading.HEADING3);

      if (texto && texto.trim() !== "") {
        p.setText(texto.toUpperCase());
      }

      p.setBold(false);
      p.setItalic(false);
      p.setFontSize(18);
      p.setForegroundColor('#47a1f5');
      p.setFontFamily("Calibri");
      p.setSpacingBefore(16);
      p.setSpacingAfter(0);
    }

    // TÍTULO 4
    if (heading == DocumentApp.ParagraphHeading.HEADING4) {
      p.setHeading(DocumentApp.ParagraphHeading.HEADING4);

      if (texto && texto.trim() !== "") {
        p.setText(texto.toUpperCase());
      }

      p.setBold(true);
      p.setItalic(true);
      p.setFontSize(13);
      p.setForegroundColor('#2e74b5');
      p.setFontFamily("Calibri");
      p.setSpacingBefore(12);
      p.setSpacingAfter(0);
    }
  }
}



function formatarTabelas() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var tables = body.getTables();

  for (var t = 0; t < tables.length; t++) {
    var table = tables[t];
    var numRows = table.getNumRows();
    var numCols = table.getRow(0).getNumCells();

    // 🔲 Borda da tabela
    table.setBorderWidth(1.5);
    table.setBorderColor("#ffffff");

    for (var r = 0; r < numRows; r++) {
      var row = table.getRow(r);

      for (var c = 0; c < numCols; c++) {
        var cell = row.getCell(c);
        var paragraphs = [];

        for (var i = 0; i < cell.getNumChildren(); i++) {
          var child = cell.getChild(i);
          if (child.getType() == DocumentApp.ElementType.PARAGRAPH) {
            paragraphs.push(child.asParagraph());
          }
        }

        // =========================
        // 🎯 LINHA DE TÍTULO
        // =========================
        if (r === 0) {
          cell.setBackgroundColor("#ffffff");

          for (var p = 0; p < paragraphs.length; p++) {
            paragraphs[p].setBold(true);
            paragraphs[p].setFontSize(14);
          }

          continue;
        }

        // =========================
        // 🎯 PRIMEIRA COLUNA
        // =========================
        if (c === 0) {
          for (var p = 0; p < paragraphs.length; p++) {
            paragraphs[p].setBold(true);
            paragraphs[p].setFontSize(9);
            paragraphs[p].setFontFamily("Calibri"); // ou Open Sans se preferir
          }
        }

        // =========================
        // 🎨 CORES DINÂMICAS
        // =========================
        var bgColor = "#ffffff";

        if (numCols === 3) {
          if (c === 0) bgColor = ((r - 1) % 2 === 0) ? "#cccccc" : "#ffffff";
          if (c === 1) bgColor = ((r - 1) % 2 === 0) ? "#efefef" : "#ffffff";
          if (c === 2) bgColor = ((r - 1) % 2 === 0) ? "#b6d7a8" : "#d9ead3";
        }

        if (numCols === 4) {
          if (c === 0) bgColor = ((r - 1) % 2 === 0) ? "#cccccc" : "#ffffff";
          if (c === 1) bgColor = ((r - 1) % 2 === 0) ? "#b6d7a8" : "#d9ead3";
          if (c === 2) bgColor = ((r - 1) % 2 === 0) ? "#efefef" : "#ffffff";
          if (c === 3) bgColor = ((r - 1) % 2 === 0) ? "#b6d7a8" : "#d9ead3";
        }

        if (numCols === 5) {
          if (c === 0) bgColor = ((r - 1) % 2 === 0) ? "#cccccc" : "#ffffff";
          if (c === 1) bgColor = ((r - 1) % 2 === 0) ? "#b6d7a8" : "#d9ead3";
          if (c === 2) bgColor = ((r - 1) % 2 === 0) ? "#efefef" : "#ffffff";
          if (c === 3) bgColor = ((r - 1) % 2 === 0) ? "#b6d7a8" : "#d9ead3";
          if (c === 4) bgColor = ((r - 1) % 2 === 0) ? "#efefef" : "#ffffff";
        }


        cell.setBackgroundColor(bgColor);
        table.setBorderWidth(1.5);
        table.setBorderColor("#ffffff");

        // =========================
        // 📏 ALTURA / PADDING
        // =========================
        cell.setBackgroundColor(bgColor);

        cell.setPaddingTop(10);
        cell.setPaddingBottom(10);
        cell.setPaddingLeft(8);
        cell.setPaddingRight(8);
      }
    }
  }
}
function aplicarBordasEmTodasAsCelulas() {
  var doc = DocumentApp.getActiveDocument();
  var documentId = doc.getId();
  var requests = [];

  var gdoc = Docs.Documents.get(documentId);
  var content = gdoc.body.content || [];

  for (var i = 0; i < content.length; i++) {
    var el = content[i];
    if (!el.table || !el.startIndex) continue;

    requests.push({
      updateTableCellStyle: {
        tableStartLocation: {
          index: el.startIndex
        },
        tableCellStyle: {
          borderTop: {
            color: { color: { rgbColor: { red: 1, green: 1, blue: 1 } } },
            width: { magnitude: 1.5, unit: 'PT' },
            dashStyle: 'SOLID'
          },
          borderBottom: {
            color: { color: { rgbColor: { red: 1, green: 1, blue: 1 } } },
            width: { magnitude: 1.5, unit: 'PT' },
            dashStyle: 'SOLID'
          },
          borderLeft: {
            color: { color: { rgbColor: { red: 1, green: 1, blue: 1 } } },
            width: { magnitude: 1.5, unit: 'PT' },
            dashStyle: 'SOLID'
          },
          borderRight: {
            color: { color: { rgbColor: { red: 1, green: 1, blue: 1 } } },
            width: { magnitude: 1.5, unit: 'PT' },
            dashStyle: 'SOLID'
          }
        },
        fields: 'borderTop,borderBottom,borderLeft,borderRight'
      }
    });
  }

  if (requests.length > 0) {
    Docs.Documents.batchUpdate({ requests: requests }, documentId);
  }
}
