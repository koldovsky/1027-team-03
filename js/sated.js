// TASK >>>>> Find the smallest integer in the array
// LINK >>>>> https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// TASK >>>>> Geometry Basics: Circle Circumference in 2D
// LINK >>>>> https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

// TASK >>>>> Training JS #12: loop statement --for..in and for..of
// LINK >>>>>  https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
  var five = [];
  for (var key in obj) {
    if (key.length === 5) five.push(key);
    if (obj[key].length === 5) five.push(obj[key]);
  }
  return five;
}

// TASK >>>>> Training JS #11: loop statement --break, continue
// LINK >>>>>  https://www.codewars.com/kata/5721c189cdd71194c1000b9b

function grabDoll(dolls) {
  var bag = [];
  var count = 0;
  for (var i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      bag.push(dolls[i]);
      count++;
      if (count === 3) {
        break;
      }
    } else {
      continue;
    }
  }
  return bag;
}

// TASK >>>>> A wolf in sheep's clothing
// LINK >>>>> https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  const wolfIndex = queue.indexOf("wolf");
  if (wolfIndex === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    const sheepPosition = queue.length - wolfIndex - 1;
    return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
  }
}

// опційна поглиблена задачка про замикання
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n) {
  var res = [];

  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }

  return res;
}

// опційна поглиблена задачка про наслідування
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
