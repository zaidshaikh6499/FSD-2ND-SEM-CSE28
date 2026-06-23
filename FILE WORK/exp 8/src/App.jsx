import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">

      <div className="card">

        <h1>React Counter Application</h1>

        <h2>{count}</h2>

        <div className="button-container">

          <button onClick={() => setCount(count + 1)}>
            Increment (+)
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrement (-)
          </button>

        </div>

        <button
          className="reset-btn"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
        <br />
        <br />
        <div><p>NAME: PRIYANSHU KUMAR<br />
          ROLL.NO: 2503201000871 <br />
          SECTION: CSE 26 <br />
        </p></div>
      </div>

    </div>
  );
}

export default App;