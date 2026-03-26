import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoleSelect from "./pages/RoleSelect";
import Interview from "./pages/Interview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roles" element={<RoleSelect />} />
        <Route path="/interview/:role" element={<Interview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;