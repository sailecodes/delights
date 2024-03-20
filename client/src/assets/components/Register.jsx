import "./../scss/auth.scss";
import Auth from "./custom/Auth";

const Register = () => {
  const inputArr = [
    { name: "firstName" },
    { name: "lastName" },
    { name: "email" },
    { type: "password", name: "password" },
  ];
  const redirectTexts = ["Already have an account?", "Sign in"];

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Auth
      inputArr={inputArr}
      buttonText="Register"
      redirectTexts={redirectTexts}
      onSubmit={onSubmit}>
      Register
    </Auth>
  );
};

export default Register;
