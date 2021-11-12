// import the function sum from the app.js file
const { sum, fromDollarToYen } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One yen should be 0.0066 british pound",function(){

    const {fromYenToPound} = require('./app.js')

    const pound = fromYenToPound(1)

    const expected = 1 * 0.0066

    expect(pound).toBe(expected);
})

test("One yen should be 0.0093 dollar",function(){

    const {fromDollarToYen} = require('./app.js')

    const dollars = fromDollarToYen(1)

    const expected = 1 * 0.0093
    
    expect(dollars).toBe(expected);
})