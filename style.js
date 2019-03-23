(function () {
  const items = Array.from(document.querySelectorAll(".item"));
  const html = document.querySelector("html");
  html.addEventListener("keyup", makeColors);
  html.addEventListener("keyup", popUpAnimation);
  makeColors()

  function popUpAnimation() {
    let poped = document.querySelector(".popup-animation");
    if (poped) {
      poped.style.fontSize = "180px";
      poped.addEventListener("transitionend", function () {
        poped.style.fontSize = "36px";
        poped.classList.remove("popup-animation");
      });
    }
  }

  function makeColors() {

    items.forEach(element => {
      switch (element.innerHTML) {
        case "2":
          element.style.backgroundColor = "#4CAF50";
          break;
        case "4":
          element.style.backgroundColor = "#689F38";
          break;
        case "8":
          element.style.backgroundColor = "#CDDC39";
          break;
        case "16":
          element.style.backgroundColor = "#FFEB3B";
          break;
        case "32":
          element.style.backgroundColor = "#FF9800";
          break;
        case "64":
          element.style.backgroundColor = "#FF5722";
          break;
        case "128":
          element.style.backgroundColor = "#FF5252";
          break;
        case "256":
          element.style.backgroundColor = "#E91E63";
          break;
        case "512":
          element.style.backgroundColor = "#7B1FA2";
          break;
        case "1024":
          element.style.backgroundColor = "#7C4DFF";
          break;
        case "2048":
          element.style.backgroundColor = "#303F9F";
          break;
        case "4096":
          element.style.backgroundColor = "#03A9F4";
          break;
        case "8192":
          element.style.backgroundColor = "#1976D2";
          break;
        default:
          element.style.backgroundColor = "#BDBDBD";
      }
    });
  }

})();
