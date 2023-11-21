import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    mood: "",
    content: "",
    is_private: false,
  });

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await axios.get(`${API}/entries/${id}`);
        s;
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching entry for editing:", error);
      }
    };

    fetchEntry();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTextChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${API}/entries/${id}`, formData);
      navigate(`/show/${id}`);
    } catch (error) {
      console.error("Error editing entry:", error);
    }
  };

  return (
    <div className=" card container mt-5">
      <h2 className="text-center m-3 display-5">Update your entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label lead">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleTextChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mood" className="form-label lead">
            Mood
          </label>
          <input
            type="text"
            className="form-control"
            id="mood"
            name="mood"
            value={formData.mood}
            onChange={handleTextChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label lead">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            value={formData.content}
            onChange={handleTextChange}
          ></textarea>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="isPrivateCheckbox"
            name="is_private"
            checked={formData.is_private}
            onChange={handleChange}
          />
          <label className="form-check-label lead" htmlFor="isPrivateCheckbox ">
            Private Entry
          </label>
        </div>
        <div className="m-4 text-center">
          <button type="submit" className="btn btn-success">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
