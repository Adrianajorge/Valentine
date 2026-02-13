document.addEventListener("DOMContentLoaded", function(){

  const envelope = document.getElementById("envelope");
  const openBtn = document.getElementById("openBtn");
  const resetBtn = document.getElementById("resetBtn");
  const letterText = document.getElementById("letterText");

  const message = 
`My love,

I made this website just for you.

You are my safe place, my happiness, and my heart.

Happy Valentine's Day 🖤`;

  function typeMessage(){

    letterText.innerHTML = "";

    let i = 0;

    function typing(){
      if(i < message.length){
        letterText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typing, 30);
      }
    }

    typing();
  }

  openBtn.onclick = function(){
    envelope.classList.add("open");
    typeMessage();
  }

  resetBtn.onclick = function(){
    envelope.classList.remove("open");
    letterText.innerHTML = "";
  }

  envelope.onclick = function(){
    envelope.classList.toggle("open");

    if(envelope.classList.contains("open")){
      typeMessage();
    }else{
      letterText.innerHTML = "";
    }
  }

});
