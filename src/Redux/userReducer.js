import axios from 'axios'
import {REGISTER, LOGIN, LOGOUT, EDIT_USER} from './actionTypes'

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
        case EDIT_USER + '_FULFILLED':
            return{...state, user: payload, redirect: false, error: false}
        case EDIT_USER + '_REJECTED':
            return{...state, error: payload}
        case LOGOUT + '_FULFILLED':
            return{...state, user: {}, redirect: true, error: false}
        default: 
            return state
    }
}