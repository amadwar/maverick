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
            path="scrum"
            element={
              <>
                <Header />
                <Scrum />
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
