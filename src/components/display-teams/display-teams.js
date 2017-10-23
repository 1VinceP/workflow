import React, { Component } from 'react';
import './display-teams.css';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUserInfo, getCompanyInfo, getCompanyTeamInfo } from '../../redux/reducers/main-reducer';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

let style = {
    margin: 12,
};

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
                                this.props.getCompanyTeamInfo(this.props.user.user_company)
                            })
                        })
                    })
            },    // Action after Confirm
            onCancel: () => null,
        })
    }

    usersForTeam(id) {
        var teamId = id
        var newArray = []
        var theUsers = this.props.company_users
        // return (<img src={x} alt="" />)
        var usersForTeam = theUsers.map((e, i) => {
            if (e.user_team === id) {
                return (
                    <div key={i}>
                        <br/>
                        {e.user_firstname} {e.user_lastname}
                        <div>
                            {e.user_email}
                        </div>
                        <br/>
                    </div>
                )
            }
        })
        return usersForTeam
    }

    editUsersForTeam(id) {
        //use underscore to compare the array copy and newarray.
        
       function addUserToTeam(e, array){
           
            var user = e;
            var x;
            if(array.includes(user)){
                x = array.indexOf(user)
                array.splice(x, 1)
            } else {
                newArray.push(user)
            }
            console.log('CLICKED NEW ARRAY:', array)
            console.log('Array Copy YOOOOO: ', arrayCopy)
            return array
        }
        var newArray = []
        var teamId = id
        var arrayCopy = []
        var theUsers = this.props.company_users
        // return (<img src={x} alt="" />)
        theUsers.map((e, i) => {
            if(e.user_team === id){
                newArray.push(e.user_id)
                arrayCopy.push(e.user_id)
            }
        })
        var usersForTeam = theUsers.map((e, i) => {
                return (
                    <div key={i}>
                        <input onClick={() => addUserToTeam(e.user_id, newArray)} id={e.user_id} defaultChecked={e.user_team === id ? true : false} type="checkbox" className="edit-team-users-user" />
                        <label htmlFor={e.user_id}>{e.user_firstname} {e.user_lastname}</label>
                    </div>
                )
    // }
})
console.log('NewAray YOOOOO: ', newArray)
console.log('Array Copy YOOOOO: ', arrayCopy)
return usersForTeam
    }







editTeam(team, description, id) {

    // let firstNameInput = ''
    // let lastNameInput = ''
    // let emailInput = ''
    console.log("PROPS ID:", id)
    let data = {
        team_name: team,
        team_description: description,

        team_id: id
    }
    function teamNameDescription(e) {
        console.log(e.target.value)
        data.team_name = e.target.value
    }
    function teamdescriptionFunction(e) {
        console.log(e.target.value)
        data.user_lastname = e.target.value
    }


    confirmAlert({
        title: 'Edit Team',
        message: (
            <div className="edit-team-popup">
                <span>Team Name: <input defaultValue={team} onChange={(e) => teamNameDescription(e)} /></span><br />
                <span>Description:</span> 
                <br />
                <textarea className="edit-team-description" defaultValue={description} onChange={(e) => teamdescriptionFunction(e)} />
                <div className="edit-team-users-section">
                    <span className="users-header">Users</span>
                    <div className="edit-team-users-container">
                    <br/>
                        {this.editUsersForTeam(id)}
                        <br/>
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
            axios.post('/api/edituser', post)
                .then(() => {
                    this.props.getUserInfo().then(res => {
                        this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                            this.props.getCompanyUsersInfo(this.props.user.user_company)
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
            <div key={i}>
                <div className="user-data">
                    <div className="user-name">
                        {e.team_name}
                    </div>
                    <div className="user-email">
                        {e.team_description}
                    </div>
                    <br />
                    Team Users:
                        <br />
                    {this.usersForTeam(e.team_id)}
                </div>
                <RaisedButton onClick={() => this.editTeam(e.team_name, e.team_description, e.team_id)} label="Edit Team" primary={true} style={style} />
                <RaisedButton onClick={() => this.deleteUser(e.team_id)} label="Delete Team" secondary={true} style={style} />
            </div>
        )
    })

    return (
        <div className="display-team-container">
            <div className="user-team-wrapper">
                <div className="title">
                    Company Team List
                    </div>
                <div className="button-container">
                    <Link to="/create-team"><RaisedButton primary={true} label="+ Create New Team" /></Link>
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

export default connect(mapStateToProps, { getUserInfo, getCompanyInfo, getCompanyTeamInfo })(DisplayTeams)
