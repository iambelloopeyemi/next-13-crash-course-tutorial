"use client";
import { useState } from "react";

export default function CourseSearch({ getSearchResults }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/courses/search?query=${query}`);
    const courses = await response.json();
    getSearchResults(courses);

    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search Courses..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
