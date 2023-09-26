import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import israelCities from "./data/israel_cities.json";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HomePage from "./scenes/homePage/index";
import UsersPage from "./scenes/usersPage/index";
import ProfilePage from "./scenes/profilePage/index";
import LandingPage from "./scenes/landingPage";
import JobsPage from "./scenes/jobsPage/index";
import CommunityPage from "./scenes/communityPage";

import {
  generalDataContext,
  globalAuthContext,
  institutionsDataContext,
  companiesDataContext,
} from "./state/state.js";

import handleExpiredToken from "./utils/authUtils.js";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [signedUserData, setSignedUserData] = useState(
    JSON.parse(localStorage.getItem("user_data"))
  );
  const [institutionsData, setInstitutionsData] = useState(
    JSON.parse(localStorage.getItem("institutions_data"))
  );
  const [companiesData, setCompaniesData] = useState(
    JSON.parse(localStorage.getItem("companies_data"))
  );

  return (
    <div className="app">
      <generalDataContext.Provider value={{ israelCities }}>
        <globalAuthContext.Provider
          value={{
            signedUserData,
            setSignedUserData,
            token,
            setToken,
            handleExpiredToken,
          }}
        >
          <companiesDataContext.Provider
            value={{ companiesData, setCompaniesData }}
          >
            <institutionsDataContext.Provider
              value={{
                institutionsData,
                setInstitutionsData,
              }}
            >
              <BrowserRouter>
                {token && <Navbar className="navbar" />}

                <div className="app-content">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        !token ? <LandingPage /> : <Navigate to="/home" />
                      }
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

                    <Route
                      path="/jobs"
                      element={token ? <JobsPage /> : <Navigate to="/" />}
                    />
                    <Route
                      path="/community"
                      element={token ? <CommunityPage /> : <Navigate to="/" />}
                    />
                  </Routes>
                </div>

                <Footer className="footer" />
              </BrowserRouter>
            </institutionsDataContext.Provider>
          </companiesDataContext.Provider>
        </globalAuthContext.Provider>
      </generalDataContext.Provider>
    </div>
  );
}

export default App;
