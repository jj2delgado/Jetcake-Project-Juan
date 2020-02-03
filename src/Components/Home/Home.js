import React, {Component} from 'react'
import TopNav from '../TopNav/TopNav'
import About from '../About/About'
import Footer from '../Footer/Footer'
import './Home.css'

class Home extends Component{
    render(){
        return(
            <div className='Main'>
                <TopNav />
                <div className='Home-Container'>
                    <div className='Hero-Container'></div>
                    <About/>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Home