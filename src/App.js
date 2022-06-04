import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Menu from "./components/menu";
import Admin from "./components/admin/admin-login";
import AdminMain from "./components/admin/admin-main";
import AdminLogout from "./components/admin/admin-logout";
import DeleteMenu from "./components/admin/delete-menu";
import UpdateMenu from "./components/admin/update-menu";


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
              <Route path = "admin-main" element = {<AdminMain />}>
                  <Route index element={<Admin />} />
                  <Route path = "admin-login" element = {<Admin />} />
                  <Route path = "update-menu" element = {<UpdateMenu />} />
                  <Route path = "delete-menu" element = {<DeleteMenu />} />
                  <Route path = "admin-logout" element = {<AdminLogout />} />
              </Route>
            </Routes>
          </userContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;