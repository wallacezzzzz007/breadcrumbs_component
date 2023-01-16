import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavComponent extends Component {
  state = {};
  render() {
    const { contents, nowKey, keyName, type } = this.props;
    return (
      <>
        <nav aria-label="breadcrumb" className="m-2 lg">
          <ol className="breadcrumb">{this.getPreviousLists(nowKey)}</ol>
        </nav>
        <div className="container">
          {type === "dir" ? (
            this.getContentLists(nowKey, contents)
          ) : (
            <h1>This is File: {keyName}.</h1>
          )}
        </div>
      </>
    );
  }

  getContentLists(nowKey, contentsList) {
    const rows = [];
    for (let index = 0; index < contentsList.length; index++) {
      rows.push(
        <React.Fragment key={index}>
          <Link
            to={nowKey + "/" + contentsList[index]}
            className="m-2 contents"
          >
            {contentsList[index]}
          </Link>
        </React.Fragment>
      );
    }
    return rows;
  }

  getPreviousLists(nowKey) {
    const rows = [];
    const tempNowKey = nowKey.slice(1).split("/");
    let nowPath = "";
    for (let index = 0; index < tempNowKey.length; index++) {
      nowPath += `/${tempNowKey[index]}`;
      if (index === tempNowKey.length - 1) {
        rows.push(
          <li
            className="breadcrumb-item active last-one"
            aria-current="page"
            key={nowPath + index}
          >
            <Link to={nowPath}>{tempNowKey[index]}</Link>
          </li>
        );
      } else {
        rows.push(
          <li className="breadcrumb-item" key={nowPath + index}>
            <Link to={nowPath}>{tempNowKey[index]}</Link>
          </li>
        );
      }
    }
    return rows;
  }
}

export default NavComponent;
