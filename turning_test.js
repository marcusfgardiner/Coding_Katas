const add = (a, b) => Number(a) + Number(b);

function isTuringEquation(s) {
  let reversedString = s
    .split("")
    .reverse()
    .join("");

  let splitString = reversedString.split("=");
  let answer = Number(splitString[0]);
  let numbersToSum = splitString[1].split("+");
  let summedNumbers = numbersToSum.reduce(add);
  console.log(answer);
  console.log(summedNumbers);
  return answer === summedNumbers;
}
