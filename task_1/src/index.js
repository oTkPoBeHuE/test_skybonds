const FRACTION_DIGITS = 3;

function main() {
    const output = calculatePercentage(['1.5', '3', '6', '1.5'], FRACTION_DIGITS);
    console.log(' output', output);
}

main();

function calculatePercentage (test, fractionDigits = FRACTION_DIGITS) {
    const sum =  (accumulator, value) => accumulator + Number(value);
    const total = test.reduce(sum, 0);
    const normalizationFactor = 100 / total;

    const calculatePercentage = (value) => (value * normalizationFactor).toFixed(fractionDigits);

    return test.map(calculatePercentage);
}

module.exports.calculatePercentage = calculatePercentage;
module.exports.FRACTION_DIGITS = FRACTION_DIGITS;



