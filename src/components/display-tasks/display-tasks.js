import React, { Component } from 'react';
import './display-tasks.css';
import RaisedButton from 'material-ui/RaisedButton';
// eslint-disable-next-line
import axios from 'axios';
import {Link} from 'react-router-dom';

let style = {
    margin: 12,
};

export default class DisplayTasks extends Component {
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
// eslint-disable-next-line
        let teamInfo = this.state.teamdata.map((e, i) => {
            return (
                <div>
                <div className="team-data">
                    This will be task data
                </div>
                <Link to="/edit-team"><RaisedButton label="Edit Team" primary={true} style={style} /></Link>
                {/* <RaisedButton label="Delete Team" secondary={true} style={style} /> */}
                </div>
            )
        })

        return (
            <div className="display-task-container">
                <div className="user-task-wrapper">
                    <div className="title">
                        Company Task List
                    </div>
                    <div className="button-container">
                        <Link to="/create-task"><button className='display-tasks-create-new'>+ New Task</button></Link>
                    </div>
                    <div className="left-column">
                        This will be task info
                {/* <RaisedButton label="Delete Task" secondary={true} style={style} /> */}
                <button className='display-tasks-delete-button' >Delete Task</button>
                    </div>
                    <div className="right-column">
                    This will be task info
                    </div>
                </div>
            </div>
        )
    }
}

