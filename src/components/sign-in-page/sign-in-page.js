import React, { Component } from 'react';
import './sign-in-page.css';

export default class SignInPage extends Component {


    render() {
        return(
            <div>
                <a href={process.env.REACT_APP_LOGIN}><button>Log In</button></a>

            </div>
        )
    }
}

