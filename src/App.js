import './App.css';
import { Questions } from "./Questions"
import { Graph } from "./Graph"

function App() {
  return (
      <div>
          <h1>ENERGi</h1>
          <h2>daily energy tracker</h2>
          <Graph name="today"/>
      </div>
  );
}

export default App;
