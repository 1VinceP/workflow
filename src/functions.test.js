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

// /////////////Vincent///////////////


test('Divides things', () => {
    expect(utils.divideThings( 10, 2 )).toBe( 5 );
});
test('Divides things', () => {
    expect(utils.divideThings( 2, 20 )).toBe( 1 );
});
test('Divides things', () => {
    expect(utils.divideThings( 10, 0 )).toBe( Infinity );
});
test('Displays user role', () => {
    expect(utils.roleThings( 3 )).toBe( 3 );
});
test('displays user role', () => {
    expect(utils.roleThings( 'admin' )).toBe( 'admin' );
});