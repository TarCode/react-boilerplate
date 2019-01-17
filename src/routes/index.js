import React from 'react'
import { Route } from 'react-router-dom'

import Land from '../views/land'
import Home from '../views/home'
import Form from '../views/form'

import Nav from '../components/nav'

export default () => (
    <div>
        <Nav
            links={
                [
                    {
                        name: "Land",
                        route: "/"
                    },
                    {
                        name: "Home",
                        route: "/home"
                    },
                    {
                        name: "Form",
                        route: "/form"
                    }
                ]
            }
        />
        <Route exact path='/' component={Land}/>
        <Route exact path='/form' component={Form}/>
        <Route exact path='/home' component={Home}/>
    </div>
)