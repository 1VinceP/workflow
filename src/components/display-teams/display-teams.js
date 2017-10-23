import React, { Component } from 'react';
import './display-teams.css';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getUserInfo, getCompanyInfo, getCompanyTeamInfo, getCompanyUsersInfo } from '../../redux/reducers/main-reducer';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import _ from 'underscore-node'
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
let style = {
    margin: 12,
};

const options = [
    { key: 'angular', text: 'John Wall', value: 'angular' },
    { key: 'css', text: 'Steve Jobs', value: 'css' },
    { key: 'design', text: 'Steph Curry', value: 'design' },
    { key: 'ember', text: 'Shaq', value: 'ember' },
    { key: 'html', text: 'Allen Iverson', value: 'html' },
    { key: 'ia', text: 'Paul George', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby', defaultSelectedLabel: 'true' },
    { key: 'ui', text: 'UI Design', value: '1', defaultSelectedLabel: true },
    { key: 'ux', text: 'User Experience', value: '2', selected: 'true' },
  ]



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
        // eslint-disable-next-line
        var teamId = id
        // eslint-disable-next-line
        var newArray = []
        var theUsers = this.props.company_users
        // return (<img src={x} alt="" />)
        // eslint-disable-next-line 
        var usersForTeam = theUsers.map((e, i) => {
            if (e.user_team === id) {
                return (
                    <div key={i}>
                        <br />
                        {e.user_firstname} {e.user_lastname}
                        <div>
                            {e.user_email}
                        </div>
                        <br />
                    </div>
                )
            }
        })
        return usersForTeam
    }

    // editUsersForTeam(id) {
    //     //use underscore to compare the array copy and newarray.

    //     function addUserToTeam(e, array) {

    //         var user = e;
    //         var x;
    //         var diff;
    //         var add;
    //         if (array.includes(user)) {
    //             x = array.indexOf(user)
    //             array.splice(x, 1)
    //         } else {
    //             newArray.push(user)
    //         }
    //         console.log('CLICKED NEW ARRAY:', array)
    //         console.log('Array Copy YOOOOO: ', arrayCopy)
    //         diff = _.difference(arrayCopy, array)
    //         add = _.difference(array, arrayCopy)
    //         console.log('DIFFFFF', diff)
    //         console.log('Users To Add:', add)
    //         return array
    //     }
    //     var newArray = []
    //     var teamId = id
    //     var arrayCopy = []
    //     var theUsers = this.props.company_users
    //     // return (<img src={x} alt="" />)
    //     // eslint-disable-next-line
    //     theUsers.map((e, i) => {
    //         if (e.user_team === id) {
    //             newArray.push(e.user_id)
    //             arrayCopy.push(e.user_id)
    //         }
    //     })
    //     var usersForTeam = theUsers.map((e, i) => {
    //         return (
    //             <div key={i}>
    //                 <input onClick={() => addUserToTeam(e.user_id, newArray)} id={e.user_id} defaultChecked={e.user_team === id ? true : false} type="checkbox" className="edit-team-users-user" />
    //                 <label htmlFor={e.user_id}>{e.user_firstname} {e.user_lastname}</label>
    //             </div>
    //         )
    //         // }
    //     })
    //     console.log('NewAray YOOOOO: ', newArray)
    //     console.log('Array Copy YOOOOO: ', arrayCopy)
    //     return usersForTeam
    // }


    //                  edit user team                  //



    // for (let u = 0; u < add.length; u++) {
    //     console.log('USER ID LOOP', add[u])
    //     userToAdd.user_id = add[u];
    //     console.log("ADD ARRAY:", add)
    //     axios.post(`/api/edituser/team`, userToAdd).then(res => {
    //         console.log("RESSSS", res)
    //     })
    // }
    // for (let i = 0; i < diff.length; i++) {
    //     axios.post(`/api/edituser/removeteam/${diff[i]}`)
    //     console.log("DIFF i", diff[i])
    // }


    // var usersForTeam = theUsers.map((e, i) => {
    //     return (
    //         <div key={i}>
    //             <input onClick={() => addUserToTeam(e.user_id, newArray)} id={e.user_id} defaultChecked={e.user_team === id ? true : false} type="checkbox" className="edit-team-users-user" />
    //             <label htmlFor={e.user_id}>{e.user_firstname} {e.user_lastname}</label>
    //         </div>
    //     )
    // })


    // var theUsers = this.props.company_users
    // var newArray = []
    // var arrayCopy = []
    // var diff;
    // var add;

    // function addUserToTeam(e, array) {
    //     var user = e;
    //     var x;
    //     if (array.includes(user)) {
    //         x = array.indexOf(user)
    //         array.splice(x, 1)
    //     } else {
    //         newArray.push(user)
    //     }
    //     diff = _.difference(arrayCopy, array)
    //     add = _.difference(array, arrayCopy)
    //     return array
    // }
    // theUsers.map((e, i) => {
    //     if (e.user_team === id) {
    //         newArray.push(e.user_id)
    //         arrayCopy.push(e.user_id)
    //     }
    // })


    dropdownForUsers(){
    
        var theUsers = this.props.company_users
        var user = []
        theUsers.map((e, i) => {
            user.push(
                { value: e.user_id, label: e.user_firstname + " " + e.user_lastname})
        })
        return user
        // console.log("USERS OBJECTTTT:" , user)
    }


    checkIfUserOnTeam(id){
        var onTeam = []
        var theUsers = this.props.company_users
        theUsers.map((e, i) => {
            if(e.user_team === id){
                onTeam.push(e.user_id)
            }
        })
        return onTeam
    }


    clickedUser(e){
        var x = e.target.value
        // console.log("USERS", theUsers[i].text)
        console.log('EEEE,', e)
        console.log('IT WORKED LOL', x)
    }









    editTeam(team, description, id) {
        var teamId = id
        let data = {
            team_name: team,
            team_description: description,
            team_id: id
        }
        function teamNameDescription(e) {
            data.team_name = e.target.value
        }
        function teamdescriptionFunction(e) {
            data.team_description = e.target.value
        }


        confirmAlert({
            title: 'Edit Team',
            message: (
                <div className="edit-team-popup">
                    <span>Team Name: <input defaultValue={team} onChange={(e) => teamNameDescription(e)} /></span><br />
                    <span>Description:</span>
                    <br />
                    <textarea className="edit-team-description" defaultValue={description} onChange={(e) => teamdescriptionFunction(e)} />
                </div>),
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: () => {
                var post = Object.assign({}, {
                    team_name: data.team_name && data.team_name,
                    team_description: data.team_description && data.team_description,
                    team_id: data.team_id
                })

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
                <div className="team-container-yo">
                    <div key={i} className="team-section">
                        <div className="team-name-description">
                            <div onClick={() => this.dropdownForUsers()} className="team-name-header">
                                {e.team_name}
                            </div>
                            <div className="header-underline">
                            </div>
                            <div className="team-description-div">
                                <span className="team-description">{e.team_description}</span>
                            </div>
                        </div>
                        {/* {this.usersForTeam(e.team_id)} */}
                    <div className="team-buttons-div">
                        <Button onClick={() => this.editTeam(e.team_name, e.team_description, e.team_id)} color="white" size="big" className="team-settings-button">
                            <Icon name='setting' />
                        </Button>
                        <Button onClick={() => this.deleteUser(e.team_id)} color="white" size="big" className="team-delete-button">
                            <Icon name='trash' />
                        </Button>
                    </div>
                    </div>
                    <div className="team-users-dropdown">
                    <Select value="one" className="team-user-dropdown" options={this.dropdownForUsers()} />
                    {/* <span className="team-members-span">Team Members</span> */}
                    </div>

                </div>
            )
        })

        return (
            <div className="analytics-container">

                <div className="charts-container">
                    <div className="charts-main">
                        <div className="charts-left-navbar">
                            <span className="analytics-navbar-title">Home</span>
                            <span>Create Team</span>
                            <span>Create User</span>
                            <span>Productivity</span>
                        </div>

                        <div>
                            {teamInfo}
                        </div>
                        {/* <div className="table-container"> */}
                        {/* <Table2 /> */}
                        {/* </div> */}
                        <div className="charts-right-navbar">
                            <span className="right-navbar-title">Stay Updated</span>
                            <span>Setup Alerts to stay up to date.</span>
                            <button className="alert-button">Get Alerts</button>
                        </div>
                    </div>

                    <div className="charts-left-navbar under-nav">
                        <span className="analytics-navbar-title">By Date</span>
                        <span>Today</span>
                        <span>This week</span>
                        <span>Month-to-date</span>
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
