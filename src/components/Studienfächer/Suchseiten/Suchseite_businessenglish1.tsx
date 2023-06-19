import React, { useEffect, useState } from "react";
import "../../Suchseite.css";
import { Link } from 'react-router-dom'; 
import ClosableBadge from "../../ClosableBadge";
import { useNavigate } from 'react-router-dom';
import Badge from "../../Badge";
import axios from "axios";





function Suchseite_businessenglish() {
 
  const navigate = useNavigate(); 

 

  const navigateToBusinessenglish1 = () => {
    navigate("/businessenglish1");
  }

  return (
    <div className="such-seite">
      <span className="skill-lernpfad">Skill: Business English 1</span>

      <div className="rectangle-19">
        <h3>Business English 1</h3>
        <span className="ein-softwareentwickler-englisch">
        Business English is a part of English for specific purposes and can be considered a specialism within English language learning and teaching, or a variant of international English. Many non-native English speakers study the subject with the goal of doing business with English-speaking countries, or with companies located outside the English-speaking world but which nonetheless use English as a shared language or lingua franca. Much of the English communication that takes place within business circles all over the world occurs between non-native speakers. In cases such as these, the object of the exercise is efficient and effective communication. 
        (Quelle Wikipedia)
        </span>
      </div>

      <div className="rectangle-10">
        <span className="text1">Personalisiere deinen Lernpfad</span>
        <span className="text2">Welche Themen sind bei dir bereits bekannt?</span>
        <div className="badgen">
          <Badge text="Business types"/>{" "}
          <Badge text="Business functions"/>{" "}
          <Badge text="Entrepreneurship"/>{" "}
          <Badge text="Finance"/>{" "}
          <Badge text="Marketing"/>{" "}
          <Badge text="Teamwork"/>{" "}
          
          
        </div>
      </div>
     
      <button type="button" className="button" onClick={navigateToBusinessenglish1}>Starte dein Lernpfad</button>      
          
    </div>
  );
}

export default Suchseite_businessenglish;
