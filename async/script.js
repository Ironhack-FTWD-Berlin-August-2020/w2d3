console.log('h');

function someCallBackFunction() {
    console.log('hey ironhackers 😺');
}

// setTimeout(someCallBackFunction, 3000);

// let id = setTimeout(function () {
//     console.log('hey ironhackers 😺');
// }, 0);

// console.log('runs here');
// clearTimeout(id);

// console.log('runs first');
// console.log('runs first');
// console.log('runs first');

let counter = 1;
function callBack() {
    console.log(counter);
    timeoutId = setTimeout(callBack, 1000);
    counter += 1;
    if (counter > 3) {
        clearTimeout(timeoutId)
    }
}

let timeoutId = setTimeout(callBack, 1000);

// callBack();
// clearTimeout(timeoutId)
