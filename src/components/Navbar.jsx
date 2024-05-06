import React from 'react'
import "./Navbar.css"
import logo from "../assets/images/logoApartment.png"
import sun from "../assets/images/icons8-sol-50.png"
import moon from "../assets/images/icons8-luna-creciente-50.png"
import search from "../assets/images/icons8-búsqueda-50.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="logo-img" />
      <ul>
        <li>Home </li>
        <li className='dropdown'>Properties
          <div className='dropdownContent'>
            <a href="#">Studios</a>
            <a href="#">Apartments</a>
            <a href="#">Houses</a>
            <a href="#">Vilas</a>
          </div>
        </li>
        <li>Favourites</li>
        <li>About</li>
      </ul>
      <div className='searchbar'>
        <input type="text" placeholder='Search' />
        <img src={search} alt="" />
      </div>

      <img className='toggle-icon' src={moon} alt="" />

    </div>
  )
}

export default Navbar