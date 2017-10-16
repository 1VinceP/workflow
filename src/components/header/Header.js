import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

class Header extends Component {
    constructor() {
        super();

        this.state = {
            session: 'client'
        }
    }

    render() {
        return(
            <header>

                <div className='header-left'>
                    <div className='header-site-name'>Project Management</div>
                </div>

                <div className='header-right'>
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
                            <button>Analytics</button>
                            <button>Company</button>
                            <button>Projects</button>
                            <button>Tasks</button>
                            <button>Logout</button>
                         </div>
                    : null }
                </div>

            </header>
        )
    }
}

export default Header;