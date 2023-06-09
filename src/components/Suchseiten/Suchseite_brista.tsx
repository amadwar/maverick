import React from "react";
import "../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../ClosableBadge";
import { useNavigate } from 'react-router-dom';
function Suchseite_brista() {
  
  const navigate = useNavigate(); 

  const navigateToBrista = () => {
    navigate("/brista");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Brista</span>

      <div className="rectangle-19">
        <h3>Brista</h3>
        <span className="ein-softwareentwickler-englisch">
        Ein Barista (italienisch: [baˈrista]; aus dem Italienischen/Spanischen für \"Barkeeper\") ist eine Person, in der Regel ein Angestellter eines Kaffeehauses, die Kaffeegetränke auf Espressobasis zubereitet und serviert.
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badge">
      <ClosableBadge text="How to use Hario V60" />{" "}
      <ClosableBadge text="Unboxing & set up of Nescafe Gold Barista" />{" "}
      <ClosableBadge text="iDrinkCoffee.com Review" />{" "}
      <ClosableBadge text="Lelit Bianca Flow Control Espresso Machine Preview " />{" "}
      <ClosableBadge text="The Complete Beginner's Guide to Buying Chef Knives " />{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToBrista}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_brista;
