import React, { Component } from 'react';
import './display-users.css';
import RaisedButton from 'material-ui/RaisedButton';
import { getUserInfo, getCompanyInfo, getCompanyUsersInfo } from '../../redux/reducers/main-reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
let style = {
    margin: 12,
};

class DisplayUsers extends Component {


    deleteUser(id) {
        confirmAlert({
            title: 'Confirm to submit',                     
            message: 'Are you sure you want to do this?',   
            confirmLabel: 'Confirm',                        
            cancelLabel: 'Cancel',                          
            onConfirm: () => { axios.delete(`/api/delete/user/${id}`)
            .then(() => {
                this.props.getUserInfo().then(res => {
                    this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                        this.props.getCompanyUsersInfo(this.props.user.user_company)
                    })
                })
            })},    // Action after Confirm
            onCancel: () => null,
        })
    }

    render() {
        let userInfo = this.props.company_users.map((e, i) => {
            return (
                <div key={i}>
                    <div className="user-data">
                        <div className="user-name">
                            {e.user_firstname} {e.user_lastname}
                        </div>
                        <div className="user-email">
                            {e.user_email}
                        </div>
                    </div>
                    <Link to="/edit-user"><RaisedButton label="Edit User" primary={true} style={style} /></Link>
                    <RaisedButton onClick={() => this.deleteUser(e.user_id)} label="Delete User" secondary={true} style={style} />
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

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { getUserInfo, getCompanyInfo, getCompanyUsersInfo })(DisplayUsers)
