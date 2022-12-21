// 1. Create an array that has strings, numbers, and booleans in it, at least two of each type. 
// Our first mixed-type array. 
// Using array functions (like .filters, .sort, .includes, .map, .forEach, etc), 
// do the following (do NOT use for loops) and log them out to the console:
//    a) Create a new array consisting only of the strings in the array, then sort that array alphabetically ascending (A-Z).
//    b) Create a new array consisting only of the numbers in the array, and then sort them ascending.
//    c) Create a new array consisting only of the numbers in the array, and then sort then descending.
//    d) Create a new array consisting only of the strings in the array, but lowercase all the strings.

const array = ["Ted", "Bob", 4, 2, 8, true, false];

//String arrays
const arrayStrings = array.filter(item => typeof item === "string");
console.log("Array filtered to only constain strings:\n", arrayStrings);
const arrayStringsSorted = arrayStrings.sort();
console.log("String array sorted alphabetically:\n", arrayStringsSorted);

// Number arrays
const arrayNumbers = array.filter(item => typeof item === "number");
console.log("Array filtered to only contain numbers:\n", arrayNumbers);

const arrayNumbersSortedAscending = arrayNumbers.sort((a, b) => a - b);
console.log("Number array sorted by ascending:\n", arrayNumbersSortedAscending);

const arrayNumbersSortedDescending = arrayNumbers.sort((a, b) => b - a);
console.log("Number array sorted by descending:\n", arrayNumbersSortedDescending);

// Lowercase string array
const arrayStringsLowercase = arrayStrings.map(string => string.toLowerCase());
console.log("String Array all lowercase:\n", arrayStringsLowercase);
// const lowercaseStringArray = stringArray.map(string => string.toLowerCase());
// console.log(lowercaseStringArray); // ['a', 'b']
