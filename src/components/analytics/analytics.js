import React, { Component } from 'react';
import './analytics.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { connect } from 'react-redux';
import Table1 from './table1';
import Table2 from './table2';
import LeftNav from '../dashboard/Sidebar'


class Analytics extends Component {
    
    componentWillMount() {
        if (!this.props.user) {
            return window.location.href = 'http://localhost:3000/#/'

        }

    }
 
    render() {

        return (
            <div className="analytics-container">
                <div className="charts-container">
                    <div className="charts-main">
                        <LeftNav />

                        <div className="table-container">
                            <div className="analytics-top-table">
                                Tasks Completed Per Employee
                        </div>
                            <Table2 />
                        </div>
                        </div>

                        {/* <div className="table-container">
                        <Table2 />
                    </div> */}
                </div>
                <div className="charts-container">
                    <div className="charts-main">
                        <div className='table-spacer-alignment'></div>
                    <div className="table-container2">
                        <div className="analytics-top-table2">
                            Tasks to Complete Per Project
                    </div>
                        <Table1 />
                    </div>
                    </div>
                    </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Analytics)
