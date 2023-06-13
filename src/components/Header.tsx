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
