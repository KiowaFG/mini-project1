import { Link } from 'react-router-dom'
import React from 'react'
import logo from "../assets/images/logoApartment.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to={"/"}>
                <img className='logo' src={logo} alt="logo-img" />
            </Link>
            <ul>
                <Link to="/">
                    <li>Home </li></Link>
                <li className='dropdown'><Link to="/properties">Properties </Link>
                    <div className='dropdownContent'>
                        <a href="#">Studios</a>
                        <a href="#">Apartments</a>
                        <a href="#">Houses</a>
                        <a href="#">Vilas</a>
                    </div>
                </li>
                <Link to="/favorites"><li>Favorites</li></Link>
                <li>Add apartment</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Navbar