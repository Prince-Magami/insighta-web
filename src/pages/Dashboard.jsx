import { useEffect, useState } from "react";
import api from "../api/client";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/profiles?limit=5").then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Total Profiles: (from API)</p>

      <ul>
        {data.map((p) => (
          <li key={p.id}>
            {p.name} - {p.country_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
