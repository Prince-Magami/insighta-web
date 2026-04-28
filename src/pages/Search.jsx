import { useState } from "react";
import api from "../api/client";

export default function Search() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    const res = await api.get("/profiles/search?q=" + q);
    setResults(res.data.data);
  };

  return (
    <div>
      <h2>Search</h2>

      <input
        placeholder="Search profiles..."
        onChange={(e) => setQ(e.target.value)}
      />

      <button onClick={search}>Search</button>

      {results.map((r) => (
        <div key={r.id}>{r.name}</div>
      ))}
    </div>
  );
}
