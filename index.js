(function () {
  const fields = Array.from(document.querySelectorAll(".field"));
  const html = document.querySelector("html");
  const score = document.querySelector("#score");
  const newGameButton = document.querySelector("#new-game-btn");
  const addTile = document.querySelector("#add-tile");
  addTile.addEventListener('click', function() {
    fillRandomField();
  });
  const absoluteCoordinates = [[14, 86], [100, 86], [186, 86], [272, 86],
                               [14,172], [100,172], [186,172], [272,172],
                               [14,258], [100,258], [186,258], [272,258],
                               [14,344], [100,344], [186,344], [272,344]];

  let blankFeilds = [];
  let filledFields = [];
  
  newGameButton.addEventListener("click", startNewGame);
  html.addEventListener("keyup", makeATurn);
  fillRandomField();

  function makeATurn(e) {
    if (e.code.substr(0, 5) === "Arrow") {
      let fieldsPreMove = [];
      fields.forEach(element => fieldsPreMove.push(element.innerHTML));

      moveTable(e);

      let fieldsAfterMove = [];
      fields.forEach(element => fieldsAfterMove.push(element.innerHTML));

      if (JSON.stringify(fieldsPreMove) !== JSON.stringify(fieldsAfterMove)) {
        fillRandomField();
      }
    }
  }

  function moveTable(event) {
    switch (event.code) {

      case "ArrowRight":
        var fieldsReversed = fields.slice().reverse();
        for (let i = 0; i < fieldsReversed.length; i++) {
          let endpoint = i;

          if (fieldsReversed[i].firstChild) {
            let movingTile = fieldsReversed[i].firstChild;
            let coords = parseInt(movingTile.style.left);

            while (coords != 272) {
              if (fieldsReversed[endpoint - 1].firstChild) {
                if (movingTile.innerHTML === fieldsReversed[endpoint - 1].firstChild.innerHTML) {
                  fieldsReversed[endpoint - 1].firstChild.innerHTML *= 2;
                  setTimeout(() => movingTile.style.opacity = 0, 0);
                  movingTile.addEventListener('transitionend', () => {
                    movingTile.remove();
                  });
                  coords +=86;
                  endpoint--;
                }
                break;
              }
              coords += 86;
              endpoint--;
            }
            
            fieldsReversed[endpoint].appendChild(movingTile);
            setTimeout(() => {
              movingTile.style.left = `${coords}px`;
              }, 0);
          }
        }
      break;

      case "ArrowLeft":
        for (let i = 0; i < fields.length; i++) {
          let endpoint = i;

          if (fields[endpoint].firstChild) {
            let movingTile = fields[i].firstChild;
            let coords = parseInt(movingTile.style.left);

            while (coords != 14) {
              if (fields[endpoint - 1].firstChild) {
                if (movingTile.innerHTML === fields[endpoint - 1].firstChild.innerHTML) {
                  fields[endpoint - 1].firstChild.innerHTML *= 2;
                  setTimeout(() => movingTile.style.opacity = 0, 0);
                  movingTile.addEventListener('transitionend', () => {
                    movingTile.remove();
                  });
                  coords -=86;
                  endpoint--;
                }
                break;
              }
              coords -= 86;
              endpoint--;
            }
            
            fields[endpoint].appendChild(movingTile);
            setTimeout(() => {
              movingTile.style.left = `${coords}px`;
              }, 0);
          }
        }
      break;

      case "ArrowDown":
        var fieldsReversed = fields.slice().reverse();
        for (let i = 0; i < fieldsReversed.length; i++) {
          let endpoint = i;

          if (fieldsReversed[i].firstChild) {
            let movingTile = fieldsReversed[i].firstChild;
            let coords = parseInt(movingTile.style.top);

            while (coords != 344) {
              if (fieldsReversed[endpoint - 4].firstChild) {
                if (movingTile.innerHTML === fieldsReversed[endpoint - 4].firstChild.innerHTML) {
                  fieldsReversed[endpoint - 4].firstChild.innerHTML *= 2;
                  setTimeout(() => movingTile.style.opacity = 0, 0);
                  movingTile.addEventListener('transitionend', () => {
                    movingTile.remove();
                  });
                  coords += 86;
                  endpoint -= 4; 
                }
                break;
              }
              coords += 86;
              endpoint -= 4;
            }
            
            fieldsReversed[endpoint].appendChild(movingTile);
            setTimeout(() => {
              movingTile.style.top = `${coords}px`;
              }, 0);
          }
        }
      break;

      case "ArrowUp":
        for (let i = 0; i < fields.length; i++) {
          let endpoint = i;

          if (fields[i].firstChild) {
            let movingTile = fields[i].firstChild;
            let coords = parseInt(movingTile.style.top);

            while (coords != 86) {
              if (fields[endpoint - 4].firstChild) {
                if (movingTile.innerHTML === fields[endpoint - 4].firstChild.innerHTML) {
                  fields[endpoint - 4].firstChild.innerHTML *= 2;
                  setTimeout(() => movingTile.style.opacity = 0, 0);
                  movingTile.addEventListener('transitionend', () => {
                    movingTile.remove();
                  });
                  coords -= 86;
                  endpoint -= 4; 
                }
                break;
              }
              coords -= 86;
              endpoint -= 4;
            }
            
            fields[endpoint].appendChild(movingTile);
            setTimeout(() => {
              movingTile.style.top = `${coords}px`;
              }, 0);
          }
        }
      break;
    }
  }


  function fillRandomField() {
    getBlankFields();
    const randomBlankField = blankFields[getRandomInt(blankFields.length)];
    if (blankFields.length) {
      const newTile = document.createElement('div');
      newTile.style.fontSize = "90px";
      newTile.classList.add("tile", "popup-animation");
      newTile.innerHTML = getRandomInt(15) > 1 ? "2" : "4";
      newTile.style.left = absoluteCoordinates[randomBlankField.id][0] + "px";
      newTile.style.top = absoluteCoordinates[randomBlankField.id][1] + "px";
      randomBlankField.appendChild(newTile);
    } else {
      console.log('you lose..');
    }
  }


  function startNewGame() {
    score.innerHTML = 0;
    fields.forEach(element => {
      element.innerHTML = "";
    });
    fillRandomField();
  }


  // Utility stuff

  function getBlankFields() {
    blankFields = [];
    fields.forEach(field => {
      field.innerHTML === '' && blankFields.push(field);
    });
  }

  function getFilledFields() {
    filledFields = [];
    fields.forEach((field, key) => {
      field.innerHTML !== '' && filledFields.push(key);
    });
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

}());