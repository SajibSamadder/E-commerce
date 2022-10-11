import React from 'react'
import logo from '../../logo/logo.png'
import './Header.css'
function Header() {
    return (
        <header className='header'>
            <div className="logo">
                <a href="/app">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="manu">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">contuct</a></li>
                        <li><a href="#">log in</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header