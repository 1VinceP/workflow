import React, { Component } from 'react';
import './create-project.css'

class Create_Project_Tasks extends Component {
    constructor() {
        super();

        this.state = {
            showDetails: 'false'
        }
    }

    showTaskDetails() {
        if( this.state.showDetails === 'false' ) {
            this.setState({
                showDetails: 'true'
            })
        }
        else if( this.state.showDetails === 'true' ) {
            this.setState({
                showDetails: 'fade-out'
            })

            setTimeout( () => {
                this.setState({
                    showDetails: 'false'
                })
            }, 300 )
        }

        
    }

    render() {
        return(
            <div>
                <div className='create-project-titles create-project-titles-created-task'>Created Tasks</div> 

                <div create-project-tasks-show-task-info={ this.state.showDetails } >
                    <div create-project-tasks-show-deets={this.state.showDetails}>
                        <div className='tasky-name'>
                            <p>Create Project Manager</p>
                            <section>
                                <div>16 Oct 2017</div>
                                <div className='task-spacer'>-</div>
                                <div>3 Nov 2017</div>
                            </section>
                        </div>
                        <div className='tasky-role'>User or Role</div>
                        <div className='tasky-desc'>This is the description of the task. It needs to be a fairly large box so that it can hold all of the relevant text for the task. If the box is too small, the users will not be able to see all of the details that they need, and will therefore be left in the dark with nothing but their own intuition to complete the task. Sometimes this may be what you want, but generally it is not, so it is better to have a large box than a small one.</div>
                        <div className='tasky-link'>Task Link</div>
                    </div>
                    
                </div>

                <div className='project-tasks-created-container'>
                    <div className='project-created-task' onClick={ () => this.showTaskDetails() }>
                        TASK 1
                    </div>
                    <div className='project-created-task'>
                        TASK 2
                    </div>
                    <div className='project-created-task'>
                        TASK 3
                    </div>
                    <div className='project-created-task'>
                        TASK 4
                    </div>
                    <div className='project-created-task'>
                        TASK 5
                    </div><div className='project-created-task'>
                        TASK 6
                    </div>                    
                </div>
            </div>
        )
    }
}

export default Create_Project_Tasks;