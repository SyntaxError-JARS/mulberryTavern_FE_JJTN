import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Menu from "./components/menu";
import Admin from "./components/admin";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({ uname: "Guest" });
  return (
    <> 
      <BrowserRouter>
        <userContext.Provider value={[user, setUser]}>
            <NavBar />
            <Routes>
              <Route exact path = "" element = {<Home />} />
              <Route path = "menu" element = {<Menu />} />
              <Route path = "admin" element = {<Admin />} />
            </Routes>
          </userContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;