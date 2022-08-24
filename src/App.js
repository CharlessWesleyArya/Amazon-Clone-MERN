import Header from "./Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        {/* Header */}
        <Header />
        {/* Home */}
        <Home />
      </div>
    </Router>
  );
}

export default App;
