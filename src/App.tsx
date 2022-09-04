import { Routes, Route } from "react-router-dom";
import MainPages from "./Pages/MainPages";
import SecondPages from "./Pages/SecondPages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPages />} />
      <Route path="/cryptocurrency/:id" element={<SecondPages />} />
    </Routes>
  );
}

export default App;
