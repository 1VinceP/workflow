import React, { Component } from 'react';
import './dashboard.css';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import NewMenu from '../new-menu/new-menu';
import axios from 'axios';

let styles = {
    
    icon: {
        position: 'absolute',
        left: 0,
        top: 5,
        transform: 'translateX(-13.5vw)'
    }
}

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
         
        }
    }

    render() {
        return (
            <div className="dashboard-view">
                <div className="dash-wrapper">
                    <div className="button-span">
                        
                        <NewMenu />
                    </div>
                    <div className="content-wrapper">
                        <div className="left-side">
                            <div className="notifications">
                                <Badge 
                                    badgeContent={1}
                                    secondary={true}
                                    badgeStyle={{ top: 6, left: 9, height: 15, width: 15, transform: 'translateX(-11vw)' }}>
                                    <IconButton style={styles.icon} tooltip="Notifications">
                                        <NotificationsIcon />
                                    </IconButton>
                                </Badge>
                            </div>
                            <div className="calendar">
                            {/* <FontIcon className="material-icons">date_range</FontIcon> */}
                            </div>
                        </div>
                        <div className="task-list"></div>
                    </div>
                    <div className="current-stats-wrapper"></div>
                </div>
            </div>
        )
    }
}
