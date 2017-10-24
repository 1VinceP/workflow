import React, { Component } from 'react';
import './analytics.css';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { connect } from 'react-redux';
import Table1 from './table1';
import Table2 from './table2';


class Analytics extends Component {
 
    render() {

        return (
            <div className="analytics-container">

                <div className="charts-container">
                    <div className="charts-main">
                        <div className="charts-left-navbar">
                            <span className="analytics-navbar-title">Analytics</span>
                            <span>Projects</span>
                            <span>Tasks</span>
                            <span>Productivity</span>
                        </div>

                        <div className="table-container">
                            <Table2 />
                        </div>
                        {/* <div className="table-container"> */}
                        {/* <Table2 /> */}
                        {/* </div> */}
                        <div className="charts-right-navbar">
                        <span className="right-navbar-title">Stay Updated</span>
                        <span>Setup Alerts to stay up to date.</span>
                        <button className="alert-button">Get Alerts</button>
                        </div>
                    </div>

                    <div className="charts-left-navbar under-nav">
                        <span className="analytics-navbar-title">By Date</span>
                        <span>Today</span>
                        <span>This week</span>
                        <span>Month-to-date</span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Analytics)
