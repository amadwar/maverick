import React from "react";
import "../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../Badge";
function Suchseite_basteln() {
  
  const navigate = useNavigate(); 

  const navigateToBasteln = () => {
    navigate("/basteln");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Basteln</span>

      <div className="rectangle-19">
        <h3>Basteln</h3>
        <span className="ein-softwareentwickler-englisch">Basteln ist eine handwerkliche Tätigkeit, bei der aus oft einschlägigen Materialien künstlerische Objekte angefertigt werden. Im deutschsprachigen Raum findet Basteln als didaktisches Konzept der Früherziehung  z.B. im Rahmen des Werk- und Textilunterrichts Platz.
        Ein Barista (italienisch: [baˈrista]; aus dem Italienischen/Spanischen für \"Barkeeper\") ist eine Person, in der Regel ein Angestellter eines Kaffeehauses, die Kaffeegetränke auf Espressobasis zubereitet und serviert.
        (Quelle Wikipedia)
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="5 einfache Methoden zum Abpausen TUTORIAL" />{" "}
      <Badge text="3d-printed unlockable loose Filament Spool" />{" "}
      <Badge text="[DIYsewing]기초바느질 액자모양바느질" />{" "}
      <Badge text="Wundervolle ENGEL aus Butterbrotpapier BASTELN " />{" "}
      <Badge text="Upcycling DIY - Reliefkunst, Kerzenständer und Vasen aus Altglas und Altpapier"/>{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToBasteln}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_basteln;
