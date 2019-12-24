import React from "react";
import ViewAllFilters from "./ViewAllFilters";
import ViewAllContent from "./ViewAllContent";

export default function DesignersViewAll() {
  return (
    <div className="row DesignersViewAll">
      <div className="col-md-3 col-xs-12">
        <ViewAllFilters />
      </div>
      <div className="col-md-9 col-xs-12">
        <ViewAllContent />
      </div>
    </div>
  );
}
