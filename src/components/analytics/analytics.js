import React, { Component } from 'react';
import './analytics.css';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { connect } from 'react-redux';
import Table1 from './table1';
import Table2 from './table2';


class Analytics extends Component {
    constructor() {
        super();

        this.state = {
            
        }
    }

    render() {

        return (
            <div className="analytics-container">
                <div className="title">
                    Analytics
                </div>
                <div className="details">
                    To keep your project on task, here are pieces of information we've found to be most relevent to on time completion of tasks.
                </div>
                <div className="firstchart">
                    <Table1/>
                    <div className='subtitle'>
                    Team Completion Numbers To Date
                    </div>
                    <Table2/>
                </div>
                <div className="thirdchart"></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Analytics)
