import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TabBar from "./TabBar"
import { Questions } from "./Questions"
import { Graph } from "./Graph"
import Button from "react-bootstrap/Button"

function App() {
  return (
      <div>
          <h1>ENERGi</h1>
          <h2>daily energy tracker</h2>
          <Button variant="primary">Primary</Button>{' '}
          <TabBar name="tabs" />
      </div>
  );
}

export default App;
