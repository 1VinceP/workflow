import axios from 'axios';
const GET_USER_INFO = "GET_USER_INFO";
const GET_TEAM_INFO = "GET_TEAM_INFO";
const GET_COMPANY_INFO = "GET_COMPANY_INFO";
const GET_COMPANY_USERS_INFO = "GET_COMPANY_USERS_INFO";
const GET_COMPANY_TEAM_INFO = "GET_COMPANY_TEAM_INFO";
const GET_COMPANY_PROJECT_INFO = "GET_COMPANY_PROJECT_INFO";
const ADDCOMPANYINDUSTRY = "ADDCOMPANYINDUSTRY";
const ADD_COMPANY_NAME = "ADD_COMPANY_NAME";
const ADD_COMPANY_EMAIL = "ADD_COMPANY_EMAIL";
const ADD_COMPANY_PHONE = "ADD_COMPANY_PHONE";
const ADD_COMPANY_URL = "ADD_COMPANY_LOGO_URL";
const ADD_COMPANY = "ADD_COMPANY";
const ADD_COMPANY_LOGO_URL = "ADD_COMPANY_LOGO_URL";
const ADD_ASSIGN_COMPANY_USER_INPUT = 'ADD_ASSIGN_COMPANY_USER_INPUT'
const EDIT_USER_FIRST_NAME = "EDIT_USER_FIRST_NAME";
const EDIT_USER_LAST_NAME = "EDIT_USER_LAST_NAME";
const EDIT_USER_EMAIL = "EDIT_USER_EMAIL";
const EDIT_USER_PICTURE_URL = "EDIT_USER_PICTURE_URL";
const EDIT_USER_DISPLAY_NAME = "EDIT_USER_DISPLAY_NAME";
const EDIT_USER_TEAM = "EDIT_USER_TEAM";
const EDIT_USER_ROLE = "EDIT_USER_ROLE";
const GET_USER_TASKS = "GET_USER_TASKS";
const EDIT_TEAM_NAME = "EDIT_TEAM_NAME";
const EDIT_TEAM_DESCRIPTION = "EDIT_TEAM_DESCRIPTION";
const ADD_UNIQUE_KEY_PROJECT_TASK = "ADD_UNIQUE_KEY_PROJECT_TASK";
const ADD_COMPANY_CODE = "ADD_COMPANY_CODE";
const GET_PROJECT = "GET_PROJECT";
const ADD_PROJECT_NAME = "ADD_PROJECT_NAME";
const ADD_PROJECT_START_DATE = "ADD_PROJECT_START_DATE";
const ADD_PROJECT_FINISH_DATE = "ADD_PROJECT_FINISH_DATE";
const ADD_PROJECT_DESCRIPTION = "ADD_PROJECT_DESCRIPTION";
const ADD_PROJECT_PRICE = "ADD_PROJECT_PRICE";
const ADD_PROJECT_LAST_TASK = "ADD_PROJECT_LAST_TASK";
const CURRENT_PROJECT_TASKS = "CURRENT_PROJECT_TASKS";
const UPDATE_EMPLOYEE_NAME = "UPDATE_EMPLOYEE_NAME";
const GET_USER_INFO_AFTER = 'GET_USER_INFO_AFTER';
const RESET_PROJECT_AND_TASKS = "RESET_PROJECT_AND_TASKS";



var initialState = {
    user: null,
    team: null,
    company: [],
    company_users: [],
    company_team: [],
    company_project: [],
    company_name: '',
    company_email: '',
    company_phone: '',
    company_url: '',
    company_industry: '',
    company_badge: '',
    company_code: '',
    user_firstname: '',
    user_lastname: '',
    user_email: '',
    user_picture: '',
    user_display_name: '',
    user_team: '',
    user_role: '',
    user_tasks: '',
    team_name: '',
    team_description: '',
    project_unique_key: '',
    project_name: '',
    project_start_date: '',
    project_finish_date: '',
    project_description: '',
    project_price: 0.00,
    project_paid: false,
    project_creator: '',
    project_last_task: '',
    projects: [],
    assignUserCompany: [],
    assign_user_company_input: '',

    current_project_tasks: [],
    project_tasks: [],
    user_tasks: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_COMPANY_INFO + '_FULFILLED':
            return Object.assign({}, state, { company: action.payload })
        case GET_COMPANY_TEAM_INFO + '_FULFILLED':
            return Object.assign({}, state, { company_team: action.payload })
        case GET_COMPANY_PROJECT_INFO + '_FULFILLED':
            return Object.assign({}, state, { company_project: action.payload })
        case ADDCOMPANYINDUSTRY:
            return Object.assign({}, state, { company_industry: action.payload })
        case ADD_COMPANY_NAME:
            return Object.assign({}, state, { company_name: action.payload, company_badge: action.company_badge, company_code: action.company_code })
        case ADD_COMPANY_EMAIL:
            return Object.assign({}, state, { company_email: action.payload })
        case ADD_COMPANY_PHONE:
            return Object.assign({}, state, { company_phone: action.payload })
        case ADD_COMPANY_URL:
            return Object.assign({}, state, { company_url: action.payload })
        case GET_COMPANY_USERS_INFO + '_FULFILLED':
            return Object.assign({}, state, { company_users: action.payload })
        case ADD_COMPANY_LOGO_URL:
            return Object.assign({}, state, { company_logo_url: action.payload })
        case EDIT_USER_FIRST_NAME:
            return Object.assign({}, state, { user_firstname: action.payload })
        case EDIT_USER_LAST_NAME:
            return Object.assign({}, state, { user_lastname: action.payload })
        case EDIT_USER_EMAIL:
            return Object.assign({}, state, { user_email: action.payload })
        case EDIT_USER_PICTURE_URL:
            return Object.assign({}, state, { user_picture: action.payload })
        case EDIT_USER_DISPLAY_NAME:
            return Object.assign({}, state, { user_display_name: action.payload })
        case EDIT_USER_TEAM:
            return Object.assign({}, state, { user_team: action.payload })
        case EDIT_USER_ROLE:
            return Object.assign({}, state, { user_role: action.payload })
        case GET_USER_TASKS + '_FULFILLED':
            return Object.assign({}, state, { user_tasks: action.payload })
        case ADD_UNIQUE_KEY_PROJECT_TASK:
            return Object.assign({}, state, { project_unique_key: action.payload, project_creator: action.projectCreator })
        case ADD_PROJECT_NAME:
            return Object.assign({}, state, { project_name: action.payload })
        case ADD_PROJECT_START_DATE:
            return Object.assign({}, state, { project_start_date: action.payload })
        case ADD_PROJECT_FINISH_DATE:
            return Object.assign({}, state, { project_finish_date: action.payload })
        case ADD_PROJECT_DESCRIPTION:
            return Object.assign({}, state, { project_description: action.payload })
        case ADD_PROJECT_PRICE:
            return Object.assign({}, state, { project_price: action.payload })
        case ADD_PROJECT_LAST_TASK:
            return Object.assign( {}, state, { project_last_task: action.payload } )
        case GET_PROJECT:
            return Object.assign({}, state, { projects: action.payload })
        case ADD_ASSIGN_COMPANY_USER_INPUT:
            return Object.assign({}, state, { assign_user_company_input: action.payload })
        case CURRENT_PROJECT_TASKS + '_FULFILLED':
            return Object.assign({}, state, { current_project_tasks: action.payload })
        case EDIT_TEAM_NAME:
            return Object.assign({}, state, { team_name: action.payload })
        case EDIT_TEAM_DESCRIPTION:
            return Object.assign({}, state, { team_description: action.payload })
        case RESET_PROJECT_AND_TASKS:
            return Object.assign( {}, state, {
                                                project_unique_key: '',
                                                project_name: '',
                                                project_start_date: '',
                                                project_finished_date: '',
                                                project_description: '',
                                                project_price: 0.00,
                                                project_last_task: '',
                                                current_project_tasks: []
                                             } )
        default:
            return state;
    }
}


export function addCompanyName(companyName) {
    let badge = companyName.split(' ')
    console.log(badge)
    const badgeFinal = []
    for (let i = 0; i < badge.length; i++) {
        badgeFinal.push(badge[i].charAt(0))
    }
    let company_badge = badgeFinal.join('').toUpperCase();

    let company_code = '';
    let count = companyName.split('')
    let projectKey = companyName.charAt(0) + companyName.charAt(1) + companyName.charAt(2) + count.length + count[count.length - 2];
    company_code = projectKey.toUpperCase()



    return {
        payload: companyName, company_badge, company_code,
        type: ADD_COMPANY_NAME
    }
}
export function addCompanyEmail(companyEmail) {
    console.log(companyEmail)
    return {
        payload: companyEmail,
        type: ADD_COMPANY_EMAIL
    }
}
export function addCompanyPhone(companyPhone) {
    console.log(companyPhone)
    return {
        payload: companyPhone,
        type: ADD_COMPANY_PHONE
    }
}
export function assignCompanyCodeInput(companyCode) {
    console.log(companyCode)
    return {
        payload: companyCode,
        type: ADD_ASSIGN_COMPANY_USER_INPUT
    }
}
export function addCompanyLogo(companyLogo) {
    console.log(companyLogo)
    return {
        payload: companyLogo,
        type: ADD_COMPANY_URL
    }
}

export function addProjectName(projectName) {
    console.log(projectName)
    return {
        payload: projectName,
        type: ADD_PROJECT_NAME
    }
}

export function addProjectStart(event, date) {
    let formatDate = date.toString().split(' ')
    let projectDate = `${formatDate[1]} ${formatDate[2]} ${formatDate[3]}`
    console.log(projectDate)
    return {
        payload: projectDate,
        type: ADD_PROJECT_START_DATE
    }
}
export function addProjectEnd(event, date) {
    let formatDate = date.toString().split(' ')
    let projectDate = `${formatDate[1]} ${formatDate[2]} ${formatDate[3]}`
    console.log(projectDate)
    return {
        payload: projectDate,
        type: ADD_PROJECT_FINISH_DATE
    }
}
export function addProjectDesc(projectDesc) {
    console.log(projectDesc)
    return {
        payload: projectDesc,
        type: ADD_PROJECT_DESCRIPTION
    }
}
export function addProjectPrice(projectPrice) {
    let convertCurrency = Math.round(projectPrice * 100) / 100
    console.log(convertCurrency)
    return {
        payload: convertCurrency,
        type: ADD_PROJECT_PRICE
    }
}

export function addProjectUniqueKey(companyName, projectCreator) {
    let projectKey = companyName + new Date();
    let finalKey = projectKey.replace(/[^A-Z0-9]/ig, "0").toLowerCase();

    console.log(finalKey)
    return {
        payload: finalKey, projectCreator,
        type: ADD_UNIQUE_KEY_PROJECT_TASK
    }
}

export function addProjectLastTask( num ) {
    return {
        type: ADD_PROJECT_LAST_TASK,
        payload: num
    }
}

export function getCompanyUsersInfo(id) {

    const companyInfo = axios.get(`/api/company/users/${id}`).then(res => {

        return res.data
    })
    return {
        type: GET_COMPANY_USERS_INFO,
        payload: companyInfo
    }
}
export function getCompanyTeamInfo(id) {
    const companyTeamInfo = axios.get(`/api/company/team/${id}`).then(res => {

        return res.data
    })
    return {
        type: GET_COMPANY_TEAM_INFO,
        payload: companyTeamInfo
    }
}

export function getCompanyProjectInfo(id) {
    const companyProjectInfo = axios.get(`/api/company/project/${id}`).then(res => {

        return res.data
    })
    return {
        type: GET_COMPANY_PROJECT_INFO,
        payload: companyProjectInfo
    }
}



export function addCompanyIndustry(industrySelected) {
    return {

        type: ADDCOMPANYINDUSTRY,
        payload: industrySelected
    }
}

export function getUserInfo() {
    const userInfo = axios.get('/login/user').then(res => {
        return res.data
    })
    return {
        type: GET_USER_INFO,
        payload: userInfo
    }
}

export function getUserInfoAfter(id) {
    const userInfoAfterUpdate = axios.get(`/api/users/user/${id}`).then(res => {
        return res.data
    })
    return {
        type: GET_USER_INFO_AFTER,
        payload: userInfoAfterUpdate
    }
}

export function getCompanyInfo(id) {
    const companyInfo = axios.get(`/api/company/${id}`).then(res => {
        return res.data
    })
    return {
        type: GET_COMPANY_INFO,
        payload: companyInfo
    }
}


export function addCompany(data) {
    console.log(data)
    return {
        type: ADD_COMPANY,
        payload: data

    }
}

export function editTeamName(teamname) {
    return {
        type: EDIT_TEAM_NAME,
        payload: teamname
    }
}

export function editTeamDescription(description) {
    return {
        type: EDIT_TEAM_DESCRIPTION,
        payload: description
    }
}

export function editUserFirstname(firstname) {
    return {
        type: EDIT_USER_FIRST_NAME,
        payload: firstname
    }
}

export function editUserLastname(lastname) {
    return {

        type: EDIT_USER_LAST_NAME,
        payload: lastname
    }
}

export function editUserEmail(email) {
    return {

        type: EDIT_USER_EMAIL,
        payload: email
    }
}

export function editUserPictureUrl(url) {
    return {

        type: EDIT_USER_PICTURE_URL,
        payload: url
    }
}

export function editUserDisplayName(display) {
    return {

        type: EDIT_USER_DISPLAY_NAME,
        payload: display
    }
}

export function editUserTeam(team) {
    return {

        type: EDIT_USER_TEAM,
        payload: team
    }
}

export function editUserRole(role) {
    return {

        type: EDIT_USER_ROLE,
        payload: role
    }
}
export function getProject(projectData) {


}

export function getUserTasks(id, body) {

    const tasks = axios.get(`/api/getUserTasks/${id}`)
        .then(response => {
            console.log('redux tasks', response)
            return response.data
        })

    return {
        type: GET_USER_TASKS,
        payload: tasks
    }
}

export function currentProjectTasks(key, body) {

    const task = axios.post(`/api/addtask/${key}`, body)
        .then(response => {
            return response.data
        })

    return {
        type: CURRENT_PROJECT_TASKS,
        payload: task
    }
}

export function deleteProjectTask(id, key) {

    const tasks = axios.delete(`/api/deleteTask/${id}/${key}`)
        .then(response => {
            return response.data
        })

    return {
        type: CURRENT_PROJECT_TASKS,
        payload: tasks
    }
}

export function resetProjectAndTasks() {
    return {
        type: RESET_PROJECT_AND_TASKS
    }
}
