import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './create-team.css';
import { editTeamName, editTeamDescription, getCompanyInfo, getCompanyTeamInfo } from '../../redux/reducers/main-reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CreateTeam extends Component {
    constructor() {
        super()
        this.state = {

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
        if (data.team_name !== '') {
            axios.post('/api/addteam', data)
                .then(() => {
                    //this is what is broken...
                    this.props.getTeamInfo().then(res => {
                        this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                            this.props.getCompanyTeamInfo(this.props.user.user_company)
                        })
                    })
                })
        } else {
            alert('Not created due to lack of name!')
        }
    }

    render() {

        return (
            <div className="team-container">
                <div className="team-modal">
                    <div className="top">
                        <div>Creating Team</div>
                    </div>
                    <div className="hmm">......</div>
                    <div className="teamname">
                        <input className="nameinput" onChange={(e) => this.props.editTeamName(e.target.value)}
                            placeholder="Team Name (Required)" fullWidth='false'/>
                    </div>
                    <div className="teamdescription">
                        <textarea className="teamdesbox" onChange={(e) => this.props.editTeamDescription(e.target.value)}
                            placeholder="Team Description" fullWidth='false' />
                    </div>
                    <div className="teaminfo">
                    </div>
                    <Link to='/display-teams'><button className="save" onClick={() => this.submitTeam()}>Save Changes</button></Link>
                    <Link to='/display-teamss'><button className="cancel">Cancel</button></Link>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {
    editTeamName, editTeamDescription, getCompanyInfo, getCompanyTeamInfo
})(CreateTeam)