for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    makeSound(this.textContent);
    animateButton(this.textContent);
  });

}


// Why does this work only after using the click event listener
// document.querySelectorAll("button")[0].addEventListener("keydown", function (event) { makeSound(event.key); });

document.addEventListener("keydown", function (event) { makeSound(event.key); animateButton(event.key); });

function animateButton(key) {

  document.querySelector(`.${key}`).classList.add("pressed");

  setTimeout(() => {
    document.querySelector(`.${key}`).classList.remove("pressed");

  }, 100);

}



function makeSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      let tom = new Audio("./sounds/tom-1.mp3");
      tom.play();
      break;

    case "j":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      break;
  }
}
