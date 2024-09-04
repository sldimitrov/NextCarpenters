"use client";

import { useState, useRef } from "react";
import Place from "./Place";

export default function ProjectsBrowser({ items }) {
  const lastChange = useRef();

  const [searchTerm, setSearchTerm] = useState("");

  const searchResult = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(event.target.value);
    }, 200);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      {searchResult.length > 0 ? (
        <ul>
          {searchResult.map((item) => (
            <li key={item.id}>
              <Place item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl text-slate-400 text-center mt-3">
          List of searches is empty...
        </p>
      )}
    </div>
  );
}
