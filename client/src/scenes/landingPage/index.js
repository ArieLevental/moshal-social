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
      <authContext.Provider
        value={{ INITIAL_FORMDATA, setActiveForm, formData, setFormData }}
      >
        {activeForm === "login" && <Login />}
        {activeForm === "register" && <Register />}
        {activeForm === "recovery" && <PasswordRecovery />}
      </authContext.Provider>
    </div>
  );
};

export default LandingPage;
