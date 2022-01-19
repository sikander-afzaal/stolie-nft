import React from "react";
import "./Team.css";
import img1 from "../../Assets/team/team1.jpeg";
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
        <div className="box-team">
          <img className="team-img" src={img1} alt="" />
          <h2>KOAK</h2>
          <p>THE CAPTAIN</p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="box-team">
          <img
            className="team-img"
            src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/6189499adb2a35c59044ff97_Mad%20scientist%20(1)-p-500.jpeg"
            alt=""
          />
          <h2>EXO</h2>
          <p>THE PILOT </p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="box-team">
          <img
            className="team-img"
            src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/61961ce0c996db7f6ba3966b_NFT-Disco%20(1)-p-500.jpeg"
            alt=""
          />
          <h2>STIZZ</h2>
          <p>THE SPECIALIST </p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="box-team">
          <img
            className="team-img"
            src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/61961cf20e3f874ba9d1bf7d_NFT-samurai%20(1)-p-500.jpeg"
            alt=""
          />
          <h2>DBO</h2>
          <p>THE ENFORCER</p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="box-team">
          <img
            className="team-img"
            src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/6189498b41493f5b92df67bc_Casino%20Man%20(2)-p-500.jpeg"
            alt=""
          />
          <h2>Tas Nikolo</h2>
          <p>Product Owner</p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="box-team">
          <img
            className="team-img"
            src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/618949709ba498bec88b3804_cowboy-p-500.jpeg"
            alt=""
          />
          <h2>Tas Nikolo</h2>
          <p>Product Owner</p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="box-team">
          <img
            className="team-img"
            src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/6189960d7999e3ca5c063d38_All%20or%20Nothing%20(1)-p-500.jpeg"
            alt=""
          />
          <h2>Tas Nikolo</h2>
          <p>Product Owner</p>
          <hr />
          <i className="fab fa-linkedin"></i>
        </div>
        <div className="box-team">
          <img
            className="team-img"
            src="https://uploads-ssl.webflow.com/617c01210e8f0f423616fdd8/61961d056ce6375de539e957_Grafitty%20Writer%20(1)-p-500.jpeg"
            alt=""
          />
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
