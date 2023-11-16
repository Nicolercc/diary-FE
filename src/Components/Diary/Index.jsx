import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EntryCard from "./EntryCard";

const EntryList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get("http://localhost:3004/entries");
        setEntries(response.data);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div className="entry-list-container">
      <h5>Entry List</h5>
      <div className="entry-card-container">
        {entries.map((entry) => (
          <EntryCard key={entry.entry_id} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default EntryList;
