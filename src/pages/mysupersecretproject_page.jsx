import React, { Component } from "react";
import { Link } from "react-router-dom";

class MySuperSecretProject extends Component {
  state = {};
  render() {
    return (
      <>
        <nav aria-label="breadcrumb" className="m-2 lg">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/myname">myname</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/myname/projects">projects</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/myname/projects/mysupersecretproject">
                mysupersecretproject
              </Link>
            </li>
          </ol>
        </nav>
        <div>
          <Link
            to="/myname/projects/mysupersecretproject/mysupersecretfile"
            className="m-2"
          >
            mysupersecretfile
          </Link>
        </div>
      </>
    );
  }
}

export default MySuperSecretProject;
