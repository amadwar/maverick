import * as React from "react";
import "./SignIn.css";

function Signin() {
  const handleAnmeldenClick = () => {
    
    window.location.href = "/";
  };
  const iconLogo = "./iconLogo.svg";
  return (
    <div className="Sign-in">
      
      <div className="LOGO">   <img className="icon-logo" src={iconLogo} />
         <span>E365 Maverick</span>       </div>
      
      <span className="lernpfade-mit-kostenfreien-inhal">
          Lernpfade mit kostenfreien Inhalten aus dem Web
        </span>
        <span className="herzlich-willkommen-bei-e-365-mave">
          Herzlich Willkommen bei E365 Maverick,ein Proof of Concept für das Generieren 
        </span>
        <span className="herzlich-willkommen-bei-e-365-mave">
         von Vorschlägen für Lernpfade mit kostenfreien Lernhinhalten aus dem Web. 
      </span>
        <span className="herzlich-willkommen-bei-e-365-mave">
        Falls Sie diese Anwendung das erste Mal
          besuchen, melden Sie sich bitte an und verknüpfen ihre persönliche
          Wallet.
      </span>

      <main className="form-signin w-100 m-auto">
        <form>
          
          <h1 className="h3mb-3fw-normal">Log in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">DAAD-ID</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> <strong>Remember me</strong>
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleAnmeldenClick}>
            Einloggen
          </button>
          <p className="copyright">&copy; 2023</p>
        </form>
      </main>
    </div>
  );
}

export default Signin;
