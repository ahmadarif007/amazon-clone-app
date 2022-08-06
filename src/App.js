import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    //BEM Convention for naming
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
