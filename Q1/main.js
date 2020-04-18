// JavaScript Document

let main = document.querySelectorAll('main');
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body');
let input = document.querySelector('input[type="text"]');

submitButton.addEventListener('click', function(e) {
  let personName = input.value;
  let para = document.createElement('p');
  para.innerHTML = '<h3>Hey there ' + personName + '! Thanks for stopping by!</h3>';
  main.appendChild(para);
  body.setAttribute('class', 'meow');
  console.log('=^..^=');
});

//1. documant > document
//2. appendChild(paragraph) > para
//3. clickityclick > click
//4. let input = document.querySelector('input[type="text"]');
//5. 
