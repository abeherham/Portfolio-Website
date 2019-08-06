import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/main.css'
import '../styles/styles.css'


const Layout = (props) => {
    return (
        <div class="wrapper">
            <div class="nav"><Header /></div>
            <div class="content">{props.children}</div>
            <div class="footer"><Footer /></div>
        </div>
    )
}

export default Layout