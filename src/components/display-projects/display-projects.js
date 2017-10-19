import React, { Component } from 'react';
import { connect } from 'react-redux'
import './display-projects.css';
import { addProjectUniqueKey } from '../../redux/reducers/main-reducer'
import RaisedButton from 'material-ui/RaisedButton';
// eslint-disable-next-line
import axios from 'axios';
import {Link} from 'react-router-dom';

let style = {
    margin: 12,
};

class DisplayProjects extends Component {
    constructor() {
        super();

        this.state = {
            teamdata: []
        }
    }

    render() {
console.log('DISPLAY PROPS', this.props)
        let teamInfo = this.state.teamdata.map((e, i) => {
            return (
                <div>
                <div className="team-data">
                    This will be project data
                </div>
                <Link to="/edit-team"><RaisedButton label="Edit Team" primary={true} style={style} /></Link>
                </div>
            )
        })

        return (
            <div className="display-team-container">
                <div className="user-team-wrapper">
                    <div className="title">
                        Company Project List
                    </div>
                    
                    
                    <div className="button-container">
                    <a href='/#/create-project'>
                    <button className="display-projects-button-container" onClick={()=>{this.props.addProjectUniqueKey(this.props.company[0].company_name)}}> + New Project</button>
                    </a>

                    </div>
                    <div className="left-column">
                        This will be project info
                {/* <RaisedButton label="Delete project" secondary={true} style={style} /> */}
                <button className='display-projects-delete-button' >Delete Project</button>
                    </div>
                    <div className="right-column">
                    This will be project info
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state
  }

export default connect(mapStateToProps, {addProjectUniqueKey})(DisplayProjects)
