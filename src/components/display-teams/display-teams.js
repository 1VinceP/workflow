import React, { Component } from 'react';
import './display-teams.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUserInfo, getCompanyInfo, getCompanyTeamInfo, getCompanyUsersInfo } from '../../redux/reducers/main-reducer';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import _ from 'underscore-node'
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'
import LeftNav from '../dashboard/Sidebar'

class DisplayTeams extends Component {



    deleteUser(id) {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to do this.',
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: () => {
                axios.delete(`/api/delete/team/${id}`)
                    .then(() => {
                        this.props.getUserInfo().then(res => {
                            this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                                this.props.getCompanyUsersInfo(this.props.user.user_company)
                                this.props.getCompanyTeamInfo(this.props.user.user_company)
                            })
                        })
                    })
            },    // Action after Confirm
            onCancel: () => null,
        })
    }

    usersForTeam(id) {
        var theUsers = this.props.company_users
        var usersForTeam = theUsers.map((e, i) => {
            if (e.user_team === id) {
                return (
                    <div key={i} className="display-teams-users-users">
                        {e.user_firstname} {e.user_lastname}
                    </div>
                )
            }
        })
        return usersForTeam
    }


    editTeam(team, description, id) {
        var diff;
        var add
        var newArray = []
        var arrayCopy = []
        var theUsers = this.props.company_users
        let data = {
            team_name: team,
            team_description: description,
            team_id: id
        }
        let userToAdd = {
            user_team: id,
            user_id: null
        }
        function teamNameDescription(e) {
            data.team_name = e.target.value
        }
        function teamDescriptionFunction(e) {
            data.team_description = e.target.value
        }
        function addUserToTeam(e, array) {

            var user = e;
            var x;
            if (array.includes(user)) {
                x = array.indexOf(user)
                array.splice(x, 1)
            } else {
                newArray.push(user)
            }
            diff = _.difference(arrayCopy, array)
            add = _.difference(array, arrayCopy)
            console.log('DIFFFF:', diff)
            console.log('ADDDD: ', add)
            return array
        }

        theUsers.map((e, i) => {
            if (e.user_team === id) {
                newArray.push(e.user_id)
                arrayCopy.push(e.user_id)
            }
        })
        var usersForTeam = theUsers.map((e, i) => {
            return (
                <div key={i}>
                    <input onClick={() => addUserToTeam(e.user_id, newArray)} id={e.user_id} defaultChecked={e.user_team === id ? true : false} type="checkbox" className="edit-team-users-user" />
                    <label className="edit-user-label" htmlFor={e.user_id}>{e.user_firstname} {e.user_lastname} {e.user_team === null || e.user_team === id ? null : '*'} </label>
                </div>
            )

        })

        confirmAlert({
            title: 'Edit Team',
            message: (
                <div className="edit-team-popup">
                    <span className="edit-team-name-span">Team Name: </span><br />
                    <input maxLength={30} className='edit-team-name-input-box' defaultValue={team} onChange={(e) => teamNameDescription(e)} />
                    <br />
                    <span className="edit-description-span">Description:</span>
                    <br />
                    <textarea maxLength={300} className="edit-team-description" defaultValue={description} onChange={(e) => teamDescriptionFunction(e)} />
                    <div className="edit-team-users-section">
                        <div className="edit-team-users-span">
                            <span className="users-header">Users</span>
                            <span className="assigned-star">*</span><span className="already-on-team-span"> Currently assigned to another team</span>
                        </div>
                        <div className="edit-team-users-container">
                            <br />
                            {usersForTeam}
                            <br />
                        </div>
                    </div>
                </div>),
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: () => {
                var post = Object.assign({}, {
                    team_name: data.team_name && data.team_name,
                    team_description: data.team_description && data.team_description,
                    team_id: data.team_id
                })
                if (diff) {
                    diff.map((e, i) => {
                        axios.post(`/api/edituser/removeteam/${e}`)
                    })
                }
                if (add) {
                    add.map((e, i) => {
                        axios.post(`/api/edituser/team`, { user_team: id, user_id: e }).then(res => {
                            console.log("RESSSS", res)
                        })
                    })
                }

                axios.post('/api/editteam', post)
                    .then(() => {
                        this.props.getUserInfo().then(res => {
                            this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                                this.props.getCompanyUsersInfo(this.props.user.user_company)
                                this.props.getCompanyTeamInfo(this.props.user.user_company)

                            })
                        })
                    })

            },

            onCancel: () => null,
        })

    }




    render() {

        let teamInfo = this.props.company_team.map((e, i) => {
            return (
                <div key={i} className="team-container-yo">
                    <div className="team-section">
                        <div className="team-name-description">
                            <div className="team-name-description-section">
                                <div className="team-name-users-header">
                                    <div className="team-name-header">
                                        {e.team_name}
                                    </div>
                                </div>
                                <div className="description-and-users">
                                    <div className="team-description-div">
                                        <span className="team-description">{e.team_description}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="users-on-team-div">
                                <span className="users-span">{this.usersForTeam(e.team_id)}</span>
                            </div>
                            <div className="team-buttons-div">
                                <Button onClick={() => this.editTeam(e.team_name, e.team_description, e.team_id)} size="big" className="team-settings-button">
                                    <Icon name='setting' />
                                </Button>
                                <Button onClick={() => this.deleteUser(e.team_id)} size="big" className="team-delete-button">
                                    <Icon name='trash' />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="team-analytics-container">
                <div className="team-charts-container">
                    <div className="team-charts-main">
                        <LeftNav />

                        <div className="team-table-container">
                            <div className="team-top-table">
                                <div className="team-top-table-text">
                                    <span className="display-team-name-header">Name</span>
                                    <span>Team Members</span>
                                </div>
                                {this.props.company_team[0] ? teamInfo :
                                    <div className="no-team-box">
                                        <span className="no-team-span">No teams created yet</span>
                                        <Link to='/create-team'><button className="no-team-button">Create a team</button></Link>
                                    </div>

                                }
                            </div>
                        </div>

                        <div className="team-right-navbar">
                            <span className="team-right-navbar-title">Teams</span>
                            <Link className="create-users-button-right" to='create-team'><button className="team-create-user-button">Create Team</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { getUserInfo, getCompanyInfo, getCompanyTeamInfo, getCompanyUsersInfo })(DisplayTeams)
