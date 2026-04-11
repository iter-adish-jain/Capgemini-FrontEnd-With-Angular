let value1: unknown;

value1 = 100;
// console.log(value1 + 10); ❌ Error

if (typeof value1 === "number") {
    console.log(value1 + 10); // ✅ Safe
}

value1 = "Hello";

if (typeof value1 === "string") {
    console.log(value1.toUpperCase()); // ✅ Safe
}