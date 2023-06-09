import React from "react";
import "../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../ClosableBadge";
import { useNavigate } from 'react-router-dom';
function Suchseite_scrum() {
  
  const navigate = useNavigate(); 

  const navigateToScrum = () => {
    navigate("/scrum");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Scrum</span>

      <div className="rectangle-19">
        <h3>Scrum</h3>
        <span className="ein-softwareentwickler-englisch">
        Scrum (englisch für „Gedränge“) ist ein Vorgehensmodell des Projekt- und Produktmanagements, insbesondere zur agilen Softwareentwicklung. Es wurde in der Softwaretechnik entwickelt, ist aber davon unabhängig. Scrum wird inzwischen in vielen anderen Bereichen eingesetzt. Es ist eine Umsetzung von Lean Development für das Projektmanagement. 
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badge">
      <ClosableBadge text="Intro to Scrum in Under 10 Minutes" />{" "}
      <ClosableBadge text="Introduction to Scrum - 7 Minutes" />{" "}
      <ClosableBadge text="3 Key Points for Scrum Masters in the new Scrum Guide 2022" />{" "}
      <ClosableBadge text="Bad Low Profile Coolers Beware: Scythe Is Coming! " />{" "}
      <ClosableBadge text="COSM - STOCHASTIC PROCESSES - INTRODUCTION " />{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToScrum}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_scrum;
