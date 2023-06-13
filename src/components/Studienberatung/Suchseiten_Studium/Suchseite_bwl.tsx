import React from "react";
import "../../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../../Badge";
function Suchseite_BWL() {
  
  const navigate = useNavigate(); 

  const navigateToBWL = () => {
    navigate("/bwl");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Betriebswirtschaftslehre Studium</span>

      <div className="rectangle-19">
        <h3>Betriebswirtschaftslehre Studium</h3>
        <span className="ein-softwareentwickler-englisch">
        Die Betriebswirtschaftslehre (BWL; englisch business economics; auch Betriebsökonomie), kurz auch Betriebswirtschaft genannt, ist innerhalb der Wirtschaftswissenschaften eine Einzelwissenschaft, die als Lehr- und Forschungsgegenstand den Betrieb oder das Unternehmen untersucht. 
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="How The Economic Machine Works by Ray Dalio" />{" "}
      <Badge text="The Theory of Production - Economics A2 Level Unit 3" />{" "}
      <Badge text="Present Worth - Fundamentals of Engineering Economics" />{" "}
      <Badge text="HSC Business Studies Operations Summary" />{" "}
      <Badge text="Office Hours: The Solow Model: Investments vs. Ideas"/>{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToBWL}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_BWL;
