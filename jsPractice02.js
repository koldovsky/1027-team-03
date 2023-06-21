// Task 1. Convert a string to an array https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
  return string.split(' ');
}

// Task 2. DNA to RNA Conversion https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

// Task 3. Find Maximum and Minimum Values of a List https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list) {
  return Math.min(...list)
}

var max = function(list) {
  return Math.max(...list)
}

// Task 4. Smallest value of an array https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  var minValue = Math.min.apply(null, arr);
  var minIndex = arr.indexOf(minValue);

  return toReturn === 'value' ? minValue : minIndex;
}

-----Поглиблені, додаткові задачки-----
  
// Task 5. A wolf in sheep's clothing https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
function warnTheSheep(queue) {
  const lastAnimal = queue.length;
  const wolfWhere = queue.indexOf("wolf")+1;
  if(lastAnimal == wolfWhere)return "Pls go away and stop eating my sheep";
  return `Oi! Sheep number ${lastAnimal-wolfWhere}! You are about to be eaten by a wolf!`;
}

// Task 6. Beginner - Lost Without a Map https://www.codewars.com/kata/57f781872e3d8ca2a000007e/solutions/javascript
function maps(x) {
  const doubleArr = x.map((item)=> item*2);
  return doubleArr;
}

//Task 7 Find the first non-consecutive number https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/solutions
function firstNonConsecutive (arr) {
  let num = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(arr[i]-num != 1){num = arr[i]; return num;}
    num = arr[i];
  }
  return null;
}
