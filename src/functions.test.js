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


test('if clicked', () => {
    expect(utils.clickedFunction(true)).toBe(false);
});

test('update team name', () => {
    expect(utils.teamNameDescription("Ebay")).toBe("Ebay");
});

test('check if add user', () => {
    expect(utils.addUserToTeam('mark', ['alec', 'mark', 'steve'])).toBe(true);
});

test('update team name', () => {
    expect(utils.removeUserFromTeam('mark', ['alec', 'mark', 'steve'])).toBe(true);
});

test('get first user', () => {
    expect(utils.getFirstUser(['alec', 'mark', 'steve'])).toBe('alec');
});


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