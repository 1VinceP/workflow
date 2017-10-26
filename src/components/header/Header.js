import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
// import FlatButton from 'material-ui/FlatButton';
// import axios from 'axios';
import { getUserInfo, getCompanyInfo, getCompanyUsersInfo, getCompanyTeamInfo, getUserTasks } from '../../redux/reducers/main-reducer';
import { connect } from 'react-redux';
import CompanyDrop from './dropdowns/CompanyDrop';
import TeamDrop from './dropdowns/TeamDrop';
import AllDrop from './dropdowns/AllDrop';
import './header.css';

// eslint-disable-next-line
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
    constructor() {
        super();

        this.state = {
            scroll: 'false',
            displayCompany: false
        }

        this.adjustOnScroll = this.adjustOnScroll.bind(this)
    }

    componentDidMount() {

        this.props.getUserInfo().then(res => {
            this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                this.props.getCompanyUsersInfo(this.props.user.user_company)
                this.props.getCompanyTeamInfo(this.props.user.user_company)
            })
        })

        this.adjustOnScroll()

    };

    adjustOnScroll() {
        window.addEventListener( 'scroll', e => {

            if( window.pageYOffset > 10 ) {
                this.setState({
                    scroll: 'true'
                })
            }
            else {
                this.setState({
                    scroll: 'false'
                })
            }
        } )
    };

    updateUserTasks() {
        this.props.getUserTasks( this.props.user.user_id )
    }

    render() {
        return(
            <header className='header-header' page-has-scrolled={this.state.scroll}>

                <div className='header-left'>
                    <Link to='/' className='header-link'><div className='header-site-name' page-is-scrolled={this.state.scroll}>PsuedoTrics</div></Link>
                </div>

                <div className='header-right'>
                    {/* NO USER */}
                    { !this.props.user
                        ? <div className='header-login'>
                            <a href={process.env.REACT_APP_LOGIN}>
                            <div className='header-login-button' page-is-scrolled={this.state.scroll}>Login</div>
                            </a>
                            <a href={process.env.REACT_APP_LOGIN}>
                                <button className='header-signup-button'>Sign Up</button>
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
                                <Link to='/dashboard' className='header-link' onClick={ () => this.updateUserTasks() } ><button className='header-link-buttons' page-is-scrolled={this.state.scroll}>Home</button></Link>
                                <Link to='/analytics' className='header-link'><button className='header-link-buttons' page-is-scrolled={this.state.scroll}>Analytics</button></Link>
                                <TeamDrop scroll={this.state.scroll} />
                                <a href={process.env.REACT_APP_LOGOUT} className='header-link'>
                                    <button className='header-link-buttons'>Logout</button>
                                </a>
                            </div>
                            <div className='header-tiny'>
                                <Link to='/dashboard' className='header-link'><button className='header-link-buttons'>Home</button></Link>
                                <AllDrop />
                                <a href={process.env.REACT_APP_LOGOUT} className='header-link' page-is-scrolled={this.state.scroll}>
                                    <button className='header-link-buttons'>Logout</button>
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

export default connect( mapStateToProps, {getUserInfo, getCompanyInfo, getCompanyUsersInfo, getCompanyTeamInfo, getUserTasks } )(Header);
