import React, { Component } from 'react';
import './display-teams.css';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import {Link} from 'react-router-dom';

let style = {
    margin: 12,
};

export default class DisplayTeams extends Component {
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
                        Company Team List
                    </div>
                    <div className="button-container">
                        <Link to="/create-team"><RaisedButton primary={true} label="+ Create New Team" /></Link>
                    </div>
                    <div className="left-column">
                        This will be team info
                <RaisedButton label="Delete Team" secondary={true} style={style} />
                    </div>
                    <div className="right-column">
                    This will be team info
                    </div>
                </div>
            </div>
        )
    }
}

