import axios from 'axios'
import {REGISTER, LOGIN, LOGOUT, EDIT_USER_PERSONAL, EDIT_USER_PROFILE_PIC, EDIT_USER_CONTACT_INFO, EDIT_USER_ADDRESS, EDIT_USER_SECURITY} from './actionTypes'

const initialState = {
    user: {},
    redirect: false,
    error: false
}

export const Register = (name_first, name_last, phone_number, password, street_address, city, us_state, zipcode, email, profile_pic, date_of_birth, first_security_answer, second_security_answer, third_security_answer) => {
    let data = axios
    .post('/api/register', {name_first, name_last, phone_number, password, street_address, city, us_state, zipcode, email, profile_pic, date_of_birth, first_security_answer, second_security_answer, third_security_answer})
    .then( res => res.data)
    return{
        type: REGISTER,
        payload: data
    }
}

export const Login = (email, password) => {
    let data = axios.post('/api/login', {email, password}).then(res => res.data)
    return {
        type: LOGIN,
        payload: data
    }
}

export const Logout = () => {
    return {
        type: LOGOUT,
        payload: axios.delete('/api/logout')
    }
}

export const EditUserPersonal = (id, name_first, name_last, date_of_birth) => {
    let data = axios.put(`/api/editUser/personal/${id}`, {name_first, name_last, date_of_birth})
    .then(res => res.data)
    return{
        type: EDIT_USER_PERSONAL,
        payload: data
    }
}

export const EditUserProfilePic = (id, profile_pic) => {
    let data = axios.put(`/api/editUser/pic/${id}`, {profile_pic})
    .then(res => res.data)
    return{
        type: EDIT_USER_PROFILE_PIC,
        payload: data
    }
}

export const EditUserContact = (id, phone_number, email) => {
    let data = axios.put(`/api/editUser/contact/${id}`, {phone_number, email})
    .then(res => res.data)
    return{
        type: EDIT_USER_CONTACT_INFO,
        payload: data
    }
}

export const EditUserAddress = (id, street_address, city, us_state, zipcode) => {
    let data = axios.put(`/api/editUser/address/${id}`, {street_address, city, us_state, zipcode})
    .then(res => res.data)
    return{
        type: EDIT_USER_ADDRESS,
        payload: data
    }
}

export const EditUserSecurity = (id, password, first_security_answer, second_security_answer, third_security_answer) => {
    let data = axios.put(`/api/editUser/security/${id}`, {password, first_security_answer, second_security_answer, third_security_answer})
    .then(res => res.data)
    return{
        type: EDIT_USER_SECURITY,
        payload: data
    }
}

export default function ( state = initialState, action ){
    let {type, payload} = action
    switch(type){
        case REGISTER + '_FULFILLED':
            return{...state, redirect: false, user: payload, error: false}
        case REGISTER + '_REJECTED':
            return{...state, error: payload} 
        case LOGIN + '_FULFILLED':
            return{...state, user: payload, redirect: false, error: false}
        case LOGIN + '_REJECTED':
            return{...state, error: payload}
        case EDIT_USER_PERSONAL + '_FULFILLED':
            return{...state, user: payload[0], redirect: false, error: false}
        case EDIT_USER_PERSONAL + '_REJECTED':
            return{...state, error: payload}
        case EDIT_USER_PROFILE_PIC + '_FULFILLED':
            return{...state, user: payload[0], redirect: false, error: false}
        case EDIT_USER_PROFILE_PIC + '_REJECTED':
            return{...state, error: payload}
        case EDIT_USER_CONTACT_INFO + '_FULFILLED':
            return{...state, user: payload[0], redirect: false, error: false}
        case EDIT_USER_CONTACT_INFO + '_REJECTED':
            return{...state, error: payload}
        case EDIT_USER_ADDRESS + '_FULFILLED':
            return{...state, user: payload[0], redirect: false, error: false}
        case EDIT_USER_ADDRESS + '_REJECTED':
            return{...state, error: payload}
        case EDIT_USER_SECURITY + '_FULFILLED':
            return{...state, user: payload[0], redirect: false, error: false}
        case EDIT_USER_SECURITY + '_REJECTED':
            return{...state, error: payload}
        case LOGOUT + '_FULFILLED':
            return{...state, user: {}, redirect: true, error: false}
        default: 
            return state
    }
}