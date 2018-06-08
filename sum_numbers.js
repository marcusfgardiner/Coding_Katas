function GetSum(a, b) {
  if (a === b) return a;
  sortedArray = [a, b].sort(function(a, b) {
    return a - b;
  });
  var i = sortedArray[0];
  var iMax = sortedArray[1];
  var sum = 0;
  for (i; i < iMax + 1; i++) {
    sum += i;
  }
  return sum;
}
