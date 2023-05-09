// Problem 3:
// Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.

// solved 3
const getReverseStringArr = <T>(...stringsArr: T[]): T[] => {
  let newArrOfString: T[] = [];

  for (let i = stringsArr.length - 1; i >= 0; i--) {
    newArrOfString.push(stringsArr[i]);
  }

  return newArrOfString;
};

const result2 = getReverseStringArr<string>(
  "first",
  "string1",
  "23",
  "fast",
  "string2",
  "Bangladesh",
  "last"
);

console.log(result2);
