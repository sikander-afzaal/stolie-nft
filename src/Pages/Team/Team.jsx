import React from "react";
import "./Team.css";
import img1 from "../../Assets/team/team1.jpeg";
import img2 from "../../Assets/team/team2.jpeg";
import img3 from "../../Assets/team/team3.jpeg";
import img4 from "../../Assets/team/team4.jpeg";
import img5 from "../../Assets/team/team5.jpeg";
import img6 from "../../Assets/team/team6.jpeg";
import img7 from "../../Assets/team/team7.jpeg";
import img8 from "../../Assets/team/team8.jpeg";
function Team() {
  return (
    <div className="team">
      <h1>Team</h1>
      <p>
        MetaHomies Was created by Exodus Mining LLC, an exclusive and
        independent private company. Exodus Mining LLC has established roots as
        a crypto currency mining company, parleying profits from mining into
        purchasing Real Estate. They have established time and time again that
        quality over quantity is most important and they are alway willing to
        take the nessasary steps to build the best products across the board
      </p>
      <a href="#">More about us</a>
      <div className="bottom-team">
        {/* team member box starts here------------------ */}
        <div className="box-team">
          <img className="team-img" src={img1} alt="" />
          <h2>KOAK</h2>
          <p>THE CAPTAIN</p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
        {/* team member box ends here------------------ */}

        <div className="box-team">
          <img className="team-img" src={img2} alt="" />
          <h2>EXO</h2>
          <p>THE PILOT </p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="box-team">
          <img className="team-img" src={img3} alt="" />
          <h2>STIZZ</h2>
          <p>THE SPECIALIST </p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="box-team">
          <img className="team-img" src={img4} alt="" />
          <h2>DBO</h2>
          <p>THE ENFORCER</p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="box-team">
          <img className="team-img" src={img5} alt="" />
          <h2>Tas Nikolo</h2>
          <p>Product Owner</p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="box-team">
          <img className="team-img" src={img6} alt="" />
          <h2>Tas Nikolo</h2>
          <p>Product Owner</p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="box-team">
          <img className="team-img" src={img7} alt="" />
          <h2>Tas Nikolo</h2>
          <p>Product Owner</p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="box-team">
          <img className="team-img" src={img8} alt="" />
          <h2>Tas Nikolo</h2>
          <p>Product Owner</p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}

export default Team;
