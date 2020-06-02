import React from 'react'
import logo from '../../logo.svg';
import './Navbar.scss'
export default function Navbar() {
    return (
       <nav className="Navigation">
           <img src={logo} alt="city tours logo" />
           <ul className="link">
           <li><a href="/" className="nav-link new">Home</a></li>
    <li><a href="/" className="nav-link new">About</a></li>
    <li><a href="/" className="nav-link active">Tours</a></li>
    
</ul>

       </nav>
    )
}
