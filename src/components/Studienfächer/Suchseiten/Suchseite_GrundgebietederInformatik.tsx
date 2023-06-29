import React, { useEffect, useState } from "react";
import "../../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../../Badge";
import axios from "axios";





function Suchseite_grundgebietederinformatik() {
 
  const navigate = useNavigate(); 

 

  const navigateTogrundgebietederinformatik = () => {
    navigate("/grundgebietederinformatik");
  }

  return (
    <div className="such-seite">
      <span className="skill-lernpfad">Skill: Grundgebiete der informatik</span>

      <div className="rectangle-19">
        <h3>Grundgebiete der informatik</h3>
        <span className="ein-softwareentwickler-englisch">
        Bei der Informatik handelt es sich um die Wissenschaft von der systematischen Darstellung, Speicherung, Verarbeitung und Übertragung von Daten, wobei besonders die automatische Verarbeitung mit Digitalrechnern betrachtet wird.Sie ist zugleich Grundlagen- und Formalwissenschaft als auch Ingenieurdisziplin. 
        (Quelle Wikipedia)
        </span>
      </div>

      <div className="rectangle-10">
        <span className="text1">Personalisiere deinen Lernpfad</span>
        <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
        <div className="badgen">
          <Badge text="Definitionen in der Informatik"/>{" "}
          <Badge text="Datentypen"/>{" "}
          <Badge text="Variabeln & Konstanten"/>{" "}
          <Badge text="Arithmetische und logische Operationen"/>{" "}
          <Badge text="Kontrollanweisungen"/>{" "}
          <Badge text="O-Notation und Rechenregeln"/>{" "}
          
          
        </div>
      </div>
     
      <button type="button" className="button" onClick={navigateTogrundgebietederinformatik}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_grundgebietederinformatik;
