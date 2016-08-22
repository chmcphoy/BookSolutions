// My Solution
for (var tri = ""; ; tri += "#") {
  console.log(tri)
  if (tri.length == 7)
    break;
}

// Martin's Solution, much more succinct!
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
