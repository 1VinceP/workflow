const chalk = require('chalk');

module.exports = {

    getSessionUser: ( req, res, next ) => {
        if( !req.user ) {
            console.log( chalk.red('Endpoint hit, no user found') )
            return res.send( null )
        }

        else if( req.user ) {
            console.log( chalk.yellow('Endpoint hit,', req.user) )
            return res.send( req.user )
        }
    }

}