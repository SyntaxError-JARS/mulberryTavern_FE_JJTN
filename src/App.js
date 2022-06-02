import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Menu from "./components/menu";

function App() {
  return (
    <> 
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path = "" element = {<Home />} />
          <Route path = "menu" element = {<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;