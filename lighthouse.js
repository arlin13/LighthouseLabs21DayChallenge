const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "", "", "~", "", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

firstColumn = 65; // 'A'
lastColumn = firstColumn + GRID[0].length - 1;

height = GRID.length;
width = GRID[0].length;
  
// Challenge 1
function gridSize(){
  return (width.toString() + " x " + height.toString());
}

// Challenge 2
function totalCells(){
  return height * width;
}

// Challenge 3
function lightCellFromCoordinate(coordinate){
  letter = getLetterFromCoordinate(coordinate);
  number = getNumberFromCoordinate(coordinate);
  
  if (isValidLetter(letter) && isValidNumber(number)){
    x = getXIndex(letter);
    y = getYIndex(number);

    //return (GRID[y])[x];
    return lightCell(x,y);
  }
  return false;
}
function lightCell(x,y){
  return GRID[y][x];
}

// Challenge 8
function isValidLetter(letter){
  if (letter.charCodeAt(0) < firstColumn || letter.charCodeAt(0) > lastColumn)
    return false;
  return true;
}
function isValidNumber(number){
  if (number < 0 || number > height)
    return false;
  return true;
}

// Challenge 9
function isSafeFromCoordinate(coordinate){
  letter = getLetterFromCoordinate(coordinate);
  number = getNumberFromCoordinate(coordinate);
  x = getXIndex(letter);
  y = getYIndex(number);

  return isSafe(x,y);
}
function isSafe(x,y){
  return (GRID[y][x] === '') ? true : false;
}

// Challenge 4
function isRockFromCoordinate(coordinate){
  letter = getLetterFromCoordinate(coordinate);
  number = getNumberFromCoordinate(coordinate);
  x = getXIndex(letter);
  y = getYIndex(number);

  return isRock(x,y);
}
function isRock(x,y){
  return GRID[y][x] == '^';
}

// Challenge 5
function isCurrentFromCoordinate(coordinate){
  letter = getLetterFromCoordinate(coordinate);
  number = getNumberFromCoordinate(coordinate);
  x = getXIndex(letter);
  y = getYIndex(number);

  return isCurrent(x,y);
}
function isCurrent(x,y){
  return GRID[y][x] === '~';
}

// Challenge 6
function lightRow(number){
  y = getYIndex(number);
  return GRID[y];
}

// Challenge 7
function lightColumn(letter){
  x = getXIndex(letter.toUpperCase());
  col = [];
  GRID.forEach(function(element){
    col.push(element[x]);
  });
  return col;
}

// Challenge 10
function allRocks(){
  allRocksList = [];
  for(var i=0; i<GRID.length; i++){
    for(var j=0; j<GRID[i].length; j++){
      if (GRID[i][j] == '^'){
      	coordinate = getCoordinateFromArray(i,j);
        allRocksList.push(coordinate);
      }
    }
  }
  return allRocksList;
}

// Challenge 11
function allCurrents(){
  allCurrentsList = [];
  for (var i=0; i<height; i++){
    for (var j=0; j<GRID[i].length; j++){
      if (GRID[i][j] == '~'){
        coordinate = getCoordinateFromArray(i,j);
        allCurrentsList.push(coordinate);
      }
    }
  }
  return allCurrentsList;
}

// Challenge 12
function firstRock(){
  for(var i=0; i<height; i++){
    for(var j=0; j<GRID[i].length; j++){
      if (GRID[i][j] == '^')
      	return getCoordinateFromArray(i,j);
    }
  }
}

// Challenge 13
function firstCurrent(){
  for(var i=0; i<height; i++){
    for(var j=0; j<GRID[i].length; j++){
      if (GRID[i][j] == '~')
      	return getCoordinateFromArray(i,j);
    }
  }
}

// Challenge 14
function isDangerousFromCoordinate(coordinate){
  letter = getLetterFromCoordinate(coordinate);
  number = getNumberFromCoordinate(coordinate);
  x = getXIndex(letter);
  y = getYIndex(number);

  // check cell itself
  if (!isSafe(x,y))
    return true;
  // check cell above
  if (y > 0){
    if (!isSafe(x,y-1))
      return true;
  }
  // check cell below
  if (y < height-1){
    if (!isSafe(x,y+1))
      return true;
  }
  // check cell to the left
  if (x > 0){
    if (!isSafe(x-1,y))
      return true;
  }
  // check cell to the right
  if (x < width-1){
    if (!isSafe(x+1,y))
      return true;
  }
  return false;
}

// Helper functions (Challenge 3)
function getLetterFromCoordinate(coordinate){
  return coordinate[0].toUpperCase();
}

function getNumberFromCoordinate(coordinate){
  return coordinate.substring(1, coordinate.length);
}

function getXIndex(letter){
  return letter.charCodeAt(0) - firstColumn;
}

function getYIndex(number){
  return number-1;
}

function getCoordinateFromArray(row, column){ // (3,9)
  coordinate = getColumn(column) + getRow(row);
  return coordinate;
}

function getRow(row){
  return (row+1).toString();
}

function getColumn(column){
  asciiLetter = column + firstColumn;
  return String.fromCharCode(asciiLetter);
}


// Examples

// console.log(lightCellFromCoordinate("Z1"));
// console.log(lightCellFromCoordinate("C10"));
// console.log(lightCellFromCoordinate("D12"));
// console.log(lightCellFromCoordinate("E10"));
// console.log(lightCellFromCoordinate("F10"));
// console.log(allRocks());
// console.log(isRockFromCoordinate("C8"));
// console.log(isRockFromCoordinate("D8"));
// console.log(isRockFromCoordinate("B1"));
// console.log(isRockFromCoordinate("F4"));

console.log("Is 'A1' dangerous? " + isDangerousFromCoordinate("A1"));
console.log("Is 'A2' dangerous? " + isDangerousFromCoordinate("A2"));
console.log("Is 'A3' dangerous? " + isDangerousFromCoordinate("A3"));
console.log("Is 'A4' dangerous? " + isDangerousFromCoordinate("A4"));
console.log("Is 'A5' dangerous? " + isDangerousFromCoordinate("A5"));
console.log("Is 'A6' dangerous? " + isDangerousFromCoordinate("A6"));
console.log("Is 'A7' dangerous? " + isDangerousFromCoordinate("A7"));
console.log("Is 'A8' dangerous? " + isDangerousFromCoordinate("A8"));
console.log("Is 'A9' dangerous? " + isDangerousFromCoordinate("A9"));
console.log("Is 'A10' dangerous? " + isDangerousFromCoordinate("A10"));

console.log("Is 'B1' dangerous? " + isDangerousFromCoordinate("B1"));
console.log("Is 'B2' dangerous? " + isDangerousFromCoordinate("B2"));
console.log("Is 'B3' dangerous? " + isDangerousFromCoordinate("B3"));
console.log("Is 'B4' dangerous? " + isDangerousFromCoordinate("B4"));
console.log("Is 'B5' dangerous? " + isDangerousFromCoordinate("B5"));
console.log("Is 'B6' dangerous? " + isDangerousFromCoordinate("B6"));
console.log("Is 'B7' dangerous? " + isDangerousFromCoordinate("B7"));
console.log("Is 'B8' dangerous? " + isDangerousFromCoordinate("B8"));
console.log("Is 'B9' dangerous? " + isDangerousFromCoordinate("B9"));
console.log("Is 'B10' dangerous? " + isDangerousFromCoordinate("B10"));


console.log("Is 'D1' dangerous? " + isDangerousFromCoordinate("D1"));
console.log("Is 'D2' dangerous? " + isDangerousFromCoordinate("D2"));
console.log("Is 'D3' dangerous? " + isDangerousFromCoordinate("D3"));
console.log("Is 'D4' dangerous? " + isDangerousFromCoordinate("D4"));
console.log("Is 'D5' dangerous? " + isDangerousFromCoordinate("D5"));
console.log("Is 'D6' dangerous? " + isDangerousFromCoordinate("D6"));
console.log("Is 'D7' dangerous? " + isDangerousFromCoordinate("D7"));
console.log("Is 'D8' dangerous? " + isDangerousFromCoordinate("D8"));
console.log("Is 'D9' dangerous? " + isDangerousFromCoordinate("D9"));
console.log("Is 'D10' dangerous? " + isDangerousFromCoordinate("D10"));
// console.log(isDangerousFromCoordinate("B9"));
// console.log(isDangerousFromCoordinate("I6"));