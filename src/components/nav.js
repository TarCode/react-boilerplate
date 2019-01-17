import React from 'react'
import { Link } from 'react-router-dom'


export default ({ links }) => (
    <nav>
        {
            links.map((link, index) => (
                <li key={index}><Link to={link.route}>{link.name}</Link></li>
            ))
        }
    </nav>
)