import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './create-project.css'

class Create_Project_Tasks extends Component {
    constructor() {
        super();

        this.state = {
            showDetails: 'false', // This prevents the task info from appearing in unwanted places
            open: null,
            expandInfo: 'false' // This shows the task info when the task is clicked
        }
    }

    componentDidReceiveProps() {
        this.forceUpdate()
    }



    showTaskDetails( taskName ) {
        let task = document.getElementById( taskName )

        if( this.state.open === null ) {
            this.setState({ open: taskName, expandInfo: 'true' })
            task.style.width = '420px'
            task.taskyShowDeets = 'true'
        }
        else if( this.state.open > 0 && this.state.open !== taskName ) {
             document.getElementById(this.state.open).style.width = '160px'
             document.getElementById(this.state.open).taskyShowDeets = 'false'

             this.setState({ open: taskName })
             task.style.width = '420px'
             task.taskyShowDeets = 'true'
        }
        else {
            this.setState({ open: null, expandInfo: 'false' })
            task.style.width = '160px'
            task.taskyShowDeets = 'false'
        }
    }

    render() {
        var mappedTask, mappedTaskToCircle;

    //     this.props.current_project_tasks ?
    //         mappedTask = this.props.current_project_tasks.map( ( task, i ) => {
    //        <div key={i}>
    //            <div className='tasky-name'>
    //            <p>{task.task_name}</p>
    //            <section>
    //                <div>{task.task_start_date}</div>
    //                <div className='task-spacer'>-</div>
    //                <div>{task.task_finished_date}</div>
    //            </section>
    //            </div>
    //            <div className='tasky-role'>{task.task_user_1}</div>
    //            <div className='tasky-desc'>{task.task_description}</div>
    //            <div className='tasky-link'>{task.task_link}</div>
    //            <div className='tasky-close' onClick={ () => this.showTaskDetails() } >Close</div>
    //        </div>
    //    } ) 
    //    : null

       mappedTaskToCircle = this.props.current_project_tasks.map( ( task, i ) => {
           return (
               <section className='box-arrow' key={i}>
                   <div onClick={() => this.showTaskDetails( task.task_name )} id={task.task_name} className={`project-created-task ${ i % 2 === 0 ? 'task-odd' : 'task-even' }`} style={ { zIndex: 1000 - i + '' } } >
                        <div className='tasky-name'>{task.task_name}</div>
                        <div taskyShowDeets='false' >{task.task_start_date}</div>
                        <div taskyShowDeets='false' >{task.task_finished_date}</div>
                        <div taskyShowDeets='false' >{task.task_description}</div>
                        <div taskyShowDeets='false' >{task.task_link}</div>
                    </div>
                    <div className={`arrow ${ i % 2 === 0 ? 'task-odd-arrow' : 'task-even-arrow' }`} style={ { zIndex: 1000 - i + '' } } ></div>
               </section>
           )
       } )

        return(
            <div>
                <div className='create-project-titles create-project-titles-created-task'>Created Tasks</div> 

                <div create-project-tasks-show-task-info={ this.state.showDetails } >
                    <div create-project-tasks-show-deets={this.state.showDetails}>
                        { /* mappedTask */ }
                    </div>
                    
                </div>

                <div className='project-tasks-created-container'>
                    {mappedTaskToCircle}
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { current_project_tasks } = state


    return {
        current_project_tasks
    }
}

export default connect( mapStateToProps, {} )(Create_Project_Tasks);