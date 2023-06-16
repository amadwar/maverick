import React from "react";
import "../../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../../Badge";
function Suchseite_Architektur() {
  
  const navigate = useNavigate(); 

  const navigateToArchitektur = () => {
    navigate("/architektur");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Architektur Studium</span>

      <div className="rectangle-19">
        <h3>Architektur Studium</h3>
        <span className="ein-softwareentwickler-englisch">
        Dieser Artikel befasst sich mit dem Studium der Architektur, also mit dem wissenschaftlich ausgerichteten Erlernen und Erforschen des planvollen Entwerfens, Gestaltens und Konstruierens von Bauwerken. 
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="Architecture and the Built Environment | KTH Virtual campus tour" />{" "}
      <Badge text="Learning to See Like an Architect" />{" "}
      <Badge text="New ideas for a collaborative space on the Architecture Quad" />{" "}
      <Badge text="Interior Design with an Architect's Eye: Here's my Process" />{" "}
      <Badge text="Pro tip: Add a human subject in architecture to create scale!"/>{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToArchitektur}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_Architektur;
