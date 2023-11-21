import React from "react";

function Total({ entries }) {
  const totalEntries = entries.length;
  return (
    <div className=" d-flex justify-content-end m-2">
      <h2>
        <span className="font-monospace "> Total Entries: </span>
        {totalEntries}
      </h2>
    </div>
  );
}
export default Total;
