let input = document.getElementById("item-input");
let button = document.getElementById("item-button");
let ul = document.getElementById("items");
let items = document.getElementsByTagName("li");
let itemButtons = document.getElementsByClassName("remove");

function criarElemento(){
  let li = document.createElement("li");
  let xButton = document.createElement("button");
  
  xButton.innerHTML = "X";
  xButton.className = "remove";
  li.appendChild(xButton);
  /*converte a 1a letra do item para upercase */ 
  input.value = input.value[0].toUpperCase() + input.value.slice(1);
  let text = document.createTextNode(input.value);
  li.appendChild(text);
  ul.appendChild(li);
  buttonEvents();
  
  input.value ="";
}

function deleteItem(){
  /*this é o elemento selecionado no momento da chamada da função*/
  this.parentElement.remove();
}

function buttonEvents(){
  for (let i=0; i < items.length; i++){
    itemButtons[i].addEventListener("click", deleteItem);
  }
}

button.addEventListener("click", criarElemento);
buttonEvents();
