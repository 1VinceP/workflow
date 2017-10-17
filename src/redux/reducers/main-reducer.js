import axios from 'axios';


const initialState = {
        user: null
    }

    const GET_USER_INFO = "GET_USER_INFO";
    
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
    
    export default function reducer(state = initialState, action) {
        switch(action.type) {
            case GET_USER_INFO + '_FULFILLED':
                return Object.assign([], state, {user: action.payload})
            default:
                return state;
        }
    }
    
    export function addCompany(){
        return {
            
        }
    }