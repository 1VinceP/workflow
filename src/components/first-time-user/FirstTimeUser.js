import React, { Component } from 'react';
import {connect} from 'react-redux'
import { assignCompanyCodeInput} from '../../redux/reducers/main-reducer'
import { getUserInfo, getCompanyInfo, getCompanyUsersInfo, getCompanyTeamInfo } from '../../redux/reducers/main-reducer';
import './firstTimeUser.css'
import axios from 'axios'
import {Redirect} from 'react-router';
import ICON_SMALL from './images/koala.svg'

class FirstTimeUser extends Component {
    constructor(){
        super();
        this.state={
            redirect: false,
            company_id_for_code: ''
        }
    }
    
    joinCompany(companyCode){

       const companyCodeFind = axios.get(`/api/company_code/${companyCode}`).then((response)=>{ 
           this.setState({
               company_id_for_code: response.data[0].company_id
            })
           }).then(()=>{
               let data = {
                   user_company: this.state.company_id_for_code,
                   user_id: this.props.user.user_id,
               }
               axios.put(`/api/company_code`, data)
           }).then(()=>{
            return window.location.href =process.env.REACT_APP_LOGOUT_JOINED
        })
        
        }

        

    render() {
        if(this.state.redirect === true){
            return <Redirect push to={process.env.REACT_APP_LOGOUT}/>
        }
        return(
            <div className='first-time-user-container'>
                    <div className='first-time-tag-container'>
                        <img src={ICON_SMALL} alt='' className='small-icon-page'/>
                        <div className='first-time-tag-line'> What are your KOALA-fications</div>
                    </div>
                <div className='first-time-user-options-container'>
                    <div className='first-time-user-create-company-container'>
                        <div className='first-time-user-titles'>Create Company</div>
                        
                        <div>Create a company account to start seeing the magic happen!</div>
                        <a href='/#/create-company'>
                        <button className='first-time-user-button-create'>Create Company</button>
                        </a>

                    </div>

                    <div className='first-time-user-divider-line'></div>

                    <div className='first-time-user-join-company-container'>
                        <div className='first-time-user-titles'>Join A Company</div>
                        <div> To join a company, type in the unique company code </div>
                        <input  placeholder='Company Code' className='first-time-user-button-join-input' onChange={(e)=>{this.props.assignCompanyCodeInput(e.target.value)}}/>
                        <button className='first-time-user-button-join' onClick={()=>{this.joinCompany(this.props.assign_user_company_input)}}>Join Company</button>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps( state ) {  
    return state
  }


export default connect( mapStateToProps, {assignCompanyCodeInput, getUserInfo, getCompanyInfo, getCompanyUsersInfo, getCompanyTeamInfo} )(FirstTimeUser)