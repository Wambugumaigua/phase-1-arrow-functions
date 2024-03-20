[9:11 am, 20/03/2024] BOBB: function foo() {
    return 'bar';
  }
  
  const fooFunc = () => 'bar';
  
  
  const add = (parameter1, parameter2) => parameter1 + parameter2;
  
  const twoAdder = (x) => x + 2;
  
  const sum = (parameter1, parameter2) => {
    console.log(Adding ${parameter1});
    console.log(Adding ${parameter2});
    return parameter1 + parameter2;
  };
  
const divide = () => 2000 / 100;


const square = x => x * x;

console.log(divide()); 


console.log(square(5)); 

  sum(1,2); 
  
  const nums = [1,2,3];
  const squares = nums.map(x => x ** 2); 
  squares;
  nums; 
  
  const finishedItems = overdueTodoItems.map(item => {
    item.className = "complete";
    return item;
  });

  header.innerText = You finished ${finishedItems.length} items!;
  lapsedUserAccounts.map(u => sendBillTo(u.address));
[9:12 am, 20/03/2024] BOBB: hii ni ya arrow functions
[9:42 am, 20/03/2024] BOBB: // index.js

// Define the returnsANamedFunction function
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I'm a named function!");
  };
}

// Execute returnsANamedFunction as a "before all" hook
const beforeAllHook = returnsANamedFunction();
beforeAllHook();

// Original functions and code
function runFiveMiles() {
  console.log("Go for a five-mile run");
}

function liftWeights() {
  console.log("Pump iron");
}

function swimFortyLaps() {
  console.log("Swim 40 laps");
}

function Monday() {
  runFiveMiles();
  liftWeights();
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

function Monday() {
  exerciseRoutine(liftWeights);
}

function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}

exerciseRoutine(() => {
  console.log("Stretch! Work that core!");
});

exerciseRoutine(() => console.log("Stretch! Work that core!"));

function morningRoutine(exercise) {
  let breakfast;

  if (exercise === liftWeights) {
    breakfast = "protein bar";
  } else if (exercise === swimFortyLaps) {
    breakfast = "kale smoothie";
  } else {
    breakfast = "granola";
  }

  exerciseRoutine(exercise);

  return function () {
    console.log(Nom nom nom, this ${breakfast} is delicious!);
  };
}

// Define the receivesAFunction function
function receivesAFunction(callback) {
  callback();
}

// Test the receivesAFunction function
receivesAFunction(() => console.log("Hello, I'm a callback function!"));