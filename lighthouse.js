function gridSize(){
  height = GRID.length;
  width = GRID[0].length;
  return (width.toString() + " x " + height.toString());
}

function totalCells(){
  height = GRID.length;
  width = GRID[0].length;
  return height * width;
}

function lightCell(coordinate){
  letter = getLetter(coordinate);
  number = getNumber(coordinate);
  x = getXIndex(letter);
  y = getYIndex(number);

  return (GRID[y])[x];
}

function isRock(coordinate){
  letter = getLetter(coordinate);
  number = getNumber(coordinate);
  x = getXIndex(letter);
  y = getYIndex(number);

  return (GRID[y][x] == '^')
}

function isCurrent(coordinate){
  letter = getLetter(coordinate);
  number = getNumber(coordinate);
  x = getXIndex(letter)
  y = getYIndex(number)

  return (GRID[y][x] == '~')
}

function getLetter(coordinate){
  return coordinate[0].toLowerCase();
}

function getNumber(coordinate){
  return coordinate[1];
}

function getXIndex(letter){
  return letter.charCodeAt(0) - 97;
}

function getYIndex(){
  return number-1;
}
