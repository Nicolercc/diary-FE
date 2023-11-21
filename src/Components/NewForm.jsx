import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const NewForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    mood: "",
    is_private: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${API}/entries`, formData);
      console.log("Entry created successfully!");
      navigate("/all");
    } catch (error) {
      console.error("Error creating entry:", error);
    }
  };

  return (
    <div className=" card container mt-5">
      <h4 className="mb-4 text-center m-5 lead font-monospace">
        Your voice matters. Share your story.{" "}
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="  mb-3">
          <label htmlFor="title" className="form-label lead">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="What's on your mind?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label lead">
            Content:
          </label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Tell me more..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mood" className="form-label lead">
            Mood:
          </label>
          <input
            type="text"
            className="form-control"
            id="mood"
            name="mood"
            value={formData.mood}
            onChange={handleChange}
            placeholder="How are you feeling?"
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
          <label className="form-check-label lead" htmlFor="is_private">
            Is Private
          </label>
        </div>
        <div className="text-center m-4">
          <button type="submit" className="  btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewForm;
