console.log("It works!");

// arrays
let hobbies: any[] = ["cooking", "coding"];
hobbies.push(3);
let three = hobbies.filter(function(each) {
  return each == 3;
});
console.log(three);

// tuples
let cityCodes: [string, number] = ["Charlotte", 704];
console.log()

// any type
let cars: any[] = [];
cars.push(2);
cars.push("BMW");
cars.push({brand: "Audi"});

console.log(cars);


// functions
let myName = "Aiden";
function returnMyName(): string {
  return myName;
}

// void type
function sayHello(): void {
  console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply(2, 10));

// function types
let myMultiply: (val1: number, val2: number) => number ;
myMultiply = multiply;

console.log(myMultiply(2,5));
