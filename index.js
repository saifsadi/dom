//document.querySelector('ul').lastElementChild.innerHTML = "Saif";

var button = document.querySelector('button');
var input = document.querySelector('#userinput');
var ul = document.querySelector('ul');

function inputLength() {
  return input.value.length;
}

function createList() {
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
}

button.addEventListener('click', function(){
  if(inputLength() > 0) {
  createList();
}

});


input.addEventListener('keypress', function(event){
  if(inputLength() > 0 && event.which === 13) {
  createList();
}

});
