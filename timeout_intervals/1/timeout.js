// 1. Create a function that takes a single argument,
// a number, and after a timeout of 5 seconds, logs the number to the console.

function resolveAfterTimeout(number) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(number), 5 * 1000);
    });
}

async function logAfterTimeout() {
    const result = await resolveAfterTimeout(69);
    console.log(result);
}

logAfterTimeout();
// logNumberAfterTimeout().then(function (result) {
//     console.log("got my result from my resolved promise", result);
// });
