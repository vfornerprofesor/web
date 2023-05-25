var elements = [];

let id = 0;
let content_ids = {};
function addElement() {
    var seleccio = document.getElementById('element-selector').value;
    var content = document.getElementById('content');
    switch (seleccio) {
        case 'block_h1':
            content.appendChild(createBlockH1());
            break;
        case 'block_h2':
            content.appendChild(createBlockH2());
            break;
        case 'block_h3':
            content.appendChild(createBlockH3());
            break;
        case 'block_unit':
            content.appendChild(createBlockUnit());
            break;
        case 'block_content':
            content.appendChild(createBlockContent());
            break;
        default:
            break;
    }
    id++;
}

function addElementContent(id_content) {
    if (!content_ids[id_content]) content_ids[id_content] = 0;
    var seleccio = document.getElementById('element-selector' + id_content).value;
    var content = document.getElementById(id_content);
    switch (seleccio) {
        case 'text_complex':
            content.appendChild(createContentTextComplex(id_content));
            break;
        case 'text_simple':
            content.appendChild(createContentTextSimple(id_content));
            break;
        case 'img_center':
            content.appendChild(createBlockH3(id_content));
            break;
        default:
            break;
    }

    content_ids[id_content] = content_ids[id_content] + 1;

}

function createContentTextSimple(id_content) {

    var id_block_content = id_content + '-' + content_ids[id_content];
    var div = createDiv('text_simple', id_block_content);

    var p = createParagraph('Text');
    div.appendChild(p);

    var input = createInput('text', 'Text');
    div.appendChild(input);
    var btn_delete = createButtonDelete(id_block_content);
    div.appendChild(btn_delete);

    return div;
}

function createBlockContent() {
    var div = createDiv('block_content', id);

    var p = createParagraph('Contingut');
    div.appendChild(p);

    var selector = document.createElement("div");
    selector.classList.add("select-field");
    selector.innerHTML = `
        <select id="element-selector`+ id + `">
          <option value="text_simple">Text Simple</option>
          <option value="text_complex">Text Complex</option>
          <option value="img_center">Image Center</option>
          <option value="cols">Columns</option>
          <option value="ulist">Unordered List</option>
          <option value="olist">Ordered List</option>
          <option value="list_group">List Group</option>
          <option value="h4">H4</option>
        </select>
      `;
    div.appendChild(selector);

    var btnAfegir = document.createElement('span');
    btnAfegir.innerHTML = '<button onclick=addElementContent(' + id + ')>Afegir a contingut</button>';
    div.appendChild(btnAfegir);

    var br = document.createElement('br');
    div.appendChild(br);

    var btnBorrar = createButtonDelete(id);
    div.appendChild(btnBorrar);
    return div;
}

function createDiv(block_type, id_block) {
    var div = document.createElement('div');
    div.id = id_block;
    if(id_block.toString().indexOf("-") == -1) {
        div.classList.add('delimiter');
    }
    div.block_type = block_type;
    return div;
}

function createInput(type, placeholder) {
    var input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

function createBlockUnit() {
    var div = createDiv('block_unit', id);

    var p = createParagraph('Unitat');
    div.appendChild(p);

    for (var i = 0; i < 4; i++) {
        var img_input = createInput('text', 'Imatge');
        var url_input = createInput('text', 'URL');
        var btn_input = createInput('text', 'Text botó');

        div.appendChild(img_input);
        div.appendChild(url_input);
        div.appendChild(btn_input);
    }

    var btn = createButtonDelete(id);
    div.appendChild(btn);
    return div;
}

function createParagraph(text) {
    var p = document.createElement('p');
    p.textContent = text;
    return p;
}

function createBlockH(block_type, text, placeholder) {
    var div = createDiv(block_type, id);

    var p = createParagraph(text);
    div.appendChild(p);

    var input = createInput('text', placeholder);
    div.appendChild(input);

    var buttondelete = createButtonDelete(id);
    div.appendChild(buttondelete);

    return div;
}

function createBlockH1() {
    return createBlockH('block_h1', 'Títol 1', 'Títol 1');
}

function createBlockH2() {
    return createBlockH('block_h2', 'Títol 2', 'Títol 2');
}

function createBlockH3() {
    return createBlockH('block_h3', 'Títol 3', 'Títol 3');
}


function createButtonDelete(id_delete) {
    var button = document.createElement('span');
    button.innerHTML = '<button onclick=deleteElement("' + id_delete + '")>Borrar</button>';
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
                case 'block_h1':
                    new_element = [el.block_type, el.getElementsByTagName('input')[0].value];
                    break;
                case 'block_h2':
                    new_element = [el.block_type, el.getElementsByTagName('input')[0].value];
                    break;
                case 'block_h3':
                    new_element = [el.block_type, el.getElementsByTagName('input')[0].value];
                    break;
                case 'block_unit':
                    new_element = [];
                    new_element[0] = el.block_type;
                    let k = 1;
                    let inputs = el.getElementsByTagName('input');
                    for (let j = 0; j < inputs.length; j += 3) {
                        if (inputs[j].value) {
                            new_element[k] = [inputs[j].value, inputs[j + 1].value, inputs[j + 2].value];
                            k++;
                        }
                    }
                    break;
                case 'block_content':
                    new_element = [];
                    new_element[0] = el.block_type;
                    let num_children = content_ids[i];
                    for(let j = 0; j < num_children; j++) {
                        let child = document.getElementById(i+'-'+j);
                        let child_list = [];
                        if(child) {
                            if(child.block_type == 'text_simple') {
                                child_list[0] = child.block_type;
                                child_list[1] = child.getElementsByTagName('input')[0].value;
                            }
                            new_element[j+1] = child_list;
                        }
                    }
                default:
                    break;
            }
            if (new_element) elements.push(new_element);
            new_element = null;
        }
    }
    console.log(elements);
}