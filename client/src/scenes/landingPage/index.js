import { useState } from "react";

import "./index.css";
import {
  Login,
  Register,
  PasswordRecovery,
} from "./formsContainer/formsContainer";

import { createContext } from "react";
export const authContext = createContext();

const INITIAL_FORMDATA = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

const LandingPage = () => {
  const [activeForm, setActiveForm] = useState("login");
  const [formData, setFormData] = useState(INITIAL_FORMDATA);

  return (
    <div className="landing-page-container">
      <img
        className="landing-page-container-bg"
        src="./assets/landingpage/DIMA0511.jpg"
        alt=""
      ></img>
      <authContext.Provider
        value={{ INITIAL_FORMDATA, setActiveForm, formData, setFormData }}
      >
        <div className="landing-page-content">
          {activeForm === "login" && <Login />}
          {activeForm === "register" && <Register />}
          {activeForm === "recovery" && <PasswordRecovery />}
        </div>
      </authContext.Provider>
    </div>
  );
};

export default LandingPage;
