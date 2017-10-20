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
            message: 'Are you sure you want to do this.',
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: () => {
                axios.delete(`/api/delete/user/${id}`)
                .then(() => {
                    this.props.getUserInfo().then(res => {
                        this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                            this.props.getCompanyUsersInfo(this.props.user.user_company)
                        })
                    })
                })
            },    // Action after Confirm
            onCancel: () => null,
        })
    }

    editUser(first, last, email, id) {

        // let firstNameInput = ''
        // let lastNameInput = ''
        // let emailInput = ''
        let data = {
            user_firstname: first,
            user_lastname: last,
            user_email: email,
            user_id: id
        }
       function firstNameFunction(e){
           console.log(e.target.value)
            data.user_firstname = e.target.value      
        }
        function lastNameFunction(e){
            console.log(e.target.value)
            data.user_lastname = e.target.value
        }
        function emailFunction(e){
            console.log(e.target.value)
            data.user_email = e.target.value
        }
            confirmAlert({
                title: 'Edit User',
                message: (
                    <div>
                        <span>First Name: <input defaultValue={first} onChange={(e) => firstNameFunction(e)}/></span><br/>
                        <span>Last Name: <input defaultValue={last} onChange={(e) => lastNameFunction(e)}/></span><br/>
                        <span>Email: <input defaultValue={email} onChange={(e) => emailFunction(e)}/></span>
                    </div>),
                confirmLabel: 'Confirm',
                cancelLabel: 'Cancel',
                onConfirm: () => {
                   var post = Object.assign({}, {
                        user_firstname: data.user_firstname && data.user_firstname,
                        user_lastname: data.user_lastname && data.user_lastname,
                        user_email: data.user_email && data.user_email,
                        user_id: data.user_id
                    })
                    axios.post('/api/edituser', post)
                    .then(() => {
                        this.props.getUserInfo().then(res => {
                            this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                                this.props.getCompanyUsersInfo(this.props.user.user_company)
                            })
                        })
                    })
                },

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
                    <RaisedButton onClick={() => this.editUser(e.user_firstname, e.user_lastname, e.user_email, e.user_id)} label="Edit User" primary={true} style={style} />
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
