import React, { Component } from 'react';
import './display-teams.css';
import RaisedButton from 'material-ui/RaisedButton';
import { getTeamInfo, getCompanyInfo, getCompanyTeamsInfo } from '../../redux/reducers/main-reducer';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

let style = {
    margin: 12,
};

class DisplayTeams extends Component {
    deleteTeam(id) {
        confirmAlert({
            title: 'Confirm to submit',                     
            message: 'Are you sure you want to do this?',   
            confirmLabel: 'Confirm',                        
            cancelLabel: 'Cancel',                          
            onConfirm: () => { axios.delete(`/api/delete/team/${id}`)
            .then(() => {
                this.props.getTeamInfo().then(res => {
                    this.props.getCompanyInfo(this.props.team.team_company).then(res => {
                        this.props.getCompanyTeamsInfo(this.props.team.team_company)
                    })
                })
            })},    // Action after Confirm
            onCancel: () => null,
        })
    }

    render() {
        console.log(this.props)
        let teamInfo = this.props.company_teams.map((e, i) => {
            return (
                <div key={i}>
                    <div className="team-data">
                        <div className="team-name">
                          {e.team_name}
                        </div>
                        <div className="team-date">
                          {e.team_date}
                        </div>
                        <div className="team-description">
                          {e.team_description}
                        </div>
                        <div className="team-completion">
                          {e.team_projects_completed}
                        </div>
                    </div>
                    <Link to="/edit-team"><RaisedButton label="Edit Team" primary={true} style={style} /></Link>
                    <RaisedButton onClick={() => this.deleteTeam(e.user_id)} label="Delete Team" secondary={true} style={style} />
                </div>
            )
        })


        return (
            <div className="display-users-container">
                <div className="user-data-wrapper">
                    <div className="title">
                        Company Team List
                    </div>
                    <div className="button-container">
                        <Link to="/create-team"><RaisedButton primary={true} label="+ Create New Team" /></Link>
                    </div>
                    <div className="left-column">
                        <Link to="/edit-team"><RaisedButton label="Edit Team" primary={true} style={style} /></Link>
                        <RaisedButton label="Delete Team" secondary={true} style={style} />
                    </div>
                    <div className="right-column">
                        {teamInfo}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { getTeamInfo, getCompanyInfo, getCompanyTeamsInfo })(DisplayTeams)

