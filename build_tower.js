function towerBuilder(nFloors) {
  let starCount = 1 + ((nFloors - 1)*2)
  return "*".repeat(starCount);
}

console.log(towerBuilder(1))
console.log(towerBuilder(2))
console.log(towerBuilder(3))
