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
            user_role: this.props.user_role,
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
    }

    render() {

        return (
            <div className="profile-modal">
                <div className="heading">Creating User....</div>
                <div className="firstname">
                    <TextField onChange={(e) => this.props.editUserFirstname(e.target.value)}
                        hintText="First Name" />
                </div>
                <div className="lastname">
                    <TextField onChange={(e) => this.props.editUserLastname(e.target.value)}
                        hintText="Last Name" />
                </div>
                <div className="email">
                    <TextField onChange={(e) => this.props.editUserEmail(e.target.value)}
                        hintText="Email"
                    />
                </div>

                <div className="team">
                    <TextField onChange={(e) => this.props.editUserTeam(e.target.value)}
                        hintText="Team" />
                </div>
                <div className="Role">
                    <TextField onChange={(e) => this.props.editUserRole(e.target.value)}
                        hintText="Role" />
                </div>
                <Link to='/display-users'><button className="save" onClick={() => this.submitUser()}>Save Changes</button></Link>
                <Link to='/display-users'><button className="cancel">Cancel</button></Link>
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