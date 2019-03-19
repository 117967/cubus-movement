var grid;

// Table info

var col = 5;
var rows = 5;

// Position cube

var position = {
	x: 0,
	y: 0
};

// Creation of the talbe

function createGrid() {
	grid = [];

	const gridEl = document.createElement("div");
	gridEl.classList.add("grid");

	for (var x = 0; x < rows; x++) {

		var row = document.createElement("div");
		var rowArr = [];
		row.classList.add("row");

		for (var y = 0; y < col; y++) {
			var box = document.createElement("div");
			box.classList.add("box");
			rowArr.push(box);
			row.appendChild(box);
		}
		grid.push(rowArr);
		gridEl.appendChild(row);
	}
	document.body.appendChild(gridEl);
}

// Add and remove class depends position of x en y.

function update() {
	for (var x = 0; x < rows; x++) {

		for (var y = 0; y < col; y++) {
			
			if (x == position.x && y == position.y)
				grid[y][x].classList.add("current");
			else
				grid[y][x].classList.remove("current");
		}
	}
}

createGrid();


// Cases for movement of the box.

window.addEventListener("keydown", function (e) {
	switch (e.keyCode) {
		case 87: // W
			if (position.y > 0) {
				position.y--;
				update();
			}
			break;
		case 83: // S
			if (position.y < 4) {
				position.y++;
				update();
			}
			break;
		case 65: // A
			if (position.x > 0) {
				position.x--;
				update();
			}
			break;
		case 68: //D
			if (position.x < 4) {
				position.x++;
				update();
			}
			break;
	}
});