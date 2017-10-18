
import React from 'react'
import './landing-page.css'
import MacbookPro from './images/macbookpro.png'
import Iphone from './images/iphone.png'

export default function () {
    return (
        <div className='landing-page-body'>
            <div>
                <div className='landing-page-hero'>
                    <div className='landing-page-main-titles-container'>
                    <div className='landing-page-main-title'>Project Management Software that let you actually manage your project</div>
                    <div className='landing-page-divider-line'></div>
                    <div className='landing-page-main-sub-title'>A Catchy Tag line of something</div>
                    </div>
                    <div className='landing-page-images'>
                        <img src={MacbookPro} alt='' className='landing-page-macbookpro'/>
                        <img src={Iphone} alt='' className='landing-page-iphone'/>
                    </div>
                </div>


            </div>
        </div>
    )
}
