// Problem 2 🧨🧨
// Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18,

// solved 2
interface IPerson {
  name: string;
  age: number;
}

function getPersonByAge(arr: IPerson[]) {
  const dividerNumber = 18;
  return arr.filter((person) => person.age >= dividerNumber);
}

const personArr: IPerson[] = [
  {
    name: "A",
    age: 12,
  },
  {
    name: "B",
    age: 17,
  },
  {
    name: "C",
    age: 18,
  },
  {
    name: "D",
    age: 25,
  },
  {
    name: "E",
    age: 19,
  },
  {
    name: "f",
    age: 16,
  },
];

const result = getPersonByAge(personArr);
console.log(result);
