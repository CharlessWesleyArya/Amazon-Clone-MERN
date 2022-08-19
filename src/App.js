import Header from "./Header";
import "./App.css";
import Home from "./Home";

function App() {
  return (
    //BEM
    <div className="App">
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
