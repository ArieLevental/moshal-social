import { useState, useEffect } from "react";

import "./index.css";
import {
  Login,
  Register,
  PasswordRecovery,
} from "./formsContainer/formsContainer";

const LandingPage = () => {
  const [activeForm, setActiveForm] = useState("login");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  return (
    <div>
      {/* Render the active form based on the state */}
      {activeForm === "login" && (
        <Login
          setActiveForm={setActiveForm}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {activeForm === "register" && (
        <Register
          setActiveForm={setActiveForm}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {activeForm === "recovery" && (
        <PasswordRecovery
          setActiveForm={setActiveForm}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

export default LandingPage;
