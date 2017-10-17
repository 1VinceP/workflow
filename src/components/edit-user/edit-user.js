import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './edit-user.css';
import {  editUserFirstname
        , editUserLastname
        , editUserEmail
        , editUserPictureUrl
        , editUserDisplayName
        , editUserTeam
        , editUserRole
        } from '../../redux/reducers/main-reducer'


export default class EditUser extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className="profile-modal">
                <div className="firstname">
                    <TextField hintText="First Name" />
                </div>
                <div className="lastname">
                    <TextField hintText="Last Name" />
                </div>
                <div className="email">
                    <TextField  
                    /* hintText={users.user_email} */
                    defaultValue="your.email@email.com"
                     />
                </div>
                <div className="picture">
                    <TextField hintText="Picture URL" />
                </div>
                <div className="display-name">
                    <TextField 
                    /* defaultValue={users.user_display_name} */
                    defaultValue="Display Name Here" />
                </div>
                <div className="company">
                    <TextField disabled={true} hintText="Your Company" />
                </div>
                <div className="team">
                    <TextField hintText="Team" />
                </div>
                <div className="role">
                    <TextField hintText="Role" />
                </div>

            </div>
        )
    }
}
