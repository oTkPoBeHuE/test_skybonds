

module.exports.defaultTest = {
    input: ['1.5', '3', '6', '1.5'],
    expected_output: ['12.500', '25.000', '50.000', '12.500']
};

const size = 20000;
module.exports.bigArray = {
    input: new Array(size).fill('12345678901234567890123'),
    expected_output: new Array(size).fill(String((100 / size).toFixed(3))),
};


module.exports.bigNumbers = {
    input: [
        (1234567 ** 40) * 1,
        (1234567 ** 40) * 2,
        (1234567 ** 40) * 3,
        (1234567 ** 40) * 4,
        (1234567 ** 40) * 5],


    expected_output: ['6.667', '13.333', '20.000', '26.667', '33.333' ]
};
