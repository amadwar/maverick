import React from "react";
import CardLernpfad from "./CardLernpfad";
import CardAktiverLernpfad from "./CardAktiverLernpfad";
import Profile from "./Profile";

function Startseite(){

  const propsData = {
    aktiverLernpfad: {
      meineAktivenLernpfade: "Meine aktiven Lernpfade",
      zielSoftwareentwicklungsmethode:
        "Ziel: Softwareentwicklungsmethoden Fortschritt: 80%",
    },
    lernpfad1: {
      zielScrumVerwandtSoftwareentwi:
        "Ziel: C++\u2028Verwandt: Softwareentwicklungsmethoden",
    },
    lernpfad11: {
      zielScrumVerwandtSoftwareentwi:
        "Ziel: Java\u2028Verwandt: Softwareentwicklungsmethoden",
    },
    lernpfad12: {
      zielScrumVerwandtSoftwareentwi:
        "Ziel: Python\u2028Verwandt: Softwareentwicklungsmethoden",
    },
    lernpfad13: {
      zielScrumVerwandtSoftwareentwi:
        "Ziel: R\u2028Verwandt: Softwareentwicklungsmethoden",
    },
    lernpfad14: {
      zielScrumVerwandtSoftwareentwi:
        "Ziel: Scrum\u2028Verwandt: Softwareentwicklungsmethoden",
    },
  };
 const rectangle2 = "./rectangle2.svg";
 const rectangle1 = "./rectangle1.svg";
 const screenshot = "./screenshot.png";
 const rectangle = "./rectangle.svg";
 const rectangle3 = "./rectangle3.svg";
 const subtract = "./subtract.svg";
 const  iconLogo = "./iconLogo.svg";
  return (
    <div className="startseite-2">
      
      <CardAktiverLernpfad
        className="aktiver-lernpfad-instance-1"
        {...propsData.aktiverLernpfad}
      />
      <span className="was-dich-noch-interessieren-knnt">
        Was dich noch interessieren könnte
      </span>
      <div className="flex-container">
        <CardLernpfad
          className="lernpfad-1-instance"
          {...propsData.lernpfad1}
        />
        <CardLernpfad
          className="lernpfad-1-instance-1"
          {...propsData.lernpfad11}
        />
        <CardLernpfad
          className="lernpfad-1-instance-2"
          {...propsData.lernpfad12}
        />
        <CardLernpfad
          className="lernpfad-1-instance-3"
          {...propsData.lernpfad13}
        />
        <CardLernpfad
          className="lernpfad-1-instance-5"
          {...propsData.lernpfad14}
        />
      </div>
      <span className="aktuelle-trends">Aktuelle Trends</span>
      <div className="flex-container-1">
        <div className="rectangle-10-2">
          <img className="screenshot-2023-01-31-002506-1" src={screenshot} alt="rectangle"/>
          <span>Ziel: C++ Verwandt: Softwareentwicklungsmethoden</span>
        </div>

          <div className="rectangle-10-2">
          <img className="screenshot-2023-01-31-002506-1" src={screenshot} />
          <span> Ziel: JAVA Verwandet: Softwareentwicklungsmethoden</span>   
          </div>
          <div className="rectangle-10-2">
          <img className="screenshot-2023-01-31-002506-1" src={screenshot} />
          <span> Ziel: JAVA Verwandet: Softwareentwicklungsmethoden</span>   
          </div>
    
          <div className="rectangle-10-2">
          <img className="screenshot-2023-01-31-002506-1" src={screenshot} />
          <span className="ziel-scrum-verwandt-softwareentwi">Ziel:Verwandt: Softwareentwicklungsmethoden </span>
          
          </div>
               
           <div className="rectangle-10-4">
            <img className="screenshot-2023-01-31-002506-1" src={screenshot}/>
           <span className="ziel-scrum-verwandt-softwareentwi"> Ziel: Scrum<br/>Verwant:<br/>Softwareentwicklungsmethoden </span>

             
           </div>
        
    
      </div>
      </div>
   );
  };

export default Startseite;
  
