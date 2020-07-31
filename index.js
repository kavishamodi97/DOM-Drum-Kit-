var drumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButton; i++) {

  // on click event listner
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML; //refer cuurent value

    //click on specific charachters as per switch cases and play audio accordingly:-
    playAudio(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//key pressed event
document.addEventListener("keypress", function(event) {
  console.log(event);

  playAudio(event.key);

  buttonAnimation(event.key);
});


//play audio as click event and key pressed event
function playAudio(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case 'a':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case 's':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case 'd':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case 'j':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case 'k':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case 'l':
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
      break;

  }
}

//animation gone after 1 second duration
function buttonAnimation(cuurentKey)
{
  var btnAnimate= document.querySelector("." +cuurentKey);

  btnAnimate.classList.add("pressed");

   setTimeout(function() {
     btnAnimate.classList.remove("pressed");
   }, 1000);

}
