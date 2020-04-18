//JavaScript Document

let main = document.querySelector("main");
let button = document.querySelector("button");
let para = document.querySelector("p");

button.addEventListener("click", getJSON());

function getJSON(){
  let catStuff = JSON.parse(cats);

  para.textContent = "Name: " + catStuff[0].name + ", species: " catStuff[0].species + ", favourite foods: " + catStuff[0].favFoods + ", age: " + catStuff[0].age;
}
