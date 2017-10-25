var utils = require('./components/utlities/utilities')


/////Anthony/////

test('Same date test', () => {
    expect(utils.compareSameProjectDates(2017-10-13, 2017-10-13)).toBe("1 day");
});
test('Same date test', () => {
    expect(utils.compareSameProjectDates(2017-2-29, 2017-2-29)).toBe("1 day");
});
test('Different date test', () => {
    expect(utils.compareProjectDates(2017-10-13, 2017-11-13)).toBe("days");
});
test('Negative date test', () => {
    expect(utils.compareProjectDates(2017-11-13,2017-10-13)).toBe("days");
});


/////////Alec///////////


// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });
// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });
// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });
// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });
// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });



// /////////Chandler/////////////


// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });
// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });
// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });
// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });
// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });



// /////////////Vincent///////////////


// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });
// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });
// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });
// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });
// test('description of the test', () => {
//     expect(functionName(arguments).toBe('expectedanswer'));
// });