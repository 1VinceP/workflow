import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { deleteProjectTask } from '../../redux/reducers/main-reducer';
import _ from 'underscore-node';
import './create-project.css';

class Create_Project_Tasks extends Component {
    constructor() {
        super();

        this.state = {
            showDetails: 'false', // This prevents the task info from appearing in unwanted places
            open: null,
            deets: null,
            expandInfo: 'false' // This shows the task info when the task is clicked
        }
    }

    componentDidReceiveProps() {
        this.forceUpdate()
    };

    showTaskDetails( taskName, taskId ) {
        let task = document.getElementById( taskName )
        let details = document.getElementsByClassName( taskId )

        // If no other element is open, open the clicked element
        if( this.state.open === null ) {
            this.setState({ open: taskName, deets: taskId })
            task.style.width = '420px'
            for( let i = 0; i < details.length; i++ ) {
                details[i].style.display = 'flex'
            }       
        }
        // If there is already an element open, close it and open the clicked element
        else if( this.state.open && this.state.open !== taskName ) {
            // Close old Element
            document.getElementById(this.state.open).style.width = '160px'
            for( let i = 0; i < document.getElementsByClassName(this.state.deets).length; i++ ) {
                document.getElementsByClassName(this.state.deets)[i].style.display = 'none'
            }

            // Open new element
            this.setState({ open: taskName, deets: taskId })
            task.style.width = '420px'
            for( let i = 0; i < details.length; i++ ) {
                details[i].style.display = 'flex'
            }     
        }
        // If the open element is clicked, close it
        else {
            this.setState({ open: null, deets: null })
            task.style.width = '160px'
            for( let i = 0; i < details.length; i++ ) {
                details[i].style.display = 'none'
            }       
        }
    };

    deleteTask( taskId, taskKey ) {

        this.props.deleteProjectTask( taskId, taskKey )
    }

    render() {
        let mappedTaskToDiv;

        let sorted = this.props.current_project_tasks
        let sortedTasks = _.sortBy( sorted, 'task_number' )

        mappedTaskToDiv = sortedTasks.map( ( task, i ) => {
            return (
                <section className='box-arrow' key={i}>
                    <div onClick={() => this.showTaskDetails( task.task_name, task.task_id )} id={task.task_name} className={`project-created-task ${ i % 2 === 0 ? 'task-odd' : 'task-even' }`} style={ { zIndex: 1000 - i + '' } } >
                            <div className='tasky-name'>{task.task_name}</div>
                            <div className={`task-item ${task.task_id}`} >{task.task_start_date.split(' ', 4).join(' ')}</div>
                            <div className={`task-item ${task.task_id}`} >{task.task_finished_date.split(' ', 4).join(' ')}</div>
                            <div className={`task-item ${task.task_id}`} >{task.task_description}</div>
                            <div className={`task-item ${task.task_id}`} >{task.task_link}</div>
                        </div>
                        <div className={`arrow ${ i % 2 === 0 ? 'task-odd-arrow' : 'task-even-arrow' }`} style={ { zIndex: 1000 - i + '' } } >
                            <div className='task-delete-button' onClick={() => this.deleteTask( task.task_id, task.task_unique_key )} >&#10005;</div>
                        </div>
                </section>
            )
        } )

        return(
            <div>
                <div className='create-project-titles create-project-titles-created-task'>Created Tasks</div> 

                <div className='project-tasks-created-container'>
                    {mappedTaskToDiv}
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

export default connect( mapStateToProps, {deleteProjectTask} )(Create_Project_Tasks);