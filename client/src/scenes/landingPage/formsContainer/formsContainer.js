import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "..";
import { globalContext } from "../../../App";

{
  /* LOGIN FORM*/
}
export const Login = (props) => {
  const [INITIAL_FORMDATA, setActiveForm, formData, setFormData] =
    useContext(authContext);
  const [email, setEmail, token, setToken] = useContext(globalContext);
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
          setEmail(resJson.user.email);
          console.log(globalContext);
          setFormData(INITIAL_FORMDATA);
          navigate("/home");
        };

        return res.status === 200 ? handleSuccess() : resJson;
      })
      .then((resJson) => console.log(resJson));
  };

  return (
    <div className="login-form">
      <h1>Log In</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email:</label>
        <input
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
        <br />
        <label htmlFor="password">Password:</label>
        <input
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
        <br />
        <input type="submit" value="Log in" />
      </form>
      <p
        onClick={(e) => {
          setActiveForm("register");
        }}
      >
        Don't have an account? Sign up here!
      </p>
      <p onClick={(e) => setActiveForm("recovery")}>I forgot my password</p>
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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="firstName">First name:</label>
        <input
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
        <br />
        <label htmlFor="lastName">Last name:</label>
        <input
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
        <br />
        <label htmlFor="email">Email:</label>
        <input
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
        <br />
        <label htmlFor="phoneNumber">phone Number:</label>
        <input
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
        <br />
        <label htmlFor="password">Password:</label>
        <input
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
        <br />
        <label htmlFor="lname">Password Confirmation:</label>
        <input
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
        <br />
        <input type="submit" value="Sign up" />
      </form>
      <p
        onClick={(e) => {
          setActiveForm("login");
        }}
      >
        Already have an account? Login here!
      </p>
      <p onClick={(e) => setActiveForm("recovery")}>I forgot my password</p>
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
        onClick={(e) => {
          setActiveForm("login");
        }}
      >
        Already have an account? Log in here!
      </p>
      <p
        onClick={(e) => {
          setActiveForm("register");
        }}
      >
        Don't have an account? Sign up here!
      </p>
    </div>
  );
};
