function loadBlocks(page, element) {
    let blocks = pages[page];

    for(let i = 0; i < blocks.length; i++) {
        console.log(blocks[i]);
        createBlock(blocks[i], element);
    }
}

function createBlock(block, element) {
    if(block[0] == 'block_h1') {
        createBlockH1(block, element);
    } else {
        if(block[0] == 'block_h2') {
            createBlockH2(block, element);
        } else {
            if(block[0] == 'block_h3') {
                createBlockH3(block, element);
            } else {
                if(block[0] == 'block_unit') {
                    createBlockUnit(block, element);
                }
            }
        }
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

    for(let i = 1; i < block.length; i++) {
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
