import axios from 'axios';
// const company_controller = require('./controllers/company_controller')

const GET_USER_INFO = "GET_USER_INFO";
const ADDCOMPANYINDUSTRY = "ADDCOMPANYINDUSTRY";
const ADD_COMPANY_NAME = "ADD_COMPANY_NAME";
const ADD_COMPANY_EMAIL = "ADD_COMPANY_EMAIL";
const ADD_COMPANY_PHONE = "ADD_COMPANY_PHONE";
const ADD_COMPANY_URL = "ADD_COMPANY_LOGO_URL";
const ADD_COMPANY = "ADD_COMPANY";

    
   

var initialState = {
        user: null,
        company_name:'',
        company_email:'',
        company_phone:'',
        company_url:'',
        company_industry:'',
        company_badge:'',

    }

    
    export default function reducer(state = initialState, action) {
        console.log('action',action.type)
        console.log('payload',action.payload)
        console.log('action',action)
        switch(action.type) {
            case GET_USER_INFO + '_FULFILLED':
                return Object.assign({}, state, {user: action.payload})
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
            case ADD_COMPANY:
                return action.payload
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
    export function addCompany(data) {
        console.log(data)
        return{

        type:ADD_COMPANY,    
        payload: data

     
        }
    }
