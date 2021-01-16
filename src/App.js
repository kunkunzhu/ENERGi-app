import './App.css';
import { TabBar } from "./TabBar"
import { Questions } from "./Questions"
import { Graph } from "./Graph"

function App() {
  return (
      <div>
          <h1>ENERGi</h1>
          <h2>daily energy tracker</h2>
          <TabBar name="tabs" />
      </div>
  );
}

export default App;
