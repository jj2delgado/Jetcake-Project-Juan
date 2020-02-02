import axios from 'axios'
import {REGISTER, LOGIN, LOGOUT, EDIT_USER} from './actionTypes'

const initialState = {
    user: {},
    redirect: false,
    error: false
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