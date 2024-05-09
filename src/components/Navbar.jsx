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
            <ul className='navbarUl'>
                <Link to="/"><li>Home </li></Link>
                <Link to="/properties"><li className='dropdown'>Properties</li></Link>
                <Link to="/favorites"><li>Favorites</li></Link>
                <Link to="add_apartment"><li>Add apartment</li></Link>
                <Link to="/about"><li>About us</li></Link>
            </ul>
        </div>
    )
}

export default Navbar