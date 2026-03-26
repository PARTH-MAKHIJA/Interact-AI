import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>INTERACT AI</h1>
      <p>Your AI Interview Practice Platform</p>
      <button onClick={() => nav("/roles")}>Start Interview</button>
    </div>
  );
}