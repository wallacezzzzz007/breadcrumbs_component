import React, { Component } from "react";
import { Link } from "react-router-dom";

class RootPage extends Component {
  state = {};
  render() {
    const { keyLists } = this.props;
    return (
      <>
        <nav aria-label="breadcrumb" className="m-2 lg">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active last-one" aria-current="page">
              <Link to="/">Root</Link>
            </li>
          </ol>
        </nav>
        <div>
          {keyLists.map((kl) => {
            return (
              <Link to={"/" + kl} className="m-2">
                {kl}
              </Link>
            );
          })}
        </div>
      </>
    );
  }
}

export default RootPage;
