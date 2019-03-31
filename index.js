(function () {
  const fields              = Array.from(document.querySelectorAll(".field"));
  const html                = document.querySelector("html");
  const score               = document.querySelector("#score");
  const newGameButton       = document.querySelector("#new-game-btn");
  const trashcan            = document.querySelector("#trashcan");
  const absoluteCoordinates = [[14, 86], [100, 86], [186, 86], [272, 86],
                               [14,172], [100,172], [186,172], [272,172],
                               [14,258], [100,258], [186,258], [272,258],
                               [14,344], [100,344], [186,344], [272,344]];
  newGameButton.addEventListener("click", startNewGame);
  html.addEventListener("keyup", makeATurn);
  
  fillRandomField();

  function makeATurn(e) {
    if (e.code.substr(0, 5) === "Arrow") {
      let fieldsPreMove = [];
      fields.forEach(element => fieldsPreMove.push(element.innerHTML));

      moveTableAndUpdateScore(e);

      let fieldsAfterMove = [];
      fields.forEach(element => fieldsAfterMove.push(element.innerHTML));

      if (JSON.stringify(fieldsPreMove) !== JSON.stringify(fieldsAfterMove)) {
        fillRandomField();
      }
    }
  }

  function moveTableAndUpdateScore(event) {

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
                  score.innerHTML = (+score.innerHTML) + (+fieldsReversed[endpoint - 1].firstChild.innerHTML);
                  movingTile.addEventListener('transitionend', () => {
                    trashcan.innerHTML = '';
                  });
                  trashcan.appendChild(movingTile);
                  movingTile.offsetWidth;
                  movingTile.style.opacity = 0;
                  coords +=86;
                  endpoint--;
                }
                break;
              }
              coords += 86;
              endpoint--;
            }

            if (movingTile.style.opacity !== "0") {
              fieldsReversed[endpoint].appendChild(movingTile);
              movingTile.offsetWidth;
            }
            movingTile.style.left = `${coords}px`;
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
                  score.innerHTML = (+score.innerHTML) + (+fieldsReversed[endpoint - 4].firstChild.innerHTML);
                  movingTile.addEventListener('transitionend', () => {
                    trashcan.innerHTML = '';
                  });
                  trashcan.appendChild(movingTile);
                  movingTile.offsetWidth;
                  movingTile.style.opacity = 0;
                  coords += 86;
                  endpoint -= 4; 
                }
                break;
              }
              coords += 86;
              endpoint -= 4;
            }
            
            if (movingTile.style.opacity !== "0") {
              fieldsReversed[endpoint].appendChild(movingTile);
              movingTile.offsetWidth;
            }
            movingTile.style.top = `${coords}px`;
          }
        }
      break;

      case "ArrowLeft":
        for (let i = 0; i < fields.length; i++) {
          let endpoint = i;

          if (fields[i].firstChild) {
            let movingTile = fields[i].firstChild;
            let coords = parseInt(movingTile.style.left);

            while (coords != 14) {
              if (fields[endpoint - 1].firstChild) {
                if (movingTile.innerHTML === fields[endpoint - 1].firstChild.innerHTML) {
                  fields[endpoint - 1].firstChild.innerHTML *= 2;
                  score.innerHTML = (+score.innerHTML) + (+fields[endpoint - 1].firstChild.innerHTML);
                  movingTile.addEventListener('transitionend', () => {
                    trashcan.innerHTML = '';
                  });
                  trashcan.appendChild(movingTile);
                  movingTile.offsetWidth;
                  movingTile.style.opacity = 0;
                  coords -=86;
                  endpoint--;
                }
                break;
              }
              coords -= 86;
              endpoint--;
            }
            
            if (movingTile.style.opacity !== "0") {
              fields[endpoint].appendChild(movingTile);
              movingTile.offsetWidth;
            }
            movingTile.style.left = `${coords}px`;
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
                  score.innerHTML = (+score.innerHTML) + (+fields[endpoint - 4].firstChild.innerHTML);
                  movingTile.addEventListener('transitionend', () => {
                    trashcan.innerHTML = '';
                  });
                  trashcan.appendChild(movingTile);
                  movingTile.offsetWidth;
                  movingTile.style.opacity = 0;
                  coords -= 86;
                  endpoint -= 4; 
                }
                break;
              }
              coords -= 86;
              endpoint -= 4;
            }
            
            if (movingTile.style.opacity !== "0") {
              fields[endpoint].appendChild(movingTile);
              movingTile.offsetWidth;
            }
            movingTile.style.top = `${coords}px`;
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
      const trash = document.createElement('div');
      newTile.innerHTML = getRandomInt(15) > 1 ? "2" : "4";
      trash.classList.add('trash');
      trash.innerHTML = newTile.innerHTML;
      trash.style.left = `${absoluteCoordinates[randomBlankField.id][0]}px`;
      trash.style.top = `${absoluteCoordinates[randomBlankField.id][1]}px`;
      trashcan.appendChild(trash);
      trash.addEventListener('transitionend', () => trashcan.innerHTML = '');
      randomBlankField.offsetWidth;
      trash.style.backgroundColor = '#4CAF50';
      newTile.classList.add("tile", "poped-up");
      newTile.style.left = `${absoluteCoordinates[randomBlankField.id][0]}px`;
      newTile.style.top = `${absoluteCoordinates[randomBlankField.id][1]}px`;
      randomBlankField.style.opacity = 0;
      randomBlankField.appendChild(newTile);
      randomBlankField.style.opacity = 1;
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

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

}());