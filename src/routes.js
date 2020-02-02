import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'

export default(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
    </Switch>
)