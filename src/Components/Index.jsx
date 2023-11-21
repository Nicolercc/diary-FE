import React, { useState, useEffect } from "react";

import axios from "axios";
import EntryCard from "./EntryCard";
import Home from "../Pages/Home";
import Total from "./Total";

const API = import.meta.env.VITE_API_URL;

const EntryList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get(`${API}/entries`);
        setEntries(response.data);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div className="entry-list-container m-5">
      <h5></h5>
      <div className="row entry-card-container">
        {entries.map((entry) => (
          <EntryCard key={entry.entry_id} entry={entry} />
        ))}
      </div>
      <Total entries={entries} />
    </div>
  );
};

export default EntryList;
