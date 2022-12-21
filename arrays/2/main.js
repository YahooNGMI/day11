// 2. Create an array that has 5 objects that follow this user model:

// object {
//    name: string
//    age: number
//    isAdmin: boolean
// }


// Using array functions (like .filters, .sort, .includes, .map, .forEach, etc), do the following and log them out to the console:
// a) Create a new array consisting only of user's that have an age greater than 20.
// b) Create a new array consisting only of user's that are admins.
// c) Create a new array consisting only of user's that are both admin and have an age less than 50.
// d) Sort the array by the user's names, alphabetically, ascending.
// e) Sort the array by the user's age, descending (oldest to youngest).

const User = require("./users/user");
// const { user1 } = require("./users/users");
const users = require("./users/users");

// original array of users
console.log(users);

// users above age 20
const usersAbove20 = users.filter(person => person.age > 20);
console.log(usersAbove20);

// users who are admin
const usersIsAdmin = users.filter(person => person.isAdmin === true);
console.log(usersIsAdmin);

// user who are both admin and less than age 50
const usersIsAdminAndUnder50 = users.filter(person => person.isAdmin === true && person.age < 50);
console.log(usersIsAdminAndUnder50);

// sorting users by name, ascending alphabetically
const usersSortedAlphabeticallyAscending = users.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else {
        return 0;
    }
});
console.log(usersSortedAlphabeticallyAscending);

// sorting users by name, ascending alphabetically
const usersSortedAgeDescending = users.sort((a, b) => {
    if (a.age < b.age) {
        return 1;
    } else if (a.name > b.name) {
        return -1;
    } else {
        return 0;
    }
});
console.log(usersSortedAgeDescending);

