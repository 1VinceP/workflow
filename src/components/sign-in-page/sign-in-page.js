import React, { Component } from 'react';
import './sign-in-page.css';

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
                    <div><a href='/our-company'>What we do</a></div>
                    <div><a href='/our-team'>Meet the team</a></div>
                    <div><a href='/contact'>Contact us</a></div>
                </div>
            </div>
        )
    }
}

