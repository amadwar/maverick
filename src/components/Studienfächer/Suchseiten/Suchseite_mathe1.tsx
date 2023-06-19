import React, { useEffect, useState } from "react";
import "../../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../../Badge";
import axios from "axios";





function Suchseite_mathe1() {
 
  const navigate = useNavigate(); 

 

  const navigateToBiologie = () => {
    navigate("/mathe1");
  }

  return (
    <div className="such-seite">
      <span className="skill-lernpfad">Skill: Mathe1</span>

      <div className="rectangle-19">
        <h3>Mathe1</h3>
        <span className="ein-softwareentwickler-englisch">
        Die Mathematik (bundesdeutsches Hochdeutsch: [matemaˈtiːk], [matemaˈtik]; österreichisches Hochdeutsch: [mateˈmaːtik]; altgriechisch μαθηματικὴ τέχνη mathēmatikē téchnē ‚die Kunst des Lernens‘) ist eine Formalwissenschaft, die aus der Untersuchung von geometrischen Figuren und dem Rechnen mit Zahlen entstand. Für Mathematik gibt es keine allgemein anerkannte Definition; heute wird sie üblicherweise als eine Wissenschaft beschrieben, die durch logische Definitionen selbstgeschaffene abstrakte Strukturen mittels der Logik auf ihre Eigenschaften und Muster untersucht. 
        (Quelle Wikipedia)
        </span>
      </div>

      <div className="rectangle-10">
        <span className="text1">Personalisiere deinen Lernpfad</span>
        <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
        <div className="badgen">
          <Badge text="Darstellung und Eigenschaften von Funktionen"/>{" "}
          <Badge text="Ganzrationale_Funktionen"/>{" "}
          <Badge text="Potenzfunktionen"/>{" "}
          <Badge text="Wurzelfunktionen"/>{" "}
          <Badge text="Eigenschaften von Vektoren_Grundlagen"/>{" "}
          <Badge text="Vektoroperationen"/>{" "}
          <Badge text="Matrizen_Grundlagen"/>{" "}
          
        </div>
      </div>
     
      <button type="button" className="button" onClick={navigateToBiologie}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_mathe1;
