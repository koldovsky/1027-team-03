// Task 1. Convert a string to an array https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(" ");
}

// Task 2. DNA to RNA Conversion https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// Task 3. Find Maximum and Minimum Values of a List https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = function (list) {
  return Math.min(...list);
};

const max = function (list) {
  return Math.max(...list);
};

// Task 4. Smallest value of an array https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  let minValue = Math.min.apply(null, arr);
  let minIndex = arr.indexOf(minValue);

  return toReturn === "value" ? minValue : minIndex;
}

// -----Поглиблені, додаткові задачки-----

// Task 5. A wolf in sheep's clothing https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
function warnTheSheep(queue) {
  const lastAnimal = queue.length;
  const wolfWhere = queue.indexOf("wolf") + 1;
  if (lastAnimal == wolfWhere) return "Pls go away and stop eating my sheep";
  return `Oi! Sheep number ${
    lastAnimal - wolfWhere
  }! You are about to be eaten by a wolf!`;
}

// Task 6. Beginner - Lost Without a Map https://www.codewars.com/kata/57f781872e3d8ca2a000007e/solutions/javascript
function maps(x) {
  const doubleArr = x.map((item) => item * 2);
  return doubleArr;
}

//Task 7 Find the first non-consecutive number https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/solutions
function firstNonConsecutive(arr) {
  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - num != 1) {
      num = arr[i];
      return num;
    }
    num = arr[i];
  }
  return null;
}

// Додаткові задачки по JS, кому мало, якщо маєте час і бажання 🙂

// Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

function doubleInteger(i) {
  return i * 2;
}

// Century From Year    https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

function century(year) {
  var century = Math.ceil(year / 100);
  return century;
}

// Multyply two numbers    https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript

function multiply(a, b) {
  return a * b;
}

// Make negative    https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
  return -Math.abs(num);
}

// Cockroach speed    https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript

function cockroachSpeed(s) {
  return Math.floor(s * 27.7778);
}

// Angle of triangle    https://www.codewars.com/kata/5a023c426975981341000014/train/javascript

function otherAngle(a, b) {
  return 180 - a - b;
}

// Twice as old    https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// Return n-th even number    https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

function nthEven(n) {
  return n * 2 - 2;
}

// What's the real floor     https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

// Clock    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

// Is n divisible by x and y    https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}
