async function getBondsData({date, isins}) {
    const result = await http.post({
        url: `/bonds/${date}`,
        body: isins
    });

    return result;
}

function asyncMemoize(asyncFunction) {
    const cache = new Map();

    return async function() {
        const hash = JSON.stringify(arguments);

        if(!cache.has(hash)){
            const result = await asyncFunction.apply(this, arguments);
            cache.set(hash, result)
        }

        return cache.get(hash);
    };
}



function main() {
    const memoizedGetBondsData = asyncMemoize(getBondsData);
}


module.exports.asyncMemoize = asyncMemoize;
