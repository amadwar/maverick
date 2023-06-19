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
    if(inputValue.trim().toLowerCase() === 'mathe1'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_mathe1');
    }
    if(inputValue.trim().toLowerCase() === 'sportwissenschaft'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_sportwissenschaft');
    }
    if(inputValue.trim().toLowerCase() === 'musikwissenschaft'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_musikwissenschaft');
    }
    if(inputValue.trim().toLowerCase() === 'kunstgeschichte'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_kunstgeschichte');
    }
    if(inputValue.trim().toLowerCase() === 'ethnologie'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_ethnologie');
    }
    if(inputValue.trim().toLowerCase() === 'geografie'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_geografie');
    }
    if(inputValue.trim().toLowerCase() === 'philosophie'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_philosophie');
    }
    if(inputValue.trim().toLowerCase() === 'pädagogik'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_paedagogik');
    }
    if(inputValue.trim().toLowerCase() === 'medienwissenschaft'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_medienwissenschaft');
    }
    if(inputValue.trim().toLowerCase() === 'politikwissenschaft'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_politikwissenschaft');
    }
    if(inputValue.trim().toLowerCase() === 'sprachwissenschaft'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_sprachwissenschaft');
    }
    if(inputValue.trim().toLowerCase() === 'geschichte'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_geschichte');
    }
    e.preventDefault();
    if(inputValue.trim().toLowerCase() === 'soziologie'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_sozialogie');
    }
    e.preventDefault();
    if(inputValue.trim().toLowerCase() === 'volkswirtschaftslehre'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_volkswirtschaftslehre');
    }
    e.preventDefault();
    if(inputValue.trim().toLowerCase() === 'mathematik'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_mathematik');
    }
    e.preventDefault();
    if(inputValue.trim().toLowerCase() === 'physik'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_physik');
    }
    e.preventDefault();
    if(inputValue.trim().toLowerCase() === 'elektrotechnik'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_elektrotechnik');
    }
    if(inputValue.trim().toLowerCase() === 'psychologie'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_psychologie');
    }
    if(inputValue.trim().toLowerCase() === 'jura'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_jura');
    }
    if(inputValue.trim().toLowerCase() === 'architektur'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_architektur');
    }
    if(inputValue.trim().toLowerCase() === 'chemie'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_chemie');
    }
    if(inputValue.trim().toLowerCase() === 'biologie'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_biologie');
    }
    if(inputValue.trim().toLowerCase() === 'informatik'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_informatik');
    }
    if(inputValue.trim().toLowerCase() === 'medizin'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_medizin');
    }
    if(inputValue.trim().toLowerCase() === 'bwl'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_bwl');
    }
    if(inputValue.trim().toLowerCase() === 'maschinenbau'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_maschienenbau');
    }
    if(inputValue.trim().toLowerCase() === 'teamleitung'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_teamleitung');
    }
    if(inputValue.trim().toLowerCase() === 'immobilien'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_immobilien');
    }
    if(inputValue.trim().toLowerCase() === 'projektmanagement'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_projektmanagement');
    }
    if(inputValue.trim().toLowerCase() === 'campingmanagement'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_campingmanagement');
    }
    if(inputValue.trim().toLowerCase() === 'meditation'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_meditation');
    }
    if(inputValue.trim().toLowerCase() === 'kommunizieren'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_kommunizieren');
    }
    if(inputValue.trim().toLowerCase() === 'malen'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_malen');
    }
    if(inputValue.trim().toLowerCase() === 'basteln'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_basteln');
    }
    if(inputValue.trim().toLowerCase() === 'stricken'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_stricken');
    }
    if(inputValue.trim().toLowerCase() === 'gärtner'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_gaertner');
    }
    if(inputValue.trim().toLowerCase() === 'barista'){
      setShowNoResultsMessage(false);
      navigate('/suchseite_brista');
    }
    if(inputValue.trim().toLowerCase() === 'scrum'){
      setShowNoResultsMessage(false);
      navigate('/Suchseite_scrum');
    }
    if(inputValue.trim().toLowerCase() === 'devops'){
      setShowNoResultsMessage(false);
      navigate('/suchseite');
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

      
      <form onSubmit={handleSearch} className="form" >
      <div className="search">
        <i className="fa fa-search"></i>
        <input type="text" className="form-control" placeholder="Was möchtest du lernen?"value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
        <button className="btn btn-primary">Suchen</button>
      </div>
                        
      </form>


  
    </header>
  );
};

export default Header;
