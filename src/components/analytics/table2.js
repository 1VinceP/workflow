import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux';


class Table2 extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {

        var teamName;
        var teamProjects;
        let teamInfo = this.props.company_team.map((e, i) => {
            teamName = e.team_name,
            teamProjects = e.team_projects_completed
            var table1 = [
                { name: teamName, 'Projects Completed': teamProjects, "On Time": 1, "Time to Completion(days)": 24, "Time Per Task": 2 },
                { name: teamName, 'Projects Completed': teamProjects, "On Time": 1, "Time to Completion(days)": 24, "Time Per Task": 2 },
                { name: teamName, 'Projects Completed': teamProjects, "On Time": 1, "Time to Completion(days)": 24, "Time Per Task": 2 },
                
            ];
            //    onTime,
            //    timeToCompletion
            return (
                < div >
                <LineChart width={600} height={300} data={table1} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line strokeWidth={2} type="monotone" dataKey="Projects Completed" stroke="#da863d" />
                    <Line strokeWidth={2} type="monotone" dataKey="On Time" stroke="#ce1c2e" />
                    <Line strokeWidth={2} type="monotone" dataKey="Time to Completion(days)" stroke="#547cd5" />
                    <Line strokeWidth={2} type="monotone" dataKey="Time Per Task" stroke="#10a843" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    {/* <Tooltip /> */}
                    <Legend />
                </LineChart>
            </div >
            )
    })
    return(
            <div>
                {teamInfo}
            </div>
        )
}
}



function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Table2)