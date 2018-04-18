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
function lightCell(coordinate){
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
function isSafe(coordinate){
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
function isRock(coordinate){
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
function isCurrent(coordinate){
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

console.log(lightCell("Z1"));
console.log(lightCell("C10"));
console.log(lightCell("D12"));
console.log(lightCell("E10"));
console.log(lightCell("F10"));
console.log(allRocks());
