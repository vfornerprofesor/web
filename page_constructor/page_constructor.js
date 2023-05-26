var elements = [];

let id = 0;
let content_ids = {};

function addElement() {
  var seleccio = document.getElementById("element-selector").value;
  var content = document.getElementById("content");
  var id_new = id;
  switch (seleccio) {
    case "block_h1":
      content.appendChild(createBlockH1(id_new));
      break;
    case "block_h2":
      content.appendChild(createBlockH2(id_new));
      break;
    case "block_h3":
      content.appendChild(createBlockH3(id_new));
      break;
    case "block_unit":
      content.appendChild(createBlockUnit(id_new));
      break;
    case "block_content":
      content.appendChild(createBlockContent(id_new));
      break;
    default:
      break;
  }
  id++;
}

function addElementContent(id_content) {
  if (!content_ids[id_content]) content_ids[id_content] = 0;
  var seleccio = document.getElementById("element-selector" + id_content).value;
  var content = document.getElementById(id_content);
  switch (seleccio) {
    case "text_complex":
      content.appendChild(createContentTextComplex(id_content));
      break;
    case "code":
      content.appendChild(createContentCode(id_content));
      break;
    case "text_simple":
      content.appendChild(createContentTextSimple(id_content));
      break;
    case "img_center":
      content.appendChild(createContentImgCenter(id_content));
      break;
    case "list_group":
      content.appendChild(createContentListGroup(id_content));
      break;
    case "ulist":
      content.appendChild(createContentUList(id_content));
      break;
    case "olist":
      content.appendChild(createContentOList(id_content));
      break;
    case "h4":
      content.appendChild(createContentH4(id_content));
      break;
    case "cols":
      content.appendChild(createContentCols(id_content));
      break;
    case "btn":
      content.appendChild(createContentBtn(id_content));
      break;
    default:
      break;
  }

  content_ids[id_content] = content_ids[id_content] + 1;
}

function createContentCols(id_content) {
  var id_block_content = id_content + "-" + content_ids[id_content];

  var div = createDiv("cols", id_block_content);

  var p = createParagraph("Columna 1");
  div.appendChild(p);

  var id_block_content_col = id_block_content + "-" + 0;
  div.appendChild(createBlockContent(id_block_content_col));

  var p2 = createParagraph("Columna 2");
  div.appendChild(p2);

  var id_block_content_col2 = id_block_content + "-" + 1;
  div.appendChild(createBlockContent(id_block_content_col2));

  var p3 = createParagraph("Columna 3");
  div.appendChild(p3);

  var id_block_content_col3 = id_block_content + "-" + 2;
  div.appendChild(createBlockContent(id_block_content_col3));

  return div;
}

function createContentList(id_content, block_type, paragraph) {
  var id_block_content = id_content + "-" + content_ids[id_content];
  var div = createDiv(block_type, id_block_content);

  var p = createParagraph(paragraph);
  div.appendChild(p);

  var input = createTextArea();
  div.appendChild(input);

  var btn_delete = createButtonDelete(id_block_content);
  div.appendChild(btn_delete);
  return div;
}

function createContentListGroup(id_content) {
  return createContentList(
    id_content,
    "list_group",
    "Llista: elements en cada linia"
  );
}

function createContentUList(id_content) {
  return createContentList(
    id_content,
    "ulist",
    "Llista no ordenada: elements en cada linia"
  );
}

function createContentOList(id_content) {
  return createContentList(
    id_content,
    "olist",
    "Llista ordenada: elements en cada linia"
  );
}

function createContentCode(id_content) {
  var id_block_content = id_content + "-" + content_ids[id_content];
  var div = createDiv("code", id_block_content);

  var p = createParagraph("Code:");
  div.appendChild(p);

  var input = createTextArea();
  div.appendChild(input);

  var btn_delete = createButtonDelete(id_block_content);
  div.appendChild(btn_delete);

  return div;
}

function createContentTextComplex(id_content) {
  var id_block_content = id_content + "-" + content_ids[id_content];
  var div = createDiv("text_complex", id_block_content);

  var p = createParagraph("Text complex - t:text - url:url-->nom - n:negrita");
  div.appendChild(p);

  var input = createTextArea();
  div.appendChild(input);

  var btn_delete = createButtonDelete(id_block_content);
  div.appendChild(btn_delete);

  return div;
}

function createContentH4(id_content) {
  var id_block_content = id_content + "-" + content_ids[id_content];
  var div = createDiv("h4", id_block_content);

  var p = createParagraph("Titol 4");
  div.appendChild(p);

  var input = createInput("text", "Titol");
  div.appendChild(input);
  var btn_delete = createButtonDelete(id_block_content);
  div.appendChild(btn_delete);

  return div;
}

function createContentBtn(id_content) {
  var id_block_content = id_content + "-" + content_ids[id_content];
  var div = createDiv("btn", id_block_content);

  var p = createParagraph("Botó");
  div.appendChild(p);

  var input = createInput("text", "URL");
  div.appendChild(input);
  var input2 = createInput("text", "Nom botó");
  div.appendChild(input2);

  var btn_delete = createButtonDelete(id_block_content);
  div.appendChild(btn_delete);

  return div;
}

function createContentImgCenter(id_content) {
  var id_block_content = id_content + "-" + content_ids[id_content];
  var div = createDiv("img_center", id_block_content);

  var p = createParagraph("Imatge");
  div.appendChild(p);

  var input = createInput("text", "URL");
  div.appendChild(input);
  var btn_delete = createButtonDelete(id_block_content);
  div.appendChild(btn_delete);

  return div;
}

function createContentTextSimple(id_content) {
  var id_block_content = id_content + "-" + content_ids[id_content];
  var div = createDiv("text_simple", id_block_content);

  var p = createParagraph("Text");
  div.appendChild(p);

  var input = createInput("text", "Text");
  div.appendChild(input);
  var btn_delete = createButtonDelete(id_block_content);
  div.appendChild(btn_delete);

  return div;
}

function createBlockContent(id_block) {
  var div = createDiv("block_content", id_block);

  var p = createParagraph("Contingut");
  div.appendChild(p);

  var selector = document.createElement("div");
  selector.classList.add("select-field");
  selector.innerHTML =
    `
        <select id="element-selector` +
    id_block +
    `">
          <option value="text_simple">Text Simple</option>
          <option value="text_complex">Text Complex</option>
          <option value="code">Code</option>
          <option value="img_center">Image Center</option>
          <option value="cols">Columns</option>
          <option value="ulist">Unordered List</option>
          <option value="olist">Ordered List</option>
          <option value="list_group">List Group</option>
          <option value="h4">H4</option>
          <option value="btn">Button</option>
        </select>
      `;
  div.appendChild(selector);

  var btnAfegir = document.createElement("span");
  btnAfegir.innerHTML =
    "<button onclick=addElementContent('" +
    id_block +
    "')>Afegir a contingut</button>";
  div.appendChild(btnAfegir);

  var br = document.createElement("br");
  div.appendChild(br);

  var btnBorrar = createButtonDelete(id_block);
  div.appendChild(btnBorrar);
  return div;
}

function createDiv(block_type, id_block) {
  var div = document.createElement("div");
  div.id = id_block;
  div.style.marginLeft = id.toString().split("-").length * 20 + "px";
  div.style.border = "1px solid black";
  div.style.padding = "10px";
  //debugger;
  if (id_block.toString().indexOf("-") == -1) {
    div.classList.add("delimiter");
  }
  div.block_type = block_type;
  return div;
}

function createInput(type, placeholder) {
  var input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

function createBlockUnit(id_block) {
  var div = createDiv("block_unit", id_block);

  var p = createParagraph("Unitat");
  div.appendChild(p);

  for (var i = 0; i < 4; i++) {
    var img_input = createInput("text", "Imatge");
    var url_input = createInput("text", "URL");
    var btn_input = createInput("text", "Text botó");
    var br = document.createElement('br');

    div.appendChild(img_input);
    div.appendChild(url_input);
    div.appendChild(btn_input);
    div.appendChild(br);
  }

  var btn = createButtonDelete(id_block);
  div.appendChild(btn);
  return div;
}

function createTextArea() {
  var ta = document.createElement("textarea");
  return ta;
}

function createParagraph(text) {
  var p = document.createElement("p");
  p.textContent = text;
  return p;
}

function createBlockH(id_block, block_type, text, placeholder) {
  var div = createDiv(block_type, id_block);

  var p = createParagraph(text);
  div.appendChild(p);

  var input = createInput("text", placeholder);
  div.appendChild(input);

  var buttondelete = createButtonDelete(id_block);
  div.appendChild(buttondelete);

  return div;
}

function createBlockH1(id_block) {
  return createBlockH(id_block, "block_h1", "Títol 1", "Títol 1");
}

function createBlockH2(id_block) {
  return createBlockH(id_block, "block_h2", "Títol 2", "Títol 2");
}

function createBlockH3(id_block) {
  return createBlockH(id_block, "block_h3", "Títol 3", "Títol 3");
}

function createButtonDelete(id_delete) {
  var button = document.createElement("span");
  button.innerHTML =
    '<button onclick=deleteElement("' + id_delete + '")>Borrar</button>';
  return button;
}

function deleteElement(id_delete) {
  var el = document.getElementById(id_delete);
  el.remove();
}

function createData() {
  elements = [];
  for (let i = 0; i < id; i++) {
    var el = document.getElementById(i);
    if (el) {
      var new_element;
      switch (el.block_type) {
        case "block_h1":
          new_element = [
            el.block_type,
            el.getElementsByTagName("input")[0].value,
          ];
          break;
        case "block_h2":
          new_element = [
            el.block_type,
            el.getElementsByTagName("input")[0].value,
          ];
          break;
        case "block_h3":
          new_element = [
            el.block_type,
            el.getElementsByTagName("input")[0].value,
          ];
          break;
        case "block_unit":
          new_element = [];
          new_element[0] = el.block_type;
          let k = 1;
          let inputs = el.getElementsByTagName("input");
          for (let j = 0; j < inputs.length; j += 3) {
            if (inputs[j].value) {
              new_element[k] = [
                inputs[j].value,
                inputs[j + 1].value,
                inputs[j + 2].value,
              ];
              k++;
            }
          }
          break;
        case "block_content":
          new_element = createDataContent(i, el);
          break;
        default:
          break;
      }
      if (new_element) elements.push(new_element);
      new_element = null;
    }
  }
  console.log(elements);
  var final = document.getElementById("final");
  var page_name = document.getElementById("nom_pagina").value;
  var text_final = "'" + page_name + "':" + JSON.stringify(elements);
  final.innerText = text_final;
}

function createDataContent(id_block, el) {
  var new_element = [];
  new_element[0] = el.block_type;
  let num_children = content_ids[id_block];
  for (let j = 0; j < num_children; j++) {
    let child = document.getElementById(id_block + "-" + j);
    let child_list = [];
    if (child) {
      switch (child.block_type) {
        case "text_simple":
          child_list = createDataTextSimple(child);
          break;
        case "text_complex":
          child_list = createDataTextComplex(child);
          break;
        case "code":
          child_list = createDataCode(child);
          break;
        case "list_group":
          child_list = createDataList(child);
          break;
        case "ulist":
          child_list = createDataList(child);
          break;
        case "olist":
          child_list = createDataList(child);
          break;
        case "h4":
          child_list = createDataH4(child);
          break;
        case "cols":
          child_list = createDataCols(child);
          break;
        case "img_center":
          child_list = createDataImgCenter(child);
          break;
        case "btn":
          child_list = createDataBtn(child);
          break;
        default:
          break;
      }
      new_element[j + 1] = child_list;
    }
  }
  new_element = new_element.filter(n => n);
  return new_element;
}

function createDataCols(child) {
  let data = [];
  data[0] = {type:child.block_type};
  let children = child.children;
  let pos = 1;

  for (const c of children) {
    if (c.id.startsWith(child.id + "-")) {
      let data_child = createDataContent(c.id, c);
      //TODO: COMPROVAR QUE HI HAJA ELEMENTS, SINÓ NO AFEGIR
      data_child.shift();

      data[pos] = data_child;
      pos++;
    }
  }
  //Elimina els buits
  data.filter(n => n[0] || n['type'])
  return data;
}

function createDataTextSimple(child) {
  let data = [];
  data[0] = {type:child.block_type};
  data[1] = child.getElementsByTagName("input")[0].value;
  return data;
}

function createDataImgCenter(child) {
  let data = [];
  data[0] = {type:child.block_type};
  data[1] = child.getElementsByTagName("input")[0].value;
  return data;
}

function createDataBtn(child) {
  let data = [];
  data[0] = {type:child.block_type};
  data[1] = child.getElementsByTagName("input")[0].value;
  data[2] = child.getElementsByTagName("input")[1].value;
  return data;
}

function createDataH4(child) {
  let data = [];
  data[0] = {type:child.block_type};
  data[1] = child.getElementsByTagName("input")[0].value;
  return data;
}

function createDataList(child) {
  let data = [];
  data[0] = {type:child.block_type};
  let ta = child.getElementsByTagName("textarea")[0];
  let ta_data = ta.value.split("\n");
  data[1] = [];
  for (const td of ta_data) {
    data[1].push(["text", td]);
  }
  return data;
}

function createDataCode(child) {
  let data = [];
  data[0] = {type:child.block_type};
  let text_code = child.getElementsByTagName("textarea")[0].value;
  data[1] = text_code;
  return data;
}

function createDataTextComplex(child) {
  let data = [];
  data[0] = {type:child.block_type};
  let ta = child.getElementsByTagName("textarea")[0];
  let ta_data = ta.value.split("\n");
  let index_element = 1;
  for (const td of ta_data) {
    if (td.startsWith("t:")) {
      data[index_element] = ["text", td.substring(2)];
    }
    if (td.startsWith("url:")) {
      let td_split = td.substring(4).split("-->");
      data[index_element] = ["link", td_split[0], td_split[1]];
    }
    if (td.startsWith("n:")) {
      data[index_element] = ["bold", td.substring(2)];
    }
    index_element++;
  }
  return data;
}
