import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux';
import utils from '../utlities/utilities';

var table1 =[]


class Table1 extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    compareProjectDates() {
        utils.compareProjectDates(this.props.project_start_date, this.props.project_finished_date)
    }

    compareTaskDates() {
        if(this.props.project_tasks.task_start_date !== this.props.project_tasks.task_finished_date) {
            return ((this.props.project_tasks.task_finished_date - this.props.project_tasks.task_start_date), "days" )
        } else {
            return (Number(1), "day" );
        }
    }

    compareUserTaskDates() {
        if(this.props.user_tasks.task_start_date !== this.props.user_tasks.task_finished_date) {
            return ((this.props.user_tasks.task_finished_date - this.props.user_tasks.task_start_date), "days" )
        } else {
            return (Number(1), "day" );
        }
    }



    render() {


        return (
            <div>
                <LineChart  width={650} height={375} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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