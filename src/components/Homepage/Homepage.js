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
        <div className="row homepage-contents-jewelleries">
         <span className="col-md-4 col-xs-12"><img src="/homepage/earings.jpg" alt="earings" className="img-responsive hidden-xs" /></span>
         <span className="col-md-4 col-xs-12"><img src="/homepage/Bracelets.jpg" alt="bracelet" className="img-responsive hidden-xs" /></span>
         <span className="col-md-4 col-xs-12"><img src="/homepage/necklace.jpg" alt="necklace" className="img-responsive hidden-xs" /></span>
        </div>
        <div className="row s-assortment" >
          <img src="/homepage/sunil-assortment.jpg" alt="sunil" className="img-responsive col-12"></img>
        </div>
        <div className="row jfc" >
          <img src="/homepage/JFC.jpg" alt="jfc" className="img-responsive col-12"></img>
        </div>
      </div>
    </div>
  )
}
