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

function moveTile(clickedIndex) {
    const emptyIndex = tiles.indexOf(null);

    const clickedRow = Math.floor(clickedIndex / 3);
    const clickedColumn = clickedIndex % 3;

    const emptyRow = Math.floor(emptyIndex / 3);
    const emptyColumn = emptyIndex % 3;

    const isNeighbor =
        (clickedRow === emptyRow && Math.abs(clickedColumn - emptyColumn) === 1) ||
        (clickedColumn === emptyColumn && Math.abs(clickedRow - emptyRow) === 1);

    if (isNeighbor) {
        const temp = tiles[clickedIndex];

        tiles[clickedIndex] = tiles[emptyIndex];
        tiles[emptyIndex] = temp;

        drawBoard();
        isSolved();
    }
}

drawBoard();
