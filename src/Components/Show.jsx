import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function Show() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await axios.get(`${API}/entries/${id}`);
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
        const response = await axios.delete(`${API}/entries/${id}`);
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
    <div className="container my-5">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body text-center">
          <h2 className="card-title m-3">{entry.title}</h2>
          <h5 className="card-subtitle  text-muted m-3">
            I am feeing: {entry.mood}
          </h5>
          <p className="card-text m-4">{entry.content}</p>
          <p className="card-text m-3">
            <strong>Creation Date:</strong> {entry.creation_date}
          </p>
        </div>
        <div className="card-footer">
          <div className="form-check m-3">
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
          className="btn btn-success mx-2"
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
