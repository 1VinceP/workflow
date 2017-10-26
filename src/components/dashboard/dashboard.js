import React, { Component } from 'react';
import { connect } from 'react-redux';
import './dashboard.css';
import NewMenu from '../new-menu/new-menu';
import axios from 'axios';
import Table2 from '../analytics/table2';
import FirstTimeUser from '../first-time-user/FirstTimeUser'
import { addProjectUniqueKey, editUserFirstname, editUserLastname, getUserInfo, getCompanyInfo, getCompanyTeamInfo, getCompanyUsersInfo, getUserInfoAfter, getUserTasks } from '../../redux/reducers/main-reducer'
import { Link } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import AnalyticsIcon from './images/analytics.svg';
import CompanyIcon from './images/company.svg';
import ProjectIcon from './images/project.svg';
import TeamsIcon from './images/teams.svg';
import UserIcon from './images/user.svg';
import Calendar from 'react-calendar'
import UnstyledCalendar from 'react-calendar/build/entry.nostyle';
import _ from 'underscore-node';
import SideNavLinks from './Sidebar'


let styles = {

    icon: {
        position: 'absolute',
        left: 0,
        top: 5,
        transform: 'translateX(-13.5vw)'
    }
}

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            newMenu: false,
            missingEmployeeInfo: false,
            money: 0,
            tasktotal: 0,
            moneypertask: ''
        }
    }

    displayNewMenu() {
        this.setState({
            newMenu: !this.state.newMenu
        })
    }

    componentWillMount() {
        if (!this.props.user) {
            return window.location.href = 'http://localhost:3000/#/'
        }
    }

    componentDidMount() {
        this.props.getUserInfo().then(res => {
            console.log('PROPS', res)
            if (this.props.user_firstname === '' && this.props.user.user_firstname === null) {
                this.editUserName()
                // this.setState({
                //     missingEmployeeInfo: true
                // })
                // console.log('BOOM')
            }
        })

        this.props.getUserTasks(this.props.user.user_id)


        this.getMoney();
        this.getTaskTotal();

    }

    getMoney() {
        axios.get(`/api/getMoney/byTask/${this.props.user.user_company}`).then(res => {
            let x = res.data[0].sum.substring(1, 10).split(',').join('')
            this.setState({
                money: x
            })
            console.log('MOneys', this.state.money);
        })
    }
    getTaskTotal() {
        axios.get(`/api/getTaskTotal/${this.props.user.user_id}`).then(res => {
            this.setState({
                tasktotal: res.data[0].count
            })
            console.log('tasks', this.state.tasktotal)
        })
    }
    divide() {
        let x = Math.ceil(this.state.money / this.state.tasktotal);
        console.log("this is", x);
        this.setState({
            moneypertask: x
        })
    }

    addUsersName() {
        let data = Object.assign({}, {
            user_firstname: this.props.user_firstname,
            user_lastname: this.props.user_lastname,
            user_email: this.props.user.user_email,
            user_id: this.props.user.user_id,
        })
        axios.post('/api/edituser', data)
            .then(() => {
                this.props.getUserInfo().then(res => {
                    console.log(res)
                    this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                        this.props.getCompanyUsersInfo(this.props.user.user_company)
                    }).then(() => {
                        this.props.getUserInfoAfter(this.props.user.user_id)
                    })
                })
            }).then(() => {
                this.setState({
                    missingEmployeeInfo: false
                })
            })
    }

    editUserName() {
        confirmAlert({
            title: 'Update Personal Information',
            message: (
                <div className='dashboard-input-name-container'>
                    <div className='dashboard-all-input-sections'>
                        <div className='dashboard-input-names-cont'>
                            <input className='dashboard-input-names' placeholder='First Name' onChange={(e) => { this.props.editUserFirstname(e.target.value) }} />
                        </div>
                        <div className='dashboard-input-names-cont'>
                            <input className='dashboard-input-names' placeholder='Last Name' onChange={(e) => { this.props.editUserLastname(e.target.value) }} />
                        </div>
                    </div>
                </div>),
            confirmLabel: 'Save',
            onConfirm: () => {
                let data = Object.assign({}, {
                    user_firstname: this.props.user_firstname,
                    user_lastname: this.props.user_lastname,
                    user_email: this.props.user.user_email,
                    user_id: this.props.user.user_id,
                })
                axios.post('/api/edituser', data)
                    .then(() => {
                        this.props.getUserInfo().then(res => {
                            console.log(res)
                            this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                                this.props.getCompanyUsersInfo(this.props.user.user_company)
                            }).then(() => {
                                this.props.getUserInfoAfter(this.props.user.user_id)
                            })
                        })
                    }).then(() => {
                        this.setState({
                            missingEmployeeInfo: false
                        })
                    })
            },
        })
    }


    markTaskAsCompleted(taskId, taskNumber, taskKey) {
        console.log('button hit')

        taskNumber++

        axios.put(`/api/completeTask/${taskId}/${taskNumber}/${taskKey}`)
            .then(() => this.props.getUserTasks(this.props.user.user_id))
    }




    render() {
        console.log(this.props)
        let sorted = this.props.user_tasks
        let sortedTasks = _.sortBy(sorted, key => {
            return (new Date(key.task_finished_date).getTime())
        })

        let taskMapper = sortedTasks.map((task, i) => {
            return (
                task.task_show && !task.task_completed ?
                    <section className='dash-task' key={i} >

                        <div className='dash-task-title' >{task.task_name}</div>

                        <div className='dash-task-everything-else' >
                            <div>
                                <div className='dash-task-dates' >
                                    <div>{task.task_start_date.split(' ', 4).splice(1).join(' ')}</div>
                                    <div className='dash-date-dash' >-</div>
                                    <div>{task.task_finished_date.split(' ', 4).splice(1).join(' ')}</div>
                                </div>
                                <div className='dash-task-details' >
                                    <div>{task.task_description}</div>
                                    <a href={task.task_link} target='_blank' >{task.task_link}</a>
                                </div>
                            </div>

                            <button className='dash-check' onClick={() => this.markTaskAsCompleted(task.task_id * 1, task.task_number, task.task_unique_key)} >Complete</button>
                        </div>

                    </section>
                    : null
            )
        })

        return (

            (
                <div className="dashboard-view">
                        <div className='dashboard-main-header-title'>Dashboard</div>
                    <div className="button-span">
                        {/* <div className='dashboard-main-title'>Dashboard</div> */}
                        <button className='dashboard_new_items_buttons' onClick={() => { this.displayNewMenu() }}>+ New</button>

                        {this.state.newMenu === true ?
                            <div className='dashboard_new_menu_container'>
                                <a href='/#/create-project'>
                                    <div className='dashboard_menu_item_selection' onClick={() => { this.props.addProjectUniqueKey(this.props.company[0].company_name, this.props.user.user_id) }}>Project</div></a>

                                <a href='/#/create-team'>
                                    <div className='dashboard_menu_item_selection'>Team</div>
                                </a>

                                <a href='/#/create-user'>
                                    <div className='dashboard_menu_item_selection-1'>User</div>
                                </a>
                            </div>
                            : null}
                    </div>
                    <div className="content-wrapper">
                        <SideNavLinks />
                        <div className="task-list">
                            <div className='dashboard-titles'>Tasks</div>


                            {taskMapper}


                        </div>
                    </div>

                    <div className='dashnoard-second-section-layout'>
                        <UnstyledCalendar className='dashboard-calendar' />
                        <div className='dashboard-second-section-cont2'>Tasks Due Today:</div>
                        <div className='dashboard-second-section-cont1'>Money Made per Task:
                            <div className="number">$ {this.state.moneypertask}</div>
                            <div className='money'><button className="calculator" onClick={() => this.divide()}>Calculate</button></div>

                        </div>

                    </div>



                    {/* 
                    <div className="current-stats-wrapper">
                        <div className='dashboard-titles'>Analytics</div>
                        <div>
                            <Table2 />
                        </div>
                    </div> */}
                    {/* <div >
                        <Link className="chat" to="/chat">Chat</Link>
                    </div> */}
                </div>
            )

        )
    }
}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { addProjectUniqueKey, editUserFirstname, editUserLastname, getCompanyInfo, getCompanyTeamInfo, getUserInfo, getCompanyUsersInfo, getUserInfoAfter, getUserTasks })(Dashboard)
