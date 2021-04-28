import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) { 
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
         
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              React Equestrian Competitions Tracker
            </Link>
          </div>
        </nav>
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/"></a>
          </nav>
      </div>
    )
}
