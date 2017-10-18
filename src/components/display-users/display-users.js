import React, { Component } from 'react';
import './display-users.css';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

let style = {
    margin: 12,
};

export default class DisplayUsers extends Component {
    constructor() {
        super();

        this.state = {
            userdata: []
        }
    }

    componentDidMount() {
        axios.get('/api/getusers').then(res => {
            this.setState({
                userdata: res.data
            })
            console.log(this.state.userdata)
        })
    }

    render() {

        let userInfo = this.state.userdata.map((e, i) => {
            return (
                <div>
                <div className="user-data">
                    <div className="user-name">
                        {e.user_firstname}{e.user_lastname}
                    </div>
                    <div className="user-email">
                        {e.user_email}    
                    </div>
                </div>
                <RaisedButton label="Edit User" primary={true} style={style} />
                <RaisedButton label="Delete User" secondary={true} style={style} />
                </div>
            )
        })

        return (
            <div className="display-users-container">
                <div className="user-data-wrapper">
                    <div className="title">
                        Company User List
                    </div>
                    <div className="button-container">
                        <RaisedButton primary={true} label="+ Create New User" />
                    </div>
                    <div className="left-column">
                        {userInfo}
                    </div>
                    <div className="right-column">
                        {userInfo}
                    </div>
                </div>
            </div>
        )
    }
}

