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
import Video_elektrotechnik1 from "./components/Studienberatung/Videos_elektrotechnik/Video1_elektrotechnik";
import Video_elektrotechnik2 from "./components/Studienberatung/Videos_elektrotechnik/Video2_elektrotechnik";
import Video_elektrotechnik3 from "./components/Studienberatung/Videos_elektrotechnik/Video3_elektrotechnik";
import Video_elektrotechnik4 from "./components/Studienberatung/Videos_elektrotechnik/Video4_elektrotechnik";
import Video_elektrotechnik5 from "./components/Studienberatung/Videos_elektrotechnik/Video5_elektrotechnik";
import Suchseite_physik from "./components/Studienberatung/Suchseiten_Studium/Suchseite_physik";
import Suchseite_mathematik from "./components/Studienberatung/Suchseiten_Studium/Suchseite_mathematik";
import Suchseite_volkswirtschaftslehre from "./components/Studienberatung/Suchseiten_Studium/Suchseite_volkswirtschaftslehre";
import Suchseite_sozialogie from "./components/Studienberatung/Suchseiten_Studium/Suchseite_sozialogie";
import Suchseite_geschichte from "./components/Studienberatung/Suchseiten_Studium/Suchseite_geschichte";
import Video_geschichte5 from "./components/Studienberatung/Videos_geschichte/Video5_geschichte";
import Video_geschichte4 from "./components/Studienberatung/Videos_geschichte/Video4_geschichte";
import Video_geschichte3 from "./components/Studienberatung/Videos_geschichte/Video3_geschichte";
import Video_geschichte2 from "./components/Studienberatung/Videos_geschichte/Video2_geschichte";
import Video_geschichte1 from "./components/Studienberatung/Videos_geschichte/Video1_geschichte";
import Video_sozialogie5 from "./components/Studienberatung/Videos_siziologie/Video5_soziologie";
import Video_sozialogie4 from "./components/Studienberatung/Videos_siziologie/Video4_soziologie";
import Video_sozialogie3 from "./components/Studienberatung/Videos_siziologie/Video3_soziologie";
import Video_sozialogie2 from "./components/Studienberatung/Videos_siziologie/Video2_soziologie";
import Video_sozialogie1 from "./components/Studienberatung/Videos_siziologie/Video1_soziologie";
import Video_physik4 from "./components/Studienberatung/Videos_Physik/Video4_physik";
import Video_physik5 from "./components/Studienberatung/Videos_Physik/Video5_physik";
import Video_physik3 from "./components/Studienberatung/Videos_Physik/Video3_physik";
import Video_physik2 from "./components/Studienberatung/Videos_Physik/Video2_physik";
import Video_physik1 from "./components/Studienberatung/Videos_Physik/Video1_physik";
import Video_mathematik5 from "./components/Studienberatung/Videos_mathematik/Video5_mathematik";
import Video_mathematik4 from "./components/Studienberatung/Videos_mathematik/Video4_mathematik";
import Video_mathematik3 from "./components/Studienberatung/Videos_mathematik/Video3_mathematik";
import Video_mathematik2 from "./components/Studienberatung/Videos_mathematik/Video2_mathematik";
import Video_mathematik1 from "./components/Studienberatung/Videos_mathematik/Video1_mathematik";
import Video_volkswirtschaftslehre5 from "./components/Studienberatung/Videos_volkswirtschaftslehre/Video5_volkswirtschaftslehre";
import Video_volkswirtschaftslehre4 from "./components/Studienberatung/Videos_volkswirtschaftslehre/Video4_volkswirtschaftslehre";
import Video_volkswirtschaftslehre3 from "./components/Studienberatung/Videos_volkswirtschaftslehre/Video3_volkswirtschaftslehre";
import Video_volkswirtschaftslehre2 from "./components/Studienberatung/Videos_volkswirtschaftslehre/Video2_volkswirtschaftslehre";
import Video_volkswirtschaftslehre1 from "./components/Studienberatung/Videos_volkswirtschaftslehre/Video1_volkswirtschaftslehre";
import Philosophie from "./components/Studienberatung/Studiengang/Philosophie";
import Paedagogik from "./components/Studienberatung/Studiengang/Pädagogik";
import Sprachwissenschaft from "./components/Studienberatung/Studiengang/Sprachwissenschaft";
import Medienwissenschaft from "./components/Studienberatung/Studiengang/Medienwissenschaft";
import Politikwissenschaft from "./components/Studienberatung/Studiengang/Politikwissenschaft";
import Suchseite_philosophie from "./components/Studienberatung/Suchseiten_Studium/Suchseite_philosophie";
import Suchseite_paedagogik from "./components/Studienberatung/Suchseiten_Studium/Suchseite_paedagogik";
import Suchseite_sprachwissenschaft from "./components/Studienberatung/Suchseiten_Studium/Suchseite_Sprachwissenschaft";
import Suchseite_medienwissenschaft from "./components/Studienberatung/Suchseiten_Studium/Suchseite_medienwissenschaft";
import Suchseite_politikwissenschaft from "./components/Studienberatung/Suchseiten_Studium/Suchseite_politikwissenschaft";
import Video_politikwissenschaft5 from "./components/Studienberatung/Videos_politikwissenschaft/Video5_politikwissenschaft";
import Video_politikwissenschaft4 from "./components/Studienberatung/Videos_politikwissenschaft/Video4_politikwissenschaft";
import Video_politikwissenschaft3 from "./components/Studienberatung/Videos_politikwissenschaft/Video3_politikwissenschaft";
import Video_politikwissenschaft2 from "./components/Studienberatung/Videos_politikwissenschaft/Video2_politikwissenschaft";
import Video_politikwissenschaft1 from "./components/Studienberatung/Videos_politikwissenschaft/Video1_politikwissenschaft";
import Video_medienwissenschaft5 from "./components/Studienberatung/Videos_medienwissenschaft/Video5_medienwissenschaft";
import Video_medienwissenschaft4 from "./components/Studienberatung/Videos_medienwissenschaft/Video4_medienwissenschaft";
import Video_medienwissenschaft3 from "./components/Studienberatung/Videos_medienwissenschaft/Video3_medienwissenschaft";
import Video_medienwissenschaft2 from "./components/Studienberatung/Videos_medienwissenschaft/Video2_medienwissenschaft";
import Video_medienwissenschaft1 from "./components/Studienberatung/Videos_medienwissenschaft/Video1_medienwissenschaft";
import Video_sprachwissenschaft5 from "./components/Studienberatung/Videos_sprachwissenschaft/Video5_sprachwissenschaft";
import Video_sprachwissenschaft4 from "./components/Studienberatung/Videos_sprachwissenschaft/Video4_sprachwissenschaft";
import Video_sprachwissenschaft3 from "./components/Studienberatung/Videos_sprachwissenschaft/Video3_sprachwissenschaft";
import Video_sprachwissenschaft2 from "./components/Studienberatung/Videos_sprachwissenschaft/Video2_sprachwissenschaft";
import Video_sprachwissenschaft1 from "./components/Studienberatung/Videos_sprachwissenschaft/Video1_sprachwissenschaft";
import Video_paedagogik5 from "./components/Studienberatung/Videos_paedagogik/Video5_paedagogik";
import Video_paedagogik4 from "./components/Studienberatung/Videos_paedagogik/Video4_paedagogik";
import Video_paedagogik3 from "./components/Studienberatung/Videos_paedagogik/Video3_paedagogik";
import Video_paedagogik2 from "./components/Studienberatung/Videos_paedagogik/Video2_paedagogik";
import Video_paedagogik1 from "./components/Studienberatung/Videos_paedagogik/Video1_paedagogik";
import Video_philosophie5 from "./components/Studienberatung/Videos_philosophie/Video5_philosophie";
import Video_philosophie4 from "./components/Studienberatung/Videos_philosophie/Video4_philosophie";
import Video_philosophie3 from "./components/Studienberatung/Videos_philosophie/Video3_philosophie";
import Video_philosophie2 from "./components/Studienberatung/Videos_philosophie/Video2_philosophie";
import Video_philosophie1 from "./components/Studienberatung/Videos_philosophie/Video1_philosophie";
import Ethnologie from "./components/Studienberatung/Studiengang/Ethnologie";
import Musikwissenschaft from "./components/Studienberatung/Studiengang/Musikwissenschaft";
import Geographie from "./components/Studienberatung/Studiengang/Geographie";
import Sportwissenschaft from "./components/Studienberatung/Studiengang/Sportwissenschaft";
import Kunstgeschichte from "./components/Studienberatung/Studiengang/Kunstgeschichte";
import Suchseite_ethnologie from "./components/Studienberatung/Suchseiten_Studium/Suchseite_ethnologie";
import Suchseite_musikwissenschaft from "./components/Studienberatung/Suchseiten_Studium/Suchseite_musikwissenschaft";
import Suchseite_geografie from "./components/Studienberatung/Suchseiten_Studium/Suchseite_geografie";
import Suchseite_sportwissenschaft from "./components/Studienberatung/Suchseiten_Studium/Suchseite_sportwissenschaft";
import Suchseite_kunstgeschichte from "./components/Studienberatung/Suchseiten_Studium/Suchseite_kunstgeschichte";
import Video_kunstgeschichte4 from "./components/Studienberatung/Videos_kunstgeschichte/Video4_kunstgeschichte";
import Video_kunstgeschichte5 from "./components/Studienberatung/Videos_kunstgeschichte/Video5_kunstgeschichte";
import Video_kunstgeschichte3 from "./components/Studienberatung/Videos_kunstgeschichte/Video3_kunstgeschichte";
import Video_kunstgeschichte2 from "./components/Studienberatung/Videos_kunstgeschichte/Video2_kunstgeschichte";
import Video_kunstgeschichte1 from "./components/Studienberatung/Videos_kunstgeschichte/Video1_kunstgeschichte";
import Video_sportwissenschaft5 from "./components/Studienberatung/Videos_sportwissenschaft/Video5_sportwissenschaft";
import Video_sportwissenschaft4 from "./components/Studienberatung/Videos_sportwissenschaft/Video4_sportwissenschaft";
import Video_sportwissenschaft3 from "./components/Studienberatung/Videos_sportwissenschaft/Video3_sportwissenschaft";
import Video_sportwissenschaft2 from "./components/Studienberatung/Videos_sportwissenschaft/Video2_sportwissenschaft";
import Video_sportwissenschaft1 from "./components/Studienberatung/Videos_sportwissenschaft/Video1_sportwissenschaft";
import Video_geografie5 from "./components/Studienberatung/Videos_geografie/Video5_geografie";
import Video_geografie4 from "./components/Studienberatung/Videos_geografie/Video4_geografie";
import Video_geografie3 from "./components/Studienberatung/Videos_geografie/Video3_geografie";
import Video_geografie2 from "./components/Studienberatung/Videos_geografie/Video2_geografie";
import Video_geografie1 from "./components/Studienberatung/Videos_geografie/Video1_geografie";
import Video_musikwissenschaft5 from "./components/Studienberatung/Videos_musikwissenschaft/Video5_musikwissenschaft";
import Video_musikwissenschaft4 from "./components/Studienberatung/Videos_musikwissenschaft/Video4_musikwissenschaft";
import Video_musikwissenschaft3 from "./components/Studienberatung/Videos_musikwissenschaft/Video3_musikwissenschaft";
import Video_musikwissenschaft2 from "./components/Studienberatung/Videos_musikwissenschaft/Video2_musikwissenschaft";
import Video_musikwissenschaft1 from "./components/Studienberatung/Videos_musikwissenschaft/Video1_musikwissenschaft";
import Video_ethnologie5 from "./components/Studienberatung/Videos_ethnologie/Video5_ethnologie";
import Video_ethnologie4 from "./components/Studienberatung/Videos_ethnologie/Video4_ethnologie";
import Video_ethnologie3 from "./components/Studienberatung/Videos_ethnologie/Video3_ethnologie";
import Video_ethnologie2 from "./components/Studienberatung/Videos_ethnologie/Video2_ethnologie";
import Video_ethnologie1 from "./components/Studienberatung/Videos_ethnologie/Video1_ethnologie";
import Mathe1 from "./components/Studienfächer/Mathe1";
import WurzelFkt from "./components/Studienfächer/wurzelFkt";
import PotenzFkt from "./components/Studienfächer/potenzFkt";
import GanzrationaleFkt from "./components/Studienfächer/ganzratiomaleFkt";
import DarstellungVonFkt from "./components/Studienfächer/darstellungvonFkt";
import Eigenschaftenvonvektoren from "./components/Studienfächer/EigenschaftvonVektoren";
import Vektoroperationen from "./components/Studienfächer/Vektoroperationen";
import Matrizen from "./components/Studienfächer/Matrizen";
import Suchseite_mathe1 from "./components/Studienfächer/Suchseiten/Suchseite_mathe1";
import Video_darstellungvonfunktionen5 from "./components/Studienfächer/Videos_DarstellungvonFunktionen/Video5_darstellungvonfkt";
import Video_darstellungvonfunktionen4 from "./components/Studienfächer/Videos_DarstellungvonFunktionen/Video4_darstellungvonfkt";
import Video_darstellungvonfunktionen3 from "./components/Studienfächer/Videos_DarstellungvonFunktionen/Video3_darstellungvonfkt";
import Video_darstellungvonfunktionen2 from "./components/Studienfächer/Videos_DarstellungvonFunktionen/Video2_darstellungvonfkt";
import Video_darstellungvonfunktionen1 from "./components/Studienfächer/Videos_DarstellungvonFunktionen/Video1_darstellungvonfkt";
import Video_ganzrationaleFkt5 from "./components/Studienfächer/Videos_DarstellungvonFunktionen/Video5_ganzrationalefunktion";
import Video_ganzrationaleFkt1 from "./components/Studienfächer/Videos_GanzrationaleFunktion/Video1_ganzrationalefunktion";
import Video_ganzrationaleFkt2 from "./components/Studienfächer/Videos_GanzrationaleFunktion/Video2_ganzrationalefunktion";
import Video_ganzrationaleFkt3 from "./components/Studienfächer/Videos_GanzrationaleFunktion/Video3_ganzrationalefunktion";
import Video_ganzrationaleFkt4 from "./components/Studienfächer/Videos_GanzrationaleFunktion/Video4_ganzrationalefunktion";
import Video_potenzFkt5 from "./components/Studienfächer/Videos_PotenzFunktion/Video5_potenzfunktionen";
import Video_potenzFkt4 from "./components/Studienfächer/Videos_PotenzFunktion/Video4_potenzfunktionen";
import Video_potenzFkt3 from "./components/Studienfächer/Videos_PotenzFunktion/Video3_potenzfunktionen";
import Video_potenzFkt2 from "./components/Studienfächer/Videos_PotenzFunktion/Video2_potenzfunktionen";
import Video_potenzFkt1 from "./components/Studienfächer/Videos_PotenzFunktion/Video1_potenzfunktionen";
import Video_wurzelFkt5 from "./components/Studienfächer/Videos_WurzelFunktion/Video5_wurzelFkt";
import Video_wurzelFkt4 from "./components/Studienfächer/Videos_WurzelFunktion/Video4_wurzelFkt";
import Video_wurzelFkt3 from "./components/Studienfächer/Videos_WurzelFunktion/Video3_wurzelFkt";
import Video_wurzelFkt2 from "./components/Studienfächer/Videos_WurzelFunktion/Video2_wurzelFkt";
import Video_wurzelFkt1 from "./components/Studienfächer/Videos_WurzelFunktion/Video1_wurzelFkt";
import Video_eigenschaftenvonvektoren4 from "./components/Studienfächer/Videos_EigenschaftenvonVektoren/Video4_eigenschaftenvonvektoren";
import Video_eigenschaftenvonvektoren5 from "./components/Studienfächer/Videos_EigenschaftenvonVektoren/Video5_eigenschaftenvonvektoren";
import Video_eigenschaftenvonvektoren3 from "./components/Studienfächer/Videos_EigenschaftenvonVektoren/Video3_eigenschaftenvonvektoren";
import Video_eigenschaftenvonvektoren2 from "./components/Studienfächer/Videos_EigenschaftenvonVektoren/Video2_eigenschaftenvonvektoren";
import Video_eigenschaftenvonvektoren1 from "./components/Studienfächer/Videos_EigenschaftenvonVektoren/Video1_eigenschaftenvonvektoren";
import Video_vektoroperationen1 from "./components/Studienfächer/Videos_Vektoroperationen/Video1_vektoroperationen";
import Video_vektoroperationen2 from "./components/Studienfächer/Videos_Vektoroperationen/Video2_vektoroperationen";
import Video_vektoroperationen3 from "./components/Studienfächer/Videos_Vektoroperationen/Video3_vektoroperationen";
import Video_vektoroperationen4 from "./components/Studienfächer/Videos_Vektoroperationen/Video4_vektoroperationen";
import Video_vektoroperationen5 from "./components/Studienfächer/Videos_Vektoroperationen/Video5_vektoroperationen";
import Video_matrizen5 from "./components/Studienfächer/Videos_Matrizen/Video5_matrizen";
import Video_matrizen4 from "./components/Studienfächer/Videos_Matrizen/Video4_matrizen";
import Video_matrizen3 from "./components/Studienfächer/Videos_Matrizen/Video3_matrizen";
import Video_matrizen2 from "./components/Studienfächer/Videos_Matrizen/Video2_matrizen";
import Video_matrizen1 from "./components/Studienfächer/Videos_Matrizen/Video1_matrizen";
import BusinessEnglish1 from "./components/Studienfächer/Fächer/BusinessEnglish1";
import Teamwork from "./components/Studienfächer/Fächer/Teamwork";
import Marketing from "./components/Studienfächer/Fächer/Marketing";
import Finance from "./components/Studienfächer/Fächer/Finance";
import Entrepreneurship from "./components/Studienfächer/Fächer/Entrepreneurship";
import Businessfunctions from "./components/Studienfächer/Fächer/Businessfunctions";
import Businesstypes from "./components/Studienfächer/Fächer/Businesstypes";
import Suchseite_businessenglish from "./components/Studienfächer/Suchseiten/Suchseite_businessenglish1";
import Video_businesstypes1 from "./components/Studienfächer/Videos_businesstypes/Video1_businesstypes";
import Video_businesstypes2 from "./components/Studienfächer/Videos_businesstypes/Video2_businesstypes";
import Video_businesstypes3 from "./components/Studienfächer/Videos_businesstypes/Video3_businesstypes";
import Video_businesstypes4 from "./components/Studienfächer/Videos_businesstypes/Video4_businesstypes";
import Video_businesstypes5 from "./components/Studienfächer/Videos_businesstypes/Video5_businesstypes";
import Video_Businessfunctions5 from "./components/Studienfächer/Videos_businessfunctions/Video5_businessfunctions";
import Video_Businessfunctions4 from "./components/Studienfächer/Videos_businessfunctions/Video4_businessfunctions";
import Video_Businessfunctions3 from "./components/Studienfächer/Videos_businessfunctions/Video3_businessfunctions";
import Video_Businessfunctions2 from "./components/Studienfächer/Videos_businessfunctions/Video2_businessfunctions";
import Video_Businessfunctions1 from "./components/Studienfächer/Videos_businessfunctions/Video1_businessfunctions";
import Video_entrpreneurship5 from "./components/Studienfächer/Videos_entrepreneurship/Video5_entrepreneurship";
import Video_entrpreneurship4 from "./components/Studienfächer/Videos_entrepreneurship/Video4_entrepreneurship";
import Video_entrpreneurship3 from "./components/Studienfächer/Videos_entrepreneurship/Video3_entrepreneurship";
import Video_entrpreneurship2 from "./components/Studienfächer/Videos_entrepreneurship/Video2_entrepreneurship";
import Video_entrpreneurship1 from "./components/Studienfächer/Videos_entrepreneurship/Video1_entrepreneurship";
import Video_finance1 from "./components/Studienfächer/Videos_finance/Video1_finance";
import Video_finance2 from "./components/Studienfächer/Videos_finance/Video2_finance";
import Video_finance3 from "./components/Studienfächer/Videos_finance/Video3_finance";
import Video_finance4 from "./components/Studienfächer/Videos_finance/Video4_finance";
import Video_finance5 from "./components/Studienfächer/Videos_finance/Video5_finance";
import Video_marketing1 from "./components/Studienfächer/Videos_marketing/Video1_marketing";
import Video_marketing2 from "./components/Studienfächer/Videos_marketing/Video2_marketing";
import Video_marketing3 from "./components/Studienfächer/Videos_marketing/Video3_marketing";
import Video_marketing4 from "./components/Studienfächer/Videos_marketing/Video4_marketing";
import Video_marketing5 from "./components/Studienfächer/Videos_marketing/Video5_marketing";
import Video_teamwork1 from "./components/Studienfächer/Videos_teamwork/Video1_teamwork";
import Video_teamwork2 from "./components/Studienfächer/Videos_teamwork/Video2_teamwork";
import Video_teamwork3 from "./components/Studienfächer/Videos_teamwork/Video3_teamwork";
import Video_teamwork4 from "./components/Studienfächer/Videos_teamwork/Video4_teamwork";
import Video_teamwork5 from "./components/Studienfächer/Videos_teamwork/Video5_teamwork";
import VWL1 from "./components/Studienfächer/Fächer/VWL1";
import Grundgebietederinformatik from "./components/Studienfächer/Fächer/GrundgebietederInformtik";
import Opportunitätskosten from "./components/Studienfächer/Fächer/Opportunitätskosten";
import Versenktekosten from "./components/Studienfächer/Fächer/Versenktekosten";
import Komprativekostenvorteile from "./components/Studienfächer/Fächer/Komprative_kostenvorteile";
import Ueberschussnachfrage from "./components/Studienfächer/Fächer/Ueberschussnachfrage";
import Ueberschussangebot from "./components/Studienfächer/Fächer/Ueberschussangebot";
import Paretoeffizient from "./components/Studienfächer/Fächer/Pareto_effizient";
import Video_opporunitätskosten5 from "./components/Studienfächer/Videos_opportunitätskosten/Video5_opportunitätskosten";
import Video_opporunitätskosten4 from "./components/Studienfächer/Videos_opportunitätskosten/Video4_opportunitätskosten";
import Video_opporunitätskosten3 from "./components/Studienfächer/Videos_opportunitätskosten/Video3_opportunitätskosten";
import Video_opporunitätskosten2 from "./components/Studienfächer/Videos_opportunitätskosten/Video2_opportunitätskosten";
import Video_opporunitätskosten1 from "./components/Studienfächer/Videos_opportunitätskosten/Video1_opportunitätskosten";
import Video_versenktekosten5 from "./components/Studienfächer/Videos_versenktekosten/Video5_Versenktekosten";
import Video_versenktekosten4 from "./components/Studienfächer/Videos_versenktekosten/Video4_Versenktekosten";
import Video_versenktekosten3 from "./components/Studienfächer/Videos_versenktekosten/Video3_Versenktekosten";
import Video_versenktekosten2 from "./components/Studienfächer/Videos_versenktekosten/Video2_Versenktekosten";
import Video_versenktekosten1 from "./components/Studienfächer/Videos_versenktekosten/Video1_Versenktekosten";
import Suchseite_vwl1 from "./components/Studienfächer/Suchseiten/Suchseite_vwl1";
import Video_komprativekostenvorteile5 from "./components/Studienfächer/Videos_komparativeKostenvorteile/Video5_komprativekostenvorteile";
import Video_komprativekostenvorteile4 from "./components/Studienfächer/Videos_komparativeKostenvorteile/Video4_komprativekostenvorteile";
import Video_komprativekostenvorteile3 from "./components/Studienfächer/Videos_komparativeKostenvorteile/Video3_komprativekostenvorteile";
import Video_komprativekostenvorteile2 from "./components/Studienfächer/Videos_komparativeKostenvorteile/Video2_komprativekostenvorteile";
import Video_komprativekostenvorteile1 from "./components/Studienfächer/Videos_komparativeKostenvorteile/Video1_komprativekostenvorteile";
import Video_ueberschussnachfrage5 from "./components/Studienfächer/Videos_Überschussnachfrage/Video5_ueberschussnachfrage";
import Video_ueberschussnachfrage4 from "./components/Studienfächer/Videos_Überschussnachfrage/Video4_ueberschussnachfrage";
import Video_ueberschussnachfrage3 from "./components/Studienfächer/Videos_Überschussnachfrage/Video3_ueberschussnachfrage";
import Video_ueberschussnachfrage2 from "./components/Studienfächer/Videos_Überschussnachfrage/Video2_ueberschussnachfrage";
import Video_ueberschussnachfrage1 from "./components/Studienfächer/Videos_Überschussnachfrage/Video1_ueberschussnachfrage";
import Video_ueberschussangebot5 from "./components/Studienfächer/Videos_Überschussangebot/Video5_ueberschussangebot";
import Video_ueberschussangebot4 from "./components/Studienfächer/Videos_Überschussangebot/Video4_ueberschussangebot";
import Video_ueberschussangebot3 from "./components/Studienfächer/Videos_Überschussangebot/Video3_ueberschussangebot";
import Video_ueberschussangebot2 from "./components/Studienfächer/Videos_Überschussangebot/Video2_ueberschussangebot";
import Video_ueberschussangebot1 from "./components/Studienfächer/Videos_Überschussangebot/Video1_ueberschussangebot";
import Video_paretoeffizient5 from "./components/Studienfächer/Videos_ParetoEffizient/Video5_paretoeffizient";
import Video_paretoeffizient4 from "./components/Studienfächer/Videos_ParetoEffizient/Video4_paretoeffizient";
import Video_paretoeffizient3 from "./components/Studienfächer/Videos_ParetoEffizient/Video3_paretoeffizient";
import Video_paretoeffizient2 from "./components/Studienfächer/Videos_ParetoEffizient/Video2_paretoeffizient";
import Video_paretoeffizient1 from "./components/Studienfächer/Videos_ParetoEffizient/Video1_paretoeffizient";




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
            path="suchseite_geschichte"
            element={
              <>
                <Header />
                <Suchseite_geschichte/>
              </>
            }
          />
          <Route
            path="suchseite_sozialogie"
            element={
              <>
                <Header />
                <Suchseite_sozialogie/>
              </>
            }
          />
          <Route
            path="suchseite_volkswirtschaftslehre"
            element={
              <>
                <Header />
                <Suchseite_volkswirtschaftslehre/>
              </>
            }
          />
          <Route
            path="suchseite_mathematik"
            element={
              <>
                <Header />
                <Suchseite_mathematik/>
              </>
            }
          />
          <Route
            path="suchseite_physik"
            element={
              <>
                <Header />
                <Suchseite_physik/>
              </>
            }
          />
          <Route
            path="suchseite_politikwissenschaft"
            element={
              <>
                <Header />
                <Suchseite_politikwissenschaft/>
              </>
            }
          />
          <Route
            path="suchseite_medienwissenschaft"
            element={
              <>
                <Header />
                <Suchseite_medienwissenschaft/>
              </>
            }
          />
          <Route
            path="suchseite_sprachwissenschaft"
            element={
              <>
                <Header />
                <Suchseite_sprachwissenschaft/>
              </>
            }
          />
          <Route
            path="suchseite_paedagogik"
            element={
              <>
                <Header />
                <Suchseite_paedagogik/>
              </>
            }
          />
          <Route
            path="suchseite_philosophie"
            element={
              <>
                <Header />
                <Suchseite_philosophie/>
              </>
            }
          />
          <Route
            path="suchseite_kunstgeschichte"
            element={
              <>
                <Header />
                <Suchseite_kunstgeschichte/>
              </>
            }
          />
          <Route
            path="suchseite_sportwissenschaft"
            element={
              <>
                <Header />
                <Suchseite_sportwissenschaft/>
              </>
            }
          />
          <Route
            path="suchseite_geografie"
            element={
              <>
                <Header />
                <Suchseite_geografie/>
              </>
            }
          />
          <Route
            path="suchseite_musikwissenschaft"
            element={
              <>
                <Header />
                <Suchseite_musikwissenschaft/>
              </>
            }
          />
          <Route
            path="suchseite_ethnologie"
            element={
              <>
                <Header />
                <Suchseite_ethnologie/>
              </>
            }
          />
          <Route
            path="suchseite_mathe1"
            element={
              <>
                <Header />
                <Suchseite_mathe1/>
              </>
            }
          />
          <Route
            path="Suchseite_businessenglish"
            element={
              <>
                <Header />
                <Suchseite_businessenglish/>
              </>
            }
          />
          <Route
            path="Suchseite_vwl1"
            element={
              <>
                <Header />
                <Suchseite_vwl1/>
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
                <Video_elektrotechnik1/>
              </>
            }
          />
          <Route
            path="video_elektrotechnik2"
            element={
              <>
                <Header />
                <Video_elektrotechnik2/>
              </>
            }
          />
          <Route
            path="video_elektrotechnik3"
            element={
              <>
                <Header />
                <Video_elektrotechnik3/>
              </>
            }
          />
          <Route
            path="video_elektrotechnik4"
            element={
              <>
                <Header />
                <Video_elektrotechnik4/>
              </>
            }
          />
          <Route
            path="video_elektrotechnik5"
            element={
              <>
                <Header />
                <Video_elektrotechnik5/>
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
            path="video_geschichte1"
            element={
              <>
                <Header />
                <Video_geschichte1/>
              </>
            }
          />
          <Route
            path="video_geschichte2"
            element={
              <>
                <Header />
                <Video_geschichte2/>
              </>
            }
          />
          <Route
            path="video_geschichte3"
            element={
              <>
                <Header />
                <Video_geschichte3/>
              </>
            }
          />
          <Route
            path="video_geschichte4"
            element={
              <>
                <Header />
                <Video_geschichte4/>
              </>
            }
          />
          <Route
            path="video_geschichte5"
            element={
              <>
                <Header />
                <Video_geschichte5/>
              </>
            }
          />
          <Route
            path="video_sozialogie1"
            element={
              <>
                <Header />
                <Video_sozialogie1/>
              </>
            }
          />
          <Route
            path="video_sozialogie2"
            element={
              <>
                <Header />
                <Video_sozialogie2/>
              </>
            }
          />
          <Route
            path="video_sozialogie3"
            element={
              <>
                <Header />
                <Video_sozialogie3/>
              </>
            }
          />
          <Route
            path="video_sozialogie4"
            element={
              <>
                <Header />
                <Video_sozialogie4/>
              </>
            }
          />
          <Route
            path="video_sozialogie5"
            element={
              <>
                <Header />
                <Video_sozialogie5/>
              </>
            }
          />
          <Route
            path="video_volkswirtschaftslehre1"
            element={
              <>
                <Header />
                <Video_volkswirtschaftslehre1/>
              </>
            }
          />
          <Route
            path="video_volkswirtschaftslehre2"
            element={
              <>
                <Header />
                <Video_volkswirtschaftslehre2/>
              </>
            }
          />
          <Route
            path="video_volkswirtschaftslehre3"
            element={
              <>
                <Header />
                <Video_volkswirtschaftslehre3/>
              </>
            }
          />
          <Route
            path="video_volkswirtschaftslehre4"
            element={
              <>
                <Header />
                <Video_volkswirtschaftslehre4/>
              </>
            }
          />
          <Route
            path="video_volkswirtschaftslehre5"
            element={
              <>
                <Header />
                <Video_volkswirtschaftslehre5/>
              </>
            }
          />
          <Route
            path="video_mathematik1"
            element={
              <>
                <Header />
                <Video_mathematik1/>
              </>
            }
          />
          <Route
            path="video_mathematik2"
            element={
              <>
                <Header />
                <Video_mathematik2/>
              </>
            }
          />
          <Route
            path="video_mathematik3"
            element={
              <>
                <Header />
                <Video_mathematik3/>
              </>
            }
          />
          <Route
            path="video_mathematik4"
            element={
              <>
                <Header />
                <Video_mathematik4/>
              </>
            }
          />
          <Route
            path="video_mathematik5"
            element={
              <>
                <Header />
                <Video_mathematik5/>
              </>
            }
          />
          <Route
            path="video_physik1"
            element={
              <>
                <Header />
                <Video_physik1/>
              </>
            }
          />
          <Route
            path="video_physik2"
            element={
              <>
                <Header />
                <Video_physik2/>
              </>
            }
          />
          <Route
            path="video_physik3"
            element={
              <>
                <Header />
                <Video_physik3/>
              </>
            }
          />
          <Route
            path="video_physik4"
            element={
              <>
                <Header />
                <Video_physik4/>
              </>
            }
          />
          <Route
            path="video_physik5"
            element={
              <>
                <Header />
                <Video_physik5/>
              </>
            }
          />
          <Route
            path="video_politikwissenschaft1"
            element={
              <>
                <Header />
                <Video_politikwissenschaft1/>
              </>
            }
          />
          <Route
            path="video_politikwissenschaft2"
            element={
              <>
                <Header />
                <Video_politikwissenschaft2/>
              </>
            }
          />
          <Route
            path="video_politikwissenschaft3"
            element={
              <>
                <Header />
                <Video_politikwissenschaft3/>
              </>
            }
          />
          <Route
            path="video_politikwissenschaft4"
            element={
              <>
                <Header />
                <Video_politikwissenschaft4/>
              </>
            }
          />
          <Route
            path="video_politikwissenschaft5"
            element={
              <>
                <Header />
                <Video_politikwissenschaft5/>
              </>
            }
          />
          <Route
            path="video_medienwissenschaft1"
            element={
              <>
                <Header />
                <Video_medienwissenschaft1/>
              </>
            }
          />
          <Route
            path="video_medienwissenschaft2"
            element={
              <>
                <Header />
                <Video_medienwissenschaft2/>
              </>
            }
          />
          <Route
            path="video_medienwissenschaft3"
            element={
              <>
                <Header />
                <Video_medienwissenschaft3/>
              </>
            }
          />
          <Route
            path="video_medienwissenschaft4"
            element={
              <>
                <Header />
                <Video_medienwissenschaft4/>
              </>
            }
          />
          <Route
            path="video_medienwissenschaft5"
            element={
              <>
                <Header />
                <Video_medienwissenschaft5/>
              </>
            }
          />
          <Route
            path="video_sprachwissenschaft1"
            element={
              <>
                <Header />
                <Video_sprachwissenschaft1/>
              </>
            }
          />
          <Route
            path="video_sprachwissenschaft2"
            element={
              <>
                <Header />
                <Video_sprachwissenschaft2/>
              </>
            }
          />
          <Route
            path="video_sprachwissenschaft3"
            element={
              <>
                <Header />
                <Video_sprachwissenschaft3/>
              </>
            }
          />
          <Route
            path="video_sprachwissenschaft4"
            element={
              <>
                <Header />
                <Video_sprachwissenschaft4/>
              </>
            }
          />
          <Route
            path="video_sprachwissenschaft5"
            element={
              <>
                <Header />
                <Video_sprachwissenschaft5/>
              </>
            }
          />
          <Route
            path="video_paedagogik1"
            element={
              <>
                <Header />
                <Video_paedagogik1/>
              </>
            }
          />
          <Route
            path="video_paedagogik2"
            element={
              <>
                <Header />
                <Video_paedagogik2/>
              </>
            }
          />
          <Route
            path="video_paedagogik3"
            element={
              <>
                <Header />
                <Video_paedagogik3/>
              </>
            }
          />
          <Route
            path="video_paedagogik4"
            element={
              <>
                <Header />
                <Video_paedagogik4/>
              </>
            }
          />
          <Route
            path="video_paedagogik5"
            element={
              <>
                <Header />
                <Video_paedagogik5/>
              </>
            }
          />
          <Route
            path="video_philosophie1"
            element={
              <>
                <Header />
                <Video_philosophie1/>
              </>
            }
          />
          <Route
            path="video_philosophie2"
            element={
              <>
                <Header />
                <Video_philosophie2/>
              </>
            }
          />
          <Route
            path="video_philosophie3"
            element={
              <>
                <Header />
                <Video_philosophie3/>
              </>
            }
          />
          <Route
            path="video_philosophie4"
            element={
              <>
                <Header />
                <Video_philosophie4/>
              </>
            }
          />
          <Route
            path="video_philosophie5"
            element={
              <>
                <Header />
                <Video_philosophie5/>
              </>
            }
          />
          <Route
            path="video_kunstgeschichte1"
            element={
              <>
                <Header />
                <Video_kunstgeschichte1/>
              </>
            }
          />
          <Route
            path="video_kunstgeschichte2"
            element={
              <>
                <Header />
                <Video_kunstgeschichte2/>
              </>
            }
          />
          <Route
            path="video_kunstgeschichte3"
            element={
              <>
                <Header />
                <Video_kunstgeschichte3/>
              </>
            }
          />
          <Route
            path="video_kunstgeschichte4"
            element={
              <>
                <Header />
                <Video_kunstgeschichte4/>
              </>
            }
          />
          <Route
            path="video_kunstgeschichte5"
            element={
              <>
                <Header />
                <Video_kunstgeschichte5/>
              </>
            }
          />
          <Route
            path="video_sportwissenschaft1"
            element={
              <>
                <Header />
                <Video_sportwissenschaft1/>
              </>
            }
          />
          <Route
            path="video_sportwissenschaft2"
            element={
              <>
                <Header />
                <Video_sportwissenschaft2/>
              </>
            }
          />
          <Route
            path="video_sportwissenschaft3"
            element={
              <>
                <Header />
                <Video_sportwissenschaft3/>
              </>
            }
          />
          <Route
            path="video_sportwissenschaft4"
            element={
              <>
                <Header />
                <Video_sportwissenschaft4/>
              </>
            }
          />
          <Route
            path="video_sportwissenschaft5"
            element={
              <>
                <Header />
                <Video_sportwissenschaft5/>
              </>
            }
          />
          <Route
            path="video_geografie1"
            element={
              <>
                <Header />
                <Video_geografie1/>
              </>
            }
          />
          <Route
            path="video_geografie2"
            element={
              <>
                <Header />
                <Video_geografie2/>
              </>
            }
          />
          <Route
            path="video_geografie3"
            element={
              <>
                <Header />
                <Video_geografie3/>
              </>
            }
          />
          <Route
            path="video_geografie4"
            element={
              <>
                <Header />
                <Video_geografie4/>
              </>
            }
          />
          <Route
            path="video_geografie5"
            element={
              <>
                <Header />
                <Video_geografie5/>
              </>
            }
          />
          <Route
            path="video_musikwissenschaft1"
            element={
              <>
                <Header />
                <Video_musikwissenschaft1/>
              </>
            }
          />
          <Route
            path="video_musikwissenschaft2"
            element={
              <>
                <Header />
                <Video_musikwissenschaft2/>
              </>
            }
          />
          <Route
            path="video_musikwissenschaft3"
            element={
              <>
                <Header />
                <Video_musikwissenschaft3/>
              </>
            }
          />
          <Route
            path="video_musikwissenschaft4"
            element={
              <>
                <Header />
                <Video_musikwissenschaft4/>
              </>
            }
          />
          <Route
            path="video_musikwissenschaft5"
            element={
              <>
                <Header />
                <Video_musikwissenschaft5/>
              </>
            }
          />
          
          <Route
            path="video_ethnologie1"
            element={
              <>
                <Header />
                <Video_ethnologie1/>
              </>
            }
          />
          <Route
            path="video_ethnologie2"
            element={
              <>
                <Header />
                <Video_ethnologie2/>
              </>
            }
          />
          <Route
            path="video_ethnologie3"
            element={
              <>
                <Header />
                <Video_ethnologie3/>
              </>
            }
          />
          <Route
            path="video_ethnologie4"
            element={
              <>
                <Header />
                <Video_ethnologie4/>
              </>
            }
          />
          <Route
            path="video_ethnologie5"
            element={
              <>
                <Header />
                <Video_ethnologie5/>
              </>
            }
          />
          <Route
            path="video_darstellungvonfunktionen1"
            element={
              <>
                <Header />
                <Video_darstellungvonfunktionen1/>
              </>
            }
          />
          <Route
            path="video_darstellungvonfunktionen2"
            element={
              <>
                <Header />
                <Video_darstellungvonfunktionen2/>
              </>
            }
          />
          <Route
            path="video_darstellungvonfunktionen3"
            element={
              <>
                <Header />
                <Video_darstellungvonfunktionen3/>
              </>
            }
          />
          <Route
            path="video_darstellungvonfunktionen4"
            element={
              <>
                <Header />
                <Video_darstellungvonfunktionen4/>
              </>
            }
          />
          <Route
            path="video_darstellungvonfunktionen5"
            element={
              <>
                <Header />
                <Video_darstellungvonfunktionen5/>
              </>
            }
          />
          <Route
            path="video_ganzrationaleFkt1"
            element={
              <>
                <Header />
                <Video_ganzrationaleFkt1/>
              </>
            }
          />
          <Route
            path="video_ganzrationaleFkt2"
            element={
              <>
                <Header />
                <Video_ganzrationaleFkt2/>
              </>
            }
          />
          <Route
            path="video_ganzrationaleFkt3"
            element={
              <>
                <Header />
                <Video_ganzrationaleFkt3/>
              </>
            }
          />
          <Route
            path="video_ganzrationaleFkt4"
            element={
              <>
                <Header />
                <Video_ganzrationaleFkt4/>
              </>
            }
          />
          <Route
            path="video_ganzrationaleFkt5"
            element={
              <>
                <Header />
                <Video_ganzrationaleFkt5/>
              </>
            }
          />
          <Route
            path="video_potenzFkt1"
            element={
              <>
                <Header />
                <Video_potenzFkt1/>
              </>
            }
          />
          <Route
            path="video_potenzFkt2"
            element={
              <>
                <Header />
                <Video_potenzFkt2/>
              </>
            }
          />
          <Route
            path="video_potenzFkt3"
            element={
              <>
                <Header />
                <Video_potenzFkt3/>
              </>
            }
          />
          <Route
            path="video_potenzFkt4"
            element={
              <>
                <Header />
                <Video_potenzFkt4/>
              </>
            }
          />
          <Route
            path="video_potenzFkt5"
            element={
              <>
                <Header />
                <Video_potenzFkt5/>
              </>
            }
          />
          <Route
            path="video_wurzelFkt1"
            element={
              <>
                <Header />
                <Video_wurzelFkt1/>
              </>
            }
          />
          <Route
            path="video_wurzelFkt2"
            element={
              <>
                <Header />
                <Video_wurzelFkt2/>
              </>
            }
          />
          <Route
            path="video_wurzelFkt3"
            element={
              <>
                <Header />
                <Video_wurzelFkt3/>
              </>
            }
          />
          <Route
            path="video_wurzelFkt4"
            element={
              <>
                <Header />
                <Video_wurzelFkt4/>
              </>
            }
          />
          <Route
            path="video_wurzelFkt5"
            element={
              <>
                <Header />
                <Video_wurzelFkt5/>
              </>
            }
          />
          <Route
            path="video_eigenschaftenvonvektoren1"
            element={
              <>
                <Header />
                <Video_eigenschaftenvonvektoren1/>
              </>
            }
          />
          <Route
            path="video_eigenschaftenvonvektoren2"
            element={
              <>
                <Header />
                <Video_eigenschaftenvonvektoren2/>
              </>
            }
          />
          <Route
            path="video_eigenschaftenvonvektoren3"
            element={
              <>
                <Header />
                <Video_eigenschaftenvonvektoren3/>
              </>
            }
          />
          <Route
            path="video_eigenschaftenvonvektoren4"
            element={
              <>
                <Header />
                <Video_eigenschaftenvonvektoren4/>
              </>
            }
          />
          <Route
            path="video_eigenschaftenvonvektoren5"
            element={
              <>
                <Header />
                <Video_eigenschaftenvonvektoren5/>
              </>
            }
          />
          <Route
            path="video_vektoroperationen1"
            element={
              <>
                <Header />
                <Video_vektoroperationen1/>
              </>
            }
          />
          <Route
            path="video_vektoroperationen2"
            element={
              <>
                <Header />
                <Video_vektoroperationen2/>
              </>
            }
          />
          <Route
            path="video_vektoroperationen3"
            element={
              <>
                <Header />
                <Video_vektoroperationen3/>
              </>
            }
          />
          <Route
            path="video_vektoroperationen4"
            element={
              <>
                <Header />
                <Video_vektoroperationen4/>
              </>
            }
          />
          <Route
            path="video_vektoroperationen5"
            element={
              <>
                <Header />
                <Video_vektoroperationen5/>
              </>
            }
          />
          <Route
            path="video_matrizen1"
            element={
              <>
                <Header />
                <Video_matrizen1/>
              </>
            }
          />
          <Route
            path="video_matrizen2"
            element={
              <>
                <Header />
                <Video_matrizen2/>
              </>
            }
          />
          <Route
            path="video_matrizen3"
            element={
              <>
                <Header />
                <Video_matrizen3/>
              </>
            }
          />
          <Route
            path="video_matrizen4"
            element={
              <>
                <Header />
                <Video_matrizen4/>
              </>
            }
          />
          <Route
            path="video_matrizen5"
            element={
              <>
                <Header />
                <Video_matrizen5/>
              </>
            }
          />
          <Route
            path="video_businesstypes1"
            element={
              <>
                <Header />
                <Video_businesstypes1/>
              </>
            }
          />
          <Route
            path="video_businesstypes2"
            element={
              <>
                <Header />
                <Video_businesstypes2/>
              </>
            }
          />
          <Route
            path="video_businesstypes3"
            element={
              <>
                <Header />
                <Video_businesstypes3/>
              </>
            }
          />
          <Route
            path="video_businesstypes4"
            element={
              <>
                <Header />
                <Video_businesstypes4/>
              </>
            }
          />
          <Route
            path="video_businesstypes5"
            element={
              <>
                <Header />
                <Video_businesstypes5/>
              </>
            }
          />
          <Route
            path="video_Businessfunctions1"
            element={
              <>
                <Header />
                <Video_Businessfunctions1/>
              </>
            }
          />
          <Route
            path="video_Businessfunctions2"
            element={
              <>
                <Header />
                <Video_Businessfunctions2/>
              </>
            }
          />
          <Route
            path="video_Businessfunctions3"
            element={
              <>
                <Header />
                <Video_Businessfunctions3/>
              </>
            }
          />
          <Route
            path="video_Businessfunctions4"
            element={
              <>
                <Header />
                <Video_Businessfunctions4/>
              </>
            }
          />
          <Route
            path="video_Businessfunctions5"
            element={
              <>
                <Header />
                <Video_Businessfunctions5/>
              </>
            }
          />
          <Route
            path="video_entrpreneurship1"
            element={
              <>
                <Header />
                <Video_entrpreneurship1/>
              </>
            }
          />
          <Route
            path="video_entrpreneurship2"
            element={
              <>
                <Header />
                <Video_entrpreneurship2/>
              </>
            }
          />
          <Route
            path="video_entrpreneurship3"
            element={
              <>
                <Header />
                <Video_entrpreneurship3/>
              </>
            }
          />
          <Route
            path="video_entrpreneurship4"
            element={
              <>
                <Header />
                <Video_entrpreneurship4/>
              </>
            }
          />
          <Route
            path="video_entrpreneurship5"
            element={
              <>
                <Header />
                <Video_entrpreneurship5/>
              </>
            }
          />
          <Route
            path="video_finance1"
            element={
              <>
                <Header />
                <Video_finance1/>
              </>
            }
          />
          <Route
            path="video_finance2"
            element={
              <>
                <Header />
                <Video_finance2/>
              </>
            }
          />
          <Route
            path="video_finance3"
            element={
              <>
                <Header />
                <Video_finance3/>
              </>
            }
          />
          <Route
            path="video_finance4"
            element={
              <>
                <Header />
                <Video_finance4/>
              </>
            }
          />
          <Route
            path="video_finance5"
            element={
              <>
                <Header />
                <Video_finance5/>
              </>
            }
          />
          <Route
            path="video_marketing1"
            element={
              <>
                <Header />
                <Video_marketing1/>
              </>
            }
          />
          <Route
            path="video_marketing2"
            element={
              <>
                <Header />
                <Video_marketing2/>
              </>
            }
          />
          <Route
            path="video_marketing3"
            element={
              <>
                <Header />
                <Video_marketing3/>
              </>
            }
          />
          <Route
            path="video_marketing4"
            element={
              <>
                <Header />
                <Video_marketing4/>
              </>
            }
          />
          <Route
            path="video_marketing5"
            element={
              <>
                <Header />
                <Video_marketing5/>
              </>
            }
          />
          <Route
            path="video_teamwork1"
            element={
              <>
                <Header />
                <Video_teamwork1/>
              </>
            }
          />
          <Route
            path="video_teamwork2"
            element={
              <>
                <Header />
                <Video_teamwork2/>
              </>
            }
          />
          <Route
            path="video_teamwork3"
            element={
              <>
                <Header />
                <Video_teamwork3/>
              </>
            }
          />
          <Route
            path="video_teamwork4"
            element={
              <>
                <Header />
                <Video_teamwork4/>
              </>
            }
          />
          <Route
            path="video_teamwork5"
            element={
              <>
                <Header />
                <Video_teamwork5/>
              </>
            }
          />
          <Route
            path="video_opporunitätskosten1"
            element={
              <>
                <Header />
                <Video_opporunitätskosten1/>
              </>
            }
          />
          <Route
            path="video_opporunitätskosten2"
            element={
              <>
                <Header />
                <Video_opporunitätskosten2/>
              </>
            }
          />
          <Route
            path="video_opporunitätskosten3"
            element={
              <>
                <Header />
                <Video_opporunitätskosten3/>
              </>
            }
          />
          <Route
            path="video_opporunitätskosten4"
            element={
              <>
                <Header />
                <Video_opporunitätskosten4/>
              </>
            }
          />
          <Route
            path="video_opporunitätskosten5"
            element={
              <>
                <Header />
                <Video_opporunitätskosten5/>
              </>
            }
          />
          <Route
            path="video_versenktekosten1"
            element={
              <>
                <Header />
                <Video_versenktekosten1/>
              </>
            }
          />
          <Route
            path="video_versenktekosten2"
            element={
              <>
                <Header />
                <Video_versenktekosten2/>
              </>
            }
          />
          <Route
            path="video_versenktekosten3"
            element={
              <>
                <Header />
                <Video_versenktekosten3/>
              </>
            }
          />
          <Route
            path="video_versenktekosten4"
            element={
              <>
                <Header />
                <Video_versenktekosten4/>
              </>
            }
          />
          <Route
            path="video_versenktekosten5"
            element={
              <>
                <Header />
                <Video_versenktekosten5/>
              </>
            }
          />
          <Route
            path="video_versenktekosten5"
            element={
              <>
                <Header />
                <Video_versenktekosten5/>
              </>
            }
          />
          <Route
            path="video_versenktekosten5"
            element={
              <>
                <Header />
                <Video_versenktekosten5/>
              </>
            }
          />
          <Route
            path="video_versenktekosten5"
            element={
              <>
                <Header />
                <Video_versenktekosten5/>
              </>
            }
          />
          <Route
            path="video_versenktekosten5"
            element={
              <>
                <Header />
                <Video_versenktekosten5/>
              </>
            }
          />
          <Route
            path="video_versenktekosten5"
            element={
              <>
                <Header />
                <Video_versenktekosten5/>
              </>
            }
          />
          <Route
            path="video_komprativekostenvorteile1"
            element={
              <>
                <Header />
                <Video_komprativekostenvorteile1/>
              </>
            }
          />
          <Route
            path="video_komprativekostenvorteile2"
            element={
              <>
                <Header />
                <Video_komprativekostenvorteile2/>
              </>
            }
          />
          <Route
            path="video_komprativekostenvorteile3"
            element={
              <>
                <Header />
                <Video_komprativekostenvorteile3/>
              </>
            }
          />
          <Route
            path="video_komprativekostenvorteile4"
            element={
              <>
                <Header />
                <Video_komprativekostenvorteile4/>
              </>
            }
          />
          <Route
            path="video_komprativekostenvorteile5"
            element={
              <>
                <Header />
                <Video_komprativekostenvorteile5/>
              </>
            }
          />
          <Route
            path="video_ueberschussnachfrage1"
            element={
              <>
                <Header />
                <Video_ueberschussnachfrage1/>
              </>
            }
          />
          <Route
            path="video_ueberschussnachfrage2"
            element={
              <>
                <Header />
                <Video_ueberschussnachfrage2/>
              </>
            }
          />
          <Route
            path="video_ueberschussnachfrage3"
            element={
              <>
                <Header />
                <Video_ueberschussnachfrage3/>
              </>
            }
          />
          <Route
            path="video_ueberschussnachfrage4"
            element={
              <>
                <Header />
                <Video_ueberschussnachfrage4/>
              </>
            }
          />
          <Route
            path="video_ueberschussnachfrage5"
            element={
              <>
                <Header />
                <Video_ueberschussnachfrage5/>
              </>
            }
          />
          <Route
            path="video_ueberschussangebot1"
            element={
              <>
                <Header />
                <Video_ueberschussangebot1/>
              </>
            }
          />
          <Route
            path="video_ueberschussangebot2"
            element={
              <>
                <Header />
                <Video_ueberschussangebot2/>
              </>
            }
          />
          <Route
            path="video_ueberschussangebot3"
            element={
              <>
                <Header />
                <Video_ueberschussangebot3/>
              </>
            }
          />
          <Route
            path="video_ueberschussangebot4"
            element={
              <>
                <Header />
                <Video_ueberschussangebot4/>
              </>
            }
          />
          <Route
            path="video_ueberschussangebot5"
            element={
              <>
                <Header />
                <Video_ueberschussangebot5/>
              </>
            }
          />
          <Route
            path="video_paretoeffizient1"
            element={
              <>
                <Header />
                <Video_paretoeffizient1/>
              </>
            }
          />
          <Route
            path="video_paretoeffizient2"
            element={
              <>
                <Header />
                <Video_paretoeffizient2/>
              </>
            }
          />
          <Route
            path="video_paretoeffizient3"
            element={
              <>
                <Header />
                <Video_paretoeffizient3/>
              </>
            }
          />
          <Route
            path="video_paretoeffizient4"
            element={
              <>
                <Header />
                <Video_paretoeffizient4/>
              </>
            }
          />
          <Route
            path="video_paretoeffizient5"
            element={
              <>
                <Header />
                <Video_paretoeffizient5/>
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
               <Header />
                <Geschichte />
              </>
            }
          />
          <Route
            path="volkswirtschaftslehre"
            element={
              <>
               <Header />
                <Volkswirtschaftslehre />
              </>
            }
          />
          <Route
            path="mathematik"
            element={
              <>
               <Header />
                <Mathematik />
              </>
            }
          />
          <Route
            path="physik"
            element={
              <>
               <Header />
                <Physik />
              </>
            }
          />
          <Route
            path="politikwissenschaft"
            element={
              <>
               <Header />
                <Politikwissenschaft />
              </>
            }
          />
          <Route
            path="medienwissenschaft"
            element={
              <>
               <Header />
                <Medienwissenschaft />
              </>
            }
          />
          <Route
            path="sprachwissenschaft"
            element={
              <>
               <Header />
                <Sprachwissenschaft />
              </>
            }
          />
          <Route
            path="paedagogik"
            element={
              <>
               <Header />
                <Paedagogik />
              </>
            }
          />
          <Route
            path="philosophie"
            element={
              <>
               <Header />
                <Philosophie />
              </>
            }
          />
          <Route
            path="kunstgeschichte"
            element={
              <>
               <Header />
                <Kunstgeschichte />
              </>
            }
          />
          <Route
            path="sportwissenschaft"
            element={
              <>
               <Header />
                <Sportwissenschaft />
              </>
            }
          />
          <Route
            path="geografie"
            element={
              <>
               <Header />
                <Geographie />
              </>
            }
          />
          <Route
            path="musikwissenschaft"
            element={
              <>
               <Header />
                <Musikwissenschaft />
              </>
            }
          />
          <Route
            path="ethnologie"
            element={
              <>
               <Header />
                <Ethnologie/>
              </>
            }
          />
           <Route
            path="mathe1"
            element={
              <>
               <Header />
                <Mathe1/>
              </>
            }
          />
          <Route
            path="darstellung_und_eigenschaften_von_funktionen"
            element={
              <>
               <Header />
                <DarstellungVonFkt/>
              </>
            }
          />
          <Route
            path="ganzrationalefunktionen"
            element={
              <>
               <Header />
                <GanzrationaleFkt/>
              </>
            }
          />
          <Route
            path="potenzenfuntionen"
            element={
              <>
               <Header />
                <PotenzFkt/>
              </>
            }
          />
          <Route
            path="wurzelfunktionen"
            element={
              <>
               <Header />
                <WurzelFkt/>
              </>
            }
          />
          <Route
            path="eigenschaftvonvektoren"
            element={
              <>
               <Header />
                <Eigenschaftenvonvektoren/>
              </>
            }
          />
          <Route
            path="vektoroperationen"
            element={
              <>
               <Header />
                <Vektoroperationen/>
              </>
            }
          />
          <Route
            path="matrizen"
            element={
              <>
               <Header />
                <Matrizen/>
              </>
            }
          />
          <Route
            path="businessenglish1"
            element={
              <>
               <Header />
                <BusinessEnglish1/>
              </>
            }
          />
          <Route
            path="businesstypes"
            element={
              <>
               <Header />
                <Businesstypes/>
              </>
            }
          />
          <Route
            path="Businessfunctions"
            element={
              <>
               <Header />
                <Businessfunctions/>
              </>
            }
          />
          <Route
            path="entrpreneurship"
            element={
              <>
               <Header />
                <Entrepreneurship/>
              </>
            }
          />
          <Route
            path="finance"
            element={
              <>
               <Header />
                <Finance/>
              </>
            }
          />
          <Route
            path="marketing"
            element={
              <>
               <Header />
                <Marketing/>
              </>
            }
          />
          <Route
            path="teamwork"
            element={
              <>
               <Header />
                <Teamwork/>
              </>
            }
          />
          <Route
            path="vwl1"
            element={
              <>
               <Header />
                <VWL1/>
              </>
            }
          />
           <Route
            path="opportunitätskosten"
            element={
              <>
               <Header />
                <Opportunitätskosten />
              </>
            }
          />
          <Route
            path="versenktekosten"
            element={
              <>
               <Header />
                <Versenktekosten />
              </>
            }
          />
          <Route
            path="komprativekostenvorteile"
            element={
              <>
               <Header />
                <Komprativekostenvorteile />
              </>
            }
          />
          <Route
            path="ueberschussnachfrage"
            element={
              <>
               <Header />
                <Ueberschussnachfrage />
              </>
            }
          />
          <Route
            path="ueberschussangebot"
            element={
              <>
               <Header />
                <Ueberschussangebot />
              </>
            }
          />
          <Route
            path="paretoeffizient"
            element={
              <>
               <Header />
                <Paretoeffizient />
              </>
            }
          />
          
          <Route
            path="grundgebietederinformatik"
            element={
              <>
               <Header />
                <Grundgebietederinformatik/>
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
