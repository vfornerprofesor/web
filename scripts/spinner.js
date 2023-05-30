function startSpinner(element) {
    var div = document.createElement('div');
    div.id = 'spinner';
    div.classList.add('spinner-container');
    var div2 = document.createElement('div');
    div2.classList.add('spinner');
    div.appendChild(div2);
  
    element.appendChild(div);
  }
  
  function destroySpinner() {
    var spinner = document.getElementById('spinner');
    spinner.remove();
  }