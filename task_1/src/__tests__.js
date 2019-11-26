const { calculatePercentage, FRACTION_DIGITS } = require("./index");

const testData = require('./data.js');

function main() {
    test(calculatePercentage, testData.defaultTest , FRACTION_DIGITS, "Test 1 (Default)");
    test(calculatePercentage, testData.bigArray, FRACTION_DIGITS, "Test 2 (Big array)");
    test(calculatePercentage, testData.bigNumbers, FRACTION_DIGITS, "Test 3 (Big numbers)");
}

main();


function test(percentageFunction, test, fractionDigits, message){
    const output = percentageFunction(test.input, fractionDigits);

    testPercentage(percentageFunction, output, test.expected_output, message);
    checkDecimalPlacesLength(output, fractionDigits , message)
}

function testPercentage(percentageFunction, output, expected_output, message) {
    const isSuccess = isEqualsArrays(expected_output, output);

    if(isSuccess){
        console.log(message, ' is Success!');
    } else {
        console.error(message, ' is Failure!');
        console.log('output', output);
    }
}

function checkDecimalPlacesLength(arr, digit, message){
    const isSuccess =  arr.every(value => {
        const mantissa = String(value).split('.')[1];
        return mantissa && mantissa.length === digit;
    });

    if(isSuccess){
        console.log(`${message}: decimal places test is Success!`);
    } else {
        console.error(`${message}: decimal places test is Failure!`);
        console.log('output', arr);
    }
}


function isEqualsArrays(leftArray, rightArray){
    if(leftArray.length !== rightArray.length){
        return false;
    }

    return leftArray.every((inputValue, index) => inputValue === rightArray[index])
}

