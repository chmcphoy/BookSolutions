// My Solution. 
// Note: This generates the exact pattern in the book but lacks the useful 'size' variable that Martin has.
for (var counter = 1; counter <= 4; counter++) {
  console.log("# # # # \n # # # #");
}

// Martin's Solution
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
