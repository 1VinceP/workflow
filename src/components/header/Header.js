import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
// import axios from 'axios';
import { getUserInfo, getCompanyInfo, getCompanyUsersInfo } from '../../redux/reducers/main-reducer';
import { connect } from 'react-redux';
import './header.css';

let buttonStyle = {
    headerButton: {
        paddingLeft:'5px',
        paddingRight:'5px',
    },
    hiddenButton: {
        paddingLeft:'5px',
        paddingRight:'5px',
        display: 'none' 
    }
}

class Header extends Component {

    componentDidMount() {

        this.props.getUserInfo().then(res => {
            this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                this.props.getCompanyUsersInfo(this.props.user.user_company)
            })
        })

    };

    render() {
        return(
            <header className='header-header'>

                <div className='header-left'>
                    <Link to='/' className='header-link'><div className='header-site-name'>PsuedoTrics</div></Link>
                </div>

                <div className='header-right'>
                    {/* NO USER */}
                    { !this.props.user
                        ? <div className='header-login'>
                            <a href={process.env.REACT_APP_LOGIN}>
                                <RaisedButton style={buttonStyle.headerButton}>Log in / Sign Up</RaisedButton>
                            </a>
                          </div>
                        : null}

                    {/* CLIENT VIEW */}
                    { this.props.user === 'client'
                        ? <div className='header-buttons'>
                            <RaisedButton>Project Status</RaisedButton>
                            <RaisedButton>Chat with your Project Manager</RaisedButton>
                            <a href={process.env.REACT_APP_LOGOUT}>
                                <RaisedButton>Logout</RaisedButton>
                            </a>
                          </div>
                    : null }

                    {/* EMPLOYEE VIEW */}
                    { this.props.user
                        ? <div className='header-buttons'>
                            <Link to='/dashboard' className='header-link'><RaisedButton>Home</RaisedButton></Link>
                            <Link to='/analytics' className='header-link'><RaisedButton>Analytics</RaisedButton></Link>
                            <Link to='/display-company' className='header-link'><RaisedButton>Company</RaisedButton></Link>
                            <Link to='/display-projects' className='header-link'><RaisedButton>Projects</RaisedButton></Link>
                            <Link to='/display-tasks' className='header-link'><RaisedButton>Tasks</RaisedButton></Link>
                            <Link to='/display-teams' className='header-link'><RaisedButton>Teams</RaisedButton></Link>
                            <Link to='/display-users' className='header-link'><RaisedButton>Users</RaisedButton></Link>
                            <a href={process.env.REACT_APP_LOGOUT} className='header-link'>
                            <RaisedButton>Logout</RaisedButton>
                            </a>
                          </div>
                    : null }
                </div>

            </header>
        )
    }
}
function mapStateToProps( state ) {
    const { user } = state;

    return {
        user
    };
}

export default connect( mapStateToProps, {getUserInfo, getCompanyInfo, getCompanyUsersInfo} )(Header);