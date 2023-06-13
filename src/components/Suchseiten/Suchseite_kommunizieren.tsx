import React from "react";
import "../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../Badge";
function Suchseite_kommunizieren() {
  
  const navigate = useNavigate(); 

  const navigateToKommunizieren = () => {
    navigate("/kommunizieren");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Kommunizieren</span>

      <div className="rectangle-19">
        <h3>Kommunizieren</h3>
        <span className="ein-softwareentwickler-englisch">
        Kommunikation (lateinisch communicatio ‚Mitteilung‘) ist der Austausch oder die Übertragung von Informationen, die auf verschiedene Arten (verbal, nonverbal und paraverbal) und auf verschiedenen Wegen (Sprechen, Schreiben) stattfinden kann, inzwischen auch im Wege der computervermittelten Kommunikation.
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="7 Steps to Better Conversations" />{" "}
      <Badge text="MFA Communication programme 2023/24" />{" "}
      <Badge text="Communication Models: Basic SMCR Model" />{" "}
      <Badge text="Lecture 1: Communication Skills/ संचार कौशल  Major Types " />{" "}
      <Badge text="Paint a Rooster in Acrylics" />{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToKommunizieren}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_kommunizieren;
