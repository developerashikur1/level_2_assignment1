// optional Problem 1
// Array and Tuple types

// Create a TypeScript program that declares an array of strings and a tuple of a number and a string. Add elements to both data structures, and log them to the console.

const arrOfStrings: string[] = ["sabbir", "kabbir", "nabbir"];
const tupleOfNUm: [number, string] = [12, "Shonibar"];

arrOfStrings.push("Ashikur");
arrOfStrings.push("Shadhin");

tupleOfNUm[0] = 16;
tupleOfNUm[1] = "ashikur";

// Optional Problem 2:
// Create a TypeScript program that uses a conditional type to create a new type that is either a string or a number, depending on whether a parameter of type string or number is passed to the function.

// Then, create an interface for a person with properties name and age, and use the new type as a constraint on the age property.

// Finally, create an object that satisfies the Person interface and log it to the console.
