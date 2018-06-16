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
