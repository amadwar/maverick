import React from "react";
import "../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../Badge";
function Suchseite_immobilien() {
  
  const navigate = useNavigate(); 

  const navigateToImmobilien = () => {
    navigate("/immobilien");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Immobilien</span>

      <div className="rectangle-19">
        <h3>Immobilien</h3>
        <span className="ein-softwareentwickler-englisch">
        Eine Immobilie (lateinisch im-mobilis ‚unbeweglich‘; ähnlich Liegenschaft), in der Rechts- und Wirtschaftssprache „unbewegliches Sachgut“ genannt, ist ein Grundstück, grundstücksgleiches Recht oder ein Bauwerk (Wohnimmobilie oder Gewerbeimmobilie). 
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="California Real Estate Principles Chapter 1" />{" "}
      <Badge text="How to Shoot Real Estate Videos" />{" "}
      <Badge text="California Real Estate Principles Chapter 1 - The Business of Real Estate" />{" "}
      <Badge text="Earthing systems " />{" "}
      <Badge text="SPITE HOUSE"/>{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToImmobilien}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_immobilien;
