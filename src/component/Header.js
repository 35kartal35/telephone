import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Telefon Rehberi</a>
          <button className="navbar-toggler"
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/add-telephone"} className="nav-link active" aria-current="page" href="#">EKLE</Link>
              </li>
             
            </ul>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;