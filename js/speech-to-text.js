document.querySelector('.btn-speech-to-text').addEventListener('click', runSpeechRecognition);

function runSpeechRecognition() {
  const output = document.getElementById("output");
  const action = document.getElementById("action");

  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  
  // This runs when the speech recognition service starts
  recognition.onstart = function() {
    action.innerHTML = "<small>listening, please speak...</small>";
  };
      
  recognition.onspeechend = function() {
    action.innerHTML = "<small>stopped listening.</small>";
    recognition.stop();
  }
    
  // This runs when the speech recognition service returns result
  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    const confidence = event.results[0][0].confidence;
    output.innerHTML = `<p class="para">Text: ${transcript}</p> 
    <p class="para">Confidence: ${(confidence*100).toFixed(2)}%</p>`;
    output.classList.remove("hide");
  };

  // start recognition
  recognition.start();
}