(function(){
  //Unordered task list
var list = document.querySelector('.list #task-list');
//The form
var form = document.querySelector("form");
//Input tag
var item = document.querySelector(".task");
//button
var button = document.querySelector("button");

form.addEventListener('submit', function(e){
  e.preventDefault();
  list.innerHTML += '<li>' + item.value + '</li>';
  store();
  item.value = "";
}, false)

list.addEventListener('click', function(e){
  var t = e.target;
  if(t.classList.contains('checked')){
    t.parentNode.removeChild(t);
  }else {
    t.classList.add('checked');
  }
  store();
}, false)

function store() {
  window.localStorage.myitems = list.innerHTML;
}

function getValues(){
  var storedValues = window.localStorage.myitems;
  if(!storedValues) {
    alert("Make a to-do list");
    list.innerHTML = "<li>Click on the task item to mark done</li>"; 
  } else {
    list.innerHTML = storedValues;
  }
}
getValues();
})();
