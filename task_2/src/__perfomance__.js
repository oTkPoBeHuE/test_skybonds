const testData  = require("./data");
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
    await testPerfomance(getBondsDataMock, testData.defaultTest ,"getBondsData");
    await testPerfomance(memoizedGetBondsData, testData.defaultTest , "memoizedGetBondsData" );
}

main();

async function testPerfomance(percentageFunction, data, message){
    for(let i = 0; i < 3; i++){
        console.time(`${i} ${message}`);
        await percentageFunction(data.input);
        console.timeEnd(`${i} ${message}`);
    }
}
