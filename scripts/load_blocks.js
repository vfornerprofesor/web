

function loadBlocks(page, element) {
  var el = document.getElementById(element);

  startSpinner(el);

  var time = new Date();

  let blocks = pages[page];

  var blocks_list = [];
  for (let i = 0; i < blocks.length; i++) {
    console.log(blocks[i]);
    blocks_list.push(createBlock(blocks[i]));
  }

  var time2 = new Date();
  wait_time = 150;
  if (time2 - time > 1000) {
    wait_time = 0;
  }

  setTimeout(function () {
    destroySpinner();
    for (let i = 0; i < blocks_list.length; i++) {
      el.appendChild(blocks_list[i]);
    }

    //Pintar tots els codis
    hljs.highlightAll();
  }, wait_time);

}

/* CREATE BLOCK FUNCTIONS */
function createBlock(block) {
  switch (block[0]) {
    case "block_h1":
      return createBlockH1(block);
      break;
    case "block_h2":
      return createBlockH2(block);
      break;
    case "block_h3":
      return createBlockH3(block);
      break;
    case "block_h4":
      //createBlockH1(block, element);
      break;
    case "block_unit":
      return createBlockUnit(block);
      break;
    case "block_content":
      return createBlockContent(block);
      break;
    case "accordeon":
      return createBlockAccordeon(block);
      break;
    default:
      break;
  }
}
/*
<div class="accordion" id="unitats">
  <div class="card">
    <div class="card-header" id="title-programacio">
      <h2 data-toggle="collapse" data-target="#programacio" aria-expanded="true" aria-controls="programacio">
        Programació
      </h2>
    </div>
    <div id="programacio" class="collapse show" aria-labelledby="title-programacio" data-parent="#unitats">
      <div class="card-body">
        Contingut programacio
      </div>
    </div>
  </div>
</div>

<div class="accordion" id="unitats">

  <div class="card-header" id="PROGRAMACIÓ">
    <div class="block_colored block_h2" data-toggle="collapse" data-target="#PROGRAMACIÓ-content" aria-expanded="true" aria-controls="PROGRAMACIÓ-content">
      <h2>PROGRAMACIÓ</h2>
    </div>
  </div>
  <div id="PROGRAMACIÓ-content" class="collapse show" aria-labelledby="PROGRAMACIÓ" data-parent="unitats">
    <div class="card-body">
      asdf
    </div>
  </div>
  
  <div class="card-header" id="PROGRAMACIÓ2">
    <div class="block_colored block_h2" data-toggle="collapse" data-target="#PROGRAMACIÓ2-content" aria-expanded="true" aria-controls="PROGRAMACIÓ2-content">
      <h2>PROGRAMACIÓ2</h2>
    </div>
  </div>
  <div id="PROGRAMACIÓ2-content" class="collapse show" aria-labelledby="PROGRAMACIÓ2" data-parent="unitats">
    <div class="card-body">
      asdf
    </div>
  </div>
</div>
*/
function createBlockAccordeon(block) {
  var div = document.createElement("div");
  div.classList.add('accordion');
  let id_accordion = block[1];
  div.id = id_accordion;

  let elements_accordion = block[2];
  for(el of elements_accordion) {
    var header = el[0];
    var id_header = el[0][1];
    var content = el[1];
    
    /* DIV CARD */
    var div_card = document.createElement('div');
    div_card.classList.add('card-header');
    div_card.id = id_header;

    var el_header = createBlock(header);
    el_header.setAttribute('data-toggle', 'collapse');
    el_header.setAttribute('data-target', '#'+id_header+'-content');
    el_header.setAttribute('aria-expanded', 'true');
    el_header.setAttribute('aria-controls', id_header+'-content');
    div_card.appendChild(el_header);
    div.appendChild(div_card);

    /* DIV CARD BODY */
    var div_content = document.createElement('div');
    div_content.id = id_header+'-content';
    div_content.classList.add('collapse');
    //div_content.classList.add('show');
    div_content.setAttribute('aria-labelledby', id_header);
    div_content.setAttribute('data-parent', '#'+id_accordion);

    var div_card_body = document.createElement('div');
    div_card_body.classList.add('card-body');
    
    //Afegir elements
    for(c of content) {
      var el_c = createBlock(c);
      div_card_body.appendChild(el_c);
    }

    div_content.appendChild(div_card_body);
    div.appendChild(div_content);

  }

  return div;
}

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

function createBlockH2(block) {
  var div = document.createElement("div");
  div.classList.add("block_colored");
  div.classList.add("block_h2");
  var th2 = document.createElement("h2");
  th2.textContent = block[1];

  div.appendChild(th2);

  return div;
}

function createBlockH3(block) {
  var div = document.createElement("div");
  div.classList.add("block_black");
  div.classList.add("block_h3");
  var th3 = document.createElement("h3");
  th3.textContent = block[1];

  div.appendChild(th3);

  return div;
}

function createBlockUnit(block) {
  var div_b = document.createElement("div");
  div_b.classList.add("block");

  var div_r = document.createElement("div");
  div_r.classList.add("row");

  for (let i = 1; i < block.length; i++) {
    var url = urls[block[i][0]];
    var img_src = imgs[block[i][1]];
    var name = block[i][2];

    var div_c = document.createElement("div");
    div_c.classList.add("col");

    if (url || img_src || name) {
      var a = document.createElement("a");
      a.classList.add("unit-link");
      a.href = url;

      var div_u = document.createElement("div");
      div_u.classList.add("unit");

      var img = document.createElement("img");
      img.classList.add("unit-img");
      img.src = img_src;

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

function createBlockContent(block) {
  var div = document.createElement("div");
  div.classList.add("block");
  for (let i = 1; i < block.length; i++) {
    var new_element = createElementByName(block[i][0]['type'], block[i]);
    div.appendChild(new_element);
  }
  return div;
}

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

/* AUXILIAR FUNCTIONS */
function checkBlockProperties(block, element) {
  if (block[0]["center"]) {
    element.classList.add("center");
  }

  if (block[0]["height"]) {
    element.style.height = block[0]["height"];
  }
  return element;
}

function updateTextChangingLessThanAndGreaterThanSigns(text) {
  text = text.replaceAll('<', '&lt;');
  text = text.replaceAll('>', '&gt;');
  return text;
}

function countLevelLi(li_text) {
  var level = 1;
  for (var i = 0; i < li_text.length; i++) {
    if (li_text[i] == '-') {
      level++;
    } else { break; }
  }
  return level;
}

/* CONTENT FUNCTIONS */
function createElementH4(block) {
  var th4 = document.createElement("h4");

  th4.textContent = block[1];

  checkBlockProperties(block, th4);
  return th4;
}

function createElementIframe(block) {
  var iframe = document.createElement("iframe");
  iframe.src = block[1];

  checkBlockProperties(block, iframe);

  return iframe;
}

function createElementListGroup(block) {
  var ul = document.createElement("ul");
  ul.classList.add("list-group");
  for (var i = 0; i < block[1].length; i++) {
    var li = document.createElement("li");
    li.classList.add("list-group-item");
    //var new_element = createElementByName(block[1][i][0], block[1][i]);
    li.textContent = updateTextChangingLessThanAndGreaterThanSigns(block[1][i][1]);
    //li.appendChild(new_element);
    ul.appendChild(li);
  }
  return ul;
}

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

function createElementImg(block) {
  var img = document.createElement("img");
  img.classList.add("img-fluid");
  img.classList.add("my-3");
  img.classList.add("center");
  img.src = block[1];
  return img;
}

function createElementBtn(block) {
  var p = document.createElement('p');
  p.innerHTML += ' <a href="' + block[1] + '" class="btn btn-primary">' + block[2] + "</a>";
  checkBlockProperties(block, p);
  return p;
}

function createElementText(block) {
  var p = document.createElement("p");
  p.innerHTML = updateTextChangingLessThanAndGreaterThanSigns(block[1]);
  checkBlockProperties(block, p);
  return p;
}

function createElementBr(block) {
  var br = document.createElement("br");
  return br;
}

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
        p.innerHTML += ' <a href="' + block[j][1] + '" target="_blank">' + updateTextChangingLessThanAndGreaterThanSigns(block[j][2]) + "</a>";
        break;
      case "bold":
        p.innerHTML += " <b>" + updateTextChangingLessThanAndGreaterThanSigns(block[j][1]) + "</b>";
        break;
      default:
        break;
    }
  }
  checkBlockProperties(block, p);
  return p;
}
