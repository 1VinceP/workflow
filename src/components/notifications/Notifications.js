import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './notifications.css';
import { getUserInfo, editTeamName, editTeamDescription, getCompanyInfo, getCompanyTeamInfo } from '../../redux/reducers/main-reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SideBarNav from '../dashboard/Sidebar'
import { Button, Icon } from 'semantic-ui-react'

class Notifications extends Component {
    constructor() {
        super()
        this.state = {
            notification: '',
            notifications1: {},
            notifications2: {},
        }

    }

    deleteNotification(note_id) {

        axios.delete(`/api/delete_notification/${note_id}`).then(() => {
            axios.get(`/api/company_notifications/${this.props.user.user_company}`).then(res => {
                this.setState({
                    notifications1: res.data[0],
                    notifications2: res.data[1]
                })
            })
        })
    }

    addNotification(message) {
        this.setState({
            notification: message
        })
    }

    cancelNotification() {
        return window.location.href = 'http://104.131.104.218:3005/#/dashboard'
    }

    submitNotification() {
        let data = {
            notification: this.state.notification,
            notification_company: this.props.user.user_company * 1,
            notification_date: new Date(),
            notification_user_name: `${this.props.user.user_firstname} ${this.props.user.user_lastname}`,
            notification_user: this.props.user.user_id * 1,
        }
        axios.post('/api/add-notification', data)
            .then(() => {
                this.props.getUserInfo().then(res => {
                    this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                        this.props.getCompanyTeamInfo(this.props.user.user_company)
                    })
                })
            })
        return window.location.href = 'http://104.131.104.218:3005/#/dashboard'
    }

    componentWillMount() {
        if (!this.props.user) {
            return window.location.href = 'http://104.131.104.218:3005/#/'
        } else if (this.props.user.user_role === 0) {
            return window.location.href = 'http://104.131.104.218:3005/#/dashboard'
        } else {
            axios.get(`/api/company_notifications/${this.props.user.user_company}`).then(res => {
                this.setState({
                    notifications1: res.data[0],
                    notifications2: res.data[1]
                })
            }).then(() => {
                return("STATE", this.state)
            })
        }
    }

    // }
    render() {

        return (
            <div>
                <div className="notification-container">
                    <SideBarNav />
                    <div className="notification-modal">
                        <div className="top">
                            <div>Create Notification</div>
                        </div>

                        <div>
                            <textarea className="nameinputss-not" onChange={(e) => this.addNotification(e.target.value)}
                                placeholder="Notification" maxLength={100} />
                            <div className='project-character-count'>{this.state.notification.length}/{100}</div>
                        </div>


                        <div className='button-container-create-notification'>
                            <button className="cancel-not" onClick={() => { this.cancelNotification() }}>Cancel</button>
                            <button className="save-not" onClick={() => this.submitNotification()}>Send</button>
                        </div>
                    </div>

                </div>
                <div className="notification-modal-created-container">
                    <div className="notifications-created-title-cont">
                        <div className='notifications-created-title'>Current Notifications</div>
                    </div>
                    <div>
                        <div>

                        </div>
                        <div>{this.state.notifications1 === {} || this.state.notifications1 === undefined ?
                            null :
                            <div className='notifications-trash-icon' >
                                <div className='notifications_actual_icon' >
                                    <Icon name='trash' onClick={() => { this.deleteNotification(this.state.notifications1.id) }} />
                                </div>
                                <div>
                                    {this.state.notifications1.notification}
                                </div>
                            </div>}</div>

                        <div>{this.state.notifications2 === {} || this.state.notifications2 === undefined ?
                            null :
                            <div className='notifications-trash-icon' >
                                <div className='notifications_actual_icon' >
                                    <Icon name='trash' onClick={() => { this.deleteNotification(this.state.notifications2.id) }} />
                                </div>
                                <div>
                                    {this.state.notifications2.notification}
                                </div>
                            </div>}</div>
                    </div>

                </div>


            </div>

        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {
    getUserInfo,
    editTeamName, editTeamDescription, getCompanyInfo, getCompanyTeamInfo
})(Notifications)
