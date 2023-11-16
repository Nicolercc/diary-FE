import React from "react";
import { Link } from "react-router-dom";

function EntryCard({ entry }) {
  return (
    <div className="card" style={{ width: "18rem", marginBottom: "10px" }}>
      <div className="card-body text-center">
        <h5 className="card-title">{entry.title}</h5>
        <p className="card-text">{entry.content}</p>
      </div>
      <div className="text-center m-3">
        <Link to={`/show/${entry.entry_id}`} className="btn btn-primary">
          See More
        </Link>
      </div>
    </div>
  );
}

export default EntryCard;
