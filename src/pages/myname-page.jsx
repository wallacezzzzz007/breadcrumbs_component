import React, { Component } from "react";
import { Link } from "react-router-dom";

class MyName extends Component {
  state = {};
  render() {
    return (
      <>
        <nav aria-label="breadcrumb" className="m-2 lg">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/myname">myname</Link>
            </li>
          </ol>
        </nav>
        <div>
          <Link to="/myname/filea.txt" className="m-2">
            filea.txt
          </Link>
          <Link to="/myname/fileb.txt" className="m-2">
            fileb.txt
          </Link>
          <Link to="/myname/projects" className="m-2">
            projects
          </Link>
        </div>
      </>
    );
  }
}

export default MyName;
