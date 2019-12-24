import React from "react";
import ViewAllFilters from "./filter/ViewAllFilters";
import ViewAllContent from "./content/ViewAllContent";

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
