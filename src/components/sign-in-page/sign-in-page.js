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
                    <div>What we do</div>
                    <div>Meet the team</div>
                    <div>Contact us</div>
                </div>
            </div>
        )
    }
}

