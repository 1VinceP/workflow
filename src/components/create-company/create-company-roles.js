import React, { Component } from 'react';
import axios from 'axios'
class companyRoles extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            selectedUser: '',
            roleName: '',
            roles: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3005/api/test/getusers')
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
        axios.get('http://localhost:3005/api/roles')
            .then(res => {
                this.setState({
                    roles: res.data
                })
            })
    }

    userClicked(e) {
        this.se
        console.log('TRUUUU', e)
    }

    mapFunction() {
        var x = this.state.users
        return x.map((e, i) => {
            return (
                <div>
                    <input onClick={() => this.userClicked(e.user_firstname)} id={e.user_id} type='checkbox' key={i} value={e.user_id} />
                    <label htmlFor={e.user_id} >{e.user_firstname} </label>
                </div>
            )
        })
    }

    getCreatedRoles() {
        var x = this.state.roles
        return x.map((e, i) => {
            return (
                <div>
                    <span>{e.role_name}</span>
                    <div>
                        <br/>
                        <br/>
                    {this.getUsersForRoles(e.role_id)}
                    <br/>
                    </div>
                </div>
            )
        })
    }
    selectedUser(e) {
        var name = e.target.value
        this.setState({ selectedUser: name })
    }

    nameChanged(e) {
        var name = e.target.value
        this.setState({
            roleName: name
        })
    }


    getUsersForRoles(e) {
        let user = e;
        var xx
        console.log("USERRRR", user)
        axios.get(`http://localhost:3005/api/roles/users?users=${user}`)
            .then(res => {
                return res.data.map((e, i) => {
                    console.log("EEEE", e.user_firstname)
                     xx = (<div>{e.user_firstname}</div>)
                })
            })
            return xx;
    }


    createRoll(e) {
        console.log(e)
        axios.post('http://localhost:3005/api/addrole', e)
            .then(res => {
                console.log("posting Response: ", res)
            })
    }


    render() {
        var role = {
            role_name: this.state.roleName,
            role_company: 2
        }
        const created_roles = this.getCreatedRoles()
        const options = this.mapFunction()
        return (
            <div>
                <h3>Create Role</h3>
                <span>Name:<input onChange={(e) => this.nameChanged(e)}></input></span>
                <br />
                <br />
                {/* <select onChange={(e) => this.selectedUser(e)}> */}

                {options}

                {/* </select> */}
                <br />
                <br />
                <button onClick={(e) => this.createRoll(role)}>Submit</button>
                <br />
                <h2>created roles:</h2>
                {created_roles}
                <h5>users:</h5>
            </div>
        )
    }
}

export default companyRoles;