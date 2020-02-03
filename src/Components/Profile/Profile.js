import React, {Component} from 'react'
import {connect} from 'react-redux'
import {EditUserPersonal, EditUserProfilePic, EditUserContact, EditUserAddress, EditUserSecurity} from '../../Redux/userReducer'
import TopNav from '../TopNav/TopNav'
import './Profile.css'

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: this.props.user.user.name_first,
            lastName: this.props.user.user.name_last,
            phoneNumber: this.props.user.user.phone_number,
            streetAddress: this.props.user.user.street_address,
            newCity: this.props.user.user.city,
            usState: this.props.user.user.us_state,
            zipCode: this.props.user.user.zipcode,
            newEmail: this.props.user.user.email,
            profilePic: this.props.user.user.profile_pic,
            dateOfBirth: this.props.user.user.date_of_birth,
            firstSecurityAnswer: this.props.user.user.first_security_answer,
            secondSecurityAnswer: this.props.user.user.second_security_answer,
            thirdSecurityAnswer: this.props.user.user.third_security_answer,
            editPersonal: false
        }
    }

    flipEditPersonal = () => {
        this.setState({editPersonal: !this.state.editPersonal})
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({ [name]:value})
    }

    editInfo = () => {
        let {firstName, lastName, phoneNumber, streetAddress, newCity, usState, zipCode, newEmail, profilePic, dateOfBirth, firstSecurityAnswer, secondSecurityAnswer, thirdSecurityAnswer} = this.state
        this.props.EditUserPersonal(this.props.user.user.id, firstName, lastName, phoneNumber, streetAddress, newCity, usState, zipCode, newEmail, profilePic, dateOfBirth, firstSecurityAnswer, secondSecurityAnswer, thirdSecurityAnswer)
        this.flipEditPersonal()
    }

    componentDidUpdate(prevProps){
        let {firstName, lastName, phoneNumber, streetAddress, newCity, usState, zipCode, newEmail, profilePic, dateOfBirth, firstSecurityAnswer, secondSecurityAnswer, thirdSecurityAnswer} = prevProps
        if (firstName !== this.props.user.user.name_first || lastName !== this.props.user.user.name_last || phoneNumber !== this.props.user.user.phone_number || streetAddress !== this.props.user.user.street_address || newCity !== this.props.user.user.city || usState !== this.props.user.user.us_state || zipCode !== this.props.user.user.zipcode || newEmail !== this.props.user.user.email || profilePic !== this.props.user.user.profile_pic || dateOfBirth !== this.props.user.user.date_of_birth || firstSecurityAnswer !== this.props.user.user.first_security_answer || secondSecurityAnswer !== this.props.user.user.second_security_answer || thirdSecurityAnswer !== this.props.user.user.third_security_answer){
            this.render()
        }
    }

    render(){
        let {firstName, lastName, phoneNumber, streetAddress, newCity, usState, zipCode, newEmail, profilePic, dateOfBirth, firstSecurityAnswer, secondSecurityAnswer, thirdSecurityAnswer, editPersonal} = this.state
        let {name_first, name_last, phone_number, street_address, city, us_state, zipcode, email, profile_pic, date_of_birth, first_security_answer, second_security_answer, third_security_answer} = this.props.user.user

        return(
            <div className='Profile-Container'>
                <div>
                    <TopNav />
                    
                </div>
                {editPersonal ? (
                    <div className='Edit-Container'>
                        <div className='Edit-Center'></div>
                        <div className='Edit-Sub-Container'>
                        <div className="Profile-Spacer"></div>
                        <div>
                            <p>First Name:</p>
                            <input type="text" value={firstName} name='firstName' onChange={this.handleChange}/>
                            <p>Last Name:</p>
                            <input type="text" value={lastName} name='lastName' onChange={this.handleChange}/>
                        </div>
                        <div>
                            <p>Phone Number:</p>
                            <input type="text" value={phoneNumber} name='phoneNumber' onChange={this.handleChange}/>
                            <p>Street Address</p>
                            <input type="text" value={streetAddress} name='streetAddress' onChange={this.handleChange}/>
                            <p>City:</p>
                            <input type="text" value={newCity} name='newCity' onChange={this.handleChange}/>
                            <p>State:</p>
                            <input type="text" value={usState} name='usState' onChange={this.handleChange}/>
                            <p>Zipcode:</p>
                            <input type="text" value={zipCode} name='zipCode' onChange={this.handleChange}/>
                            <p>Email:</p>
                            <input type="text" value={newEmail} name='newEmail' onChange={this.handleChange}/>
                        </div>
                        <div>
                            <p>Profile Pic HTML:</p>
                            <input type="text" value={profilePic} name='profilePic' onChange={this.handleChange}/>
                            <p>DOB:</p>
                            <input type="text" value={dateOfBirth} name='dateOfBirth' onChange={this.handleChange}/>
                        </div>
                        <div>
                            <p>First Security Answer</p>
                            <input type="text" value={firstSecurityAnswer} name='firstSecurityAnswer' onChange={this.handleChange}/>
                            <p>Second Security Answer</p>
                            <input type="text" value={secondSecurityAnswer} name='secondSecurityAnswer' onChange={this.handleChange}/>
                            <p>Third Security Answer</p>
                            <input type="text" value={thirdSecurityAnswer} name='thirdSecurityAnswer' onChange={this.handleChange}/>
                        </div>
                        <button onClick={this.editInfo}>Submit</button>
                        <button onClick={this.flipEditPersonal}>Cancel</button>
                        </div>
                    </div>
                ) : (
                <div className="Profile-Info-Container">
                    
                    <div className="Profile-Info-Center"></div>
                    <div>
                        <div className="Profile-Spacer"></div>
                        <div>
                        <img src={profile_pic} alt="Your Profile Pic"/>
                        </div>
                        <p>First Name: {name_first}</p>
                        <p>Last Name: {name_last}</p>
                        <p>Phone Number: {phone_number}</p>
                        <p>Street Address: {street_address}</p>
                        <p>City: {city}</p>
                        <p>State:{us_state}</p>
                        <p>Zipcode:{zipcode}</p>
                        <p>Email: {email}</p>
                        <p>Date of Birth: {date_of_birth}</p>
                        {/* <p>Password: {password}</p> */}
                        <p>First Answer:{first_security_answer}</p>
                        <p>Second Answer:{second_security_answer}</p>
                        <p>Third Answer:{third_security_answer}</p>
                        <button onClick={this.flipEditPersonal}>Edit</button>
                    </div>
                    
                </div>)}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {EditUserPersonal, EditUserProfilePic, EditUserContact, EditUserAddress, EditUserSecurity})(Profile)
