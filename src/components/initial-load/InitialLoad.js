import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import './initialLoad.css'




class InitialLoad extends Component {
    constructor() {
        super();

        this.state = {
            startSetTimeOut: false,
            redirectToDashboard: false,
            redirectToCreateCompany: false

        }
    }

componentWillMount(){
    setTimeout(()=>{
        if(this.props.user.user_company === null){
        return window.location.href ='http://localhost:3000/#/first-time-user'
        } else {
        console.log("User Logged In Securely")
        }
            return window.location.href ='http://localhost:3000/#/dashboard'
    }, 3000)
}

    render() {

       
        // if (this.state.redirectToDashboard === true){
        //     return <Redirect push to='/dashboard' />
        // } else if (this.state.redirectToCreateCompany === true){
        //     return <Redirect push to='/create-company' />
        //     }
            

        return(
            <div className='initial-load-class-body'>
                <div className='initial-load-main-title'>Securely Logging In</div>
<CircularProgress size={80} thickness={7} />  

            </div>
        )
    }
}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {  })(InitialLoad)

// 
// }).then(this.props.updateApp)
// .then(()=>{
// this.setState({
//     redirect:true
// })
// })
// }
// render() {
// if (this.state.redirect){
//     return <Redirect push to='/pointsconfirmation' />