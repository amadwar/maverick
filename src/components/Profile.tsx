import * as React from "react";
import "./Profile.css";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
function Profile () {
  
    
  const iconLogo ="./iconLogo.svg";
  const grafik = "./grafik.png";

  return (
    <div className="profil">
      
      
      <span className="profil-1">Profil</span>
      <div className="flex-container">
        <div className="rectangle-12">
          <div className="flex-container-1">
            <span className="meine-profildaten">Meine Profildaten</span>
            <span className="bearbeiten">Bearbeiten</span>
          </div>
          <span>
            Name: Melanie Tester Geburtsdatum: 11.11.2000 Rolle: Studierende
            Studium: Informatik Interessen: Programmieren, Sport, Musik
          </span>
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
