function SeriesSum(n) {
  let denominator = 1;
  let total = 0;
  for (var i = 0; i < n; i++) {
    total += 1 / denominator;
    denominator += 3;
  }
  return total.toFixed(2);
}

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"