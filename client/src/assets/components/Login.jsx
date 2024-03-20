import { Link } from "react-router-dom";
import "./../scss/auth.scss";

const Auth = () => {
  const startTestRun = () => {};

  return (
    <div className="auth--container">
      <header className="auth--header">Delights</header>
      <div className="auth--main">
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
          <button type="submit">Login</button>
        </form>
        <div className="auth--text">
          <p>
            Don&apos;t have an account? <Link to="/register">Sign up</Link>
          </p>
          <p>
            Testing the app? Click <button onClick={startTestRun}>here</button> for a test run
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
