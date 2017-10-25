import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
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

    render() {
        let mappedTaskToDiv;

        let sortedTasks = _.sortBy( this.props.current_project_tasks, sorted => sorted )

        mappedTaskToDiv = sortedTasks.map( ( task, i ) => {
            return (
                <section className='box-arrow' key={i}>
                    <div onClick={() => this.showTaskDetails( task.task_name, task.task_id )} id={task.task_name} className={`project-created-task ${ i % 2 === 0 ? 'task-odd' : 'task-even' }`} style={ { zIndex: 1000 - i + '' } } >
                            <div className='tasky-name'>{task.task_name}</div>
                            <div className={`task-item ${task.task_id}`} >{task.task_start_date}</div>
                            <div className={`task-item ${task.task_id}`} >{task.task_finished_date}</div>
                            <div className={`task-item ${task.task_id}`} >{task.task_description}</div>
                            <div className={`task-item ${task.task_id}`} >{task.task_link}</div>
                        </div>
                        <div onClick={() => this.showTaskDetails( task.task_name, task.task_id )} className={`arrow ${ i % 2 === 0 ? 'task-odd-arrow' : 'task-even-arrow' }`} style={ { zIndex: 1000 - i + '' } } ></div>
                </section>
            )
        } )

        return(
            <div>
                <div className='create-project-titles create-project-titles-created-task'>Created Tasks</div> 

                {/*<div create-project-tasks-show-task-info={ this.state.showDetails } >
                    <div create-project-tasks-show-deets={this.state.showDetails}>
                        { mappedTask }
                    </div>
                    
                </div>*/}

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

export default connect( mapStateToProps, {} )(Create_Project_Tasks);