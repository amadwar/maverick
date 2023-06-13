import React from "react";
import "../../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../../Badge";
function Suchseite_maschienenbau() {
  
  const navigate = useNavigate(); 

  const navigateToMaschinenbau = () => {
    navigate("/maschienenbau");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Maschinenbau Studium</span>

      <div className="rectangle-19">
        <h3>Maschinenbau Studium</h3>
        <span className="ein-softwareentwickler-englisch">
        Das Studium des Maschinenbaus ist ein Studium der ingenieurwissenschaftlichen Disziplin des Maschinenbaus und kann an Universitäten, Fachhochschulen und Berufsakademien absolviert werden. Es behandelt hauptsächlich Konstruktion und Produktion von verschiedenen Maschinen, Geräten und Apparaten und ermöglicht anschließend eine Tätigkeit als Maschinenbauingenieur in verschiedenen Branchen, darunter der Maschinenbau, die Automobilbranche und die Luft- und Raumfahrttechnik. 
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="Machine Shop Work No. 4, Drilling Boring and Reaming" />{" "}
      <Badge text="How to machine a shaft at two different diameters" />{" "}
      <Badge text="Maschinen- und Anlagenführer/-in Druckweiter- und Papierverarbeitung" />{" "}
      <Badge text="ENGINEERING MECHANICS-(KTU)- MODULE 6- part 1 " />{" "}
      <Badge text="Essential Machining Skills: Working with a Milling Machine, Part One"/>{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToMaschinenbau}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_maschienenbau;
