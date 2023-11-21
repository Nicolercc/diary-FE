import React from "react";
import { Link } from "react-router-dom";

function EntryCard({ entry }) {
  return (
    <div className="col-md-4 mb-5">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">{entry.title}</h5>
          <p className="card-text">{entry.content}</p>
        </div>
        <div className="text-center m-3">
          <Link to={`/show/${entry.entry_id}`} className="btn btn-success">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EntryCard;
