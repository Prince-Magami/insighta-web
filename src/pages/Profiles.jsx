import { useEffect, useState } from "react";
import api from "../api/client";

export default function Profiles() {
  const [profiles, setProfiles] = useState([]);

  const fetchData = async () => {
    const res = await api.get("/profiles");
    setProfiles(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Profiles</h2>

      {profiles.map((p) => (
        <div key={p.id}>
          <h4>{p.name}</h4>
          <p>{p.gender} | {p.age} | {p.country_name}</p>
        </div>
      ))}
    </div>
  );
}
