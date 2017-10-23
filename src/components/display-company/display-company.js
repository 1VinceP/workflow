import React, { Component } from 'react';
import './display-company.css';
import { connect } from 'react-redux'

let style = {
    margin: 12,
};

class DisplayCompany extends Component {

    render() {

        return (
            <div className="display-company-container">
                <div>
                    <div>{this.props.company[0].company_name}</div>
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
