// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importieren Sie die Link-Komponente
const Header: React.FC = () => {
    
 const subtract = "./subtract.svg";
 const  iconLogo = "./iconLogo.svg";
  return (
    <header>
      
      <div className="rectangle-11">
        <div className="num-9560-2">
          <img className="icon-logo" src={iconLogo} alt="iconLogo" />
          <span>E365 Maverick</span>
          <Link className="startseite-button" to="/"> {/* Ändern Sie den Button in einen Link */}
            <div className="rectangle-8">Startseite</div>
          </Link>
          <Link className="profil-button" to="/profile"> {/* Ändern Sie den Button in einen Link */}
            <div className="rectangle-7">Profil</div>
          </Link>
          <Link className="einstellung-button" to="/einstellung">
          <img className="subtract" src={subtract} alt="subtract" />
              <span className="rectangle-7">Einstellungen</span>

          </Link>
          
          <Link className="logout-button" to={"/anmelden"}>
            <div className="rectangle-2">
              <span className="logout">Logout</span>
            </div>
          </Link>
        </div>
      </div>
      <input
        className="suchleiste"
        placeholder="Was möchtest du lernen?"
        type="text"
      />
    </header>
  );
};

export default Header;
