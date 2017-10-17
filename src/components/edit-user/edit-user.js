import React, { Component } from 'react';
import TextField from 'material-ui/TextField';


export default class EditUser extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className="">
                <div className="">
                    <TextField hintText="First Name" />
                </div>
                <div className="">
                    <TextField hintText="Last Name" />
                </div>
                <div className="">
                    <TextField disabled={true} hintText={users.user_email} />
                </div>
                <div className="">
                    <TextField hintText="Picture URL" />
                </div>
                <div className="">
                    <TextField defaultValue={users.user_display_name} />
                </div>
                <div className="">
                    <TextField hintText="Company" />
                </div>
                <div className="">
                    <TextField hintText="Team" />
                </div>
                <div className="">
                    <TextField hintText="Role" />
                </div>

            </div>
        )
    }
}
