var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World!!!";

var myImage = document.querySelector('img');

myImage.onclick = function(){
  var attri = myImage.getAttribute('src');

  if(attri === 'firefox-icon.png'){
    myImage.setAttribute('src','firefox_icon2.jpg');
  }else {
    myImage.setAttribute('src','firefox-icon.png');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function(){
  setUserName();
}
function setUserName(){
  var myName = prompt('Enter your name!');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello!' +' ' + myName;
}

if(!localStorage.getItem('name'))
{
  setUserName();
}else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello!' +' ' + storedName;
}

var machineButton = document.getElementById('myButton');
var machinePara = document.getElementById('machine');

machineButton.addEventListener('click',updateMachine);

//Update machine status function
function updateMachine(){
  if(machineButton.textContent === 'Start the Machine'){
    machineButton.textContent = 'Stop the Machine';
    machinePara.textContent = 'Machine has started';
  }else {
    machineButton.textContent = 'Start the Machine';
    machinePara.textContent = 'Machine has Stopped';
  }
}

//Index2.html Script goes here
/*
var list = document.querySelector('.output ul');
list.innerHTML = ' ';

var greetings  = ['Happy Birthday!',
                'Merry Christmas my love!',
                'A happy Christmas to all the family!',
                'you\'re all i want for my Christmas!',
                'Get well soon'];
for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  if(greetings[i].index('Christmas') !== -1){
    var result = input;
    var listitem = document.createElement('li');
    listitem.textContent = result;
    list.appendChild(listitem);
  }
}*/
