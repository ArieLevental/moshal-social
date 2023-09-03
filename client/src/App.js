import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Toolbar from "./components/Toolbar/Toolbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

import HomePage from "./scenes/homePage/index";
import UsersPage from "./scenes/usersPage/index";
import ProfilePage from "./scenes/profilePage/index";
import LandingPage from "./scenes/landingPage";
import { createContext } from "react";

export const globalContext = createContext();

function App() {
  // THIS IS THE STATES FOR THE GLOBAL STATE. EMAIL TOKEN
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [signedUserId, setSignedUserId] = useState(localStorage.getItem("user_id"))
  const handleExpiredToken = () => {
    fetch("http://localhost:3001/auth/logout", { method: "POST" });
    // TODO: Need to check if the response is ok
    localStorage.removeItem("token");
    setEmail("");
    setToken("");
    setSignedUserId("")
  };


  return (
    <div className="app">
      <globalContext.Provider value={[signedUserId, setSignedUserId, token, setToken, handleExpiredToken]}>
        <BrowserRouter>
          <Toolbar />
          <div className="main">
            {token && (
              <div className="main-sidebar">
                <Sidebar />
              </div>
            )}

            <div className="main-content">
              <Routes>
                <Route
                  path="/"
                  element={!token ? <LandingPage /> : <Navigate to="/home" />}
                />
                <Route
                  path="/home"
                  element={token ? <HomePage /> : <Navigate to="/" />}
                />
                <Route
                  path="/users"
                  element={token ? <UsersPage /> : <Navigate to="/" />}
                />
                <Route
                  path="/user/:userId"
                  element={token ? <ProfilePage /> : <Navigate to="/" />}
                />
              </Routes>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </globalContext.Provider>
    </div>
  );
}

export default App;
