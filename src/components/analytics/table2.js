import React, { Component, PropTypes } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux';
import axios from 'axios'


class Table2 extends Component {
    constructor(){
        super();
        this.state={
            users_taks:[],
        }
    }

    render() {

        (console.log("Object", this.props.company_team))
            return (
            < div >
                <LineChart width={650} height={375} data={this.props.company_team} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line strokeWidth={2} type="monotone" dataKey="team_projects_completed" stroke="#da863d" />
                    <Line strokeWidth={2} type="monotone" dataKey="team_company" stroke="#ce1c2e" />
                    {/* <Line strokeWidth={2} type="monotone" dataKey="7" stroke="#547cd5" />
                    <Line strokeWidth={2} type="monotone" dataKey="6" stroke="#10a843" /> */}
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