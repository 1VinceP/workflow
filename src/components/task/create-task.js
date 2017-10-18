
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import './task.css'

const customContentStyle = {
  width: '633px',
  maxWidth: 'none',
  fontFamily: 'helvetica',
  fontSize: '16px',

};

class Create_task extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
          };
        
    }

    handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };
    
      render() {
        const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
          />,
          <FlatButton
            label="+ Add Task"
            primary={true}
            onClick={this.handleClose}
          />,
        ];
    
        return (
          <div>
            
            <RaisedButton label="Add Task" onClick={this.handleOpen} />
            <Dialog
              title="Add Task"
              actions={actions}
              modal={false}
              open={this.state.open}
              contentStyle={customContentStyle}
              onRequestClose={this.handleClose}
            >
              <input placeholder='Task Name' className='task-create-task-input task-create-task-input-long'/>
              <div className='task-start-finish-date'>
              <DatePicker hintText="Start Date" 
              contentStyle={customContentStyle}/>
              <div className='task-start-finish-date-spacer'></div>
              <DatePicker hintText="Finish Date" 
              contentStyle={customContentStyle}/>
              </div>
              <input placeholder='Task Description' className='task-create-task-input task-create-task-input-long'/>
              <div>
                <input placeholder='User' className='task-create-task-input'/>
                or
                <input placeholder='Role' className='task-create-task-input task-create-task-input-role'/>
              </div>
              <input placeholder='Task Link' className='task-create-task-input task-create-task-input-long'/>
            </Dialog>
          </div>
        );
      }
    }

export default Create_task;