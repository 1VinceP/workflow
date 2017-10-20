import React, { Component } from 'react';
import './analytics.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { connect } from 'react-redux';
import Table1 from './table1';
import Table2 from './table2';


var table1 = [
    { name: 'Group A', 'Projects Completed': 7, "On Time": 1, "Time to Completion(days)": 24, "Time Per Task": 2 },
    { name: 'Group B', 'Projects Completed': 3, "On Time": 1, "Time to Completion(days)": 22, "Time Per Task": 3 },
    { name: 'Group C', 'Projects Completed': 6, "On Time": 2, "Time to Completion(days)": 22, "Time Per Task": 7 },
    { name: 'Group D', 'Projects Completed': 10, "On Time": 3, "Time to Completion(days)": 20, "Time Per Task": 1 },
    { name: 'Group E', 'Projects Completed': 44, "On Time": 4, "Time to Completion(days)": 21, "Time Per Task": 2 },
    { name: 'Group F', 'Projects Completed': 9, "On Time": 3, "Time to Completion(days)": 25, "Time Per Task": 6 },
    { name: 'Group G', 'Projects Completed': 6, "On Time": 4, "Time to Completion(days)": 21, "Time Per Task": 8 },
];

var table2 = [
    { name: '', }

]

class Analytics extends Component {
    constructor() {
        super();

        this.state = {
            table1
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
                    Team Completion Numbers To Date
                    <Table1/>
                </div>
                <div className="secondchart">
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
