import background from "../assets/images/madridView.webp"
import "./HomePage.css"
import search from "../assets/images/icons8-búsqueda-50.png"
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
    
        <div className="backgroundImage">
        <h1 className="Title mainTitle">Your home away from home,</h1>
        <h3 className="Title"> Book the perfect stay.</h3>
        <div className="perks">
            <p>Flexible cancelation <br /> policy</p>
            <p>Check-in online + <br />Digital keys</p>
        </div>
        <div className='searchBox'>
            <input type="text" placeholder='Search' />
            <img src={search} alt="" />
        </div>
        </div>

        


    </>
  )
}

export default HomePage
