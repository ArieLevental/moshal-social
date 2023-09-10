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
        value={(INITIAL_FORMDATA, setActiveForm, formData, setFormData)}
      >
        {/* Render the active form based on the state */}
        {activeForm === "login" && (
          <Login
          // setActiveForm={setActiveForm}
          // formData={formData}
          // setFormData={setFormData}
          // initialFormData={INITIAL_FORMDATA}
          />
        )}
        {activeForm === "register" && (
          <Register
          // setActiveForm={setActiveForm}
          // formData={formData}
          // setFormData={setFormData}
          // initialFormData={INITIAL_FORMDATA}
          />
        )}
        {activeForm === "recovery" && (
          <PasswordRecovery
          // setActiveForm={setActiveForm}
          // formData={formData}
          // setFormData={setFormData}
          // initialFormData={INITIAL_FORMDATA}
          />
        )}
      </authContext.Provider>
    </div>
  );
};

export default LandingPage;
