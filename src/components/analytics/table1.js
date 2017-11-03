import React, { Component, PropTypes } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux';
import axios from 'axios'


class Table1 extends Component {
    constructor() {
        super();
        this.state = {
            all_info: [],
            data: []
        }
    }
    componentWillMount() {
        if (!this.props.user) {
            return window.location.href = 'http://localhost:3000/#/'

        }

    }
    componentDidMount() {
        if (!this.props.user) {
            return window.location.href = 'http://localhost:3000/#/'

        }
}




    //{name: 'Page A', uv: 4000, pv: 2400, amt: 2400}
    getChartData() {
        var x = this.state.all_info
        var finalDatass = []
        var newData;
        var compUser = this.props.company_users


        this.props.company_project.map((project, i)=>{
            
            let projNames =  project.project_name
            let taskInProj = project.project_last_task

            let p = {name: projNames,
                count: taskInProj}
            
            if(project.project_paid === false){
                finalDatass.push(p)
            }
            
        
            })

            console.log("FINALLL YOOOOOO",finalDatass)

        return finalDatass
        }


        render() {
            return (
                <div>
        
               
                <LineChart width={725} height={375} data={this.getChartData()} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line strokeWidth={2} type="monotone" dataKey="count" name='Tasks To Complete' stroke="#da863d" />
                   
                    <YAxis />
                    <XAxis dataKey="name" />
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

export default connect(mapStateToProps)(Table1)