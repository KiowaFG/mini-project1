import { useEffect } from "react";
import search from "../assets/images/icons8-búsqueda-50.png"
import "./HomePage.css"

function HomePage({ handleSubmit }) {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant"
    })
  }, []);

  return (
    <>
      <div className="backgroundImage">
        <h1 className="Title mainTitle">Your home away from home</h1>
        <h3 className="Title"> Book the perfect stay.</h3>
        <div className="perks">
          <p>Flexible cancelation <br /> policy</p>
          <p>Check-in online + <br />Digital keys</p>
        </div>
        <div className='searchBox'>
          <input onKeyUp={handleSubmit} type="text" placeholder='e.g.: Berlin, Paris or Madrid' />
          <img src={search} alt="" />
        </div>
      </div>
    </>
  )
}

export default HomePage
