//Task1 https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
  }

//Task2 https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
  }


//Task3  https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj){
    let resultArr = [];
    
    for(let i in obj){
      if(i.length === 5){resultArr.push(i);}
      if(obj[i].length === 5){resultArr.push(obj[i]);}
    }
    return resultArr;
  }


//Task4 https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n) {

	var res = []
  
  function createFunc(num) {
    return function() {
      return num;
    }
  }
  
	for (var i = 0; i< n; i++) {
		res.push(createFunc(i))
	}
  
	return res
  
}


//Task5 https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, "shark", status);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, "cat", status);
    }
    introduce(){return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;}
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master) {
     super(name, age, 4, "dog", status);
      this.master = master;
    }
    greetMaster(){return `Hello ${this.master}`;} 
  }