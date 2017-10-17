import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
// import axios from 'axios';
import { getUserInfo } from '../../redux/reducers/main-reducer';
import { connect } from 'react-redux';
import './header.css';

let buttonStyle = {
    headerButton: {
        paddingLeft:'5px',
        paddingRight:'5px'
    },
    hiddenButton: {
        paddingLeft:'5px',
        paddingRight:'5px',
        display: 'none' 
    }
}

class Header extends Component {

    componentDidMount() {

        this.props.getUserInfo()

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
                            <Link to='/analytics' className='header-link'><RaisedButton>Analytics</RaisedButton></Link>
                            <RaisedButton>Company</RaisedButton>
                            <RaisedButton>Projects</RaisedButton>
                            <RaisedButton>Tasks</RaisedButton>
                            <a href={process.env.REACT_APP_LOGOUT}>
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

export default connect( mapStateToProps, {getUserInfo} )(Header);