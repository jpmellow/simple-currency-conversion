const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5, // Japan Yen
    "USD": 1.07,  // US Dollar
    "GBP": 0.87   // British Pound
};



function fromDollarToYen(dollarAmount) {
    return dollarAmount * oneEuroIs["JPY"] / oneEuroIs["USD"];
}


function fromYenToPound(yenAmount) {
    return yenAmount * oneEuroIs["GBP"] / oneEuroIs["JPY"];
}

function fromEuroToDollar(euroAmount) {
    return euroAmount * oneEuroIs["USD"];
}

module.exports = { sum, fromEuroToDollar };
