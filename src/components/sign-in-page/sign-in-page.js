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
                    <div className="title">PsuedoTrics
                    <div className="subtitle">Building better businesses through increased productivity.</div>
                    </div>
                </div>
                <div className="information-bar">
                    <div className="bot-links">What we do</div>
                    <div className="bot-links">Meet the team</div>
                    <div className="bot-links">Contact us</div>
                </div>
            </div>
        )
    }
}

