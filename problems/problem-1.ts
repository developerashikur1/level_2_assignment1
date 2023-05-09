// Problem 1
// Functions and Default Parameters

// Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3.

// solved 1
function getRepeatString(str: string, count: number = 3): void {
  for (let i = 1; i <= count; i++) {
    console.log(str);
  }
}

getRepeatString("Next Level web development", 250);
