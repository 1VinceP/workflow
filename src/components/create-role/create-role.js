import React, { Component } from 'react';
import {connect} from 'react-redux'
class CreateRole extends Component {
        
    componentWillMount(){

            if (!this.props.user) {
                return window.location.href = 'http://localhost:3000/#/'
    
            }
    
        if(this.props.company){
            console.log('truuuuuuu')
        } else {
            console.log(this.props.user)
        }
    }

    
    render() {
        console.log("COMPANY LOL", this.props.state.company)
        return (
            <div>
                <h1>TEST</h1>
                <h2>{this.props.state.company? this.props.state.company[0].company_name : 'Null'}</h2>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    console.log(state)
    return {
        state
    };
}

export default connect( mapStateToProps)(CreateRole);