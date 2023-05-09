# level_2_assignment1

## question 1: What is TypeScript, and how is it different from JavaScript?

answer:

- Typescript is a type based language and superset of javascript. Typescript is a static programming language while javascript is a dynamic programming language. typescript used in larged project, and javascript use in personal project or small project. typescript supports defining type of variable which is called implicit type and its a type safety language. but javascript has not type safety language. using the typescript less problems in production because of we solve these problem in development time. but using the javascript we get less error message in development. For type safety and more readable code typescript is different from javascript.

### question 2: Can you explain the difference between "interface" and "type" in TypeScript?

answer:

- types are used in typescript for defining types of primitive data types (string, number, booelan, null and undefined), property, function etc. while interface are mostly used for object type definitions. if we want to add previous declared types to new types then we should use "&" symbol. and if we want to use previours interface in new interface then we can use "extends".

### question 3: Can you give an example of how to use generics in TypeScript?

answer:

- generics is use in typescript to define types in dynamically by passing types parameters. we can use generic in array, object, function, etc. generic is ensure the type by passing parameters types. dynamically. generic types allows us to reuseable types that is more flexible in typescript project.

### question 4: What is the difference between an "unknown" and "any" type in TypeScript?

answer:

- when we don't know the what will be the types of the parameter that is comming as argument. where as any is using to allow everything as let them go. anything is assignable in unknown. any is assignable anything. we should use assertion of passing data to unknown types.

### question 5: Can you give an example of how to use enums in TypeScript?

answer:

-// hare is an example.

// enum MyLocation {
// country = "Bangladesh",
// primeMinister = "Sheikh-Hasina",
// city = "Dhaka",
// bigRivar = "Padma",
// }

// const myCountry: typeof MyLocation = {
// country: MyLocation.country,
// primeMinister: MyLocation.primeMinister,
// city: MyLocation.city,
// bigRivar: MyLocation.bigRivar,
// };

// if we declare enum in typescript it will always defined numaric value of properties ony by one 0 to N. we can defined their value custom. and if we want to set this enum of an object then we should use typeof infront of enum. and we can just use the value that was declared in enum.

### question 6: What is the "as" keyword used for in TypeScript?

answer:

- when we know types of a value better then typescipt itself then we use as keyword. we can change current type to another types using as keyword.

### question 7: Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?

answer:

- type guards is very impotant in typescript to prevent typeerror. there are some kinds of type guard system in typescript. typeof, in, intenceof. "in" is used to check in object property exist or not. "typeof" is used to check the typeof the value. like typeof value === "string".
