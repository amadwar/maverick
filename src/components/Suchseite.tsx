import React from "react";
import "./Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "./ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "./Badge";
function Suchseite() {
  
  const navigate = useNavigate(); 

  const navigateToDevops = () => {
    navigate("/devops");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Azure DevOps</span>

      <div className="rectangle-19">
        <h3>Azure DevOps</h3>
        <span className="ein-softwareentwickler-englisch">
        Der Azure DevOps Server, früher bekannt als Team Foundation Server (TFS), von Microsoft, ist eine umfassende Plattform für kollaborative Softwareprojekte.
        Er ermöglicht die Planung, Erstellung und Verwaltung von Projekten.
        Der Azure DevOps Server bietet eine hohe Skalierbarkeit und kann bis zu 2000 Entwickler und 500 Projekte verwalten.
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="Introduction to Azure DevOps" />
      <Badge text="Terraform and Azure DevOps" />
      <Badge text="Continuous Integration, Continuous Deployment (CI-CD) with Azure DevOps" />
      <Badge text="Retrospectives: Be Agile and Thrive " />
      
      </div>
      

      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToDevops}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite;
