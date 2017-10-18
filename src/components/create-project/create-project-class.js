import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import './create-project.css'

class Create_Project_Class extends Component {

    render() {
        return(
            <div className='project-container'>
                <input placeholder='Project Name' className='project-create-project-input project-create-project-input-long'/>
                <div className='project-start-project-date'>
                <DatePicker hintText="Start Date" 
              />
              <div className='project-start-finish-date-spacer'></div>
              <DatePicker hintText="Finish Date" />
              </div>

              
                <input placeholder='Project Description' className='project-create-project-input project-create-project-input-long'/>

            </div>
        )
    }
}

export default Create_Project_Class;