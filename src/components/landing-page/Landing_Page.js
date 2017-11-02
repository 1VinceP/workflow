
import React, {Component} from 'react'
import './landing-page.css'
import MacbookPro from './images/dash.png'
import Iphone from './images/dash2.png'
import {connect} from 'react-redux'

class LandingPage extends Component {
    render() {
        return (
            <div className='landing-page-body'>
                <div>
                    <div className='landing-page-hero'>
                        <div className='landing-page-main-titles-container'>
                            <div className='landing-page-main-title'>Project Management Software that lets you actually manage your project</div>
                            <div className='landing-page-divider-line'></div>
                            <div className='landing-page-main-sub-title'>Increase productivity with WorkFlow</div>
                            {this.props.user ? <a href={'/#/dashboard'}>
                                <button className='landing-page-bet-started-button'> Get Started </button>
                            </a>
                            :
                            <a href={process.env.REACT_APP_LOGIN}>
                                <button className='landing-page-bet-started-button'> Get Started </button>
                            </a>
                            }
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
                                Stoked high on the face paddle battle, heavy blown out, elevator drop stoked blitz blown out, epic.
                        </div>
                            <div className='landing-page-see-more employee-success-title'>
                                <a href='#'>
                                    see more >
                        </a>
                            </div>
                        </div>

                        <div className='landing-page-card-container'>
                            <div className='landing-page-card-title project-performance-title'>Project Performance</div>
                            <div className='landing-page-card-description'>
                                Stoked high on the face paddle battle, heavy blown out, elevator drop stoked blitz blown out, epic.
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
                                Stoked high on the face paddle battle, heavy blown out, elevator drop stoked blitz blown out, epic.
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
                                Stoked high on the face paddle battle, heavy blown out, elevator drop stoked blitz blown out, epic.
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
}
function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(LandingPage)