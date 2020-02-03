import React, {Component} from 'react'
import {connect} from 'react-redux'
import {EditUserPersonal, EditUserProfilePic, EditUserContact, EditUserAddress, EditUserSecurity} from '../../Redux/userReducer'
import TopNav from '../TopNav/TopNav'
import './Profile.css'

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            name_first: this.props.user.user.name_first,
            name_last: this.props.user.user.name_last,
            phone_number: this.props.user.user.phone_number,
            street_address: this.props.user.user.street_address,
            city: this.props.user.user.city,
            us_state: this.props.user.user.us_state,
            zipcode: this.props.user.user.zipcode,
            email: this.props.user.user.email,
            profile_pic: this.props.user.user.profile_pic,
            date_of_birth: this.props.user.user.profile_pic,
            first_security_answer: this.props.user.user.first_security_answer,
            second_security_answer: this.props.user.user.second_security_answer,
            third_security_answer: this.props.user.user.third_security_answer,
            editPersonal: false,
            editProfilePic: false,
            editContact: false,
            editAddress: false,
            editSecurity: false
        }
    }
    flipEditPersonal = () => {
        this.setState({editPersonal: !this.state.editPersonal})
    }

    render(){
        return(
            <div></div>
        )
    }
}
function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {EditUserPersonal, EditUserProfilePic, EditUserContact, EditUserAddress, EditUserSecurity})(Profile)
