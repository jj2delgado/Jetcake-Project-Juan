import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Logout} from '../../Redux/userReducer'
import './TopNav.css'

class TopNav extends Component{
    constructor(){
        super()
        this.state ={
            menuBarOn: false
        }
    }

    logoutUser = () => {
        this.props.Logout()
    }

    render(){
        return(
            <div className = "Main-Container">
                <h1>JetCake Project</h1>

                <div className='Link-Container'>
                    <Link to='/'>
                        <p className="Home-Link">Home</p>
                    </Link>

                    <Link to='/profile'>
                        <p>My Profile</p>
                    </Link>

                    {this.props.user.loggedIn ? (<p onClick={this.logoutUser} className='Logout'>Logout</p>) :
                        <div>
                            <Link to='/RegLog'>
                                <p className='RegLog-Link'>Register/Login</p>
                            </Link>
                        </div>
                    }
                </div>

            </div>
        )
    }
}
function mapStateToProps(state){
    return state.user
}
export default connect(mapStateToProps, {Logout})(TopNav)