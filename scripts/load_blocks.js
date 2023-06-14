
/**
 * Es crida des dels fitxers html i s'envia la pàgina a buscar en pages.js 
 * que té l'estructura que tindrà la pàgina i a més s'envia l'ID de l'element 
 * on s'afegirà el contingut
 */
function loadBlocks(page, element) {

  //Recollim el document
  var el = document.getElementById(element);

  //Fem que comence l'spinner
  startSpinner(el);
  var time = new Date();

  //Agafem els blocks que van segons la pàgina
  let blocks = pages[page];

  //Creem els blocs amb la funció createBlock
  var blocks_list = [];
  for (let i = 0; i < blocks.length; i++) {
    //console.log(blocks[i]);
    blocks_list.push(createBlock(blocks[i]));
  }

  //Calculem la diferència entre que ha començat a carregar blocs i ha acabat
  var time2 = new Date();
  wait_time = 150;
  if (time2 - time > 1000) {
    wait_time = 0;
  }

  setTimeout(function () {
    //Llevem l'spinner
    destroySpinner();
    //Afegim els elements a l'element html
    for (let i = 0; i < blocks_list.length; i++) {
      el.appendChild(blocks_list[i]);
    }

    //Pintar tots els codis
    hljs.highlightAll();
  }, wait_time);

}

/*************************************************************/
/****************** FUNCIONS DE CREAR BLOCS ******************/
/*************************************************************/

/**
 * Crida a les funcions per crear els blocs depenent del tipus 
 */
function createBlock(block) {
  switch (block[0]) {
    case "block_h1":
      return createBlockH1(block);
    case "block_h2":
      return createBlockH2(block);
    case "block_h3":
      return createBlockH3(block);
    case "block_unit":
      return createBlockUnit(block);
    case "block_content":
      return createBlockContent(block);
    case "accordeon":
      return createBlockAccordeon(block);
    default:
      break;
  }
}

/**
 * Crea el tipus de block accordeon 
 */
function createBlockAccordeon(block) {

  //Crea div principal
  var div = document.createElement("div");
  div.classList.add('accordion');
  let id_accordion = block[1];
  div.id = id_accordion;

  //Agafem els elements de dins
  let elements_accordion = block[2];
  for(el of elements_accordion) {

    //De cada element el primer és el header i la resta el contingut
    var header = el[0];
    var id_header = el[0][1].replaceAll(' ', '_');
    var content = el[1];
    
    //Crea div interior card
    var div_card = document.createElement('div');
    div_card.classList.add('card-header');

    //Canviar icona al fer click de fletxa avall i fletxa amunt
    div_card.onclick = function() {
      if(this.children && this.children.length > 0) {
        var children = this.children[0].children;
        for(ch of children) {
          if(ch.tagName = 'I' && ch.classList.contains('fa-chevron-down')) {
            ch.classList.remove('fa-chevron-down');
            ch.classList.add('fa-chevron-up');
          } else {
            if(ch.tagName = 'I' && ch.classList.contains('fa-chevron-up')) {
              ch.classList.remove('fa-chevron-up');
              ch.classList.add('fa-chevron-down');
            }
          }
        }
      }
    };
    div_card.id = id_header;

    //Crea la capçalera del desplegable
    var el_header = createBlock(header);
    el_header.setAttribute('data-toggle', 'collapse');
    el_header.setAttribute('data-target', '#'+id_header+'-content');
    el_header.setAttribute('aria-expanded', 'false');
    el_header.setAttribute('aria-controls', id_header+'-content');
    el_header.style.display = 'flex';
    el_header.style.alignItems = 'center';
    el_header.style.gap = '1em';
    
    //Afegir icona
    var icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-chevron-down');
    icon.style.color = 'white';
    el_header.appendChild(icon);
    div_card.appendChild(el_header);
    
    div.appendChild(div_card);

    //Crea el div del contingut
    var div_content = document.createElement('div');
    div_content.id = id_header+'-content';
    div_content.classList.add('collapse');
    div_content.setAttribute('aria-labelledby', id_header);
    div_content.setAttribute('data-parent', '#'+id_accordion);

    //Crea el div que va dins
    var div_card_body = document.createElement('div');
    div_card_body.classList.add('card-body');
    
    //Afegir elements al body
    for(c of content) {
      var el_c = createBlock(c);
      div_card_body.appendChild(el_c);
    }

    div_content.appendChild(div_card_body);
    div.appendChild(div_content);

  }

  return div;
}

/**
 * Crea el block H1
 */
function createBlockH1(block) {
  var div = document.createElement("div");
  div.classList.add("jumbotron");
  div.classList.add("block_h1");
  var th1 = document.createElement("h1");
  th1.classList.add("display-4");
  th1.textContent = block[1];

  div.appendChild(th1);

  return div;
}

/**
 * Crea el block H2
 */
function createBlockH2(block) {
  var div = document.createElement("div");
  div.classList.add("block_colored");
  div.classList.add("block_h2");
  var th2 = document.createElement("h2");
  th2.textContent = block[1];

  div.appendChild(th2);

  return div;
}

/**
 * Crea el block H3
 */
function createBlockH3(block) {
  var div = document.createElement("div");
  div.classList.add("block_black");
  div.classList.add("block_h3");
  var th3 = document.createElement("h3");
  th3.textContent = block[1];

  div.appendChild(th3);

  return div;
}

/**
 * Crea el block Unitat
 */
function createBlockUnit(block) {

  //Crea el div principal
  var div_b = document.createElement("div");
  div_b.classList.add("block");

  //Crea la fila
  var div_r = document.createElement("div");
  div_r.classList.add("row");

  //Llig els elements que hi ha per afegir varies columnes
  for (let i = 1; i < block.length; i++) {

    //Agafa la url del fitxer urls.js
    var url = block[i][0];
    //Agafa la imatge del fitxer imgs.js
    var img_src = block[i][1];
    var name = block[i][2];

    //Crea una columna per cada element
    var div_c = document.createElement("div");
    div_c.classList.add("col");

    if (url || img_src || name) {
      //Crea l'enllaç que portarà a la unitat
      var a = document.createElement("a");
      a.classList.add("unit-link");
      a.href = url;

      //Crea el div que contindrà imatge i botó
      var div_u = document.createElement("div");
      div_u.classList.add("unit");

      //Crea la imatge
      var img = document.createElement("img");
      img.classList.add("unit-img");
      img.src = img_src;

      //Crea el botó
      var th3 = document.createElement("h3");
      th3.classList.add("btn");
      th3.classList.add("btn-primary");
      th3.classList.add("unit-title");
      th3.textContent = name;

      div_u.appendChild(img);
      div_u.appendChild(th3);
      a.appendChild(div_u);
      div_c.appendChild(a);
    }

    div_r.appendChild(div_c);
  }

  div_b.appendChild(div_r);

  return div_b;
}

/**
 * Crea el block Contingut
 */
function createBlockContent(block) {
  //Crea el div principal
  var div = document.createElement("div");
  div.classList.add("block");
  //Afegeix al div cada element creantlo segons el nom (text, botó, h4, llista, etc)
  for (let i = 1; i < block.length; i++) {
    var new_element = createElementByName(block[i][0]['type'], block[i]);
    div.appendChild(new_element);
  }
  return div;
}

/**
 * Segons el tipus de contingut crida a la funció pertinent
 */
function createElementByName(name, block) {
  var new_element;

  switch (name) {
    case "text_complex":
      new_element = createElementTextComplex(block);
      break;
    case "text_simple":
      new_element = createElementText(block);
      break;
    case "br":
      new_element = createElementBr(block);
      break;
    case "code":
      new_element = createElementCode(block);
      break;
    case "img_center":
      new_element = createElementImg(block);
      break;
    case "btn":
      new_element = createElementBtn(block);
      break;
    case "cols":
      new_element = createElementCols(block);
      break;
    case "ulist":
      new_element = createElementUList(block);
      break;
    case "olist":
      new_element = createElementOList(block);
      break;
    case "list_group":
      new_element = createElementListGroup(block);
      break;
    case "h4":
      new_element = createElementH4(block);
      break;
    case "iframe":
      new_element = createElementIframe(block);
      break;
    default:
      break;
  }
  return new_element;
}

/*************************************************************/
/**************** FUNCIONS DE CREAR CONTINGUT ****************/
/*************************************************************/

/**
 * Funció que crea un block de contingut h4
 */
function createElementH4(block) {
  var th4 = document.createElement("h4");

  th4.textContent = block[1];

  checkBlockProperties(block, th4);
  return th4;
}

/**
 * Funció que crea un block de contingut iframe
 */
function createElementIframe(block) {
  var iframe = document.createElement("iframe");
  iframe.src = block[1];

  checkBlockProperties(block, iframe);

  return iframe;
}

/**
 * Funció que crea un block de contingut list-group (llista en recuadres)
 */
function createElementListGroup(block) {
  var ul = document.createElement("ul");
  ul.classList.add("list-group");
  for (var i = 0; i < block[1].length; i++) {
    var li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = updateTextChangingLessThanAndGreaterThanSigns(block[1][i][1]);
    ul.appendChild(li);
  }
  return ul;
}

/**
 * Funció que crea un block de contingut llista no ordenada
 */
function createElementUList(block) {
  var level = 1;
  var ul = document.createElement("span");
  var ul_html = '<ul>';

  for (var i = 0; i < block[1].length; i++) {
    var level_li = countLevelLi(block[1][i][1]);
    var text_li = updateTextChangingLessThanAndGreaterThanSigns(block[1][i][1].substring(level_li - 1));
    if (level_li > level) {
      level = level_li;
      ul_html += '<ul>';
    } else {
      if (level_li < level) {
        level = level_li;
        ul_html += '</ul>';
      }
    }
    ul_html += '<li>' + text_li + '</li>';
  }

  ul_html += '</ul>';
  ul.innerHTML = ul_html;
  return ul;
}

/**
 * Funció que crea un block de contingut llista ordenada
 */
function createElementOList(block) {
  var level = 1;
  var ul = document.createElement("span");
  var ul_html = '<ol>';

  for (var i = 0; i < block[1].length; i++) {
    var level_li = countLevelLi(block[1][i][1]);
    var text_li = updateTextChangingLessThanAndGreaterThanSigns(block[1][i][1].substring(level_li - 1));
    if (level_li > level) {
      level = level_li;
      ul_html += '<ol>';
    } else {
      if (level_li < level) {
        level = level_li;
        ul_html += '</ol>';
      }
    }
    ul_html += '<li>' + text_li + '</li>';
  }

  ul_html += '</ol>';
  ul.innerHTML = ul_html;
  return ul;
}

/**
 * Funció que crea un block de contingut columnes
 */
function createElementCols(block) {
  var row = document.createElement("div");
  row.classList.add("row");

  for (var i = 1; i < block.length; i++) {
    var col = document.createElement("div");
    col.classList.add("col");

    for (var j = 0; j < block[i].length; j++) {
      var name = block[i][j][0]['type'];
      if (name != 'blank') {
        var new_element = createElementByName(name, block[i][j]);
        col.appendChild(new_element);
      }

    }
    row.appendChild(col);
  }
  return row;
}

/**
 * Funció que crea un block de contingut imatge
 */
function createElementImg(block) {
  var img = document.createElement("img");
  img.classList.add("img-fluid");
  img.classList.add("my-3");
  img.classList.add("center");
  img.src = block[1];
  return img;
}

/**
 * Funció que crea un block de contingut botó
 */
function createElementBtn(block) {
  var p = document.createElement('p');
  p.innerHTML += ' <a href="' + block[1] + '" class="btn btn-primary">' + block[2] + "</a>";
  checkBlockProperties(block, p);
  return p;
}

/**
 * Funció que crea un block de contingut text
 */
function createElementText(block) {
  var p = document.createElement("p");
  p.innerHTML = updateTextChangingLessThanAndGreaterThanSigns(block[1]);
  checkBlockProperties(block, p);
  return p;
}

/**
 * Funció que crea un block de contingut br
 */
function createElementBr(block) {
  var br = document.createElement("br");
  return br;
}

/**
 * Funció que crea un block de contingut codi
 */
function createElementCode(block) {
  var code = block[1];
  code = updateTextChangingLessThanAndGreaterThanSigns(code);
  var span = document.createElement('span');
  var language = block[0]['language'];
  var text_language = language ? ' class="' + language + '" ' : ' ';
  span.innerHTML = `
  <pre>
    <code ` + text_language + `>` + code + `</code>
  </pre>
  `;

  return span;
}

/**
 * Funció que crea un block de contingut text complex
 */
function createElementTextComplex(block) {
  var p = document.createElement("p");
  p.innerHTML = "";
  for (let j = 1; j < block.length; j++) {
    var type = block[j][0];
    switch (type) {
      case "text":
        p.innerHTML += " " + updateTextChangingLessThanAndGreaterThanSigns(block[j][1]);
        break;
      case "link":
        p.innerHTML += createLink(block[j][1], block[j][2]);
        break;
      case "bold":
        p.innerHTML += createBold(block[j][1]);
        break;
      default:
        break;
    }
  }
  checkBlockProperties(block, p);
  return p;
}



/*************************************************************/
/********************* FUNCIONS AUXILIARS ********************/
/*************************************************************/

/**
 * Funció auxiliar que comprova els blocks que afegeixen propietats extra CSS
 */
function checkBlockProperties(block, element) {
  if (block[0]["center"]) {
    element.classList.add("center");
  }

  if (block[0]["height"]) {
    element.style.height = block[0]["height"];
  }

  if (block[0]["width"]) {
    element.style.width = block[0]["width"];
  }
  return element;
}

/**
 * Funció auxiliar que canvia tots els símbols < i > perquè es puguen mostrar correctament a l'HTML
 */
function updateTextChangingLessThanAndGreaterThanSigns(text) {
  text = text.replaceAll('<', '&lt;');
  text = text.replaceAll('>', '&gt;');
  return text;
}

/**
 * Funció auxiliar que compta els nivells de les llistes
 */
function countLevelLi(li_text) {
  var level = 1;
  for (var i = 0; i < li_text.length; i++) {
    if (li_text[i] == '-') {
      level++;
    } else { break; }
  }
  return level;
}

/**
 * Funció auxiliar que crea el innerText que va en negreta
 */
function createBold(text) {
  return " <b>" + updateTextChangingLessThanAndGreaterThanSigns(text) + "</b>"
}

/**
 * Funció auxiliar que crea el innerText que va en enllaç
 */
function createLink(enllaç, text) {
  return ' <a href="' + enllaç + '" target="_blank">' + updateTextChangingLessThanAndGreaterThanSigns(text) + "</a>";
}