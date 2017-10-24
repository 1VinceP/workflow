import React, { Component } from 'react';
import { connect } from 'react-redux'
import './dashboard.css';
// import IconButton from 'material-ui/IconButton';
import NewMenu from '../new-menu/new-menu';
import axios from 'axios';
import Table1 from '../analytics/table1';
import FirstTimeUser from '../first-time-user/FirstTimeUser'
import { addProjectUniqueKey } from '../../redux/reducers/main-reducer'
import  {Link} from 'react-router-dom'

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
        }
    }

    displayNewMenu() {
        this.setState({
            newMenu: !this.state.newMenu
        })
    }


    componentDidMount() {
        axios.get( '/api/getTasksByUser' )
            .then( response => {
                this.setState({
                    userTasks: response.data
                })
            } )
    }

    render() {
        // console.log('HELO', this.props.user)
        // let userInfo = false
        // console.log('USER INFO', userInfo)
        // if (this.props.user) {
        //     if (this.props.user.user_company) {
        //         userInfo = true;
        //         console.log("USER INFO 2", userInfo)
        //     }
        // }
        return (
            // userInfo ? 
            (
                <div className="dashboard-view">
                    <div className="button-span">


{/* GOING TO PUP UP IF USER DOES NOT HAVE FIRST NAME WORKING */}
                        <div>
                            <div>Update Personal Information</div>
                                <div>
                                    <input placeholder='First Name' />
                                </div>
                                <div>
                                <input placeholder='First Name' />
                                </div>
                                <button>Save</button>
                        </div>
{/* GOING TO PUP UP IF USER DOES NOT HAVE FIRST NAME WORKING */}

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
                    <div >
                    <Link className="chat" to="/chat">Chat</Link>
                </div>
                </div>
            )

        )
    }
}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { addProjectUniqueKey })(Dashboard)
