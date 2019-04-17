//document.querySelector('ul').lastElementChild.innerHTML = "Saif";

var button = document.querySelector('button');
var input = document.querySelector('#userinput');
var ul = document.querySelector('ul');

button.addEventListener('click', function(){
  if(input.value) {
var li = document.createElement('li');
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
} else {
  alert("Please Enter The Value");
}

});
