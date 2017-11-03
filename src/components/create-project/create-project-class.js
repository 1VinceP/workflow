import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import CreateTaskFunctional from '../task/create-task-functional'
import DatePicker from 'material-ui/DatePicker';
import Create_Project_Task from './create-project-tasks'
import axios from 'axios'
import './create-project.css'
import {  addProjectDesc, addProjectEnd, addProjectName, addProjectPrice, addProjectStart, getCompanyProjectInfo, getCompanyInfo, resetProjectAndTasks} from '../../redux/reducers/main-reducer';

import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'
import SideBarNav from '../dashboard/Sidebar'

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
            project_start_date: this.props.project_start_date + '',
            project_finished_date: this.props.project_finish_date + '',
            project_description:this.props.project_description,
            project_company:this.props.company.company_id,
            project_price:this.props.project_price,
            project_paid: this.props.project_paid,
            project_creator: this.props.project_creator,
            project_unique_key: this.props.project_unique_key,
            project_last_task: this.props.project_last_task
        }
        axios.post('/api/addproject', data).then(res => {
            this.props.getCompanyInfo(this.props.user.user_company)
            this.props.getCompanyProjectInfo(this.props.user.user_company)
            this.props.resetProjectAndTasks()
            return window.location.href ='http://localhost:3000/#/display-projects'
        })        
    }

    componentWillMount() {
        if (!this.props.user) {
            return window.location.href = 'http://localhost:3000/#/'

        }

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
            <div className='create-project-details-body'>
                <SideBarNav />
                <div className='create-project-nav-divider'></div>
            <div className='project-container'>
            <div className='create-project-titles'>Create Project</div>

{/* PROJECT NAME  */}
                {this.props.project_name === ''
                ?
                <input maxLength={30}
                placeholder='Project Name'  className='project-create-project-input project-create-project-input-long' onChange={(e)=>this.props.addProjectName(e.target.value)}/>
                :
                <input maxLength={30}
                placeholder={this.props.project_name === ''? 'Project Name' : this.props.project_name} defaultValue={this.props.project_name} className='project-create-project-input project-create-project-input-long' onChange={(e)=>this.props.addProjectName(e.target.value)}/>
                }
                <div className='project-character-count'>{this.props.project_name.length}/{30}</div>
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

{/* PROJECT PRICE  */}  
                {this.props.project_price === 0.00
                ?
                <input placeholder='Project Price' className='project-create-project-input project-create-project-input-long' type='number' onChange={(e)=>this.props.addProjectPrice(e.target.value)}/>
                :
                <input defaultValue={this.props.project_price} className='project-create-project-input project-create-project-input-long' type='number' onChange={(e)=>this.props.addProjectPrice(e.target.value)}/>
            }

            {/* PROJECT DESC  */}  

            {this.props.project_description === ''
                ?
                
                <input placeholder='Project Description' className='project-create-project-input project-create-project-input-long' onChange={(e)=>this.props.addProjectDesc(e.target.value)} maxLength='300' />
                
                :

                <input defaultValue={this.props.project_description} className='project-create-project-input project-create-project-input-long' onChange={(e)=>this.props.addProjectDesc(e.target.value)} maxLength='300' />
            
                
            
                }
                <div className='project-character-count'>{this.props.project_description.length}/{300}</div>
                <div className='project-save-project'>
                    <button onClick={()=>{this.displayProject()}}  className='project-created-save-project'>Save Project</button>
                    <div className='project-save-add-tasks-text'>To Add Tasks</div>
                </div>
                
   
            </div>
            </div>
            :
            <div className='project-created-cont'>
                <div className='create-tasks-main-titles'>Create Tasks</div>
            <div className='project-created-project-body'>
                <div className='project-created-name'> {this.props.project_name}</div>
                <div className='project-dates-start-end-container'>
                    <div> {`${this.props.project_start_date} - ${this.props.project_finish_date}`}</div>
                </div>
                <div className='project-created-price'> ${this.props.project_price}</div> 


                <Button  onClick={()=>{this.displayProject()}} size="big" className='project-created-edit-project'>
                            <Icon name='setting' className='project-created-edit-project_icon' />
                        </Button>

                {/* <button onClick={()=>{this.displayProject()}} className='project-created-edit-project'>Edit Project</button> */}
                </div>
                <CreateTaskFunctional />
                <Create_Project_Task />
                <Link to="/display-projects"><button className='project-created-submit-project' onClick={()=>{this.submitProject()}}> Submit Project</button></Link>
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

export default connect(mapStateToProps, {addProjectDesc, addProjectEnd, addProjectName, addProjectPrice, addProjectStart, getCompanyProjectInfo, getCompanyInfo, resetProjectAndTasks})(Create_Project_Class);