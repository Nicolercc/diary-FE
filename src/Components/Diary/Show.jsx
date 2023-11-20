import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Show() {
  const { id } = useParams();
  const navigate = useNavigate();
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
    return <div>Loading...</div>;
  }

  async function handleDelete() {
    const isConfirmed = window.confirm("Are you sure you want to delete this?");

    if (isConfirmed) {
      try {
        const response = await axios.delete(
          `http://localhost:3004/entries/${id}`
        );
        if (response.data) {
          navigate("/all");
        } else {
          console.log("Entry not found, but deletion considered successful");
          navigate("/all");
        }
      } catch (e) {
        console.log("error deleting:", e);
      }
    } else {
      console.log("Deletion Canceled");
    }
  }

  return (
    <div className="container mt-4">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body text-center">
          <h2 className="card-title">{entry.title}</h2>
          <h5 className="card-subtitle mb-2 text-muted">
            I am feeing: {entry.mood}
          </h5>
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
        <button
          className="btn btn-primary mx-2"
          onClick={() => navigate(`/edit/${id}`)}
        >
          Edit
        </button>
        <button className="btn btn-danger mx-2" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Show;
