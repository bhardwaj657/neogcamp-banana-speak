var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//  var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
  return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong with our server please try again later")   
}

// outputDiv.innerText= "hi i am shubham"

function clickHandler(){
  // outputDiv.innerText = "jeijeijijfij  " + txtInput.value;  
  var inputText = txtInput.value; //taking input
  
  //calling server for processing
  fetch(getTranslationURL(inputText))
  .then(response => response.json())
  .then(json =>  {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
    
   })
  .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)