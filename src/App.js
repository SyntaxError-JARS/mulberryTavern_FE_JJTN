import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Admin from "./components/admin/admin-login";
import AdminMain from "./components/admin/admin-main";
import AdminLogout from "./components/admin/admin-logout";
import DeleteMenu from "./components/admin/delete-menu";
import UpdateMenu from "./components/admin/update-menu";
import CustMain from "./components/customer/cust-main";
import Menu from "./components/customer/view-menu";
import CustRegister from "./components/customer/cust-register";
import CustLogin from "./components/customer/cust-login";
import AddOrder from "./components/customer/add-order";
import AddCC from "./components/customer/add-cc";
import CustLogout from "./components/customer/cust-logout";


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
              <Route path = "cust-main" element = {<CustMain />}>
                  <Route index element = {<Menu />} />
                  <Route path = "cust-login" element = {<CustLogin />} />
                  <Route path = "cust-register" element = {<CustRegister />} />
                  <Route path = "view-menu" element = {<Menu />} />
                  <Route path = "add-order" element = {<AddOrder />} />
                  <Route path = "add-cc" element = {<AddCC />} />
                  <Route path = "cust-logout" element = {<CustLogout />} />
              </Route>
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