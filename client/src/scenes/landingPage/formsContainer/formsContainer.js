import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "..";
import { globalContext } from "../../../App";
import "./formsContainer.css";

{
  /* LOGIN FORM*/
}
export const Login = (props) => {
  const [INITIAL_FORMDATA, setActiveForm, formData, setFormData] =
    useContext(authContext);
  const [signedUserId, setSignedUserId, token, setToken] =
    useContext(globalContext);

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const resJson = await res.json();
        const handleSuccess = () => {
          console.log(resJson);
          setToken(resJson.token);
          setSignedUserId(resJson.user._id);
          setFormData(INITIAL_FORMDATA);
          localStorage.setItem("token", resJson.token);
          localStorage.setItem("user_id", resJson.user._id);
          navigate("/home");
        };

        return res.status === 200 ? handleSuccess() : resJson;
      })
      .then((resJson) => console.log(resJson));
  };

  return (
    <div className="login-form-container">
      <h1>Log In</h1>

      <form onSubmit={(e) => handleSubmit(e)} className="login-form">
        <div className="form-element">
          <label htmlFor="email" className="login-form-label">
            Email:
          </label>
          <input
            className="login-form-input"
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-element">
          <label htmlFor="password" className="login-form-label">
            Password:
          </label>
          <input
            className="login-form-input"
            type="password"
            id="password"
            name="password"
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>

        <button type="submit">Log In</button>
      </form>
      <p
        className="landing-page-action-link"
        onClick={(e) => {
          setActiveForm("register");
        }}
      >
        Don't have an account? Sign up here!
      </p>
      <p
        onClick={(e) => setActiveForm("recovery")}
        className="landing-page-action-link"
      >
        I forgot my password
      </p>
    </div>
  );
};

{
  /* REGISTER FORM*/
}
export const Register = (props) => {
  const [INITIAL_FORMDATA, setActiveForm, formData, setFormData] =
    useContext(authContext);
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check passwords are equal
    if (
      event.target.password.value != event.target.passwordConfirmation.value
    ) {
      alert("Passwords are different!");
    }
    await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        setFormData(INITIAL_FORMDATA);
        return res.status === 201 ? setActiveForm("login") : res.json();
      })
      .then((resJson) => console.log(resJson));
  };

  return (
    <div className="register-form-container">
      <h1>Sign Up</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="register-form">
        <div className="form-element">
          <label htmlFor="firstName" className="register-form-label">
            First name:
          </label>
          <input
            className="register-form-input"
            type="text"
            id="firstName"
            name="firstName"
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-element">
          <label htmlFor="lastName" className="register-form-label">
            Last name:
          </label>
          <input
            className="register-form-input"
            type="text"
            id="lastName"
            name="lastName"
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-element">
          <label htmlFor="email" className="register-form-label">
            Email:
          </label>
          <input
            className="register-form-input"
            type="email"
            id="email"
            name="email"
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-element">
          <label htmlFor="phoneNumber" className="register-form-label">
            phone Number:
          </label>
          <input
            className="register-form-input"
            type="phone"
            id="phoneNumber"
            name="phoneNumber"
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-element">
          <label htmlFor="password" className="register-form-label">
            Password:
          </label>
          <input
            className="register-form-input"
            type="password"
            id="password"
            name="password"
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-element">
          <label htmlFor="passwordConfirmation" className="register-form-label">
            Password Confirmation:
          </label>
          <input
            className="register-form-input"
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            onChange={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
      <p
        className="landing-page-action-link"
        onClick={(e) => {
          setActiveForm("login");
        }}
      >
        Already have an account? Login here!
      </p>
      <p
        onClick={(e) => setActiveForm("recovery")}
        className="landing-page-action-link"
      >
        I forgot my password
      </p>
    </div>
  );
};

{
  /* PASSWORD RECOVERY FORM*/
}
export const PasswordRecovery = (props) => {
  const [INITIAL_FORMDATA, setActiveForm, formData, setFormData] =
    useContext(authContext);
  const handleSubmit = (event) => {
    alert("RECOVERY submitted: " + event.target.email.value);
    event.preventDefault();
  };
  return (
    <div>
      <h1>Password Recovery</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <input type="submit" value="Recover" />
      </form>
      <p
        className="landing-page-action-link"
        onClick={(e) => {
          setActiveForm("login");
        }}
      >
        Already have an account? Log in here!
      </p>
      <p
        className="landing-page-action-link"
        onClick={(e) => {
          setActiveForm("register");
        }}
      >
        Don't have an account? Sign up here!
      </p>
    </div>
  );
};
