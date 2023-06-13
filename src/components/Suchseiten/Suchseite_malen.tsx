import React from "react";
import "../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../Badge";
function Suchseite_malen() {
  
  const navigate = useNavigate(); 

  const navigateToMalen = () => {
    navigate("/malen");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Malen</span>

      <div className="rectangle-19">
        <h3>Malen</h3>
        <span className="ein-softwareentwickler-englisch">
        Malerei ist die Kunst, Bilder zu malen. Die Bilder werden Gemälde genannt. Die Maltechnik besteht darin, feuchte Farben mittels Pinsel, Spachtel oder anderer Werkzeuge auf einen Malgrund aufzubringen. 
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="Evergreen Falls Bob Ross Wet On Wet Oil Painting Tutorial" />{" "}
      <Badge text="Alcohol Ink WISPY Looks + embellishments - Detailed Tutorial" />{" "}
      <Badge text="ALCOHOL INK ✨ Easy GLITTER Borders in ANY Color" />{" "}
      <Badge text="thick paint on my vice " />{" "}
      <Badge text="Paint a Rooster in Acrylics" />{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToMalen}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_malen;
