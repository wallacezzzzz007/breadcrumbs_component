import React, { Component } from "react";
import { Link } from "react-router-dom";

class FileB extends Component {
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
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/myname/fileb.txt">fileb.txt</Link>
            </li>
          </ol>
        </nav>
        <h1>This is File B.</h1>
      </>
    );
  }
}

export default FileB;
