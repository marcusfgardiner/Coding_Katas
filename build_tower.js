var starForSpace = (string, number) => {
    newString = string.slice(number, -number);
    return (" ".repeat(number) + newString + " ".repeat(number));
}

function towerBuilder(nFloors) {
  let tower = []
  let starCount = 1 + ((nFloors - 1)*2);
  bottomRow = "*".repeat(starCount);
  tower.push(bottomRow);
  for(var i = 1; i < nFloors; i++) {
  currentRow = tower[0]
  tower.unshift(starForSpace(currentRow, i));
  }
  return tower;
}


console.log(towerBuilder(1))
console.log(towerBuilder(2))
console.log(towerBuilder(3))