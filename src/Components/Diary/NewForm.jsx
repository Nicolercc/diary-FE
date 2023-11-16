import React, { useState } from "react";
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
      // You can add further logic or redirect after successful submission
    } catch (error) {
      console.error("Error creating entry:", error);
    }
  };

  return (
    <div>
      <h1>New Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Content:
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Mood:
          <input
            type="text"
            name="mood"
            value={formData.mood}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Is Private:
          <input
            type="checkbox"
            name="is_private"
            checked={formData.is_private}
            onChange={() =>
              setFormData({ ...formData, is_private: !formData.is_private })
            }
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewForm;
