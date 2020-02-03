import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import {Register, Login} from '../../Redux/userReducer'
import TopNav from '../TopNav/TopNav'
import './Register-Login.css'

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
            third_security_answer: '',
            email_login:'',
            password_login:''
        }
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({ [name]:value})
    }

    registerUser = () => {
        this.props.Register(this.state.name_first, this.state.name_last, this.state.phone_number, this.state.password, this.state.street_address, this.state.city, this.state.us_state, this.state.zipcode, this.state.email, this.state.profile_pic, this.state.date_of_birth, this.state.first_security_answer, this.state.second_security_answer, this.state.third_security_answer)
        this.setState({name_first:'', name_last:'', phone_number:'', password:'', street_address:'', city:'', us_state:'', zipcode:'', email:'', profile_pic:'', date_of_birth:'', first_security_answer:'', second_security_answer:'', third_security_answer:''})
    }

    loginUser = () => {
        this.props.Login(this.state.email_login, this.state.password_login)
        this.setState({email_login:'', password_login:''})
    }

    render(){
        let {user} = this.props
        let {name_first, name_last, phone_number, password, street_address, city, us_state, zipcode, email, profile_pic, date_of_birth, first_security_answer, second_security_answer, third_security_answer, email_login, password_login} = this.state
        if (user.loggedIn) return <Redirect to='/'/>
        return(
            <div className='RegLog-Container'>
                <TopNav />
                <div className='RegLog-Hero-Container'>
                <div className='Register-Container'>
                    <div className='spacer'></div>
                    <h1>Not a Member? Register Here</h1>
                    <h6>*All Fields are required*</h6>
                    <div>
                        <div>
                        <input placeholder="First Name" value={name_first} name='name_first' onChange={this.handleChange}></input>
                        <input placeholder="Last Name" value={name_last} name='name_last' onChange={this.handleChange}></input>
                        </div>

                        <div>
                        <input placeholder="Phone Number" value={phone_number} name='phone_number' onChange={this.handleChange}></input>
                        <input placeholder="Password" value={password} name='password' onChange={this.handleChange}></input>
                        </div>

                        <div>
                        <input placeholder="Street Address" value={street_address} name='street_address' onChange={this.handleChange}></input>
                        </div>

                        <div>
                        <input placeholder="City" value={city} name='city' onChange={this.handleChange}></input>
                        <input placeholder="State" value={us_state} name='us_state' onChange={this.handleChange}></input>
                        <input placeholder="Zipcode" value={zipcode} name='zipcode' onChange={this.handleChange}></input>
                        </div>

                        <div>
                        <input placeholder="Email" value={email} name='email' onChange={this.handleChange}></input>
                        <input placeholder="Profile Pic http Link" value={profile_pic} name='profile_pic' onChange={this.handleChange}></input>
                        </div>

                        <input placeholder="DOB mm/dd/yyyy" value={date_of_birth} name='date_of_birth' onChange={this.handleChange}></input>

                        <div>
                            <h1>What is your Mother's maiden name?</h1>
                            <input placeholder="First Answer" value={first_security_answer} name='first_security_answer' onChange={this.handleChange}></input>
                        </div>

                        <div>
                            <h1>What is the name of the city where you were born?</h1>
                            <input placeholder="Second Answer" value={second_security_answer} name='second_security_answer' onChange={this.handleChange}></input>
                        </div>

                        <div>
                            <h1>What is the name of your first pet?</h1>
                            <input placeholder="Third Answer" value={third_security_answer} name='third_security_answer' onChange={this.handleChange}></input>
                        </div>

                        <button className='Register-Button' onClick={this.registerUser}>
                            <Link to='/'>Register</Link>
                        </button>
                    </div>
                </div>

                <div className='Login-Container'>
                    <div className='spacer'></div>
                    <h1>Already a Member? Login Here</h1>
                    
                    <div>
                        <input placeholder="Email" value={email_login} name='email_login' onChange={this.handleChange}></input>
                    </div>

                    <div>
                        <input placeholder="Password" value={password_login} name='password_login' onChange={this.handleChange}></input>
                    </div>

                    <button className='Login-Button' onClick={this.loginUser}>
                        <Link to='/'>Login</Link>
                    </button>
                </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    console.log(state)
    return state.user
}
export default connect(mapStateToProps, {Register, Login})(RegisterLogin)