import React, { Component } from 'react';
import { connect } from 'react-redux'
import './dashboard.css';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import NewMenu from '../new-menu/new-menu';
import axios from 'axios';
import Table1 from '../analytics/table1';
import FirstTimeUser from '../first-time-user/FirstTimeUser'
import { addProjectUniqueKey } from '../../redux/reducers/main-reducer'

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
        }
    }

    displayNewMenu() {
        this.setState({
            newMenu: !this.state.newMenu
        })
    }


    render() {
        console.log('HELO', this.props.user)
        let userInfo = false
        console.log('USER INFO', userInfo)
        if (this.props.user) {
            if (this.props.user.user_company) {
                userInfo = true;
                console.log("USER INFO 2", userInfo)
            }
        }
        return (
            userInfo ? (
                <div className="dashboard-view">
                    <div className="button-span">
                        <button className='dashboard_new_items_buttons' onClick={() => { this.displayNewMenu() }}>+ New</button>
                    </div>
                    {this.state.newMenu === true ?
                        <div className='dashboard_new_menu_container'>
                            <a href='/#/create-project'>
                                <div className='dashboard_menu_item_selection' onClick={() => { this.props.addProjectUniqueKey(this.props.company[0].company_name, this.props.user.user_id) }}>Project</div></a>


                            <div className='dashboard_menu_item_selection'>Team</div>
                            <div className='dashboard_menu_item_selection'>User</div>
                        </div>
                        : null}
                    <div className="content-wrapper">
                        <div className="task-list">
                            <div className='dashboard-titles'>Tasks</div>


                        </div>
                    </div>
                    <div className="current-stats-wrapper">
                        <div>Analytics</div>
                        <div>
                            <Table1 />
                        </div>
                    </div>
                </div>
            )
                :
                <FirstTimeUser />
        )
    }
}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { addProjectUniqueKey })(Dashboard)
