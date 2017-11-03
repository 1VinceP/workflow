
import React from 'react'
import './companyJoinedAdded.css'
import ICON_IMAGE from './images/cow.svg'


export default function () {
    return (
        <div className='company-joined-added-body'>
            <img src={ICON_IMAGE} className='just_joined_icon'/>
            <div className='company-joined-added-title'>You Did It! That's UTTERLY awesome!</div>
            <div className='company-joined-added-subtitle'> Login to get started</div>
            <a href={process.env.REACT_APP_LOGIN}>
                            <div className='company-joined-created-login-button'>Login</div>
                            </a>
           
        </div>
    )
}