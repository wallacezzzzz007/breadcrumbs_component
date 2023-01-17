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
        <div className="container">{this.getContentLists(keyLists)}</div>
      </>
    );
  }

  getContentLists(keyLists) {
    const lists = [];
    for (let index = 0; index < keyLists.length; index++) {
      const key = keyLists[index];
      lists.push(
        <Link to={"/" + key} className="contents m-2">
          {key}
        </Link>
      );
    }
    return lists;
  }
}

export default RootPage;
