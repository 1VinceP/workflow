import React, { Component } from 'react';
import './display-users.css';
import RaisedButton from 'material-ui/RaisedButton';
// eslint-disable-next-line
import axios from 'axios';
import {Link} from 'react-router-dom';

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

    // componentDidMount() {
    //     axios.get('/api/getusers').then(res => {
    //         this.setState({
    //             userdata: res.data
    //         })
    //         console.log(this.state.userdata)
    //     })
    // }

    render() {

        let userInfo = this.state.userdata.map((e, i) => {
            return (
                <div>
                <div className="user-data">
                    <div className="user-name">
                        {e.user_firstname}{e.user_lastname}
                        Test User
                    </div>
                    <div className="user-email">
                        {e.user_email}    
                        Testemail@gmail.com
                    </div>
                </div>
                <Link to="/edit-user"><RaisedButton label="Edit User" primary={true} style={style} /></Link>
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
                        <Link to="/create-user"><RaisedButton primary={true} label="+ Create New User" /></Link>
                    </div>
                    <div className="left-column">
                        {userInfo}
                        <Link to="/edit-user"><RaisedButton label="Edit User" primary={true} style={style} /></Link>
                <RaisedButton label="Delete User" secondary={true} style={style} />
                    </div>
                    <div className="right-column">
                        {userInfo}
                    </div>
                </div>
            </div>
        )
    }
}

