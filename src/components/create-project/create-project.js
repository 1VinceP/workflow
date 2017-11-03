
import React from 'react'
// import CreateTaskFunctional from '../task/create-task-functional'
import Create_Project_Class from './create-project-class'
import Create_Project_Task from './create-project-tasks'
import './create-project.css'

export default function () {
    
    return (
        
        <div className='create-project-body'>
            <div className='create-project-main-container'>
                <div>
                    <div className='create-project-divider'></div>
                   
                </div>
                    <Create_Project_Class />
            </div>
        </div>
    )
}
