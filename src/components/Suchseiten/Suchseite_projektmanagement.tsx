import React from "react";
import "../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../Badge";
function Suchseite_projektmanagement() {
  
  const navigate = useNavigate(); 

  const navigateToProjektmanagement = () => {
    navigate("/projektmanagement");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Projektmanagement</span>

      <div className="rectangle-19">
        <h3>Projektmanagement</h3>
        <span className="ein-softwareentwickler-englisch">
        Als Projektmanagement (PM) wird das Initiieren, Planen, Steuern, Kontrollieren und Abschließen von Projekten bezeichnet. Viele Begriffe und Verfahrensweisen im Projektmanagement sind etabliert und standardisiert.
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="How to Manage Costs in ProjectManager" />{" "}
      <Badge text="Creating a Project in ProjectManager" />{" "}
      <Badge text="Project Management 05: Organizational Structure" />{" "}
      <Badge text="Project Management in Software Engineering|Project Management|Invensis Learning" />{" "}
      <Badge text="Nachhaltiges Risikomanagement im Projektmanagement" />{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToProjektmanagement}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_projektmanagement;
