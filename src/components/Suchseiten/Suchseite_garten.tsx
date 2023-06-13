import React from "react";
import "../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../Badge";
function Suchseite_garten() {
  
  const navigate = useNavigate(); 

  const navigateToScrum = () => {
    navigate("/Gaertner");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Gärtner</span>

      <div className="rectangle-19">
        <h3>Gärtner</h3>
        <span className="ein-softwareentwickler-englisch">
        Gärtner ist die Tätigkeits- beziehungsweise Berufsbezeichnung für Personen, die im Berufsfeld Agrarwirtschaft und dort im Gartenbau tätig sind. 
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="Stop Watering Your Garden!" />{" "}
      <Badge text="Chisel Plow and Cultivator from Vegetable Farmers" />{" "}
      <Badge text="Bountiful Harvest in the Organic Vegetable Garden" />{" "}
      <Badge text="Manage Weeds on Your Farm: Blind Cultivation at the Martens Farm " />{" "}
      <Badge text="WEED FREE MARKET GARDENING" />{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToScrum}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_garten;
