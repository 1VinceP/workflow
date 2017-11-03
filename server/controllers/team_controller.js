module.exports = {

        get_team: (req, res, next) => {
            req.app.get('db').team.all_team().then(response => res.status(200).send(response))
        },
    
        add_team: (req,res,next) => {
            let {team_name, team_description, team_company} = req.body;
            req.app.get('db').team.add_team(team_name, team_description, team_company)
            .then(() => res.status(200).send())
        },

        edit_team: (req,res,next) => {
            let{team_name, team_description, team_id} = req.body;

            req.app.get('db').team.edit_team(team_name, team_description, team_id)
            .then(() => res.status(200).send());
        }
    }