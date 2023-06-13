import React from "react";
import "../Suchseite.css";
import { useNavigate } from 'react-router-dom';
import Badge from "../Badge";
function Suchseite_Teamleitung() {
  
  const navigate = useNavigate(); 

  const navigateToTeamleitung = () => {
    navigate("/teamleitung");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Teamleitung</span>

      <div className="rectangle-19">
        <h3>Teamleitung</h3>
        <span className="ein-softwareentwickler-englisch">
        Ein Gruppenleiter oder Teamleiter ist ein Mitarbeiter, der eine abgrenzbare Personengruppe („Team“) zum Erfolg führen soll. Als Personengruppen können Arbeits- und Jugendgruppen, aber auch Qualitätszirkel, Projektgruppen und Wertanalysegruppen genannt werden.Der Teamleiter wird von dafür Verantwortlichen berufen und trägt die Verantwortung für die erfolgreiche Abwicklung der Gruppenprozesse.
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="Phasen der Teamentwicklung nach Tuckman: Alles Wichtige zur Teamuhr" />{" "}
      <Badge text="Video Review for the The Five Dysfunctions of a Team: A Leadership Fable by Patrick Lencioni" />{" "}
      <Badge text="Getting started with groups and teams provisioning" />{" "}
      <Badge text="Self Organization and the role of a Scrum Master" />{" "}
      <Badge text="5 Things to Cover in Weekly Team Meetings|How to Run a Staff Meeting Effectively"/>{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToTeamleitung}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_Teamleitung;
