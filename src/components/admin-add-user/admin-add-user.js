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
        var x = e
        this.setState({
            role: x
        })
        return console.log("ROLLLLLLLLLE",this.state.role)
    }

    render() {
        
        return (
            <div className="user-container">
                <div className="create-user-main-container">
                    <div className="profile-modal">
                        <div className="create-user-header">
                            <span className="heading">Create User</span>
                        </div>
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
                            <div className="field">
                                <TextField onChange={(e) => this.props.editUserTeam(e.target.value)}
                                    placeholder="Team" />
                            </div>
                            <div className='dashboard-input-names-cont'>
                                <select className='dashboard-input-names' onChange={(e) => { this.roleFunction(e.target.value) }} selected='User Role'>
                                    <option selected='selected' disabled='Disabled'>User Role</option>
                                    <option value={0}>Employee</option>
                                    <option value={1}>Manager</option>
                                </select>
                            </div>

                        </div>

                        <div className="create-user-buttons">
                            <a><button className="save1" onClick={() => this.submitUser()}>Save Changes</button></a>
                            <Link to='/display-users'><button className="cancel1">Cancel</button></Link>
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