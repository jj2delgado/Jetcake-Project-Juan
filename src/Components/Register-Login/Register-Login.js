import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import {Register, Login} from '../../Redux/userReducer'

class RegisterLogin extends Component{
    constructor(){
        super()
        this.state = {
            name_first: '',
            name_last: '',
            phone_number: '',
            password: '',
            street_address: '',
            city: '',
            us_state: '',
            zipcode: '',
            email: '',
            profile_pic: '',
            date_of_birth: '',
            first_security_answer: '',
            second_security_answer: '',
            third_security_answer: ''
        }
    }


    render(){
        return(
            <div></div>
        )
    }
}
function mapStateToProps(state){
    console.log(state)
    return state.user
}
export default connect(mapStateToProps, {Register, Login})(RegisterLogin)