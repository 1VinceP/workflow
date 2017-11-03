import React, { Component } from 'react';
import './display-company.css';
import { connect } from 'react-redux'


import CreateCompany from '../create-company/create-company'



class DisplayCompany extends Component {
    componentWillMount() {
        if (!this.props.user) {
            return window.location.href = 'http://localhost:3000/#/'

        }

    }

    render() {

        return (
            <div className="display-company-container">
                <div>
                    <div>{this.props.company.company_name}</div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
  }

export default connect(mapStateToProps,({}))(DisplayCompany);
