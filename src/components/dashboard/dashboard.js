import React, { Component } from 'react';
import './dashboard.css';
import FlatButton from 'material-ui/FlatButton';

class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard-view">
                <div className="dash-wrapper">
                    <div className="nav-placeholder">Nav</div>
                    <div className="button-span">
                        <FlatButton className="project-button"
                            backgroundColor="#6acbe0"
                            hoverColor="#6859ea"
                            rippleColor="white"
                            label="+ New Project" />
                    </div>
                    <div className="content-wrapper">
                        <div className="left-side">
                            <div className="notifications"></div>
                            <div className="calendar"></div>
                        </div>
                        <div className="task-list"></div>
                    </div>
                    <div className="current-stats-wrapper"></div>
                </div>
            </div>
        )
    }
}

export default Dashboard;