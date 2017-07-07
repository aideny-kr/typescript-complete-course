console.log("It works!");
// arrays
var hobbies = ["cooking", "coding"];
hobbies.push(3);
var three = hobbies.filter(function (each) {
    return each == 3;
});
console.log(three);
// tuples
var cityCodes = ["Charlotte", 704];
console.log();
// any type
var cars = [];
cars.push(2);
cars.push("BMW");
cars.push({ brand: "Audi" });
console.log(cars);
// functions
var myName = "Aiden";
function returnMyName() {
    return myName;
}
// void type
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 10));
// function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(2, 5));
