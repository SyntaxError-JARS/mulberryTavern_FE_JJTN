import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminOptions from "./components/admin/admin-options";
import AdminLogin from "./components/admin/admin-login";
import NavBar from "./components/navbar";
import CustLogin from "./components/customer/cust-login";
import CustOptions from "./components/customer/cust-options";
import HomePage from "./components/home-page";
import ViewMenu from "./components/view-menu";
import SignUp from "./components/sign-up";

export const userContext = createContext();

function App() {

  const [user, setUser] = useState({ uname: "Guest", pword: "hello" });

  return (
    <BrowserRouter>
    <userContext.Provider value={[user, setUser]}>
        <NavBar/>
        <Routes>
            <Route exact path="" element={<HomePage />} />
            <Route path="view-menu" element={<ViewMenu />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="admin-login" element={<AdminLogin />} />
            <Route path="admin-options" element={<AdminOptions />} />
            <Route path="cust-login" element={<CustLogin />} />
            <Route path="cust-options" element={<CustOptions />} />
        </Routes>
    </userContext.Provider>
    </BrowserRouter>
  )
}
export default App;