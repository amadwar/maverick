import React from "react";
import "../../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../../Badge";
function Suchseite_Jura() {
  
  const navigate = useNavigate(); 

  const navigateToJura = () => {
    navigate("/jura");
  }
  return (
    <div className="such-seite">

    
      
      <span className="skill-lernpfad">Skill: Jura Studium</span>

      <div className="rectangle-19">
        <h3>Jura Studium</h3>
        <span className="ein-softwareentwickler-englisch">
        Die Juristenausbildung in Deutschland bezeichnet die erforderliche Ausbildung für den Zugang zu juristischen Berufen. Sie besteht aus einem Universitätsstudium und dem Rechtsreferendariat. Bundeseinheitlich geregelt sind die Grundlagen im Deutschen Richtergesetz und ergänzend im Juristenausbildungsgesetz des jeweiligen Landes. 
        </span>
      </div>


      <div className="rectangle-10">
      <span className="text1">Personalisiere deinen Lernpfad</span>
      <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
      <div className="badgen">
      <Badge text="CRIMINAL LAW AND JURISPRUDENCE RATIONALIZATION | PART 1" />{" "}
      <Badge text="ច្បាប់រដ្ឋប្បវេណី និងច្បាប់ព្រហ្មទណ្ឌ civil law and crimenal law" />{" "}
      <Badge text="Legal Studies in the News - Train Strikes?" />{" "}
      <Badge text="រៀនច្បាប់ពិបាកទេ ហើយរៀនចប់ច្បាប់ធ្វើការអ្វីបានខ្លះ - cam laws" />{" "}
      <Badge text="Constitutional Law: Standards of Review (Rational Basis, Intermediate Scrutiny, & Strict Scrutiny)"/>{" "}
      </div>
      
      

        
      </div>
     
    
      <button type="button" className="button" onClick={navigateToJura}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_Jura;
