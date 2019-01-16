import React from 'react'
import { Route } from 'react-router-dom'

import Land from '../views/land'
import Home from '../views/home'
import Auth from '../views/auth'

export default () => (
    <div>
        <Route exact path='/' component={Land}/>
        <Route exact path='/auth' component={Auth}/>
        <Route exact path='/home' component={Home}/>
    </div>
)