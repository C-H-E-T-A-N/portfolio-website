import React from "react";
import './style.css';
function Header() {
  const mystyle = {
    paddingLeft:"30px",
    fontSize:"20px",
    display: "inline",
    float: "right",
    paddingRight:"30px",
    
    
  };
  
 
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg transparent " id="nav1">
        <div className="container-fluid">
          <a style={{paddingLeft:"20px",
          color:"#00BFFF",
        fontWeight:"bold",
        fontFamily:"monospace",
      }}
           className="navbar-brand" href="/">
            Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* ms-auto aligns items of ul to right
                me-auto aligns items of ul to left
              mx-auto aligns to centre */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" style={mystyle}>
                <a className="nav-link navcolor" aria-current="page" href="#section1">
                  Home
                </a>
              </li>
              <li className="nav-item" style={mystyle} >
                <a className="nav-link navcolor" aria-current="page" href="#section2">
                  About
                </a>
              </li>
              <li className="nav-item" style={mystyle}>
                <a className="nav-link navcolor" aria-current="page" href="#section3">
                  Projects
                </a>
              </li>
              <li className="nav-item" style={mystyle}>
                <a className="nav-link navcolor" aria-current="page" href="#section4">
                  Skills
                </a>
              </li>
              
              <li className="nav-item" style={mystyle}>
                <a className="nav-link navcolor" aria-current="page" href="#section5">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    
              </>
  );
}

export default Header;
