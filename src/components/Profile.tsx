import * as React from "react";
import "./Profile.css";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import 'bootstrap/dist/css/bootstrap.min.css';
import ClosableBadge from "./ClosableBadge";
function Profile () {
  
    
  const iconLogo ="./iconLogo.svg";
  const grafik = "./grafik.png";

  return (
    <div className="profil">
      
      
      <span className="profil-1">Profil</span>
      <div className="flex-container">
        <div className="rectangle-12">

          <div className="Rechteck1">  
          <h4>Meine Profiledaten<br/></h4>
          <span>
            Name: Melanie Tester<br/> Geburtsdatum: 11.11.2000<br/> Rolle: Studierende<br/>
            Studium: Informatik<br/> Interessen: Programmieren, Sport, Musik
          </span>
          </div>
          <div className="Rechteck1">  
          <h4>Meine Skills<br/></h4>
          <ClosableBadge text="Tableau" />
          <ClosableBadge text="MS Excel" />
          <ClosableBadge text="MS Word" />
          </div>


          <div className="Rechteck1">  
          <h4>Meine Interessen<br/></h4>
          <ClosableBadge text="Sport" />
          <ClosableBadge text="Musik" />
          <ClosableBadge text="Programmieren" />
          </div>

          
        </div>


        <div className="rectangle-14">
          <span className="meine-skill-chart">Meine Skill Chart</span>
          <img className="grafik-1" src={grafik} />
        </div>
      </div>
    </div>
  );
};
export default Profile;
