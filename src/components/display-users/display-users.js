import React, { Component } from 'react';
import './display-users.css';
import RaisedButton from 'material-ui/RaisedButton';
import { getUserInfo, getCompanyInfo, getCompanyUsersInfo } from '../../redux/reducers/main-reducer';
// eslint-disable-next-line
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
            message: 'Are you sure you want to do this.',   
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
                <div key={i} className='display-users-users-display'>
                    <div className="user-data">
                        <div className="user-name">
                            {e.user_firstname} {e.user_lastname}
                        </div>
                        <div className="user-email">
                            {e.user_email}
                        </div>
                    </div>
                    <div className='display-users-users-display-button-div'>
                        <Link to={ { pathname: "/edit-user", query: { fName: e.user_firstname, lName: e.user_lastname, email: e.user_email } } }><button className='display-users-edit-button' >Edit User</button></Link>
                        <button className='display-users-delete-button' onClick={() => this.deleteUser(e.user_id)} >Delete User</button>
                    </div>
                </div>
            )
        })


        return (
            <div className="display-users-container">
                <div className="title">
                    Company User List
                </div>
                <div className="button-container">
                    <Link to="/create-user"><button className='display-users-create-new-button'>+ Create New User</button></Link>
                </div>
                <div className="display-users-data-column">
                    {userInfo}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { getUserInfo, getCompanyInfo, getCompanyUsersInfo })(DisplayUsers)
