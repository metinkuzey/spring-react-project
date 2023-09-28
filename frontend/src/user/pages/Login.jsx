import React, { useState, useReducer, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInUserReducer } from "../reducers/userReducer";
import { signInUserAction } from "../actions/userAction";
import Success from "../../components/Success";
import Error from "../../components/Error";
import useAuthContext from "../../hooks/useAuth";

const Login = () => {
  const { setAuth } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInUser, signInUserDispatch] = useReducer(signInUserReducer, {});

  useEffect(() => {
    if (signInUser.success) {
      const { user } = signInUser;

      setAuth({
        user_role: user.data.user_role,
        access_token: user.data.access_token,
      });

      if (location?.state?.from?.pathname) {
        navigate(location.state.from.pathname);
      } else {
        navigate("/");
      }
    }
  }, [signInUser, signInUser.success]);

  const signInFormHandler = (event) => {
    event.preventDefault();

    signInUserDispatch(
      signInUserAction(signInUserDispatch, {
        email: email,
        password: password,
      })
    );

    clearSignInForm();
  };

  const clearSignInForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="grid grid-cols-6 lg:grid-cols-8 gap-4 mt-10">
      <div className="col-start-2 col-span-4 md:col-span-2 md:col-start-3 lg:col-span-2 lg:col-start-4 text-center">
        <p className="text-3xl">
          Rent
          <span className="text-orange-600 font-extralight text-3xl">*2M</span>
        </p>
        <p className="mt-5 font-mono  underline underline-offset-4 decoration-orange">
          Sign in to your account{" "}
        </p>
        {signInUser.error && <Error message={signInUser.error} />}

        {signInUser.success && <Success message={"Sign in succesfully..."} />}
        <form onSubmit={signInFormHandler}>
          <div className="text-left font-extralight mt-10">
            <label>Email address</label>
            <input
              className="sign-in-form-input"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text-left font-extralight mt-5">
            <label>Password</label>
            <input
              className="sign-in-form-input"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn-sign-in-form-submit" type="submit">
            Sign in
          </button>
          <p className="mt-10 text-sm font-light text-gray-600">
            Need an Account?{" "}
            <Link to="/register">
              <span className="text-bold text-orange-600">Register now.</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
