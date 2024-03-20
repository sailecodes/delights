import { Link } from "react-router-dom";

const Auth = ({ inputArr, buttonText, redirectTexts, onSubmit, startTestRun }) => {
  return (
    <div className="auth--container">
      <header className="auth--header">Delights</header>
      <div className="auth--main">
        <form className="auth--form">
          {inputArr.map((input, ind) => (
            <input
              key={buttonText + ind}
              type={input.type ? input.type : "text"}
              id={input.name}
              name={input.name}
              placeholder={
                input.name === "firstName"
                  ? "First Name"
                  : input.name === "lastName"
                  ? "Last Name"
                  : input.name.substring(0, 1).toUpperCase() + input.name.substring(1)
              }
            />
          ))}
          <button
            type="submit"
            onClick={onSubmit}>
            {buttonText}
          </button>
        </form>
        <div className="auth--text">
          <p>
            {redirectTexts[0]} <Link to={buttonText === "Login" ? "/register" : "/"}>{redirectTexts[1]}</Link>
          </p>
          {buttonText === "Login" && (
            <p>
              Testing the app? Click <button onClick={startTestRun}>here</button> for a test run
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
