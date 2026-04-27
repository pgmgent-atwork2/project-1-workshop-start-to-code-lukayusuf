const grid = document.getElementById("puzzle-grid");

let tiles = [0, 1, 2, 3, 4, 5, 6, 7, null];

function drawBoard() {
  grid.innerHTML = "";

  tiles.forEach((tileValue, index) => {
    const div = document.createElement("div");
    div.classList.add("tile");

    if (tileValue === null) {
      div.classList.add("emptyTile");
    } else {
      const x = (tileValue % 3) * -100;
      const y = Math.floor(tileValue / 3) * -100;
      div.style.backgroundPosition = `${x}px ${y}px`;
      div.onclick = () => moveTile(index);
    }
    grid.appendChild(div);
  });
}

drawBoard();
