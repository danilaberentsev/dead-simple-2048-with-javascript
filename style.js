(function () {
  const items = Array.from(document.querySelectorAll(".item"));
  const html = document.querySelector("html");
  const newGameButton = document.querySelector("#new-game-btn");
  const field = document.querySelector(".field");
  newGameButton.addEventListener("click", makeColors);
  html.addEventListener("keyup", makeColors);
  html.addEventListener("keyup", popUpAnimationWrapper);
//  html.addEventListener("keyup", swipeAnimation);
  makeColors();
  const absoluteCoordinates = [[14, 86], [100, 86], [186, 86], [272, 86],
                               [14,172], [100,172], [186,172], [272,172],
                               [14,258], [100,258], [186,258], [272,258],
                               [14,344], [100,344], [185,344], [272,344],
                               [14,430], [100,430], [186,430], [272,430]]
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
          element.style.backgroundColor = "#37474f";
      }
    });
  }

  function popUpAnimationWrapper (e) {
    if (e.code.substr(0, 5) === "Arrow") {
    popUpAnimation();
    }
  }

  function popUpAnimation() {
      const poped = Array.from(document.querySelectorAll(".popup-animation"));
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

  // function swipeAnimation() {
  //   const animatedClasses = [];
  //   const animationCoordinates = [];
  //   items.forEach(element => {
  //     element.classList.forEach(className => {
  //       if (className.substr(0, 11) === "swipe-start") {
  //         animatedClasses.push(className + " " + element.id);
  //       }
  //       if (className.substr(0, 9) === "swipe-end") {
  //         animatedClasses.push(className + " " + element.id);
  //       }
  //     });
  //   });
  //   console.log(animatedClasses);
  //   animatedClasses.forEach((item, key) => {
  //     for (i = key + 1; i < animatedClasses.length; i++) {
  //       if (+item.substr(12,2) === +animatedClasses[i].substr(10,2)) {
  //         animationCoordinates.push([+item.substr(item.length-2, 2), +animatedClasses[i].substr(animatedClasses[i].length-2, 2)]);
  //       }
  //     }
  //   });
  //   animationCoordinates.forEach(coords => {
  //     console.log(coords);
  //     const swipe = document.createElement('div');
  //     swipe.innerHTML = items[coords[0]].innerHTML;
  //     swipe.classList.add('item', 'swipe');
  //     swipe.style.position = 'absolute';
  //     swipe.style.backgroundColor = 'red';
  //     swipe.style.left = absoluteCoordinates[coords[0]][0]+"px";
  //     swipe.style.top = absoluteCoordinates[coords[0]][1]+"px";
  //     field.appendChild(swipe);
  //     html.addEventListener('keyup', actualSwipe);
  //     function actualSwipe() {
  //       items[coords[1]].style.opacity = 0;
  //       swipe.addEventListener('transitionend', function () {
  //         console.log('listtener');
  //         items[coords[1]].style.opacity = 1;
  //         field.removeChild(swipe);
  //       });
  //       swipe.style.left = absoluteCoordinates[coords[1]][0]+"px";
  //       swipe.style.top = absoluteCoordinates[coords[1]][1]+"px";
  //     }
  //   });
  //   items.forEach(item => {
  //     item.className = "item";
  //   });
  // }

})();