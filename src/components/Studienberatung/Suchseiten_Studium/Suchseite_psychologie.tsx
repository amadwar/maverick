import React from "react";
import "../../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../../Badge";
function Suchseite_Psychologie() {
  
  const navigate = useNavigate(); 

  const navigateToPsychologie = () => {
    navigate("/psychologie");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Psychologie Studium</span>

      <div className="rectangle-19">
        <h3>Psychologie Studium</h3>
        <span className="ein-softwareentwickler-englisch">
        Das Studium der Psychologie ist an den verschiedenen deutschen Universitäten unterschiedlich aufgebaut, folgt aber in den Grundzügen den Vorgaben, die von der Deutschen Gesellschaft für Psychologie als Rahmenprüfungsordnung verabschiedet worden sind. Auch die Schweizer Universitäten, die ein Psychologiestudium anbieten, folgen in den Grundzügen diesen Empfehlungen. 
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="psychology unit 3 learning ethio freshman course classical conditioning" />{" "}
      <Badge text="What is Forensic Psychology?" />{" "}
      <Badge text="Should I major in psychology?" />{" "}
      <Badge text="Q&A with Cambridge A Level Psychology assessment expert, Seth Alper" />{" "}
      <Badge text="INFJ in the eye of a clinical psychologist: special edition.  Rarest personality type in the world"/>{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToPsychologie}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_Psychologie;
