module.exports.defaultTest = {
    input: {
        date: '20180120',
        isins: ['XS0971721963', 'RU000A0JU4L3']
    },

    expected_output: [{
        isin: 'XS0971721963',
        data: '20180120'
    }, {
        isin: 'RU000A0JU4L3',
        data: '20180120'
    }]
}
