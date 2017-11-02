import React, { Component } from 'react';
import './display-projects.css'

import {
    getUserInfo
    , getCompanyInfo
    , getCompanyUsersInfo
    , getCompanyProjectInfo
    , addProjectStart
    , addProjectEnd
    , addProjectUniqueKey
} from '../../redux/reducers/main-reducer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LeftNav from '../dashboard/Sidebar'

class DisplayUsers extends Component {


    deleteProject(id) {
        confirmAlert({
            title: 'Delete Project',
            message: 'Are you sure you want to do this.',
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: () => {
                axios.delete(`/api/delete/project/${id}`)
                    .then(() => {
                        this.props.getUserInfo().then(res => {
                            this.props.getCompanyInfo(this.props.user.user_company)
                            this.props.getCompanyUsersInfo(this.props.user.user_company)
                            this.props.getCompanyProjectInfo(this.props.user.user_company)
                        })
                    })
            },    // Action after Confirm
            onCancel: () => null,
        })
    }





    // editProject(name, start, end, description, price, id) {
    //     console.log("it worked lol", name, start, end, description, price, id)
    // }

    editProject(name, start, end, description, price, id) {
        let data = {
            project_name: name,
            project_start_date: start,
            project_finished_date: end,
            project_description: description,
            project_price: price,
            project_id: id
        }
        function nameFunction(e) {
            console.log(e.target.value)
            data.project_name = e.target.value
        }

        function priceFunction(e) {
            data.project_price = e.target.value
        }

        function descriptionFunction(e) {
            console.log(e)
            data.project_description = e
        }


        function startFunction(event, date) {
            let formatDate = date.toString().split(' ')
            let projectDate = `${formatDate[1]} ${formatDate[2]} ${formatDate[3]}`
            data.project_start_date = projectDate
        }

        function endFunction(event, date) {
            let formatDate = date.toString().split(' ')
            let projectDate = `${formatDate[1]} ${formatDate[2]} ${formatDate[3]}`
            data.project_finished_date = projectDate
        }



        confirmAlert({
            title: 'Edit Project',
            message: (
                <div className='dashboard-input-name-container'>
                    <div className='dashboard-all-input-sections'>
                        <div className='dashboard-input-names-cont'>
                            <input maxLength={30} className='dashboard-input-names' defaultValue={name} onChange={(e) => { nameFunction(e) }} required />
                        </div>
                        {description
                            ?
                            <input defaultValue={description} className='project-create-project-input' onChange={(e) => descriptionFunction(e.target.value)} maxLength='300' />
                            :
                            <input placeholder='Project Description' className='project-create-project-input' onChange={(e) => descriptionFunction(e.target.value)} maxLength='300' />
                        }
                        <div className='dashboard-input-names-cont'>
                            <input className='dashboard-input-names' defaultValue={price} onChange={(e) => { priceFunction(e) }} required />
                        </div>
                        <div>
                            <MuiThemeProvider>
                                <div className=''>

                                    {start
                                        ?
                                        <DatePicker hintText={start}
                                            onChange={startFunction} />
                                        :
                                        <DatePicker hintText="Start Date"
                                            onChange={endFunction} />
                                    }
                                    {/* PROJECT END DATE  */}
                                    <div className='project-start-finish-date-spacer'></div>

                                    {end
                                        ?
                                        <DatePicker hintText={end}
                                            onChange={endFunction} />
                                        :
                                        <DatePicker hintText="Finish Date"
                                            onChange={endFunction} />
                                    }
                                </div>
                            </MuiThemeProvider>

                        </div>
                    </div>
                </div>),
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: () => {
                var post = Object.assign({}, {
                    project_name: data.project_name && data.project_name,
                    project_start_date: data.project_start_date && data.project_start_date,
                    project_finished_date: data.project_finished_date && data.project_finished_date,
                    project_description: data.project_description && data.project_description,
                    project_price: data.project_price && data.project_price,
                    project_id: data.project_id
                })
                axios.post('/api/editproject', post)
                    .then(() => {
                        this.props.getUserInfo().then(res => {
                            this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                                this.props.getCompanyUsersInfo(this.props.user.user_company)
                                this.props.getCompanyProjectInfo(this.props.user.user_company)
                            })
                        })
                    })
            },

            onCancel: () => null,
        })
    }


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
                <div key={i}>
                    { e.project_paid === false ?
                        <div className="display-project-user-container">
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
                                <div className="project-price">
                                    <div>{e.project_price ? e.project_price : '$'}</div>
                                </div>
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
                    : null }
                </div>
            )
        })



        return (
            <div className="display-project-container">

                <div className="charts-container">
                    <div className="projects-charts-main">
                        <LeftNav />
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
                            {this.props.company_project[0] ? projectInfo :
                                <div className="project-no-team-box">
                                    <span className="project-no-team-span">No projects created yet</span>
                                    <a href='/#/create-project'>
                                        <button onClick={() => { this.props.addProjectUniqueKey(this.props.company[0].company_name, this.props.user.user_id) }} className="project-no-team-button">Create a Project</button>
                                    </a>
                                </div>}
                        </div>
                        {/* <div className="table-container">
                        <Table2 />
                        </div> */}
                        <div className="projects-charts-right-navbar">
                            <span className="right-navbar-title">Projects</span>
                            <a className="create-users-button-right"  href='/#/create-project'>
                                <button onClick={() => { this.props.addProjectUniqueKey(this.props.company[0].company_name, this.props.user.user_id) }} className="project-alert-button">Create Project</button>
                            </a>
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

export default connect(mapStateToProps,
    {
        getUserInfo
        , getCompanyInfo
        , getCompanyUsersInfo
        , getCompanyProjectInfo
        , addProjectEnd
        , addProjectStart
        , addProjectUniqueKey

    })(DisplayUsers)
