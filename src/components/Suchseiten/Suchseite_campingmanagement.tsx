import React from "react";
import "../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../Badge";
function Suchseite_campingmanagement() {
  
  const navigate = useNavigate(); 

  const navigateToCamping = () => {
    navigate("/campingmanagement");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Campingmanagement</span>

      <div className="rectangle-19">
        <h3>Campingmanagement</h3>
        <span className="ein-softwareentwickler-englisch">
        Camping (auch Kampieren, von lat. campus „Feld“) bezeichnet eine Form des Tourismus. Die Urlauber übernachten in diesem Fall in Zelten, Hängematten, Wohnwagen oder Wohnmobilen, in Dachzelten oder ausgebauten Vans. Wird in Zelten gecampt, so spricht man auch von Zelten.
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="Roofnest Sparrow XL RTT Complete Install and Camping Evaluation " />{" "}
      <Badge text="5 W's of Campsite Selection" />{" "}
      <Badge text="How to Build the Ultimate Overland Truck Bed Kitchen Drawers for Camping!" />{" "}
      <Badge text="Bugout Camping in the Huron National Forest" />{" "}
      <Badge text="Winter Camping 3 Days with a Canvas Tent and a Woodstove" />{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToCamping}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_campingmanagement;
