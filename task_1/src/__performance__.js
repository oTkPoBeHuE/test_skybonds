const { calculatePercentage, FRACTION_DIGITS } = require("./index");

function main() {
    const min = 1234567 ** 10;
    const max = 1234567 ** 15;

    const arrays = [
        10,
        100,
        1000,
        10000,
        100000,
        1000000,
        10000000].map(value => generateArray(value, min, max));

    arrays.forEach(value => {
        performanceTest(calculatePercentage, value);
    });
}

main();

function performanceTest(percentageFunction, array){
    console.time(`Length: ${array.length}`);
    percentageFunction(array, FRACTION_DIGITS);
    console.timeEnd(`Length: ${array.length}`);
}

function generateArray(length, min, max) {
    return Array.from({length}, () => Math.random() * (max - min) + min);
}
