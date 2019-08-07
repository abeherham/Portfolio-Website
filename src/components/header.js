import React from 'react'
import {Link} from 'gatsby'

const Header = () => {
    return (
        <header>
            <h4 class="nav-item"><Link to="/">Abraham Hernandez</Link></h4>
            <p class="nav-item"><Link to="/aboutMe">About</Link></p>
            <p class="nav-item"><Link to="/projects">Projects</Link></p>
            <p class="nav-item"><Link to="/contact">Contact</Link></p>
        </header>
    )
}

export default Header