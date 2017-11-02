import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './admin-add-user.css';
import {
    editUserFirstname
    , editUserLastname
    , editUserEmail
    , editUserPictureUrl
    , editUserDisplayName
    , editUserTeam
    , editUserRole
    , getUserInfo
    , getCompanyInfo
    , getCompanyUsersInfo
} from '../../redux/reducers/main-reducer';
import { connect } from 'react-redux';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SideBarNav from '../dashboard/Sidebar';
import utils from '../utlities/utilities';

class AddUser extends Component {
    constructor() {
        super();

        this.state = {
            user_role: ''
        }
        this.submitUser = this.submitUser.bind(this);
    }


    submitUser() {
        console.log(this.props)
        let data = {
            user_firstname: this.props.user_firstname,
            user_lastname: this.props.user_lastname,
            user_email: this.props.user_email,
            user_team: this.props.user_team,
            user_role: this.state.user_role * 1,
            user_company: this.props.user.user_company
            // user_authid: this.props.user_authid
        }
        console.log("DATA", data)
        axios.post('/api/admin/adduser', data)
            .then(() => {
                this.props.getUserInfo().then(res => {
                    this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                        this.props.getCompanyUsersInfo(this.props.user.user_company)
                    })
                })
            })
            return window.location.href ='http://localhost:3000/#/display-users'
    }

    roleFunction(e) {
        console.log("EEEE", e)
        // var x = e
        // this.setState({
        //     role: x
        // })
        // return console.log("ROLLLLLLLLLE",this.state.role)
        this.setState({
            user_role: utils.roleThings( e, this.state.user_role )
        })
    }
    render() {
        let teamInfo = this.props.company_team.map((e, i) => {
            return (
                <option key={i} value={e.team_id}>{`${e.team_name}`}</option>
            )
        })

  
        
        return (
            <div className="user-container">
                <div className='sidenav-spacing-user'>
                <SideBarNav />
                </div>
                <div>
                <div className="profile-modal-add-user">
                    <div className="heading-add-user">Create User</div>
                    <div className="infobox">
                        <div className="field">
                            <TextField onChange={(e) => this.props.editUserFirstname(e.target.value)}
                                hintText="First Name" />
                        </div>
                        <div className="field">
                            <TextField onChange={(e) => this.props.editUserLastname(e.target.value)}
                                hintText="Last Name" />
                        </div>
                        <div className="field">
                            <TextField onChange={(e) => this.props.editUserEmail(e.target.value)}
                                hintText="Email"
                            />
                        </div>
                           
                            <div className='dashboard-input-names-cont'>
                                <select className='dashboard-input-names' onChange={(e) => { this.roleFunction(e.target.value) }} selected='User Role'>
                                    <option selected='selected' disabled='Disabled'>User Role</option>
                                    <option value={0}>Employee</option>
                                    <option value={1}>Manager</option>
                                </select>
                            </div>


                        <div>
                            <select name='taskUser' className='task-create-task-input' onChange={(e) => { this.props.editUserTeam(e.target.value) }}>
                                <option selected='User' disabled='User'>Teams</option>
                                {teamInfo}
                            </select>
                        </div>


                        <div className='button_container-add-user'>
                        <Link to='/display-users'><button className="cancel1">Cancel</button></Link>
                        <Link to='/display-users'><button className="save1" onClick={() => this.submitUser()}>Save</button></Link>
                        </div>
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

export default connect(mapStateToProps, {
    editUserFirstname, editUserLastname
    , editUserEmail
    , editUserPictureUrl
    , editUserDisplayName
    , editUserTeam
    , editUserRole
    , getUserInfo
    , getCompanyInfo
    , getCompanyUsersInfo
})(AddUser)