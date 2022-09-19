import React, { Component } from "react";
import Itemchild from "./Itemchild";

export default class Item extends Component {
  render() {
    return (
      <div className="container">
        <div className="row gx-lg-5">
          <Itemchild />
          <Itemchild />
          <Itemchild />
          <Itemchild />
          <Itemchild />
          <Itemchild />
        </div>
      </div>
    );
  }
}
