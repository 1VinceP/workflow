import React, { Component } from 'react';
import './display-company.css';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import {Link} from 'react-router-dom';

let style = {
    margin: 12,
};

export default class DisplayCompany extends Component {
    constructor() {
        super();

        this.state = {
            teamdata: []
        }
    }

    // componentDidMount() {
    //     axios.get('/api/getusers').then(res => {
    //         this.setState({
    //             teamdata: res.data
    //         })
    //         console.log(this.state.teamdata)
    //     })
    // }

    render() {

        let teamInfo = this.state.teamdata.map((e, i) => {
            return (
                <div>
                <div className="team-data">
                    This will be team data
                </div>
                <Link to="/edit-team"><RaisedButton label="Edit Team" primary={true} style={style} /></Link>
                {/* <RaisedButton label="Delete Team" secondary={true} style={style} /> */}
                </div>
            )
        })

        return (
            <div className="display-team-container">
                <div className="user-team-wrapper">
                    <div className="title">
                        Company Information
                    </div>
                    <div>This will be Company Info</div>
                    </div>
            </div>
        )
    }
}

