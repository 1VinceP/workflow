import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './create-team.css';
import {editTeamName, editTeamDescription, getTeamInfo, getCompanyInfo, getCompanyTeamsInfo} from '../../redux/reducers/main-reducer';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

class CreateTeam extends Component {
    constructor(){
        super()
        this.state={

        }
        this.submitTeam = this.submitTeam.bind(this);
    }

    submitTeam() {
        console.log(this.props)
        let data = {
            team_name: this.props.team_name,
            team_date: this.props.team_date,
            team_description: this.props.team_description,
            team_projects_completed: this.props.team_projects_completed,
            team_company: this.props.user.user_company
        }
        console.log("data : ", data)
        axios.post('/api/addteam', data)
        .then(() => {
            this.props.getTeamInfo().then(res => {
                this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                    this.props.getCompanyTeamsInfo(this.props.user.user_company)
                })
            })
        })
    }

    render() {

        return (
            <div className="team-modal">
                <div className="teamname">
                    <TextField onChange={(e) => this.props.editTeamName(e.target.value)}
                    hintText="Team Name" />
                </div>
                <div className="teamdescription">
                    <TextField onChange={(e) => this.props.editTeamDescription(e.target.value)}
                    hintText="Team Description" />
                </div>
                <div className="teaminfo">
                    Details about the team will appear here.
                </div>
                <Link to='/display-teams'><button onClick={() => this.submitTeam()}>Save Changes</button></Link>
                <Link to='/display-teamss'><button>Cancel</button></Link>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {
    editTeamName, editTeamDescription, getTeamInfo, getCompanyInfo, getCompanyTeamsInfo})(CreateTeam)