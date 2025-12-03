import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello React CDBM!</h1>
      <button onClick={() => setCount(count + 1)}>
        J’ai cliqué {count} fois
      </button>
    </div>
  );
}
