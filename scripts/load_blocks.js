function loadBlocks(page, element) {
  var el = document.getElementById(element);
  //AÑADIR SPINNER?

  let blocks = pages[page];

  var blocks_list = [];
  for (let i = 0; i < blocks.length; i++) {
    console.log(blocks[i]);
    blocks_list.push(createBlock(blocks[i]));
  }

  //QUITAR SPINNER?

  for (let i = 0; i < blocks_list.length; i++) {
    el.appendChild(blocks_list[i]);
  }
}

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
    default:
      break;
  }
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
    div_r.appendChild(div_c);
  }

  div_b.appendChild(div_r);

  return div_b;
}

function createBlockContent(block) {
  var div = document.createElement("div");
  div.classList.add("block");
  for (let i = 1; i < block.length; i++) {
    var new_element = createElementByName(block[i][0], block[i]);
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
    default:
      break;
  }
  return new_element;
}

function createElementH4(block) {
  var th4 = document.createElement("h4");
  th4.textContent = block[1];
  return th4;
}

function createElementListGroup(block) {
  var ul = document.createElement("ul");
  ul.classList.add("list-group");
  for (var i = 0; i < block[1].length; i++) {
    var li = document.createElement("li");
    li.classList.add("list-group-item");
    //var new_element = createElementByName(block[1][i][0], block[1][i]);
    li.textContent = block[1][i][1];
    //li.appendChild(new_element);
    ul.appendChild(li);
  }
  return ul;
}
function countLevelLi(li_text) {
    var level = 0;
    for(var i = 0; i < li_text.length; i++) {
        if(li_text[i] == '-') {
            level++;
        } else{ break;}
    }
    return level;
}
function createElementUList(block) {
    debugger;
  var level = 1;
  var ul = document.createElement("span");
  var ul_html = '<ul>';

  for (var i = 0; i < block[1].length; i++) {
    var level_li = countLevelLi(block[1][i][1]);
    var text_li = block[1][i][1].substring(level_li);
    if(level_li > level) {
        level = level_li;
        ul_html += '<ul>';
    } else {
        if(level_li < level) {
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
    debugger;
    var level = 1;
    var ul = document.createElement("span");
    var ul_html = '<ol>';
  
    for (var i = 0; i < block[1].length; i++) {
      var level_li = countLevelLi(block[1][i][1]);
      var text_li = block[1][i][1].substring(level_li);
      if(level_li > level) {
          level = level_li;
          ul_html += '<ol>';
      } else {
          if(level_li < level) {
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
      var new_element = createElementByName(block[i][j][0], block[i][j]);

      col.appendChild(new_element);
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
    return p;
}

function createElementText(block) {
  var p = document.createElement("p");
  p.innerHTML = block[1];
  return p;
}

function createElementTextComplex(block) {
  var p = document.createElement("p");
  p.innerHTML = "";
  for (let j = 1; j < block.length; j++) {
    switch (block[j][0]) {
      case "text":
        p.innerHTML += " " + block[j][1];
        break;
      case "link":
        p.innerHTML += ' <a href="' + block[j][1] + '">' + block[j][2] + "</a>";
        break;
      case "bold":
        p.innerHTML += " <b>" + block[j][1] + "</b>";
        break;
      default:
        break;
    }
  }
  return p;
}
