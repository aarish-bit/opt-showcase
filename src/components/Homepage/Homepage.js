import React from "react";
import './homepage.scss'

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="row">
        <div className="col-md-8 col-xs-12 homepage-disc">
          <h2>
            Discover, share and order from a curated selection of "certified" one of a kind and limited edition pieces.
          </h2>
        </div>
        <div className="col-md-4 col-xs-12 homepage-disc-button">
          <span className="btn btn-success">START DISCOVERING</span>
          <span className="btn btn-success">LEARN MORE</span>
        </div>
      </div>
    </div>
  )
}
