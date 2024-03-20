import "./../scss/auth.scss";

const Auth = () => {
  return (
    <div className="auth--container">
      <form className="auth--form">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
      </form>
      <form className="auth--form">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
      </form>
    </div>
  );
};

export default Auth;
