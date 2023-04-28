import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom'; 
import "./Header.css";

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);
  const navigate = useNavigate(); 

  const logout = "./logout.svg";
  const profile = "./profile.svg";
  const gear = "./gear.png";
  const home = "./home.svg";
 
  const iconLogo = "./iconLogo.svg";

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim().toLowerCase() === 'softwareentwicklung') {
      setShowNoResultsMessage(false);
      navigate('/Suchseite');
    } 
    if(inputValue.trim().toLowerCase() === 'scrum'){
      setShowNoResultsMessage(false);
      navigate('/lernpfad2');
    }
    
    else {
      setShowNoResultsMessage(true);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const newTimeoutId = setTimeout(() => {
        setShowNoResultsMessage(false);
      }, 3000);
      setTimeoutId(newTimeoutId);
    }
  };

  return (
    <header>
      
      <div className="rectangle-11">
        <div className="num-9560-2">
          <img className="icon-logo" src={iconLogo} alt="iconLogo" />
          <span>E365 Maverick</span>
          <Link className="startseite-button" to="/"> 
            <div className="rectangle-8"><img className="subtract" src={home} alt="subtract" /> 
            <span>&nbsp;&nbsp;Home</span></div>
          </Link>
          <Link className="profil-button" to="/profile">
            <div className="rectangle-8">
            <img className="subtract" src={profile} alt="subtract" /> 
            <span>&nbsp;&nbsp;Profile</span> </div>
          </Link>
          <Link className="einstellung-button" to="/einstellung">
          <div className="rectangle-8">
            <img className="subtract" src={gear} alt="subtract" />
            <span >Einstellungen</span>
            </div>
          </Link>
          
          <Link className="logout-button" to={"/anmelden"}>
            <div className="rectangle-8">
            <img className="subtract" src={logout} alt="subtract" />
              <span className="logout">&nbsp;&nbsp;Logout</span>
            </div>
          </Link>
        </div>
      </div>

      <form onSubmit={handleSearch} className="search-container">
        <input
        className="suchleiste"
        placeholder="Was möchtest du lernen?"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
       />
       <button className="SuchButton" type="submit">Suchen</button>
      </form>
      
     {showNoResultsMessage && (
      <div className="no-results-message">Keine Ergebnisse gefunden</div>
    )}
    </header>
  );
};

export default Header;
