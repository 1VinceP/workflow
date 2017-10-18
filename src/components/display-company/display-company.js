import React, { Component } from 'react';
import './display-company.css';
import { connect } from 'react-redux'


import CreateCompany from '../create-company/create-company'

let style = {
    margin: 12,
};

class DisplayCompany extends Component {


    // componentDidMount() {
    //     axios.get('/api/getusers').then(res => {
    //         this.setState({
    //             teamdata: res.data
    //         })
    //         console.log(this.state.teamdata)
    //     })
    // }

    render() {

        return (
            <div className="display-team-container">
                {this.props.state.company ? 
                <div className="user-team-wrapper">
                    <div className="title">
                        <h2>{this.props.state.company[0].company_name}</h2>
                        Company Information
                    </div>
                    <div>This will be Company Info</div>
                </div>
                :
                <div className="user-team-wrapper">
                    <CreateCompany />
                </div>
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        state
    };
}

export default connect(mapStateToProps)(DisplayCompany);
