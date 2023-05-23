function loadBlocks(page, element) {
    let blocks = pages[page];

    for (let i = 0; i < blocks.length; i++) {
        console.log(blocks[i]);
        createBlock(blocks[i], element);
    }
}

function createBlock(block, element) {
    switch (block[0]) {
        case 'block_h1':
            createBlockH1(block, element);
            break;
        case 'block_h2':
            createBlockH2(block, element);
            break;
        case 'block_h3':
            createBlockH3(block, element);
            break;
        case 'block_h4':
            //createBlockH1(block, element);
            break;
        case 'block_unit':
            createBlockUnit(block, element);
            break;
        case 'block_content':
            createBlockContent(block, element);
            break;
        default:
            break;
    }
}

function createBlockH1(block, element) {
    var div = document.createElement('div');
    div.classList.add('jumbotron');
    var th1 = document.createElement('h1');
    th1.classList.add('display-4');
    th1.textContent = block[1];

    div.appendChild(th1);

    var el = document.getElementById(element);
    el.appendChild(div);
}

function createBlockH2(block, element) {
    var div = document.createElement('div');
    div.classList.add('block_colored');
    var th2 = document.createElement('h2');
    th2.textContent = block[1];

    div.appendChild(th2);

    var el = document.getElementById(element);
    el.appendChild(div);
}

function createBlockH3(block, element) {
    var div = document.createElement('div');
    div.classList.add('block_black');
    var th3 = document.createElement('h3');
    th3.textContent = block[1];

    div.appendChild(th3);

    var el = document.getElementById(element);
    el.appendChild(div);
}

function createBlockUnit(block, element) {

    var div_b = document.createElement('div');
    div_b.classList.add('block');

    var div_r = document.createElement('div');
    div_r.classList.add('row');

    for (let i = 1; i < block.length; i++) {
        var url = urls[block[i][0]];
        var img_src = imgs[block[i][1]];
        var name = block[i][2];

        var div_c = document.createElement('div');
        div_c.classList.add('col');

        var a = document.createElement('a');
        a.classList.add('unit-link');
        a.href = url;

        var div_u = document.createElement('div');
        div_u.classList.add('unit');

        var img = document.createElement('img');
        img.classList.add('unit-img');
        img.src = img_src;

        var th3 = document.createElement('h3');
        th3.classList.add('btn');
        th3.classList.add('btn-primary');
        th3.classList.add('unit-title');
        th3.textContent = name;


        div_u.appendChild(img);
        div_u.appendChild(th3);
        a.appendChild(div_u);
        div_c.appendChild(a);
        div_r.appendChild(div_c);
    }

    div_b.appendChild(div_r);

    var el = document.getElementById(element);
    el.appendChild(div_b);
}

function createBlockContent(block, element) {
    var el = document.getElementById(element);
    var div = document.createElement('div');
    div.classList.add('block');
    for (let i = 1; i < block.length; i++) {
        var new_element = createElementByName(block[i][0], block[i]);
        div.appendChild(new_element);
    }
    el.appendChild(div);
}

function createElementByName(name, block) {
    var new_element; 
    switch (name) {
        case 'text_complex':
            new_element = createElementTextComplex(block);
            break;
        case 'text':
            new_element = createElementText(block);
            break;
        case 'img_center':
            new_element = createElementImg(block);
            break;
        case 'cols':
            new_element = createElementCols(block);
            break;
        case 'list_group':
            new_element = createElementListGroup(block);
            break;
        default:
            break;
    }
    return new_element;
}

function createElementListGroup(block) {
    var ul = document.createElement('ul');
    ul.classList.add('list-group');
    for (var i = 0; i < block[1].length; i++) {
        var li = document.createElement('li');
        li.classList.add('list-group-item');
        //var new_element = createElementByName(block[1][i][0], block[1][i]);
        li.textContent = block[1][i][1];
        //li.appendChild(new_element);
        ul.appendChild(li);
    }
    return ul;
}


function createElementCols(block) {
    debugger;
    var row = document.createElement('div');
    row.classList.add('row');

    for (var i = 1; i < block.length; i++) {
        var col = document.createElement('div');
        col.classList.add('col');

        for (var j = 0; j < block[i].length; j++) {
            var new_element = createElementByName(block[i][j][0], block[i][j]);
            
            col.appendChild(new_element);
        }
        row.appendChild(col);
    }
    return row;
}

function createElementImg(block) {
    var img = document.createElement('img');
    img.classList.add('img-fluid');
    img.classList.add('my-3');
    img.classList.add('center');
    img.src = block[1];
    return img;
}

function createElementText(block) {
    var p = document.createElement('p');
    p.innerHTML = block[1];
    return p;
}

function createElementTextComplex(block) {
    var p = document.createElement('p');
    p.innerHTML = '';
    for (let j = 1; j < block.length; j++) {
        switch (block[j][0]) {
            case 'text':
                p.innerHTML += ' ' + block[j][1];
                break;
            case 'link':
                p.innerHTML += ' <a href="' + block[j][1] + '">' + block[j][2] + '</a>';
            default:
                break;
        }
    }
    return p;
}