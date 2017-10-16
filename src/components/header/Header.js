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
                                <RaisedButton>Log in / Sign Up</RaisedButton>
                            </a>
                          </div>
                        : null}

                    {/* CLIENT VIEW */}
                    { this.state.session === 'client'
                        ? <div className='header-buttons'>
                            <RaisedButton>Project Status</RaisedButton>
                            <RaisedButton>Chat with your Project Manager</RaisedButton>
                            <a><RaisedButton>Logout</RaisedButton></a>
                          </div>
                    : null }

                    {/* EMPLOYEE VIEW */}
                    { this.state.session === 'employee'
                        ? <div className='header-buttons'>
                            <Link to='/analytics' className='header-link'><RaisedButton>Analytics</RaisedButton></Link>
                            <RaisedButton>Company</RaisedButton>
                            <RaisedButton>Projects</RaisedButton>
                            <RaisedButton>Tasks</RaisedButton>
                            <RaisedButton>Logout</RaisedButton>
                          </div>
                    : null }
                </div>

            </header>
        )
    }
}

export default Header;