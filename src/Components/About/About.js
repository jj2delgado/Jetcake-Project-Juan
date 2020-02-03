import React, {Component} from 'react'
import './About.css'

class About extends Component{
    render(){
        return(
            <div className='About-Container'>
                <h1 className='About-Title'>
                    About this page
                </h1>
                <p className='About-Paragraph'>
                    This is a project design that will allow you as the user to create an account and login. 
                    This project uses Heroku as it's cloud, to store user information. This project was created using React. This project
                    uses PostgreSQL for it's database. Node.js with RESTful API's were used to pass information through the server. CSS was used to style the front end.
                    Media Queries were used to make the design responsive and viewable on mobile.
                </p>
            </div>
        )
    }
}
export default About