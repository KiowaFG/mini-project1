import React from 'react'
import "./Navbar.css"
import logo from "../assets/images/logoApartment.png"
import sun from "../assets/images/icons8-sol-50.png"
import moon from "../assets/images/icons8-luna-creciente-50.png"
import search from "../assets/images/icons8-búsqueda-50.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to={"/"}>
                <img className='logo' src={logo} alt="logo-img" />
            </Link>
            <ul className='navbarUl'>
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
                <Link to="/about"><li>About us</li></Link>
            </ul>
            <img className='toggle-icon' src={moon} alt="" />

        </div>
    )
}

export default Navbar