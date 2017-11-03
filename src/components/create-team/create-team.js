import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './create-team.css';
import { getUserInfo, editTeamName, editTeamDescription, getCompanyInfo, getCompanyTeamInfo } from '../../redux/reducers/main-reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SideBarNav from '../dashboard/Sidebar'

class CreateTeam extends Component {
    constructor() {
        super()
        this.state = {

        }
        this.submitTeam = this.submitTeam.bind(this);
    }

    submitTeam() {
        let data = {
            team_name: this.props.team_name,
            team_description: this.props.team_description,
            team_company: this.props.user.user_company
        }
        axios.post('/api/addteam', data)
            .then(() => {
                this.props.getUserInfo().then(res => {
                    this.props.getCompanyInfo(this.props.user.user_company).then(res => {
                        this.props.getCompanyTeamInfo(this.props.user.user_company)
                    })
                })
            })
    }

    componentWillMount() {
        if (!this.props.user) {
            return window.location.href = 'http://localhost:3000/#/'
        } else if(this.props.user.user_role === 0){
            return window.location.href = 'http://localhost:3000/#/dashboard'
        }

    }
    render() {

        return (
            <div className="team-container">
                <SideBarNav />
                <div className="team-modal">
                    <div className="top">
                        <div>Create Team</div>
                    </div>
                    <div className="create-team-name-description">
                    <div className="dashboard-input-names">
                        <input className="nameinputss" onChange={(e) => this.props.editTeamName(e.target.value)}
                            placeholder="Team Name (Required)" />
                    </div>
                    <div className="teamdescription">
                        <input className="nameinputss" onChange={(e) => this.props.editTeamDescription(e.target.value)}
                            placeholder="Team Description" fullwidth='false' />
                    </div>
                    </div>
                    <div className='button-container-create-team'>
                    <Link to='/display-teams'><button className="cancel">Cancel</button></Link>
                    <Link to='/display-teams'><button className="save" onClick={() => this.submitTeam()}>Save Changes</button></Link>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, {
    getUserInfo,
    editTeamName, editTeamDescription, getCompanyInfo, getCompanyTeamInfo
})(CreateTeam)
