import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

class Footer extends Component{
    render(){
        return(
            <div className='Footer-Container'>
                <Link to='/profile'>
                    <p>Profile</p>
                </Link>
                <p>Contact Us</p>
            </div>
        )
    }
}
export default Footer