module.exports = {
    
        create_team: (req,res,next) => {
            let {team_name, team_date, team_description, team_projects_completed} = req.body;
            
            req.app.get('db').team.add_team(team_name, team_date, team_description, team_projects_completed)
            .then(prop => res.status(200).send(prop))
        }
    }