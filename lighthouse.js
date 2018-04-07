// Challenge 1
function gridSize(){
  height = GRID.length;
  width = GRID[0].length;
  return (width.toString() + " x " + height.toString());
}

// Challenge 2
function totalCells(){
  height = GRID.length;
  width = GRID[0].length;
  return height * width;
}

// Challenge 3
function lightCell(coordinate){
  letter = getLetter(coordinate);
  number = getNumber(coordinate);
  x = getXIndex(letter);
  y = getYIndex(number);

  return (GRID[y])[x];
}

// Challenge 4
function isRock(coordinate){
  letter = getLetter(coordinate);
  number = getNumber(coordinate);
  x = getXIndex(letter);
  y = getYIndex(number);

  return (GRID[y][x] == '^')
}

// Challenge 5
function isCurrent(coordinate){
  letter = getLetter(coordinate);
  number = getNumber(coordinate);
  x = getXIndex(letter)
  y = getYIndex(number)

  return (GRID[y][x] == '~')
}

// Challenge 6
function lightRow(number){
  y = getYIndex(number);
  return GRID[y];
}

// Challenge 7
function lightColumn(letter){
  x = getXIndex(letter.toLowerCase());
  col = [];
  GRID.forEach(function(element){
    col.push(element[x]);
  });
  return col;
}

// Helper functions (Challenge 3)
function getLetter(coordinate){
  return coordinate[0].toLowerCase();
}

function getNumber(coordinate){
  return coordinate[1];
}

function getXIndex(letter){
  return letter.charCodeAt(0) - 97;
}

function getYIndex(number){
  return number-1;
}
