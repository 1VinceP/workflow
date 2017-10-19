import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
// import axios from 'axios';
import { getUserInfo, getCompanyInfo, getCompanyUsersInfo } from '../../redux/reducers/main-reducer';
import { connect } from 'react-redux';
import CompanyDrop from './dropdowns/CompanyDrop';
import TeamDrop from './dropdowns/TeamDrop';
import AllDrop from './dropdowns/AllDrop';
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
                        ? <div style={{width: '100%'}}>
                            <div className='header-mid-buttons'>
                                <Link to='/dashboard' className='header-link'><FlatButton>Home</FlatButton></Link>
                                <Link to='/analytics' className='header-link'><FlatButton>Analytics</FlatButton></Link>
                                <CompanyDrop />
                                <TeamDrop />
                                <a href={process.env.REACT_APP_LOGOUT} className='header-link'>
                                    <FlatButton>Logout</FlatButton>
                                </a>
                            </div>
                            <div className='header-tiny'>
                                <Link to='/dashboard' className='header-link'><FlatButton>Home</FlatButton></Link>
                                <AllDrop />
                                <a href={process.env.REACT_APP_LOGOUT} className='header-link'>
                                    <FlatButton>Logout</FlatButton>
                                </a>
                            </div>
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