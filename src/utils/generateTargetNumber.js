export function generateTargetNumber(num) {

    let seed = [];

    for (let i=0; i<num; i++) {
        seed.push(Math.floor(Math.random()*10));
    };

    return seed;
};