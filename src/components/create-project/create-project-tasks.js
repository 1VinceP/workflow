import React, { Component } from 'react';
import './create-project.css'

class Create_Project_Tasks extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <div className='create-project-titles create-project-titles-created-task'>Created Tasks</div> 

                <div className='project-tasks-created-container'>
                <div className='project-created-task'>
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