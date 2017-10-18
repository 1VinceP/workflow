import React, { Component } from 'react';
import './display-projects.css';
import RaisedButton from 'material-ui/RaisedButton';
// eslint-disable-next-line
import axios from 'axios';
import {Link} from 'react-router-dom';

let style = {
    margin: 12,
};

export default class DisplayProjects extends Component {
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
                    This will be project data
                </div>
                <Link to="/edit-team"><RaisedButton label="Edit Team" primary={true} style={style} /></Link>
                </div>
            )
        })

        return (
            <div className="display-team-container">
                <div className="user-team-wrapper">
                    <div className="title">
                        Company Project List
                    </div>
                    <div className="button-container">
                        <Link to="/create-project"><RaisedButton primary={true} label="+ Create New Project" /></Link>
                    </div>
                    <div className="left-column">
                        This will be project info
                <RaisedButton label="Delete project" secondary={true} style={style} />
                    </div>
                    <div className="right-column">
                    This will be project info
                    </div>
                </div>
            </div>
        )
    }
}

