import React, { Component } from 'react';
import './display-company.css';
import { connect } from 'react-redux'


import CreateCompany from '../create-company/create-company'

let style = {
    margin: 12,
};

class DisplayCompany extends Component {

    render() {

        return (
            <div className="display-company-container">
                {this.props.state.company ? 
                <div className="user-company-wrapper">
                    <div className="title">
                        <h2>{this.props.state.company[0].company_name}</h2>
                        Company Information
                    </div>
                    <div>This will be Company Info</div>
                </div>
                :
                <div className="company-wrapper">
                    <CreateCompany />
                </div>
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        state
    };
}

export default connect(mapStateToProps)(DisplayCompany);
