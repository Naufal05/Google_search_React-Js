import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<h1>Searchpage here</h1>} />
          <Route path="/" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
