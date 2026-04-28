import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "10px" }}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profiles">Profiles</Link>
      <Link to="/search">Search</Link>
      <Link to="/account">Account</Link>
    </nav>
  );
}
