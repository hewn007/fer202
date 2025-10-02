import React, { useState } from "react";
import Bai1 from "./components/Bai1";
import Bai2 from "./components/Bai2";
import Bai3 from "./components/Bai3";
import Bai4 from "./components/Bai4";
import Bai5 from "./components/Bai5";

function App() {
  const [active, setActive] = useState(1);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Exercise 3</h1>

      {/* Menu chọn bài */}
      <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-outline-primary mx-2" onClick={() => setActive(1)}>Bài 1</button>
        <button className="btn btn-outline-primary mx-2" onClick={() => setActive(2)}>Bài 2</button>
        <button className="btn btn-outline-primary mx-2" onClick={() => setActive(3)}>Bài 3</button>
        <button className="btn btn-outline-primary mx-2" onClick={() => setActive(4)}>Bài 4</button>
        <button className="btn btn-outline-primary mx-2" onClick={() => setActive(5)}>Bài 5</button>
      </div>

      {/* Render theo state */}
      <div className="mt-4">
        {active === 1 && <Bai1 />}
        {active === 2 && <Bai2 />}
        {active === 3 && <Bai3 />}
        {active === 4 && <Bai4 />}
        {active === 5 && <Bai5 />}
      </div>
    </div>
  );
}

export default App;
