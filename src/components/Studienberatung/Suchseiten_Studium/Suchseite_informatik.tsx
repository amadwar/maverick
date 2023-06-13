import React from "react";
import "../../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../../Badge";
function Suchseite_informatik() {
  
  const navigate = useNavigate(); 

  const navigateToInformatik = () => {
    navigate("/informatik");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Informatik Studium</span>

      <div className="rectangle-19">
        <h3>Informatik Studium</h3>
        <span className="ein-softwareentwickler-englisch">
    Das Informatikstudium ist das Studium der Fachrichtung Informatik. Es wird an Hochschulen mit einem akademischen Grad abgeschlossen. 
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="SO SO, DU willst also INFORMATIK STUDIEREN" />{" "}
      <Badge text="INFORMATIK studieren ohne Vorkenntnisse?!" />{" "}
      <Badge text="Duales Studium der Informatik!" />{" "}
      <Badge text="Aufnahmeprüfung Uni CAMBRIDGE UNIVERSITY – Integral berechnen, Computer Science TMUA" />{" "}
      <Badge text="Mathematical Informatics at the University of Tokyo"/>{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToInformatik}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_informatik;
