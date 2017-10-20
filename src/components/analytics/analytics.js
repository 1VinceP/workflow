import React, { Component } from 'react';
import './analytics.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';




let table1 = [
    { name: 'Group A', 'Projects Completed': 7, "On Time": 1, "Time to Completion(days)": 24, "Time Per Task": 2 },
    { name: 'Group B', 'Projects Completed': 3, "On Time": 1, "Time to Completion(days)": 22, "Time Per Task": 3 },
    { name: 'Group C', 'Projects Completed': 6, "On Time": 2, "Time to Completion(days)": 22, "Time Per Task": 7 },
    { name: 'Group D', 'Projects Completed': 10, "On Time": 3, "Time to Completion(days)": 20, "Time Per Task": 1 },
    { name: 'Group E', 'Projects Completed': 44, "On Time": 4, "Time to Completion(days)": 21, "Time Per Task": 2 },
    { name: 'Group F', 'Projects Completed': 9, "On Time": 3, "Time to Completion(days)": 25, "Time Per Task": 6 },
    { name: 'Group G', 'Projects Completed': 6, "On Time": 4, "Time to Completion(days)": 21, "Time Per Task": 8 },
];

let table2 = [
    { name: '', }

]


export default class Analytics extends Component {
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
                    <LineChart width={600} height={300} data={table1} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line lineSize="10px" type="monotone" dataKey="Projects Completed" stroke="#da863d" />
                        <Line type="monotone" dataKey="On Time" stroke="#ce1c2e" />
                        <Line type="monotone" dataKey="Time to Completion(days)" stroke="#547cd5" />
                        <Line type="monotone" dataKey="Time Per Task" stroke="#10a843" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
                <div className="secondchart"></div>
                <div className="thirdchart"></div>
            </div>
        )
    }
}
