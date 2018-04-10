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

firstColumn = 97; // 'a'
lastColumn = 97 + GRID[0].length - 1;

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
  letter = getLetter(coordinate);
  number = getNumber(coordinate);

  if (isValidLetter(letter) && isValidNumber(number)){
    x = getXIndex(letter);
    y = getYIndex(number);
    return (GRID[y])[x];
  }
  return false;
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
  return coordinate.substring(1, coordinate.length);
}

function getXIndex(letter){
  return letter.charCodeAt(0) - 97;
}

function getYIndex(number){
  return number-1;
}

// Challenge 8
function isValidLetter(letter){
  asciiLetterValue = letter.charCodeAt(0);
  if (asciiLetterValue < firstColumn || asciiLetterValue > lastColumn)
    return false;
  return true;
}

// Challenge 8
function isValidNumber(number){
  if (number < 0 || number > height)
    return false;
  return true;
}


// Examples

console.log(lightCell("Z1"));
console.log(lightCell("C10"));
console.log(lightCell("D12"));
console.log(lightCell("E10"));
console.log(lightCell("F10"));
