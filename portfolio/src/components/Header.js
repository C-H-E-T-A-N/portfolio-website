import React from "react";
import './style.css';
import './index.js';
import AnchorLink from 'react-anchor-link-smooth-scroll';
function Header() {
  const mystyle = {
    paddingLeft: "30px",
    fontSize: "20px",
    display: "inline",
    float: "right",
    paddingRight: "30px",


  };


  return (
    <>
      <div>
        <nav className="navbar navfix navbar-expand-lg transparent " id="nav1">
          <div className="container-fluid">


            <AnchorLink style={{
              paddingLeft: "20px",
              color: "blue",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
              className="navbar-brand" href="#intro">Portfolio</AnchorLink>


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
                  {/* <a className="nav-link navcolor" aria-current="page" href="#intro"> */}
                  <AnchorLink  className="nav-link navcolor" aria-current="page" href="#intro">Home</AnchorLink>

                </li>
                <li className="nav-item" style={mystyle} >
                  <AnchorLink className="nav-link navcolor" aria-current="page" href="#About">About</AnchorLink>
                </li>
                <li className="nav-item" style={mystyle}>
                  <AnchorLink className="nav-link navcolor" aria-current="page" href="#Projects">Projects</AnchorLink>
                </li>
                <li className="nav-item" style={mystyle}>
                  <AnchorLink className="nav-link navcolor" aria-current="page" href="#Skills">Skills</AnchorLink>
                </li>

                <li className="nav-item" style={mystyle}>
                  <AnchorLink className="nav-link navcolor" aria-current="page" href="#ContactMe">Contact ME</AnchorLink>
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
