import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import socket from "../socket/socket";

export default function Interview() {
  const { role } = useParams();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [count, setCount] = useState(1);

  useEffect(() => {
    socket.emit("startInterview", role);

    socket.on("question", (q) => {
      setQuestion(q);
      setAnswer("");
    });

    return () => socket.off("question");
  }, []);

  const submitAnswer = () => {
    socket.emit("answer", { answer });
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h3>Role: {role}</h3>
      <p>Q{count}: {question}</p>

      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Your answer..."
      />

      <br /><br />

      <button onClick={submitAnswer}>Next</button>
    </div>
  );
}