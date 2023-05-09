// Problem 5:
// Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

// solved 5
function checkStrings(value: unknown): void {
  if (typeof value === "string") {
    console.log(`The given parameter string is:  ${value}`);
  } else {
    throw new Error(`The given parameter "${value}" is not string.`);
  }
}

checkStrings(12);
