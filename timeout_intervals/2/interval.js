// 2. Create a function that takes a single argument,
// a number, on an interval of every 5 seconds, 
// logs the number to the console.


function logonInterval(number) {
    setInterval(() => {
        console.log(number);
    }, 5 * 1000);
}

logonInterval(42);