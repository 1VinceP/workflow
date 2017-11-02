import React, { Component } from 'react';
// import TextField from 'material-ui/TextField';
import './edit-user.css';
import { Link } from 'react-router-dom';
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
        return this.props.user.user_firstname
        }
    }
    componentWillMount() {
        if (!this.props.user) {
            return window.location.href = 'http://localhost:3000/#/'

        }

    }

    render() {

        console.log( 'User Props!!', this.props.location.query.fName, this.props.location.query.lName, this.props.location.query.email )
       
        return (
            <div className="profile-modal">
                <div className="firstname">
                    <input onChange={(e) => this.props.editUserFirstname(e.target.value)} 
                    placeholder={this.props.location.query.fName ? this.props.location.query.fName : "First Name"}
                    
                    //hintText="First Name"
                     />

                </div>
                <div className="lastname">
                    <input onChange={(e) => this.props.editUserLastname(e.target.value)} 
                    placeholder={this.props.location.query.lName ? this.props.location.query.lName : 'Last Name'}
                     />
                </div>
                <div className="display-name">
                    <input onChange={(e) => this.props.editUserDisplayName(e.target.value)}
                    placeholder={this.props.location.query.email ? this.props.location.query.email : 'Email Address'}
                    
                    />
                </div>
                <Link to='/display-users' ><button className='save-edit-user' onClick={() => this.submitUser()}>Save Changes</button></Link>
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