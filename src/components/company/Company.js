import React, { Component } from 'react';
import {connect} from 'react-redux';
import SideNavLinks from '../dashboard/Sidebar'
import './company.css'

class Company extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        console.log("HERO ITS ME")
        console.log(this.props)
        return(
            <div className='company-info-body'>
                
                    <SideNavLinks />
                <div className='company-info-container'>
                    <div className='company-main-title'>{this.props.company[0].company_name}</div>
                        <div className='company-main-code'>{`Company Code - ${this.props.company[0].company_code}`}</div>
                        <div className='company-main-code'>{`${this.props.company[0].company_industry}`}</div>
                    <div className='company-subtitle-container'>
                        <div className='company-main-subtitle'>{this.props.company[0].company_url}</div>    
                        <div className='company-main-subtitle'>{this.props.company[0].company_email}</div>
                        <div className='company-main-subtitle'>{this.props.company[0].company_phone}</div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Company);