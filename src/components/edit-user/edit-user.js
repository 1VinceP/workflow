import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import './edit-user.css';
import {  editUserFirstname
        , editUserLastname
        , editUserEmail
        , editUserPictureUrl
        , editUserDisplayName
        , editUserTeam
        , editUserRole
        } from '../../redux/reducers/main-reducer';
import {connect} from 'react-redux';
import axios from 'axios'

class EditUser extends Component {
    constructor() {
        super();
        this.state = {
        }
        this.submitUser = this.submitUser.bind(this);
    }

    // componentDidMount(){
    //     const x = this.props.user
    // }

    submitUser() {
        var x;
        let data = {
            user_firstname: this.props.user_firstname ? this.props.user_firstname : this.props.user['user_firstname'],
            user_lastname: this.props.user_lastname ? this.props.user_lastname : this.props.user['user_lastname'],
            user_display_name: this.props.user_display_name ? this.props.user_display_name : this.props.user['user_display_name'],
            user_id: this.props.user['user_id'],
        }
        axios.post('/api/edituser', data)
        .then(axios.get(`http://localhost:3005/api/users/user/${data.user_id}`).then(res => {
             x = res.data[0].user_firstname
            console.log("DOT THEN RES", x)
        })) 
        console.log("FINAL X", x)
    }

    getFirstName(){
        if(this.props.user){
            return this.props.user['user_firstname']
        } else {
            return 'First Name'
        }
    }

    getLastName(){
        var xx
        if(this.props.user){
            xx = this.props.user['user_lastname']
        } else {
            xx = 'Last Name'
        }
        return xx;
        this.submitUser = this.submitUser.bind(this);
    }


    getDisplayName(){
        if(this.props.user){
            return this.props.user['user_display_name']
        } else {
            return 'Display Name'
        }
    }

    componentWillReceiveProps(){
        if(this.props.user){
        this.props.user.user_firstname
        }
    }

    render() {
       
        return (
            <div className="profile-modal">
                <div className="firstname">
                    <TextField onChange={(e) => this.props.editUserFirstname(e.target.value)} 
                    placeholder={this.props.user? this.props.user['user_firstname'] : "First Name"}
                    
                    //hintText="First Name"
                     />

                </div>
                <div className="lastname">
                    <TextField onChange={(e) => this.props.editUserLastname(e.target.value)} 
                    placeholder={this.getLastName()}
                     />
                </div>
                <div className="display-name">
                    <TextField onChange={(e) => this.props.editUserDisplayName(e.target.value)}
                    placeholder={this.getDisplayName()}
                    
                    />
                </div>
                <button onClick={() => this.submitUser()}>Save Changes</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, {editUserFirstname, editUserLastname
    , editUserEmail
    , editUserPictureUrl
    , editUserDisplayName
    , editUserTeam
    , editUserRole})(EditUser)