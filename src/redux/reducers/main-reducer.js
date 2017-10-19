import axios from 'axios';
// const company_controller = require('./controllers/company_controller')
const GET_USER_INFO = "GET_USER_INFO";
const GET_COMPANY_INFO = "GET_COMPANY_INFO";
const GET_COMPANY_USERS_INFO = "GET_COMPANY_USERS_INFO";
const ADDCOMPANYINDUSTRY = "ADDCOMPANYINDUSTRY";
const ADD_COMPANY_NAME = "ADD_COMPANY_NAME";
const ADD_COMPANY_EMAIL = "ADD_COMPANY_EMAIL";
const ADD_COMPANY_PHONE = "ADD_COMPANY_PHONE";
const ADD_COMPANY_URL = "ADD_COMPANY_LOGO_URL";
const ADD_COMPANY = "ADD_COMPANY";
const ADD_COMPANY_LOGO_URL = "ADD_COMPANY_LOGO_URL";
const EDIT_USER_FIRST_NAME = "EDIT_USER_FIRST_NAME";
const EDIT_USER_LAST_NAME = "EDIT_USER_LAST_NAME";
const EDIT_USER_EMAIL = "EDIT_USER_EMAIL";
const EDIT_USER_PICTURE_URL = "EDIT_USER_PICTURE_URL";
const EDIT_USER_DISPLAY_NAME = "EDIT_USER_DISPLAY_NAME";
const EDIT_USER_TEAM = "EDIT_USER_TEAM";
const EDIT_USER_ROLE = "EDIT_USER_ROLE";
const ADD_UNIQUE_KEY_PROJECT_TASK = "ADD_UNIQUE_KEY_PROJECT_TASK";
   
var initialState = {
    user: null,
    company: null,
    company_users: [],
    company_name: '',
    company_email: '',
    company_phone: '',
    company_url: '',
    company_industry: '',
    company_badge: '',
    user_firstname: '',
    user_lastname: '',
    user_email: '',
    user_picture: '',
    user_display_name: '',
    user_team: '',
        user_role:'',
        project_unique_key:'',
    }
    
    export default function reducer(state = initialState, action) {
        // console.log('action',action.type)
        // console.log('payload',action.payload)
        // console.log('action',action)
        switch(action.type) {
            case GET_USER_INFO + '_FULFILLED':
                return Object.assign({}, state, {user: action.payload})
            case GET_COMPANY_INFO + '_FULFILLED':
                return Object.assign({}, state, { company: action.payload })
            case ADDCOMPANYINDUSTRY:
                return Object.assign({}, state, {company_industry: action.payload})
            case ADD_COMPANY_NAME:
                return Object.assign({}, state, {company_name: action.payload, company_badge:action.company_badge})
            case ADD_COMPANY_EMAIL:
                return Object.assign({}, state, {company_email: action.payload})
            case ADD_COMPANY_PHONE:
                return Object.assign({}, state, {company_phone: action.payload})
            case ADD_COMPANY_URL:
                return Object.assign({}, state, {company_url: action.payload})
            case GET_COMPANY_USERS_INFO + '_FULFILLED':
                return Object.assign({}, state, { company_users: action.payload })
            case ADD_COMPANY_LOGO_URL:
                return Object.assign({}, state, {company_logo_url: action.payload})
            case EDIT_USER_FIRST_NAME:
                return Object.assign({}, state, {user_firstname: action.payload})
            case EDIT_USER_LAST_NAME:
                return Object.assign({}, state, {user_lastname: action.payload})
            case EDIT_USER_EMAIL:
                return Object.assign({}, state, {user_email: action.payload})
            case EDIT_USER_PICTURE_URL:
                return Object.assign({}, state, {user_picture: action.payload})
            case EDIT_USER_DISPLAY_NAME:
                return Object.assign({}, state, {user_display_name: action.payload})
            case EDIT_USER_TEAM:
                return Object.assign({}, state, {user_team: action.payload})
            case EDIT_USER_ROLE:
                return Object.assign({}, state, {user_role: action.payload})
            case ADD_UNIQUE_KEY_PROJECT_TASK:
                return Object.assign({}, state, {project_unique_key: action.payload})
            default:
                return state;
        }
    }
    export function addCompanyName(companyName) {
        let badge = companyName.split(' ')
        console.log(badge)
        const badgeFinal =[]
        for(let i = 0; i < badge.length; i++){
          badgeFinal.push(badge[i].charAt(0))
        }
        let company_badge = badgeFinal.join('').toUpperCase();
        return { 
            payload: companyName, company_badge,  
            type:ADD_COMPANY_NAME
        }
    }
    export function addCompanyEmail(companyEmail) {
        console.log(companyEmail)
        return { 
            payload: companyEmail, 
            type:ADD_COMPANY_EMAIL}
    }
    export function addCompanyPhone(companyPhone) {
        console.log(companyPhone)
        return { 
            payload: companyPhone, 
            type:ADD_COMPANY_PHONE}
    }
    export function addCompanyLogo(companyLogo) {
        console.log(companyLogo)
        return { 
            payload: companyLogo, 
            type:ADD_COMPANY_URL}
    }

    export function addProjectUniqueKey(companyName) {
        let projectKey = companyName + new Date();
        let finalKey = projectKey.replace(/[^A-Z0-9]/ig, "0").toLowerCase();

        console.log(finalKey)
        return { 
            payload: finalKey, 
            type:ADD_UNIQUE_KEY_PROJECT_TASK}
    }
    
    export function getCompanyUsersInfo(id) {
        console.log("REDUCER ID: ", id)
        const companyInfo = axios.get(`/api/company/users/${id}`).then(res => {
            console.log("COMPANY DATA", res.data)
            return res.data
        })
        return {
            type: GET_COMPANY_USERS_INFO,
            payload: companyInfo
        }
    }

    export function addCompanyIndustry(industrySelected){
        console.log('INDUSTRY', industrySelected)
        return{
            
            type: ADDCOMPANYINDUSTRY,
            payload: industrySelected}
    }
    
    export function getUserInfo() {
        const userInfo = axios.get('/login/user').then(res => {
            console.log( res.data )
            return res.data
        })
        return {
            type: GET_USER_INFO,
            payload: userInfo
        }
    }

    export function getCompanyInfo(id) {
        const companyInfo = axios.get(`/api/company/${id}`).then(res => {
            console.log("COMPANY DATA", res.data)
            return res.data
        })
        return {
            type: GET_COMPANY_INFO,
            payload: companyInfo
        }
    }

    export function addCompany(data) {
        console.log(data)
        return{
        type:ADD_COMPANY,    
        payload: data

    }
}

export function editUserFirstname(firstname) {
    // console.log('firstname is ', firstname)
    return {
        type: EDIT_USER_FIRST_NAME,
        payload: firstname
    }
}

export function editUserLastname(lastname) {
    // console.log('lastname is ', lastname)
    return {

        type: EDIT_USER_LAST_NAME,
        payload: lastname
    }
}

export function editUserEmail(email) {
    // console.log('email is ', email)
    return {

        type: EDIT_USER_EMAIL,
        payload: email
    }
}

export function editUserPictureUrl(url) {
    // console.log('url is ', url)
    return {

        type: EDIT_USER_PICTURE_URL,
        payload: url
    }
}

export function editUserDisplayName(display) {
    // console.log('display is ', display)
    return {

        type: EDIT_USER_DISPLAY_NAME,
        payload: display
    }
}

export function editUserTeam(team) {
    // console.log('team is ', team)
    return {

        type: EDIT_USER_TEAM,
        payload: team
    }
}

export function editUserRole(role) {
    // console.log('role is ', role)
    return {

        type: EDIT_USER_ROLE,
        payload: role
    }
}