
import React from 'react'
import './landing-page.css'
import MacbookPro from './images/dash.png'
import Iphone from './images/dash2.png'

export default function () {
    return (
        <div className='landing-page-body'>
            <div>
                <div className='landing-page-hero'>
                    <div className='landing-page-main-titles-container'>
                        <div className='landing-page-main-title'>Project Management Software that lets you actually manage your project</div>
                        <div className='landing-page-divider-line'></div>
                        <div className='landing-page-main-sub-title'>Increase productivity with WorkFlow</div>
                        <a href={process.env.REACT_APP_LOGIN}>
                            <button className='landing-page-bet-started-button'> Get Started </button>
                        </a>
                    </div>
                    <div className='landing-page-spacer'></div>
                    <div className='landing-page-images'>
                        <img src={MacbookPro} alt='' className='landing-page-macbookpro' />
                        <img src={Iphone} alt='' className='landing-page-iphone' />
                    </div>
                </div>

                <div className='landing-page-card-layout'>
                    <div className='landing-page-card-container'>
                        <div className='landing-page-card-title employee-success-title'>Employee Success</div>
                        <div className='landing-page-card-description'>
                        Employees no longer need to guess what they need to accomplish for the day and what their priorities should be.  WorkFlow gets the employee in the driver seat!
                        </div>
                        <div className='landing-page-see-more employee-success-title'>
                        <a href='#'>
                        see more >
                        </a>
                    </div>
                    </div>

                    <div  className='landing-page-card-container'>
                        <div className='landing-page-card-title project-performance-title'>Project Performance</div>
                        <div className='landing-page-card-description'>
                        WorkFlow will give you an overview of the status of all tasks, projects and teams ensuring that nothing falls through the cracks and projects are completed. 
                        </div>
                        <div className='landing-page-see-more project-performance-title'>
                        <a href='#'>
                        see more >
                        </a>
                    </div>
                    </div>

                    <div className='landing-page-card-container'>
                        <div className='landing-page-card-title team-tracking-title'>Team Tracking</div>
                        <div className='landing-page-card-description'>
                        Managers now have a way to see where projects are at without having to constantly check in.  WorkFlow gives you full access to all your teams needs. 
                        </div>
                        <div className='landing-page-see-more team-tracking-title'>
                        <a href='#'>
                        see more >
                        </a>
                    </div>
                    </div>

                    <div className='landing-page-card-container'>
                        <div className='landing-page-card-title company-analytics-title'>Company Analytics</div>
                        <div className='landing-page-card-description'>
                        WorkFlow analytics gives you an overview of the state of your company at varying levels so that the business knows where to make those important adjustments.
                        </div>
                        
                        <div className='landing-page-see-more company-analytics-title'>
                        <a href='#'>
                        see more >
                        </a>
                    </div>
                    
                    </div>

                </div>



                <div className='landing-page-divider-hero-container'>
                    <div className='landing-page-divider-hero'></div>
                    <div className='landing-page-divider-hero-text'>Spend your time counting cash instead of tracking the projects! </div>
                    <div className='landing-page-divider-hero'></div>
                    


                </div>

            </div>
        </div>
    )
}
