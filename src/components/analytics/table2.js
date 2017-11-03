import React, { Component, PropTypes } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux';
import axios from 'axios'


class Table2 extends Component {
    constructor() {
        super();
        this.state = {
            all_info: [],
            data: []
        }
    }

    componentDidMount() {
        axios.get(`api/company/analytics/table/${this.props.user.user_company}`).then(res => {
            console.log("DATAAAA:", res.data)
            this.setState({
                all_info: res.data
            })
        })
    }

    getCompletedTasks(user) {
        console.log("USER", user)
        var q = 0;
        this.props.user_tasks.map((e, i) => {
            if(e.task_user_1 === user && e.task_completed === true){
                q++
            }
        })
        return q
    }

    getAllTasks(user){
        console.log("USER", user)
        var x = 0;
        this.props.user_tasks.map((e, i) => {
            if(e.task_user_1 === user){
                x++
            }
        })
        return x
    }

    //{name: 'Page A', uv: 4000, pv: 2400, amt: 2400}
    getChartData() {
        var x = this.state.all_info
        var finalData = []
        var newData;
        var compUser = this.props.company_users


        this.props.company_users.map((user, i)=>{
            let firstNames = user.user_firstname
            let b = {name: firstNames,
                    count: 0}
            
            
            for (let i = 0; i < this.state.all_info.length; i++){
                if(this.state.all_info[i].task_user_1 === user.user_id){
                    b.count++
                }
            }
            finalData.push(b)
            })
                     
                   
            //     }
            // }
            console.log("FINALLL YOOOOOO",finalData)
       
        
        //                     newData = {
        //                         name: compUser[i].user_firstname,
        //                         completed: this.getCompletedTasks(compUser[i].user_id),
        //                         tasks: this.getAllTasks(compUser[i].user_id)
        //                     }
        //                     finalData.push(newData)
        //                 }
            
        //     newData = {
        //       name: compUser[i].user_firstname,
        //      completed: this.getCompletedTasks(compUser[i].user_id),
        //     tasks: this.getAllTasks(compUser[i].user_id)
        // }
        // finalData.push(newData)
        return finalData
        }

        // for (let i = 0; i < compUser.length; i++){

        //     newData = {
        //         name: compUser[i].user_firstname,
        //         completed: this.getCompletedTasks(compUser[i].user_id),
        //         tasks: this.getAllTasks(compUser[i].user_id)
        //     }
        //     finalData.push(newData)
        // }
    //     const data = [
    //         {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    //         {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    //         {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    //         {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    //         {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    //         {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    //         {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    //   ];
    

    render() {
            return (
            < div >
                {this.getChartData}
                <LineChart width={770} height={375} data={this.getChartData()} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line strokeWidth={2} type="monotone" dataKey="count" stroke="#da863d" />
                    {/* <Line strokeWidth={2} type="monotone" dataKey="task" stroke="#ce1c2e" /> */}
                    {/* <Line strokeWidth={2} type="monotone" dataKey="7" stroke="#547cd5" />
                    <Line strokeWidth={2} type="monotone" dataKey="6" stroke="#10a843" /> */}
                    <YAxis />
                    <XAxis dataKey="name" />
                    {<Tooltip />}
                    <Legend />
                </LineChart>
                <button onClick={() => this.getChartData()}></button>
            </div >
        )

    }
}



function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Table2)