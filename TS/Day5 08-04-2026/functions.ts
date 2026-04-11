// 1. Named Function
function add(a: number, b: number): number {
    return a + b;
}
console.log("Named Function:", add(10, 20));


// 2. Anonymous Function
let greet = function (): void {
    console.log("Anonymous Function: Hello!");
};
greet();


// 3. Arrow Function
const multiply = (x: number, y: number): number => {
    return x * y;
};
console.log("Arrow Function:", multiply(5, 4));


// 4. Default Parameters
function greetUser(name: string = "Guest"): void {
    console.log("Default Param:", name);
}
greetUser();
greetUser("Adish");


// 5. Optional Parameters
function display(name: string, age?: number): void {
    console.log("Optional Param:", name, age);
}
display("Adish");
display("Adish", 21);


// 6. Rest Parameters
function sumAll(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log("Rest Param:", sumAll(1, 2, 3, 4));


// 7. Void Function
function printMsg(msg: string): void {
    console.log("Void Function:", msg);
}
printMsg("Hello TS");


// 8. Never Function (commented to avoid crash)
// function throwError(msg: string): never {
//     throw new Error(msg);
// }


// 9. Function Type (Type Alias)
type AddFunc = (a: number, b: number) => number;

let sum: AddFunc = (x, y) => x + y;
console.log("Type Alias Function:", sum(3, 7));


// 10. Callback Function
function process(num: number, callback: (n: number) => number): number {
    return callback(num);
}
console.log("Callback Function:", process(5, (n) => n * 2));


// 11. Higher Order Function
function calculator(
    a: number,
    b: number,
    operation: (x: number, y: number) => number
) {
    return operation(a, b);
}
console.log("Higher Order Function:", calculator(10, 5, (x, y) => x + y));