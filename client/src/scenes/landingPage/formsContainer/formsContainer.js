{
  /* LOGIN FORM*/
}
export const Login = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-form">
      <h1>Log In</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <input type="submit" value="Log in" />
      </form>
      <p
        onClick={(e) => {
          props.setActiveForm("register");
        }}
      >
        Don't have an account? Sign up here!
      </p>
      <p onClick={(e) => props.setActiveForm("recovery")}>
        I forgot my password
      </p>
    </div>
  );
};

{
  /* REGISTER FORM*/
}
export const Register = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check passwords are equal
    if (
      event.target.password.value != event.target.passwordConfirmation.value
    ) {
      alert("Passwords are different!");
    }
    await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event.target.values),
    })
      .then((res) =>
        res.status === 201 ? props.setActiveForm("login") : res.json()
      )
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
            props.setFormData({
              ...props.formData,
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
            props.setFormData({
              ...props.formData,
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
            props.setFormData({
              ...props.formData,
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
            props.setFormData({
              ...props.formData,
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
            props.setFormData({
              ...props.formData,
              [e.target.name]: e.target.value,
            });
          }}
        />
        <br />
        <input type="submit" value="Sign up" />
      </form>
      <p
        onClick={(e) => {
          props.setActiveForm("login");
        }}
      >
        Already have an account? Login here!
      </p>
      <p onClick={(e) => props.setActiveForm("recovery")}>
        I forgot my password
      </p>
    </div>
  );
};

{
  /* PASSWORD RECOVERY FORM*/
}
export const PasswordRecovery = (props) => {
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
          props.setActiveForm("login");
        }}
      >
        Already have an account? Log in here!
      </p>
      <p
        onClick={(e) => {
          props.setActiveForm("register");
        }}
      >
        Don't have an account? Sign up here!
      </p>
    </div>
  );
};
