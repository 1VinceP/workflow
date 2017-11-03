import React, { Component } from 'react';
import {connect} from 'react-redux';
import SideNavLinks from '../dashboard/Sidebar'
import './company.css'
import {  getUserInfo, getCompanyInfo } from '../../redux/reducers/main-reducer'

class Company extends Component {
    constructor() {
        super();

        this.state = {
            company_name:[]
        }
    }
    componentWillMount() {
        if (!this.props.user) {
            return window.location.href = 'http://localhost:3000/#/'
        } else {
            
                this.props.getUserInfo().then(res => {
                    this.props.getCompanyInfo(this.props.user.user_company).then(response =>{
                        console.log('STATE',res.data)
                        this.setState({
                            company_name: response.data
                        })
                    })
                })
            }
    }

    render() {
        return(
            <div className='company-info-body'>
                
                    <SideNavLinks />
                <div className='company-info-container'>
                    <div className='company-main-title'>{this.props.company.company_name}</div>
                        <div className='company-main-code'>{`Company Code - ${this.props.company.company_code}`}</div>
                        <div className='company-main-code'>{`${this.props.company.company_industry}`}</div>
                    <div className='company-subtitle-container'>
                        <div className='company-main-subtitle'>{this.props.company.company_url}</div>    
                        <div className='company-main-subtitle'>{this.props.company.company_email}</div>
                        <div className='company-main-subtitle'>{this.props.company.company_phone}</div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps,{getUserInfo, getCompanyInfo})(Company);