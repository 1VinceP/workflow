module.exports = {

    login: (req, res) => {
        if (!req.user) {
            return res.status(404).send('User not found')
        } else {
            return res.status(200).send(req.user);
        }
    },
    
    logout: (req, res) => {
        req.logOut();
        return res.redirect(302, '/');
    },

    logout_joined: (req, res) => {
        req.logOut();
        return res.redirect(302, '/company-joined');
    }

}