import React from "react";
import "../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../Badge";
function Suchseite_meditation() {
  
  const navigate = useNavigate(); 

  const navigateToMeditation = () => {
    navigate("/meditation");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Meditation</span>

      <div className="rectangle-19">
        <h3>Meditation</h3>
        <span className="ein-softwareentwickler-englisch">
        Meditation bezeichnet eine Gruppe von Geistesübungen, die in verschiedenen Traditionen seit Jahrtausenden überliefert sind und seit dem 20. Jahrhundert zunehmend auch in der westlichen Welt in säkularer Weise praktiziert und beforscht werden. Ein wesentliches Element meditativer Techniken ist das bewusste Steuern der Aufmerksamkeit.
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="Meditation Practice: Working with Whatever Comes Up" />{" "}
      <Badge text="5 Min Guided Meditation [Exam Oriented]" />{" "}
      <Badge text="Open, Spacious Awareness Meditation - Jack Kornfield" />{" "}
      <Badge text="Geführte Meditation - Loslassen von Angst, Unruhe, Sorgen, Stress, Traurigkeit " />{" "}
      <Badge text="So kreierst Du 10x mehr Stille in Deinem Verstand " />{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToMeditation}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_meditation;
