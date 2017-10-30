var moment = require('moment');
moment().format();


module.exports = {
    compareProjectDates(start, finish) {
        var d1 = moment(start)
        var d2 = moment(finish)
        if(d1 !== d2) {
            return ((d2 - d1), "days" )
        } else {
            return ( "1 day" );
        }
    },
    compareSameProjectDates(start, finish) {
        var d1 = (start)
        var d2 = (finish)
        if(d1 !== d2) {
            return ((d2 - d1), "days" )
        } else {
            return ( "1 day" );
        }
    },
    clickedFunction(e){
        return !e;
    },
    teamNameDescription(e) {
        var team_name = e
        return team_name
    },
    addUserToTeam(e, array) {
        if (array.includes(e)){
            return true
        } 
    },
    removeUserFromTeam(e, array) {
        if (array.includes(e)){
            return true
        }
    },
    getFirstUser(array){
        return array[0]
    }
}