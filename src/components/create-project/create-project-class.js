import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateTaskFunctional from '../task/create-task-functional'
import DatePicker from 'material-ui/DatePicker';
import Create_Project_Task from './create-project-tasks'
import axios from 'axios'
import './create-project.css'
import {  addProjectDesc, addProjectEnd, addProjectName, addProjectPrice, addProjectStart} from '../../redux/reducers/main-reducer';

class Create_Project_Class extends Component {
    constructor(){
        super();
        this.state={
            displayProjectInfo: false
        }
    }

    submitProject(){
        let data={
            project_name:this.props.project_name,
            project_start_date: this.props.project_start_date,
            project_finished_date: this.props.project_finish_date,
            project_description:this.props.project_description,
            project_company:this.props.company[0].company_id,
            project_price:this.props.project_price,
            project_paid: this.props.project_paid,
            project_creator: this.props.project_creator,
            project_unique_key: this.props.project_unique_key,
        }
        axios.post('/api/addproject', data)
        console.log(data)
    }




    displayProject(){
        this.setState({
            displayProjectInfo: !this.state.displayProjectInfo
        })
    }

    render() {
        return(
            
            <div>
            {this.state.displayProjectInfo === false ?
            <div className='project-container'>

{/* PROJECT NAME  */}
                {this.props.project_name === ''
                ?
                <input 
                placeholder='Project Name'  className='project-create-project-input project-create-project-input-long' onChange={(e)=>this.props.addProjectName(e.target.value)}/>
                :
                <input 
                placeholder={this.props.project_name === ''? 'Project Name' : this.props.project_name} defaultValue={this.props.project_name} className='project-create-project-input project-create-project-input-long' onChange={(e)=>this.props.addProjectName(e.target.value)}/>
                }

{/* PROJECT START DATE  */}
            <div className='project-start-project-date'>

                {this.props.project_start_date === ''
                ?
                <DatePicker hintText="Start Date" 
                onChange={this.props.addProjectStart}/>
                :
                <DatePicker hintText={this.props.project_start_date} 
                onChange={this.props.addProjectStart}/>
                }
{/* PROJECT END DATE  */}                
              <div className='project-start-finish-date-spacer'></div>

              { this.props.project_finish_date === ''
              ?
              <DatePicker hintText="Finish Date" 
                onChange={this.props.addProjectEnd}/>
                :
                <DatePicker hintText={this.props.project_finish_date} 
                onChange={this.props.addProjectEnd}/>
                }
              </div>

{/* PROJECT DESC  */}  

                {this.props.project_description === ''
                ?
                
                <input placeholder='Project Description' className='project-create-project-input project-create-project-input-long' onChange={(e)=>this.props.addProjectDesc(e.target.value)}/>
                
                :
                <div className='project-counter-container'>
                <input defaultValue={this.props.project_description} className='project-create-project-input project-create-project-input-long' onChange={(e)=>this.props.addProjectDesc(e.target.value)}/>
            
                    <div className='project-character-count'>{this.props.project_description.length}/{300}</div>
                    </div>
            
                }
{/* PROJECT PRICE  */}  
                {this.props.project_price === 0.00
                ?
                <input placeholder='Project Price' className='project-create-project-input project-create-project-input-long' type='number' onChange={(e)=>this.props.addProjectPrice(e.target.value)}/>
                :
                <input defaultValue={this.props.project_price} className='project-create-project-input project-create-project-input-long' type='number' onChange={(e)=>this.props.addProjectPrice(e.target.value)}/>
            }
                <div className='project-save-project'>
                    <button onClick={()=>{this.displayProject()}}  className='project-created-save-project'>Save Project</button>
                    <div className='project-save-add-tasks-text'>To Add Tasks</div>
                </div>
                
   
            </div>
            :
            <div className='project-created-cont'>
            <div className='project-created-project-body'>
                <div className='project-created-name'> {this.props.project_name}</div>
                <div className='project-dates-start-end-container'>
                    <div> {`${this.props.project_start_date} - ${this.props.project_finish_date}`}</div>
                </div>
                <div className='project-created-descritpion'> {this.props.project_description}</div>
                <div className='project-created-price'> ${this.props.project_price}</div> 
                <button onClick={()=>{this.displayProject()}} className='project-created-edit-project'>Edit Project</button>
                </div>
                <CreateTaskFunctional />
                <Create_Project_Task />
                <button className='project-created-submit-project' onClick={()=>{this.submitProject()}}> Submit Project</button>
            </div>
        }
            </div>
        )
    }
}
{/* <CreateTaskFunctional /> */}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {addProjectDesc, addProjectEnd, addProjectName, addProjectPrice, addProjectStart})(Create_Project_Class);