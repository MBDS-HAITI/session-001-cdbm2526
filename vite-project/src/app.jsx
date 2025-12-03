import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Hello CDBM!</h1>
        <p>Vite + React template ready</p>
      </header>

      <main>
        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            J’ai cliqué {count} fois
          </button>
        </div>
      </main>
    </>
  );
}
