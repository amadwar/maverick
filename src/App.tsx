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
import Lernpfad2 from "./components/Lernpfad2";
import Signin from "./components/SignIn";

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
            path="lernpfad2"
            element={
              <>
                <Header />
                <Lernpfad2 />
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
