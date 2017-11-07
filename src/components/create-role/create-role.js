import React, { Component } from 'react';
import {connect} from 'react-redux'
class CreateRole extends Component {
        
    componentWillMount(){

            if (!this.props.user) {
                return window.location.href = 'http://104.131.104.218:3005/#/'
    
            }
    
        if(this.props.company){
            return "true"
        } else {
            return this.props.user
        }
    }

    
    render() {
        return (
            <div>
                <h1>TEST</h1>
                <h2>{this.props.state.company? this.props.state.company.company_name : 'Null'}</h2>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    return {
        state
    };
}

export default connect( mapStateToProps)(CreateRole);