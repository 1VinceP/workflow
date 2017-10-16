module.exports = {

    getSessionUser: ( req, res, next ) => {
        if( !req.user ) {
            console.log( 'Endpoint hit, no user found' )
            return res.send( null )
        }

        else if( req.user ) {
            console.log( 'Endpoint hit,', req.user )
            return res.send( req.user )
        }
    }

}