import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Toolbar from "./components/Toolbar/Toolbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

import HomePage from "./scenes/homePage/index";
import UsersPage from "./scenes/usersPage/index";
import ProfilePage from "./scenes/profilePage/index";
import LandingPage from "./scenes/landingPage";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toolbar />
        <div className="main">
          {/* Temp handle no sidebar in landing page */}
          {/* {window.location.pathname + window.location.search != "/" && ( */}
            <Sidebar className="sidebar" />
          {/* )} */}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/user/:userId" element={<ProfilePage />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
