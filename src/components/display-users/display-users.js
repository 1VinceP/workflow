import React, { Component } from 'react';
import './display-users.css';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

let style = {
    margin: 12,
};

export default class DisplayUsers extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className="display-users-container">
                <div className="user-data-wrapper">
                    <div className="title">
                        Company User List
                    </div>
                    <div className="button-container">
                        <RaisedButton primary={true} label="+ Create New User" />
                        {<FlatButton label="+ Create New User" primary={true} />}
                    </div>
                    <div className="left-column">
                        <div className="user-data">
                            <div className="user-name">
                                This will have mapped user name data.
                            </div>
                            <div className="user-email">
                                This will have mapped user email data.
                            </div>
                        </div>
                        <RaisedButton label="Edit User" primary={true} style={style} />
                        <RaisedButton label="Delete User" secondary={true} style={style} />
                    </div>
                    <div className="right-column">
                        <div className="user-data">
                            <div className="user-name">
                                This will have mapped user name data.
                            </div>
                            <div className="user-email">
                                This will have mapped user email data.
                            </div>
                        </div>
                        <RaisedButton label="Edit User" primary={true} style={style} />
                        <RaisedButton label="Delete User" secondary={true} style={style} />
                    </div>
                </div>
            </div>
        )
    }
}

