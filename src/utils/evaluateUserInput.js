export function evaluateUserInput(guess, target) {

    let result = [];
    let counts = {};

    for (let i=0; i<guess.length; i++) {
        if (guess[i] === target[i]) {
            result.push(1);
        } 
    };

    for (let i=0; i<guess.length; i++) {
        if (target.includes(guess[i]) && guess[i] !== target[i]) {
            /* countOf(guess[i], ) */
        }
    };

    return result;

};

function countOf(num, arr, counts) {
    arr.forEach((el) => {
        counts[el] = counts[el] ? (counts[el] += 1) : 1; 
    });
};