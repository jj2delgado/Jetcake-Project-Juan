import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import RegisterLogin from './Components/Register-Login/Register-Login'

export default(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/RegLog' component={RegisterLogin} />
    </Switch>
)