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

    /////////////////////////////////////////CHANDLER/////////////////////////////////////////
    createUniqueKeyString(compName){
        if(typeof(compName) === 'string'){
            return 'string'
        } else {
            return false
        }
      },
      createUniqueKey(compName){
        let projectKey = compName + '10/10/17';
        let finalKey = projectKey.replace(/[^A-Z0-9]/ig, "0").toLowerCase();
        return finalKey
      },

      handleTaskInput(taskInput){
        let task = taskInput;
        if (task.length < 50){
            return 'can accept task'
        } else {
            return 'not able to submit task'
        }
      },

      handleTaskUser(user){
          let assignedUser=''
          if(assignedUser === ''){
              return ('PLEASE ASSIGN USER', false)
          } else {
              return ('USER ASSIGNED', true)
          }
      },
      dateCheck(date1, date2){
        if( moment(date1) > moment(date2)){
            return ('begin date is past end date', false)
        } else {
            return ('dates are viable', true)
        }
    },
     /////////////////////////////////////END OF CHANDLER/////////////////////////////////////
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