import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux';



var table1 = [
    { name: 'Group A', 'Projects Completed': 7, "On Time": 1, "Time to Completion(days)": 24, "Time Per Task": 2 },
    { name: 'Group B', 'Projects Completed': 3, "On Time": 1, "Time to Completion(days)": 22, "Time Per Task": 3 },
    { name: 'Group C', 'Projects Completed': 6, "On Time": 2, "Time to Completion(days)": 22, "Time Per Task": 7 },
    { name: 'Group D', 'Projects Completed': 10, "On Time": 3, "Time to Completion(days)": 20, "Time Per Task": 1 },
    { name: 'Group E', 'Projects Completed': 44, "On Time": 4, "Time to Completion(days)": 21, "Time Per Task": 2 },
    { name: 'Group F', 'Projects Completed': 9, "On Time": 3, "Time to Completion(days)": 25, "Time Per Task": 6 },
    { name: 'Group G', 'Projects Completed': 6, "On Time": 4, "Time to Completion(days)": 21, "Time Per Task": 8 },
];



class Table1 extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {

        var teamName;
        var teamProjects;
        let teamInfo = this.props.company_team.map((e, i) => {
            return (
               teamName = e.team_name,
               teamProjects = e.team_projects_completed
            //    onTime,
            //    timeToCompletion
            )
        })
        return (
            <div>
                <LineChart width={600} height={250} data={table1} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line strokeWidth={2} type="monotone" dataKey="Projects Completed" stroke="#da863d" />
                    <Line strokeWidth={2} type="monotone" dataKey="On Time" stroke="#ce1c2e" />
                    <Line strokeWidth={2} type="monotone" dataKey="Time to Completion(days)" stroke="#547cd5" />
                    <Line strokeWidth={2} type="monotone" dataKey="Time Per Task" stroke="#10a843" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Table1)