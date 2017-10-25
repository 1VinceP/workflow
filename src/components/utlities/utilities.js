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
    }
}