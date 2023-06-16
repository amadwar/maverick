// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Startseite from "./components/Startseite";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Layout from "./Layout";
import Einstellung from "./components/Einstellungen";
import Anmelden from "./components/Anmelden";
import Suchseite from "./components/Suchseite";
import Lernpfad1 from "./components/Lernpfad1";
import Signin from "./components/SignIn";
import Sucheinstellungen from "./components/Sucheinstellungen";
import Devops from "./components/Devops";
import Video_devops from "./components/Video1_devops";
import Video_devops2 from "./components/Videos/Video2_devops";
import Video_devops3 from "./components/Videos/Video3_devops";
import Video_devops4 from "./components/Videos/Video4_devops";
import Brista from "./components/Brista";
import Video_brista1 from "./components/Videos/Video1_brista";
import Video_brista2 from "./components/Videos/Video2_brista";
import Video_brista3 from "./components/Videos/Video3_brista";
import Video_brista4 from "./components/Videos/Video4_brista";
import Video_brista5 from "./components/Videos/Video5_brista";
import Suchseite_brista from "./components/Suchseiten/Suchseite_brista";
import Scrum from "./components/Scrum";
import Suchseite_scrum from "./components/Suchseiten/Suchseite_scrum";
import Video_Scrum5 from "./components/Videos/Video5_scrum";
import Video_Scrum4 from "./components/Videos/Video4_scrum";
import Video_Scrum3 from "./components/Videos/Video3_scrum";
import Video_Scrum2 from "./components/Videos/Video2_scrum";
import Video_Scrum1 from "./components/Videos/Video1_scrum";
import Gaertner from "./components/Gaertner";
import Suchseite_garten from "./components/Suchseiten/Suchseite_garten";
import Video_garten1 from "./components/Videos/Video1_garten";
import Video_garten5 from "./components/Videos/Video5_garten";
import Video_garten4 from "./components/Videos/Video4_garten";
import Video_garten3 from "./components/Videos/Video3_garten";
import Video_garten2 from "./components/Videos/Video2_garten";
import Stricken from "./components/Stricken";
import Suchseite_stricken from "./components/Suchseiten/Suchseite_stricken";
import Video_stricken1 from "./components/Videos/Video1_stricken";
import Video_stricken2 from "./components/Videos/Video2_stricken";
import Video_stricken3 from "./components/Videos/Video3_stricken";
import Video_stricken4 from "./components/Videos/Video4_stricken";
import Video_stricken5 from "./components/Videos/Video5_stricken";
import Basteln from "./components/Basteln";
import Suchseite_basteln from "./components/Suchseiten/Suchseite_basteln";
import Video_basteln5 from "./components/Videos/Video5_basteln";
import Video_basteln4 from "./components/Videos/Video4_basteln";
import Video_basteln3 from "./components/Videos/Video3_basteln";
import Video_basteln2 from "./components/Videos/Video2_basteln";
import Video_basteln1 from "./components/Videos/Video1_basteln";
import Malen from "./components/Malen";
import Suchseite_malen from "./components/Suchseiten/Suchseite_malen";
import Video_malen5 from "./components/Videos/Video5_malen";
import Video_malen3 from "./components/Videos/Video3_Malen";
import Video_malen4 from "./components/Videos/Video4_malen";
import Video_malen2 from "./components/Videos/Video2_malen";
import Video_malen1 from "./components/Videos/Video1_malen";
import Kommunizieren from "./components/kommunizieren";
import Video_Kommunizieren1 from "./components/Videos/Video1_kommunizieren";
import Video_Kommunizieren2 from "./components/Videos/Video2_kommunizieren";
import Video_Kommunizieren3 from "./components/Videos/Video3_kommunizieren";
import Video_Kommunizieren4 from "./components/Videos/Video4_kommunizieren";
import Video_Kommunizieren5 from "./components/Videos/Video5_kommunizieren";
import Suchseite_kommunizieren from "./components/Suchseiten/Suchseite_kommunizieren";
import Suchseite_meditation from "./components/Suchseiten/Suchseite_meditation";
import Suchseite_campingmanagement from "./components/Suchseiten/Suchseite_campingmanagement";
import Suchseite_projektmanagement from "./components/Suchseiten/Suchseite_projektmanagement";
import Meditation from "./components/Mesitation";
import Campingmanagement from "./components/Campingmanagement";
import Projektmanagement from "./components/Projektmanagement";
import Video_meditation5 from "./components/Videos_Meditation/Video5_meditation";
import Video_meditation4 from "./components/Videos_Meditation/Video4_meditation";
import Video_meditation2 from "./components/Videos_Meditation/Video2_meditation";
import Video_meditation1 from "./components/Videos_Meditation/Video1_meditation";
import Video_meditation3 from "./components/Videos_Meditation/Video3_meditation";
import Video_campingmanagement5 from "./components/Videos_Campingmanagement/Video5_campingmanagement";
import Video_campingmanagement4 from "./components/Videos_Campingmanagement/Video4_campingmanagement";
import Video_campingmanagement3 from "./components/Videos_Campingmanagement/Video3_campingmanagement";
import Video_campingmanagement2 from "./components/Videos_Campingmanagement/Video2_campingmanagement";
import Video_campingmanagement1 from "./components/Videos_Campingmanagement/Video1_campingmanagement";
import Video_projektmanagement5 from "./components/Videos_projektmanagement/Video5_projektmanagement";
import Video_projektmanagement4 from "./components/Videos_projektmanagement/Video4_projektmanagement";
import Video_projektmanagement3 from "./components/Videos_projektmanagement/Video3_projektmanagement";
import Video_projektmanagement2 from "./components/Videos_projektmanagement/Video2_projektmanagement";
import Video_projektmanagement1 from "./components/Videos_projektmanagement/Video1_projektmanagement";
import Immobilien from "./components/Immobilien";
import Teamleitung from "./components/Teamleitung";
import Suchseite_immobilien from "./components/Suchseiten/Suchseite_immobilien";
import Suchseite_Teamleitung from "./components/Suchseiten/Suchseite_Teamleitung";
import Video_immobilien1 from "./components/Videos_Immobilien/Video1_immobilien";
import Video_immobilien2 from "./components/Videos_Immobilien/Video2_immobilien";
import Video_immobilien3 from "./components/Videos_Immobilien/Video3_immobilien";
import Video_immobilien4 from "./components/Videos_Immobilien/Video4_immobilien";
import Video_immobilien5 from "./components/Videos_Immobilien/Video5_immobilien";
import Video_teamleitung5 from "./components/Videos_Teamleitung/Video5_teamleitung";
import Video_teamleitung4 from "./components/Videos_Teamleitung/Video4_teamleitung";
import Video_teamleitung3 from "./components/Videos_Teamleitung/Video3_teamleitung";
import Video_teamleitung2 from "./components/Videos_Teamleitung/Video2_teamleitung";
import Video_teamleitung1 from "./components/Videos_Teamleitung/Video1_teamleitung";
import Medizin from "./components/Studienberatung/Studiengang/Medizin";
import Informatik from "./components/Studienberatung/Studiengang/Informatik";
import BWL from "./components/Studienberatung/Studiengang/BWL";
import Maschienenbau from "./components/Studienberatung/Studiengang/Machienenbau";
import Suchseite_BWL from "./components/Studienberatung/Suchseiten_Studium/Suchseite_bwl";
import Suchseite_informatik from "./components/Studienberatung/Suchseiten_Studium/Suchseite_informatik";
import Suchseite_medizin from "./components/Studienberatung/Suchseiten_Studium/Suchseite_medizin";
import Suchseite_maschienenbau from "./components/Studienberatung/Suchseiten_Studium/Suchseite_maschienenbau";
import GetVideotest from "./components/test";
import Video_medizin1 from "./components/Studienberatung/Videos_medizin/Video1_medizin";
import Video_medizin2 from "./components/Studienberatung/Videos_medizin/Video2_medizin";
import Video_medizin3 from "./components/Studienberatung/Videos_medizin/Video3_medizin";
import Video_medizin4 from "./components/Studienberatung/Videos_medizin/Video4_medizin";
import Video_medizin5 from "./components/Studienberatung/Videos_medizin/Video5_medizin";
import Video_maschinenbau5 from "./components/Studienberatung/Videos_Maschinenbau/Video5_Maschinenbau";
import Video_maschinenbau4 from "./components/Studienberatung/Videos_Maschinenbau/Video4_Maschinenbau";
import Video_maschinenbau3 from "./components/Studienberatung/Videos_Maschinenbau/Video3_Maschinenbau";
import Video_maschinenbau2 from "./components/Studienberatung/Videos_Maschinenbau/Video2_Maschinenbau";
import Video_maschinenbau1 from "./components/Studienberatung/Videos_Maschinenbau/Video1_Maschinenbau";
import Video_informatik5 from "./components/Studienberatung/Videos_Informatik/Video5_informatik";
import Video_informatik4 from "./components/Studienberatung/Videos_Informatik/Video4_informatik";
import Video_informatik3 from "./components/Studienberatung/Videos_Informatik/Video3_informatik";
import Video_informatik2 from "./components/Studienberatung/Videos_Informatik/Video2_informatik";
import Video_informatik1 from "./components/Studienberatung/Videos_Informatik/Video1_informatik";
import Video_bwl5 from "./components/Studienberatung/Videos_BWL/Video5_bwl";
import Video_bwl4 from "./components/Studienberatung/Videos_BWL/Video4_bwl";
import Video_bwl3 from "./components/Studienberatung/Videos_BWL/Video3_bwl";
import Video_bwl2 from "./components/Studienberatung/Videos_BWL/Video2_bwl";
import Video_bwl1 from "./components/Studienberatung/Videos_BWL/Video1_bwl";
import Elektrotechnik from "./components/Studienberatung/Studiengang/Elektrotechnik";
import Chemie from "./components/Studienberatung/Studiengang/Chemie";
import Biologie from "./components/Studienberatung/Studiengang/Biologie";
import Psychologie from "./components/Studienberatung/Studiengang/Psychologie";
import Jura from "./components/Studienberatung/Studiengang/Jura";
import Architektur from "./components/Studienberatung/Studiengang/Architektur";
import Suchseite_Biologie from "./components/Studienberatung/Suchseiten_Studium/Suchseite_biologie";
import Suchseite_Chemie from "./components/Studienberatung/Suchseiten_Studium/Suchseite_chemie";
import Suchseite_Architektur from "./components/Studienberatung/Suchseiten_Studium/Suchseite_architektur";
import Suchseite_Jura from "./components/Studienberatung/Suchseiten_Studium/Suchseite_jura";
import Suchseite_Psychologie from "./components/Studienberatung/Suchseiten_Studium/Suchseite_psychologie";
import Suchseite_Elektrotechnik from "./components/Studienberatung/Suchseiten_Studium/Suchseite_elektrotechnik";
import Video_jura1 from "./components/Studienberatung/Videos_jura/Video1_jura";
import Video_jura2 from "./components/Studienberatung/Videos_jura/Video2_jura";
import Video_jura3 from "./components/Studienberatung/Videos_jura/Video3_jura";
import Video_jura4 from "./components/Studienberatung/Videos_jura/Video4_jura";
import Video_jura5 from "./components/Studienberatung/Videos_jura/Video5_jura";
import MyComponent from "./components/Geschichte";
import Sozialogie from "./components/Studienberatung/Studiengang/Sozialogie";
import Geschichte from "./components/Studienberatung/Studiengang/Geschichte";
import Volkswirtschaftslehre from "./components/Studienberatung/Studiengang/Volkswirtschaftslehre";
import Mathematik from "./components/Studienberatung/Studiengang/Mathematik";
import Physik from "./components/Studienberatung/Studiengang/Physik";
import Video_psychologie1 from "./components/Studienberatung/Videos_psychologie/Video1_psychologie";
import Video_psychologie2 from "./components/Studienberatung/Videos_psychologie/Video2_psychologie";
import Video_psychologie3 from "./components/Studienberatung/Videos_psychologie/Video3_psychologie";
import Video_psychologie4 from "./components/Studienberatung/Videos_psychologie/Video4_psychologie";
import Video_psychologie5 from "./components/Studienberatung/Videos_psychologie/Video5_psychologie";
import Video_biologie1 from "./components/Studienberatung/Videos_biologie/Video1_biologie";
import Video_biologie5 from "./components/Studienberatung/Videos_biologie/Video5_biologie";
import Video_biologie4 from "./components/Studienberatung/Videos_biologie/Video4_biologie";
import Video_biologie3 from "./components/Studienberatung/Videos_biologie/Video3_biologie";
import Video_biologie2 from "./components/Studienberatung/Videos_biologie/Video2_biologie";
import Video_chemie5 from "./components/Studienberatung/Videos_Chemie/Video5_chemie";
import Video_chemie1 from "./components/Studienberatung/Videos_Chemie/Video1_chemie";
import Video_chemie2 from "./components/Studienberatung/Videos_Chemie/Video2_chemie";
import Video_chemie3 from "./components/Studienberatung/Videos_Chemie/Video3_chemie";
import Video_chemie4 from "./components/Studienberatung/Videos_Chemie/Video4_chemie";



function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Header />
                <Startseite />
              </>
            }
          />
          
          <Route
            path="suchseite"
            element={
              <>
                <Header />
                <Suchseite />
              </>
            }
          />
          
          <Route
            path="profile"
            element={
              <>
                <Header />
                <Profile />
              </>
            }
          />
          <Route
            path="Sucheinstellungen"
            element={
              <>
                <Header />
                <Sucheinstellungen />
              </>
            }
          />
          
          <Route
            path="einstellung"
            element={
              <>
                <Header />
                <Einstellung />
              </>
            }
          />
          <Route
            path="lernpfad1"
            element={
              <>
                <Header />
                <Lernpfad1 />
              </>
            }
          />
          <Route
            path="suchseite"
            element={
              <>
                <Header />
                <Devops />
              </>
            }
          />
          <Route
            path="suchseite_brista"
            element={
              <>
                <Header />
                <Suchseite_brista />
              </>
            }
          />
          <Route
            path="suchseite_scrum"
            element={
              <>
                <Header />
                <Suchseite_scrum />
              </>
            }
          />
          <Route
            path="suchseite_gaertner"
            element={
              <>
                <Header />
                <Suchseite_garten />
              </>
            }
          />
          <Route
            path="suchseite_stricken"
            element={
              <>
                <Header />
                <Suchseite_stricken />
              </>
            }
          />
          <Route
            path="suchseite_basteln"
            element={
              <>
                <Header />
                <Suchseite_basteln/>
              </>
            }
          />
          <Route
            path="suchseite_malen"
            element={
              <>
                <Header />
                <Suchseite_malen/>
              </>
            }
          />
          <Route
            path="suchseite_kommunizieren"
            element={
              <>
                <Header />
                <Suchseite_kommunizieren/>
              </>
            }
          />
          <Route
            path="suchseite_meditation"
            element={
              <>
                <Header />
                <Suchseite_meditation/>
              </>
            }
          />
          <Route
            path="suchseite_campingmanagement"
            element={
              <>
                <Header />
                <Suchseite_campingmanagement/>
              </>
            }
          />
          <Route
            path="suchseite_projektmanagement"
            element={
              <>
                <Header />
                <Suchseite_projektmanagement/>
              </>
            }
          />
          <Route
            path="suchseite_immobilien"
            element={
              <>
                <Header />
                <Suchseite_immobilien/>
              </>
            }
          />
          <Route
            path="suchseite_teamleitung"
            element={
              <>
                <Header />
                <Suchseite_Teamleitung/>
              </>
            }
          />
          <Route
            path="suchseite_maschienenbau"
            element={
              <>
                <Header />
                <Suchseite_maschienenbau/>
              </>
            }
          />
          <Route
            path="suchseite_medizin"
            element={
              <>
                <Header />
                <Suchseite_medizin/>
              </>
            }
          />
          <Route
            path="suchseite_informatik"
            element={
              <>
                <Header />
                <Suchseite_informatik/>
              </>
            }
          />
          <Route
            path="suchseite_bwl"
            element={
              <>
                <Header />
                <Suchseite_BWL/>
              </>
            }
          />
          <Route
            path="suchseite_elektrotechnik"
            element={
              <>
                <Header />
                <Suchseite_Elektrotechnik/>
              </>
            }
          />
          <Route
            path="suchseite_psychologie"
            element={
              <>
                <Header />
                <Suchseite_Psychologie/>
              </>
            }
          />
          <Route
            path="suchseite_jura"
            element={
              <>
                <Header />
                <Suchseite_Jura/>
              </>
            }
          />
          <Route
            path="suchseite_architektur"
            element={
              <>
                <Header />
                <Suchseite_Architektur/>
              </>
            }
          />
          <Route
            path="suchseite_chemie"
            element={
              <>
                <Header />
                <Suchseite_Chemie/>
              </>
            }
          />
          <Route
            path="suchseite_biologie"
            element={
              <>
                <Header />
                <Suchseite_Biologie/>
              </>
            }
          />
          <Route
            path="devops"
            element={
              <>
                <Header />
                <Devops />
              </>
            }
          />
          <Route
            path="Video_devops"
            element={
              <>
                <Header />
                <Video_devops />
              </>
            }
          />
         <Route
            path="Video_devops2"
            element={
              <>
                <Header />
                <Video_devops2 />
              </>
            }
          />
          <Route
            path="Video_devops3"
            element={
              <>
                <Header />
                <Video_devops3 />
              </>
            }
          />
          <Route
            path="Video_devops4"
            element={
              <>
                <Header />
                <Video_devops4 />
              </>
            }
          />
          <Route
            path="brista"
            element={
              <>
                <Header />
                <Brista />
              </>
            }
          />
          <Route
            path="video_brista1"
            element={
              <>
                <Header />
                <Video_brista1 />
              </>
            }
          />
          <Route
            path="video_brista2"
            element={
              <>
                <Header />
                <Video_brista2 />
              </>
            }
          />
          <Route
            path="video_brista3"
            element={
              <>
                <Header />
                <Video_brista3 />
              </>
            }
          />
          <Route
            path="video_brista4"
            element={
              <>
                <Header />
                <Video_brista4 />
              </>
            }
          />
          <Route
            path="video_brista5"
            element={
              <>
                <Header />
                <Video_brista5/>
              </>
            }
          />
          <Route
            path="video_scrum1"
            element={
              <>
                <Header />
                <Video_Scrum1/>
              </>
            }
          />
          <Route
            path="video_scrum2"
            element={
              <>
                <Header />
                <Video_Scrum2/>
              </>
            }
          />
          <Route
            path="video_scrum3"
            element={
              <>
                <Header />
                <Video_Scrum3/>
              </>
            }
          />
          <Route
            path="video_scrum4"
            element={
              <>
                <Header />
                <Video_Scrum4/>
              </>
            }
          />
          <Route
            path="video_scrum5"
            element={
              <>
                <Header />
                <Video_Scrum5/>
              </>
            }
          />
          <Route
            path="video_garten1"
            element={
              <>
                <Header />
                <Video_garten1 />
              </>
            }
          />
          <Route
            path="video_garten2"
            element={
              <>
                <Header />
                <Video_garten2 />
              </>
            }
          />
          <Route
            path="video_garten3"
            element={
              <>
                <Header />
                <Video_garten3 />
              </>
            }
          />
          <Route
            path="video_garten4"
            element={
              <>
                <Header />
                <Video_garten4 />
              </>
            }
          />
          <Route
            path="video_garten5"
            element={
              <>
                <Header />
                <Video_garten5/>
              </>
            }
          />
          <Route
            path="video_stricken1"
            element={
              <>
                <Header />
                <Video_stricken1 />
              </>
            }
          />
          <Route
            path="video_stricken2"
            element={
              <>
                <Header />
                <Video_stricken2 />
              </>
            }
          />
          <Route
            path="video_stricken3"
            element={
              <>
                <Header />
                <Video_stricken3/>
              </>
            }
          />
          <Route
            path="video_stricken4"
            element={
              <>
                <Header />
                <Video_stricken4 />
              </>
            }
          />
          <Route
            path="video_stricken5"
            element={
              <>
                <Header />
                <Video_stricken5 />
              </>
            }
          />
          <Route
            path="video_basteln1"
            element={
              <>
                <Header />
                <Video_basteln1/>
              </>
            }
          />
          <Route
            path="video_basteln2"
            element={
              <>
                <Header />
                <Video_basteln2 />
              </>
            }
          />
          <Route
            path="video_basteln3"
            element={
              <>
                <Header />
                <Video_basteln3 />
              </>
            }
          />
          <Route
            path="video_basteln4"
            element={
              <>
                <Header />
                <Video_basteln4 />
              </>
            }
          />
          <Route
            path="video_basteln5"
            element={
              <>
                <Header />
                <Video_basteln5 />
              </>
            }
          />
          <Route
            path="video_malen1"
            element={
              <>
                <Header />
                <Video_malen1 />
              </>
            }
          />
          <Route
            path="video_malen2"
            element={
              <>
                <Header />
                <Video_malen2 />
              </>
            }
          />
          <Route
            path="video_malen3"
            element={
              <>
                <Header />
                <Video_malen3 />
              </>
            }
          />
          <Route
            path="video_malen4"
            element={
              <>
                <Header />
                <Video_malen4 />
              </>
            }
          />
          <Route
            path="video_malen5"
            element={
              <>
                <Header />
                <Video_malen5 />
              </>
            }
          />
          <Route
            path="video_kommunizieren1"
            element={
              <>
                <Header />
                <Video_Kommunizieren1 />
              </>
            }
          />
          <Route
            path="video_kommunizieren2"
            element={
              <>
                <Header />
                <Video_Kommunizieren2 />
              </>
            }
          />
          <Route
            path="video_kommunizieren3"
            element={
              <>
                <Header />
                <Video_Kommunizieren3 />
              </>
            }
          />
          <Route
            path="video_kommunizieren4"
            element={
              <>
                <Header />
                <Video_Kommunizieren4 />
              </>
            }
          />
          <Route
            path="video_kommunizieren5"
            element={
              <>
                <Header />
                <Video_Kommunizieren5 />
              </>
            }
          />
          <Route
            path="video_meditation1"
            element={
              <>
                <Header />
                <Video_meditation1/>
              </>
            }
          />
          <Route
            path="video_meditation2"
            element={
              <>
                <Header />
                <Video_meditation2/>
              </>
            }
          />
          <Route
            path="video_meditation3"
            element={
              <>
                <Header />
                <Video_meditation3 />
              </>
            }
          />
          <Route
            path="video_meditation4"
            element={
              <>
                <Header />
                <Video_meditation4 />
              </>
            }
          />
          <Route
            path="video_meditation5"
            element={
              <>
                <Header />
                <Video_meditation5 />
              </>
            }
          />
          <Route
            path="video_campingmanagement1"
            element={
              <>
                <Header />
                <Video_campingmanagement1 />
              </>
            }
          />
          <Route
            path="video_campingmanagement2"
            element={
              <>
                <Header />
                <Video_campingmanagement2 />
              </>
            }
          />
          <Route
            path="video_campingmanagement3"
            element={
              <>
                <Header />
                <Video_campingmanagement3 />
              </>
            }
          />
          <Route
            path="video_campingmanagement4"
            element={
              <>
                <Header />
                <Video_campingmanagement4 />
              </>
            }
          />
          <Route
            path="video_campingmanagement5"
            element={
              <>
                <Header />
                <Video_campingmanagement5 />
              </>
            }
          />
          <Route
            path="video_projektmanagement1"
            element={
              <>
                <Header />
                <Video_projektmanagement1 />
              </>
            }
          />
          <Route
            path="video_projektmanagement2"
            element={
              <>
                <Header />
                <Video_projektmanagement2 />
              </>
            }
          />
          <Route
            path="video_projektmanagement3"
            element={
              <>
                <Header />
                <Video_projektmanagement3 />
              </>
            }
          />
          <Route
            path="video_projektmanagement4"
            element={
              <>
                <Header />
                <Video_projektmanagement4 />
              </>
            }
          />
          <Route
            path="video_projektmanagement5"
            element={
              <>
                <Header />
                <Video_projektmanagement5 />
              </>
            }
          />
          <Route
            path="video_immobilien1"
            element={
              <>
                <Header />
                <Video_immobilien1 />
              </>
            }
          />
          <Route
            path="video_immobilien2"
            element={
              <>
                <Header />
                <Video_immobilien2 />
              </>
            }
          />
          <Route
            path="video_immobilien3"
            element={
              <>
                <Header />
                <Video_immobilien3 />
              </>
            }
          />
          <Route
            path="video_immobilien4"
            element={
              <>
                <Header />
                <Video_immobilien4 />
              </>
            }
          />
          <Route
            path="video_immobilien5"
            element={
              <>
                <Header />
                <Video_immobilien5 />
              </>
            }
          />
          <Route
            path="video_teamleitung1"
            element={
              <>
                <Header />
                <Video_teamleitung1/>
              </>
            }
          />
          <Route
            path="video_teamleitung2"
            element={
              <>
                <Header />
                <Video_teamleitung2 />
              </>
            }
          />
          <Route
            path="video_teamleitung3"
            element={
              <>
                <Header />
                <Video_teamleitung3 />
              </>
            }
          />
          <Route
            path="video_teamleitung4"
            element={
              <>
                <Header />
                <Video_teamleitung4 />
              </>
            }
          />
          <Route
            path="video_teamleitung5"
            element={
              <>
                <Header />
                <Video_teamleitung5 />
              </>
            }
          />
         
          <Route
            path="video_medizin1"
            element={
              <>
                <Header />
                <Video_medizin1 />
              </>
            }
          />
          <Route
            path="video_medizin2"
            element={
              <>
                <Header />
                <Video_medizin2/>
              </>
            }
          />
          <Route
            path="video_medizin3"
            element={
              <>
                <Header />
                <Video_medizin3 />
              </>
            }
          />
          <Route
            path="video_medizin4"
            element={
              <>
                <Header />
                <Video_medizin4/>
              </>
            }
          />
          <Route
            path="video_medizin5"
            element={
              <>
                <Header />
                <Video_medizin5/>
              </>
            }
          />
          video_maschienenbau5
          <Route
            path="video_maschienenbau1"
            element={
              <>
                <Header />
                <Video_maschinenbau1/>
              </>
            }
          />
          <Route
            path="video_maschienenbau2"
            element={
              <>
                <Header />
                <Video_maschinenbau2/>
              </>
            }
          />
          <Route
            path="video_maschienenbau3"
            element={
              <>
                <Header />
                <Video_maschinenbau3/>
              </>
            }
          />
          <Route
            path="video_maschienenbau4"
            element={
              <>
                <Header />
                <Video_maschinenbau4/>
              </>
            }
          />
          <Route
            path="video_maschienenbau5"
            element={
              <>
                <Header />
                <Video_maschinenbau5/>
              </>
            }
          />
          <Route
            path="video_informatik1"
            element={
              <>
                <Header />
                <Video_informatik1/>
              </>
            }
          />
          <Route
            path="video_informatik2"
            element={
              <>
                <Header />
                <Video_informatik2/>
              </>
            }
          />
          <Route
            path="video_informatik3"
            element={
              <>
                <Header />
                <Video_informatik3/>
              </>
            }
          />
          <Route
            path="video_informatik4"
            element={
              <>
                <Header />
                <Video_informatik4/>
              </>
            }
          />
          <Route
            path="video_informatik5"
            element={
              <>
                <Header />
                <Video_informatik5/>
              </>
            }
          />
          <Route
            path="video_bwl1"
            element={
              <>
                <Header />
                <Video_bwl1/>
              </>
            }
          />
          <Route
            path="video_bwl2"
            element={
              <>
                <Header />
                <Video_bwl2/>
              </>
            }
          />
          <Route
            path="video_bwl3"
            element={
              <>
                <Header />
                <Video_bwl3/>
              </>
            }
          />
          <Route
            path="video_bwl4"
            element={
              <>
                <Header />
                <Video_bwl4/>
              </>
            }
          />
          <Route
            path="video_bwl5"
            element={
              <>
                <Header />
                <Video_bwl5/>
              </>
            }
          />
          <Route
            path="video_jura1"
            element={
              <>
                <Header />
                <Video_jura1/>
              </>
            }
          />
          <Route
            path="video_jura2"
            element={
              <>
                <Header />
                <Video_jura2/>
              </>
            }
          />
          <Route
            path="video_jura3"
            element={
              <>
                <Header />
                <Video_jura3/>
              </>
            }
          />
          <Route
            path="video_jura4"
            element={
              <>
                <Header />
                <Video_jura4/>
              </>
            }
          />
          <Route
            path="video_jura5"
            element={
              <>
                <Header />
                <Video_jura5/>
              </>
            }
          />
          <Route
            path="video_elektrotechnik1"
            element={
              <>
                <Header />
                <Video_jura5/>
              </>
            }
          />
          <Route
            path="video_elektrotechnik2"
            element={
              <>
                <Header />
                <Video_jura5/>
              </>
            }
          />
          <Route
            path="video_elektrotechnik3"
            element={
              <>
                <Header />
                <Video_jura5/>
              </>
            }
          />
          <Route
            path="video_elektrotechnik4"
            element={
              <>
                <Header />
                <Video_jura5/>
              </>
            }
          />
          <Route
            path="video_elektrotechnik5"
            element={
              <>
                <Header />
                <Video_jura5/>
              </>
            }
          />
          <Route
            path="video_psychologie1"
            element={
              <>
                <Header />
                <Video_psychologie1/>
              </>
            }
          />
          <Route
            path="video_psychologie2"
            element={
              <>
                <Header />
                <Video_psychologie2/>
              </>
            }
          />
          <Route
            path="video_psychologie3"
            element={
              <>
                <Header />
                <Video_psychologie3/>
              </>
            }
          />
          <Route
            path="video_psychologie4"
            element={
              <>
                <Header />
                <Video_psychologie4/>
              </>
            }
          />
          <Route
            path="video_psychologie5"
            element={
              <>
                <Header />
                <Video_psychologie5/>
              </>
            }
          />
          <Route
            path="video_biologie1"
            element={
              <>
                <Header />
                <Video_biologie1/>
              </>
            }
          />
          <Route
            path="video_biologie2"
            element={
              <>
                <Header />
                <Video_biologie2/>
              </>
            }
          />
          <Route
            path="video_biologie3"
            element={
              <>
                <Header />
                <Video_biologie3/>
              </>
            }
          />
          <Route
            path="video_biologie4"
            element={
              <>
                <Header />
                <Video_biologie4/>
              </>
            }
          />
          <Route
            path="video_biologie5"
            element={
              <>
                <Header />
                <Video_biologie5/>
              </>
            }
          />
          <Route
            path="video_chemie1"
            element={
              <>
                <Header />
                <Video_chemie1/>
              </>
            }
          />
          <Route
            path="video_chemie2"
            element={
              <>
                <Header />
                <Video_chemie2/>
              </>
            }
          />
          <Route
            path="video_chemie3"
            element={
              <>
                <Header />
                <Video_chemie3/>
              </>
            }
          />
          <Route
            path="video_chemie4"
            element={
              <>
                <Header />
                <Video_chemie4/>
              </>
            }
          />
          <Route
            path="video_chemie5"
            element={
              <>
                <Header />
                <Video_chemie5/>
              </>
            }
          />
          


          <Route
            path="scrum"
            element={
              <>
                <Header />
                <Scrum />
              </>
            }
          />
          <Route
            path="gaertner"
            element={
              <>
                <Header />
                <Gaertner/>
              </>
            }
          />
          <Route
            path="stricken"
            element={
              <>
                <Header />
                <Stricken/>
              </>
            }
          />
          <Route
            path="basteln"
            element={
              <>
                <Header />
                <Basteln/>
              </>
            }
          />
          <Route
            path="malen"
            element={
              <>
                <Header />
                <Malen/>
              </>
            }
          />
          <Route
            path="kommunizieren"
            element={
              <>
                <Header />
                <Kommunizieren/>
              </>
            }
          />
          <Route
            path="meditation"
            element={
              <>
                <Header />
                <Meditation/>
              </>
            }
          />
          <Route
            path="campingmanagement"
            element={
              <>
                <Header />
                <Campingmanagement/>
              </>
            }
          />
          <Route
            path="projektmanagement"
            element={
              <>
                <Header />
                <Projektmanagement/>
              </>
            }
          />
          <Route
            path="immobilien"
            element={
              <>
                <Header />
                <Immobilien/>
              </>
            }
          />
          <Route
            path="teamleitung"
            element={
              <>
                <Header />
                <Teamleitung/>
              </>
            }
          />
          <Route
            path="medizin"
            element={
              <>
                <Header />
                <Medizin/>
              </>
            }
          />
          <Route
            path="informatik"
            element={
              <>
                <Header />
                <Informatik/>
              </>
            }
          />
          <Route
            path="bwl"
            element={
              <>
                <Header />
                <BWL/>
              </>
            }
          />
          <Route
            path="maschienenbau"
            element={
              <>
                <Header />
                <Maschienenbau/>
              </>
            }
          />
          <Route
            path="elektrotechnik"
            element={
              <>
                <Header />
                <Elektrotechnik/>
              </>
            }
          />
          <Route
            path="jura"
            element={
              <>
                <Header />
                <Jura/>
              </>
            }
          />
          <Route
            path="psychologie"
            element={
              <>
                <Header />
                <Psychologie/>
              </>
            }
          />
          <Route
            path="biologie"
            element={
              <>
                <Header />
                <Biologie/>
              </>
            }
          />
          <Route
            path="chemie"
            element={
              <>
                <Header />
                <Chemie/>
              </>
            }
          />
          <Route
            path="architektur"
            element={
              <>
                <Header />
                <Architektur/>
              </>
            }
          />
          <Route
            path="sozialogie"
            element={
              <>
                <Header />
                <Sozialogie/>
              </>
            }
          />
          <Route
            path="geschichte"
            element={
              <>
               
                <Geschichte />
              </>
            }
          />
          <Route
            path="volkswirtschaftslehre"
            element={
              <>
               
                <Volkswirtschaftslehre />
              </>
            }
          />
          <Route
            path="mathematik"
            element={
              <>
               
                <Mathematik />
              </>
            }
          />
          <Route
            path="physik"
            element={
              <>
               
                <Physik />
              </>
            }
          />
         

          
          <Route path="Anmelden" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
