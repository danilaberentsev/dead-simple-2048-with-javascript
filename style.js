(function () {
  const items = Array.from(document.querySelectorAll(".item"));
  const html = document.querySelector("html");
  const newGameButton = document.querySelector("#new-game-btn");
  newGameButton.addEventListener("click", makeColors);
  html.addEventListener("keyup", makeColors);
  html.addEventListener("keyup", popUpAnimationWrapper);
  makeColors();
  //popUpAnimation();
  

  function makeColors() {

    items.forEach(element => {
      switch (element.innerHTML) {
        case "2":
          element.style.backgroundColor = "#4CAF50";
          element.style.color = "white"
          element.style.fontSize = "30px"
          break;
        case "4":
          element.style.backgroundColor = "#689F38";
          element.style.color = "white"
          element.style.fontSize = "30px"
          break;
        case "8":
          element.style.backgroundColor = "#CDDC39";
          element.style.color = "#5e35b1"
          element.style.fontSize = "30px"
          break;
        case "16":
          element.style.backgroundColor = "#FFEB3B";
          element.style.color = "#5e35b1"
          element.style.fontSize = "30px"
          break;
        case "32":
          element.style.backgroundColor = "#FF9800";
          element.style.color = "white"
          element.style.fontSize = "30px"
          break;
        case "64":
          element.style.backgroundColor = "#FF5722";
          element.style.color = "white"
          element.style.fontSize = "30px"
          break;
        case "128":
          element.style.backgroundColor = "#FF5252";
          element.style.color = "white"
          element.style.fontSize = "30px"
          break;
        case "256":
          element.style.backgroundColor = "#E91E63";
          element.style.color = "white"
          element.style.fontSize = "30px"
          break;
        case "512":
          element.style.backgroundColor = "#7B1FA2";
          element.style.color = "white"
          element.style.fontSize = "30px"
          break;
        case "1024":
          element.style.backgroundColor = "#7C4DFF";
          element.style.color = "white"
          element.style.fontSize = "30px"
          break;
        case "2048":
          element.style.backgroundColor = "#303F9F";
          element.style.color = "white"
          element.style.fontSize = "30px"
          break;
        case "4096":
          element.style.backgroundColor = "#1976D2";
          element.style.color = "white"
          element.style.fontSize = "30px"
          break;
        case "8192":
          element.style.backgroundColor = "#03A9F4";
          element.style.color = "white"
          element.style.fontSize = "30px"
          break;
        case "16384":
          element.style.backgroundColor = "#00BCD4";
          element.style.color = "white"
          element.style.fontSize = "25px"
          break;
        case "32768":
          element.style.backgroundColor = "#009688";
          element.style.color = "white"
          element.style.fontSize = "25px"
          break;
        case "65536":
          element.style.backgroundColor = "#7C4DFF";
          element.style.color = "white"
          element.style.fontSize = "25px"
          break;
        case "131072":
          element.style.backgroundColor = "#E040FB";
          element.style.color = "white"
          element.style.fontSize = "25px"
          break;
        default:
          element.style.backgroundColor = "#263238";
      }
    });
  }

  function popUpAnimationWrapper (e) {
    if (e.code.substr(0, 5) === "Arrow") {
    popUpAnimation();
    }
  }

  function popUpAnimation() {
      let poped = Array.from(document.querySelectorAll(".popup-animation"));
      if (poped) {
        poped.forEach(element => {
          element.addEventListener("transitionend", function () {
            element.style.fontSize = "36px";
            element.classList.remove("popup-animation");
          });
          element.style.fontSize = "90px";
        });
      }
  }

})();
