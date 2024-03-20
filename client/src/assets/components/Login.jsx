import "./../scss/auth.scss";
import Auth from "./custom/Auth";

const Login = () => {
  const inputArr = [{ name: "email" }, { type: "password", name: "password" }];
  const redirectTexts = ["Don't have an account?", "Sign up"];

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const startTestRun = () => {
    console.log("Start test run");
  };

  return (
    <Auth
      inputArr={inputArr}
      buttonText="Login"
      redirectTexts={redirectTexts}
      onSubmit={onSubmit}
      startTestRun={startTestRun}
    />
  );
};

export default Login;
