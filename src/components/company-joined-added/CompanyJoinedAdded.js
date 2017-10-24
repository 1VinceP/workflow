
import React from 'react'
import './companyJoinedAdded.css'


export default function () {
    return (
        <div className='company-joined-added-body'>
            <div className='company-joined-added-title'>You Did It!</div>
            <div className='company-joined-added-subtitle'> Login to get started</div>
            <a href={process.env.REACT_APP_LOGIN}>
                            <div className='company-joined-created-login-button'>Login</div>
                            </a>
           
        </div>
    )
}