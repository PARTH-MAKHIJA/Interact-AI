import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const nav = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Select Role</h2>

      <button onClick={() => nav("/interview/frontend")}>Frontend</button>
      <button onClick={() => nav("/interview/backend")}>Backend</button>
      <button onClick={() => nav("/interview/dsa")}>DSA</button>
    </div>
  );
}