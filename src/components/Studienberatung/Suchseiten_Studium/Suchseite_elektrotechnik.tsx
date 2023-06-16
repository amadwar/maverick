import React from "react";
import "../../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../../Badge";
function Suchseite_Elektrotechnik() {
  
  const navigate = useNavigate(); 

  const navigateToElektrotechnik = () => {
    navigate("/elektrotechnik");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Elektrotechnik Studium</span>

      <div className="rectangle-19">
        <h3>Elektrotechnik Studium</h3>
        <span className="ein-softwareentwickler-englisch">
        Elektrotechnik ist eine Ingenieurwissenschaft, die sich mit der Forschung und der Entwicklung sowie der Produktion, dem Zusammenbau und der Instandhaltung von Elektrogeräten und elektrischen Anlagen befasst, die zumindest anteilig auf elektrischer Energie beruhen. Hierzu gehören als Beispiel der Bereich der Wandler, die elektrischen Maschinen und Bauelemente sowie Schaltungen für die Steuer-, Mess-, Regelungs-, Nachrichten-, Geräte- und Rechnertechnik bis hin zur technischen Informatik, Elektroinstallation und Energietechnik.  
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="Elektrischer Strom Erklärt" />{" "}
      <Badge text="Aufgabe 005:Leitungsdimensionierung:Leitungsberechnung:VDE 0298:Mathe:Elektroniker" />{" "}
      <Badge text="Wechselrichter Erklärt" />{" "}
      <Badge text="Elektrotechnik Grundlagen 1" />{" "}
      <Badge text="Leitungssucher! (Testboy 26) ElektroM "/>{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToElektrotechnik}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_Elektrotechnik;
