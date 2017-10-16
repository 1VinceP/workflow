import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import './header.css'

class Header extends Component {
    constructor() {
        super();

        this.state = {
            session: 'employee'
        }
    }

    render() {
        return(
            <header className='header-header'>

                <div className='header-left'>
                    <Link to='/' className='header-link'><div className='header-site-name'>Project Management</div></Link>
                </div>

                <div className='header-right'>
                    {/* NO USER */}
                    { !this.state.session 
                        ? <div className='header-login'>
                            <a href={process.env.REACT_APP_LOGIN}>
                                <RaisedButton primary='true' className='header-login-button'>Log in / Sign Up</RaisedButton>
                            </a>
                          </div>
                        : null}

                    {/* CLIENT VIEW */}
                    { this.state.session === 'client'
                        ? <div className='header-buttons'>
                            <div>Project Status</div>
                            <div>Chat with your Project Manager</div>
                            <div>Logout</div>
                          </div>
                    : null }

                    {/* EMPLOYEE VIEW */}
                    { this.state.session === 'employee'
                        ? <div className='header-buttons'>
                            <Link to='/analytics' className='header-link'><RaisedButton primary='true' className='header-button'>Analytics</RaisedButton></Link>
                            <RaisedButton primary='true' className='header-button'>Company</RaisedButton>
                            <RaisedButton primary='true' className='header-button'>Projects</RaisedButton>
                            <RaisedButton primary='true' className='header-button'>Tasks</RaisedButton>
                            <RaisedButton primary='true' className='header-button'>Logout</RaisedButton>
                          </div>
                    : null }
                </div>

            </header>
        )
    }
}

export default Header;