import React, { useState } from "react";
import { redirect } from "react-router-dom";
import axios from "axios";

const NewForm = () => {
  const [formData, setFormData] = useState({
    user_id: 10,
    title: "",
    content: "",
    mood: "Neutral",
    is_private: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3004/entries", formData);
      console.log("Entry created successfully!");
      redirect("/");
    } catch (error) {
      console.error("Error creating entry:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">New Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content:
          </label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mood" className="form-label">
            Mood:
          </label>
          <input
            type="text"
            className="form-control"
            id="mood"
            name="mood"
            value={formData.mood}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="is_private"
            name="is_private"
            checked={formData.is_private}
            onChange={() =>
              setFormData({ ...formData, is_private: !formData.is_private })
            }
          />
          <label className="form-check-label" htmlFor="is_private">
            Is Private
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewForm;
