(function () {
  const items = Array.from(document.querySelectorAll(".item"));
  const html = document.querySelector("html");
  let blankTiles = [];
  let filledTiles = [];

  html.addEventListener("keyup", makeATurn);
  fillRandomTile();

  function makeATurn(e) {
    if (e.code.substr(0, 5) === "Arrow") {
      let itemsPreMove = [];
      items.forEach(element => itemsPreMove.push(element.innerHTML));

      moveTable(e);

      let itemsAfterMove = [];
      items.forEach(element => itemsAfterMove.push(element.innerHTML));

      if (JSON.stringify(itemsPreMove) !== JSON.stringify(itemsAfterMove)) {
        fillRandomTile();
      }
    }
  }


  function moveTable(e) {

    getFilledTiles();
    switch (e.code) {

      case "ArrowRight":
        for (let i = 3; i < 16; i += 4) {
          let currentRow = filledTiles.filter(num => num <= i && num > i - 4).reverse();
          currentRow.forEach((element) => {
            for (let j = element; j < i; j++) {
              if (items[j + 1].innerHTML == '') {
                items[j + 1].innerHTML = items[j].innerHTML;
                items[j].innerHTML = '';
              } else if (items[j + 1].innerHTML == items[j].innerHTML) {
                items[j + 1].innerHTML = items[j + 1].innerHTML * 2 + " ";
                items[j].innerHTML = '';
                break;
              }
            }
          });
        }
        break;

      case "ArrowLeft":
        for (let i = 3; i < 16; i += 4) {
          let currentRow = filledTiles.filter(num => num <= i && num > i - 4);

          currentRow.forEach((element) => {
            for (let j = element; j !== i - 3; j--) {
              if (items[j - 1].innerHTML == '') {
                items[j - 1].innerHTML = items[j].innerHTML;
                items[j].innerHTML = '';
              } else if (items[j - 1].innerHTML == items[j].innerHTML) {
                items[j - 1].innerHTML = items[j - 1].innerHTML * 2 + " ";
                items[j].innerHTML = '';
                break;
              }
            }
          });
        }
        break;

      case "ArrowUp":
        for (let i = 0; i < 4; i++) {
          let currentColumn = filledTiles.filter(num => num % 4 == i);

          currentColumn.forEach((element) => {
            for (let j = element; j !== i; j -= 4) {
              if (items[j - 4].innerHTML == '') {
                items[j - 4].innerHTML = items[j].innerHTML;
                items[j].innerHTML = '';
              } else if (items[j - 4].innerHTML == items[j].innerHTML) {
                items[j - 4].innerHTML = items[j - 4].innerHTML * 2 + " ";
                items[j].innerHTML = '';
                break;
              }
            }
          });
        }
        break;

      case "ArrowDown":
        for (let i = 0; i < 4; i++) {
          let currentColumn = filledTiles.filter(num => num % 4 == i).reverse();

          currentColumn.forEach((element) => {
            for (let j = element; j < 12 + i; j += 4) {
              if (items[j + 4].innerHTML == '') {
                items[j + 4].innerHTML = items[j].innerHTML;
                items[j].innerHTML = '';
              } else if (items[j + 4].innerHTML == items[j].innerHTML) {
                items[j + 4].innerHTML = items[j + 4].innerHTML * 2 + " ";
                items[j].innerHTML = '';
                break;
              }
            }
          });
        }
        break;
    }

    removeSpaces();
  }

  function fillRandomTile(e) {
    getBlankTiles();
    let randomBlankTileNumber = getRandomInt(blankTiles.length);
    let itemNumber = blankTiles[randomBlankTileNumber];
    items[itemNumber].innerHTML = "2";
    items[itemNumber].classList.add("popup-animation");
  }




  // Utility stuff

  function getBlankTiles() {
    blankTiles = [];
    items.forEach((element, key) => {
      element.innerHTML === '' && blankTiles.push(key);
    });
  }

  function getFilledTiles() {
    filledTiles = [];
    items.forEach((element, key) => {
      element.innerHTML !== '' && filledTiles.push(key);
    });
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function removeSpaces() {
    items.forEach(element => {
      element.innerHTML = element.innerHTML.split(" ").join("");
    });
  }
}());