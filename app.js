var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// outputDiv.innerText= "hi i am shubham"

function clickEventHandler(){
  outputDiv.innerText = "jeijeijijfij  " + txtInput.value;  
};
btnTranslate.addEventListener("click", clickEventHandler)