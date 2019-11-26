const testData = require("./data");

const { asyncMemoize } = require("./index");

async function getBondsDataMock({date, isins}) {
    const bondsData = isins.map(value => {
        return {
            isin: value,
            data: date
        }
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(bondsData), 300)
    })
};


const memoizedGetBondsData = asyncMemoize(getBondsDataMock);

async function main() {
    testResultData(testData.defaultTest);
}

main();

async function testResultData(data) {
    const result = await memoizedGetBondsData(data.input);
    const isSuccess = isEqualsObjectsArrays(result, data.expected_output);


    if(isSuccess){
        console.log(`Success!`);
    } else {
        console.error(`Failure!`);
        console.log(result);
    }
}

function isEqualsObjectsArrays(leftArray, rightArray){
    return JSON.stringify(leftArray) === JSON.stringify(rightArray);
}


