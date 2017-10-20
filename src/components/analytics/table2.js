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

            return (
                < div >
                <LineChart width={350} height={250} data={this.props.company_team} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line strokeWidth={2} type="monotone" dataKey="team_projects_completed" stroke="#da863d" />
                    <Line strokeWidth={2} type="monotone" dataKey="On Time" stroke="#ce1c2e" />
                    <Line strokeWidth={2} type="monotone" dataKey="Time to Completion(days)" stroke="#547cd5" />
                    <Line strokeWidth={2} type="monotone" dataKey="Time Per Task" stroke="#10a843" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="team_name" />
                    <YAxis />
                    {<Tooltip />}
                    <Legend />
                </LineChart>
            </div >
            )

}
}



function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Table2)