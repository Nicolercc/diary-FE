import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Show() {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await axios.get(`http://localhost:3004/entries/${id}`);
        setEntry(response.data);
      } catch (error) {
        console.error("Error fetching entry:", error);
      }
    };

    fetchEntry();
  }, [id]);

  if (!entry) {
    // You can render a loading state or redirect to an error page
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body text-center">
          <h2 className="card-title">{entry.title}</h2>
          <h4 className="card-subtitle mb-2 text-muted">{entry.mood}</h4>
          <p className="card-text">{entry.content}</p>
          <p className="card-text">
            <strong>Creation Date:</strong> {entry.creation_date}
          </p>
        </div>
        <div className="card-footer">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isPrivateCheckbox"
              checked={entry.is_private}
              readOnly
            />
            <label className="form-check-label" htmlFor="isPrivateCheckbox">
              Private Entry
            </label>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center">
        <button className="btn btn-primary mx-2">Edit</button>
        <button className="btn btn-danger mx-2">Delete</button>
      </div>
    </div>
  );
}

export default Show;
