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

describe('Chandler', function(){
    test('Test unique key is string', () => {
    expect(utils.createUniqueKeyString('ebay')).toBe('string');
    });
    test('Test create unique key', () => {
    expect(utils.createUniqueKey('ebay')).toBe('ebay10010017');
    });
    test('Test max character not exceeded', () => {
    expect(utils.handleTaskInput('Build Backend')).toBe('can accept task');
    });
    test('Test user assigned to task', () => {
    expect(utils.handleTaskUser('')).toBe(('PLEASE ASSIGN USER', false));
    });
    test('Test user assigned to task', () => {
    expect(utils.dateCheck('10/30/17', '10/31/17')).toBe(('dates are viable', true));
    });
});

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

// const createProject = require('./components/create-project/create-project-tasks');

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