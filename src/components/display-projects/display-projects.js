import React, { Component } from 'react';
import './display-projects.css'
// import RaisedButton from 'material-ui/RaisedButton';
import { getUserInfo, getCompanyInfo, getCompanyUsersInfo } from '../../redux/reducers/main-reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'
// let style = {
//     margin: 12,
// };

class DisplayUsers extends Component {


    // deleteUser(id) {
    //     confirmAlert({
    //         title: 'Delete User',
    //         message: 'Are you sure you want to do this.',
    //         confirmLabel: 'Confirm',
    //         cancelLabel: 'Cancel',
    //         onConfirm: () => {
    //             axios.delete(`/api/delete/user/${id}`)
    //                 .then(() => {
    //                     this.props.getUserInfo().then(res => {
    //                         this.props.getCompanyInfo(this.props.user.user_company).then(res => {
    //                             this.props.getCompanyUsersInfo(this.props.user.user_company)
    //                         })
    //                     })
    //                 })
    //         },    // Action after Confirm
    //         onCancel: () => null,
    //     })
    // }


    deleteProject(id) {
        console.log("IT WOKRED!", id)
    }

    editProject(name, start, end, description, price, id) {
        console.log("it worked lol", name, start, end, description, price, id)
    }

    // editUser(first, last, email, id) {

    //     let data = {
    //         user_firstname: first,
    //         user_lastname: last,
    //         user_email: email,
    //         user_id: id
    //     }
    //     function firstNameFunction(e) {
    //         console.log(e.target.value)
    //         data.user_firstname = e.target.value
    //     }
    //     function lastNameFunction(e) {
    //         console.log(e.target.value)
    //         data.user_lastname = e.target.value
    //     }
    //     function emailFunction(e) {
    //         console.log(e.target.value)
    //         data.user_email = e.target.value
    //     }
    //     confirmAlert({
    //         title: 'Edit User',
    //         message: (
    //             <div className='dashboard-input-name-container'>
    //                 <div className='dashboard-all-input-sections'>
    //                     <div className='dashboard-input-names-cont'>
    //                         <input maxLength={30} className='dashboard-input-names' defaultValue={first} onChange={(e) => { firstNameFunction(e) }} required />
    //                     </div>
    //                     <div className='dashboard-input-names-cont'>
    //                         <input className='dashboard-input-names' defaultValue={last} onChange={(e) => { lastNameFunction(e) }} required />
    //                     </div>
    //                     <div className='dashboard-input-names-cont'>
    //                         <input className='dashboard-input-names' defaultValue={email} onChange={(e) => { emailFunction(e) }} required />
    //                     </div>
    //                 </div>
    //             </div>),
    //         confirmLabel: 'Confirm',
    //         cancelLabel: 'Cancel',
    //         onConfirm: () => {
    //             var post = Object.assign({}, {
    //                 user_firstname: data.user_firstname && data.user_firstname,
    //                 user_lastname: data.user_lastname && data.user_lastname,
    //                 user_email: data.user_email && data.user_email,
    //                 user_id: data.user_id
    //             })
    //             axios.post('/api/edituser', post)
    //                 .then(() => {
    //                     this.props.getUserInfo().then(res => {
    //                         this.props.getCompanyInfo(this.props.user.user_company).then(res => {
    //                             this.props.getCompanyUsersInfo(this.props.user.user_company)
    //                         })
    //                     })
    //                 })
    //         },

    //         onCancel: () => null,
    //     })

    // }


    // getTeamName(id) {
    //     // console.log('id', id)
    //     // console.log("COMPANY PROPS", this.props.company_team[0].team_id)
    //     var teamId = this.props.company_team
    //     for (let i = 0; i < teamId.length; i++) {
    //         if (teamId[i].team_id === id) {
    //             return teamId[i].team_name
    //         }
    //     }
    // }


    render() {
        let projectInfo = this.props.company_project.map((e, i) => {
            return (
                <div key={i} className="display-project-user-container">
                    <div className="display-project-name-email" >
                        <div className="display-project-name">
                            {e.project_name}
                        </div>
                        <div className="display-project-email">
                            <span className="projects-email-span">{e.project_description}</span>
                        </div>
                    </div>
                    <div className="projects-start-end-price-yo">
                        <div className="projects-dates">{e.project_start_date ? e.project_start_date : '0000-00-00'}</div>
                        <div className="projects-dates1">{e.project_finished_date ? e.project_finished_date : '0000-00-00'}</div>
                        <div>{e.project_price ? e.project_price : '$'}</div>
                    </div>
                    <div className="projects-buttons-div">
                        <Button onClick={() => this.editProject(e.project_name, e.project_start_date, e.project_finished_date, e.project_description, e.project_price, e.project_id)} size="big" className="team-settings-button">
                            <Icon name='setting' />
                        </Button>
                        <Button onClick={() => this.deleteProject(e.project_id)} size="big" className="team-delete-button">
                            <Icon name='trash' />
                        </Button>
                    </div>

                </div>
            )
        })



        return (
            <div className="display-project-container">

                <div className="charts-container">
                    <div className="charts-main">
                        <div className="charts-left-navbar">
                            <span className="display-project-navbar-title">Projects</span>
                            <span><Link to="/create-project">Create Project</Link></span>
                            <span><Link to="/dashboard">Tasks</Link></span>
                            {/* <span><Link to="/there-is-no-productivity-here-gandalf-stormcrow">Productivity</Link></span> */}
                        </div>

                        <div className="projects-table-container">
                            <div className="projects-top-table">
                                <div className="projects-top-table-text">
                                    <span className="display-project-name-header">Name</span>
                                    <div className="start-end-price">
                                        <span className="display-project-start-date-header">Start date</span>
                                        <span className="display-project-end-date-header">End date</span>
                                        <span className="display-project-price-header">Price</span>
                                    </div>
                                </div>
                            </div>
                            {projectInfo}
                        </div>
                        {/* <div className="table-container">
                        <Table2 />
                        </div> */}
                        <div className="charts-right-navbar">
                            <span className="right-navbar-title">Stay Updated</span>
                            <span>Setup Alerts to stay up to date.</span>
                            <button className="alert-button">Get Alerts</button>
                        </div>
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
