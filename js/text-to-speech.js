document.querySelector('.btn-text-to-speech').addEventListener('click', textToAudio);

function textToAudio() {
  let msg = document.getElementById("text-to-speech").value;       
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";  
  // speech.lang = "ru-RU";  
  speech.text = msg;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

