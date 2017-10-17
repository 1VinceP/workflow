import React, { Component } from 'react';
import './dashboard.css';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
// import FontIcon from 'material-ui/FontIcon';

let styles = {
    righty: {
        position: 'absolute',
        right: '0',
        marginRight: '20px',
        marginTop: '10px'
    },
    icon: {
        position: 'absolute',
        left: 0,
        top: 5,
        transform: 'translateX(-13.5vw)'
    }
}

class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard-view">
                <div className="dash-wrapper">
                    <div className="button-span">
                        <FlatButton style={styles.righty} className="project-button"
                            backgroundColor="#6acbe0"
                            hoverColor="#6859ea"
                            rippleColor="white"
                            label="+ New Project" />
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

export default Dashboard;