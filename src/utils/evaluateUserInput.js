export function evaluateUserInput(guess, target) {

    let result = [];
    let counts = {};
    let status = 1;

    for (const num of target) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    };

    for (let i=0; i<guess.length; i++) {
        if (guess[i] === target[i]) {
            result.push([1,guess[i]]);
        } else if (!target.includes(guess[i])) {
            result.push([-1,guess[i]]);
            status = 0;
        } else {
            status = 0;
            if (counts[guess[i]] >= 1) {
                counts[guess[i]] = counts[guess[i]] - 1;
                
            }
            result.push([0,guess[i]]);
        }
    };

    return [status,result];

};
