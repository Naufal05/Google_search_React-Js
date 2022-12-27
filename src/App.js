import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/search">qwertt</Route>
          <Route path="/" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
