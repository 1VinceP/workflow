import React, { Component } from 'react';
import './sign-in-page.css';
import {Link} from 'react-router-dom';

export default class SignInPage extends Component {


    render() {
        return (
            <div className="sign-in-wrapper">
                {/* <div className="top-navigation">
                    <a href={process.env.REACT_APP_LOGIN}><button>Log In</button></a>
                </div> */}
                <div className="hero-image">
                    <div className="title">
                    <div className="subtitle"></div>
                    </div>
                </div>
                <div className="information-bar">
                    <div><Link to='/our-company'>What we do</Link></div>
                    <div><Link to='/our-team'>Meet the team</Link></div>
                    <div><Link to='/contact'>Contact us</Link></div>
                </div>
            </div>
        )
    }
}

