import "./AboutUs.css";
import kaiAl from "../assets/images/kaiAl.jpg";

function AboutUs() {
  return (
    <>  
      <div className="fullbody">
        <div>
          <h1>This is us</h1>
          <img className="kaial" src={kaiAl} alt="" />
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            inventore dolorum omnis voluptates a blanditiis accusantium eius,
            quod suscipit minima veritatis delectus labore, eaque iusto minus
            sequi ullam necessitatibus perspiciatis!
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
            repellat omnis nihil at aliquid sit laborum accusantium assumenda
            temporibus corporis debitis quos mollitia architecto neque voluptas
            dolor adipisci ad ullam.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
