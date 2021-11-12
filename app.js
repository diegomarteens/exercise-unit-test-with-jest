// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
// we declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInYen * 0.0093;
    //return the dollar value
    return valueInDollar;
}
const multiply = (a,b) =>{
return a*b
}

// we declare the function with the exact name "fromDollarToYen"
const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInEuro = valueInYen * 0.0066;
    //return the dollar value
    return valueInEuro;
}
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromYenToPound,  fromDollarToYen};