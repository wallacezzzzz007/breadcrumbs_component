import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {};

  render() {
    // console.log(this.props.pathLists);
    return (
      <>
        <nav aria-label="breadcrumb" className="m-2 lg">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/">Home</Link>
            </li>
          </ol>
        </nav>
        <div>
          <Link to="/myname" className="m-2">
            myname
          </Link>
        </div>
      </>
    );
  }
}

export default HomePage;
