import React, { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserReducer } from "../reducers/userReducer";
import { registerUserAction } from "../actions/userAction";
import Success from "../../components/Success";
import Error from "../../components/Error";
import useAuthContext from "../../hooks/useAuth";
import { DEFAULT } from "../constants/userConstant";

const Register = () => {
  const { setAuth } = useAuthContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState(DEFAULT);

  const [registerUser, registerUserDispatch] = useReducer(
    registerUserReducer,
    {}
  );

  useEffect(() => {
    if (registerUser.success) {
      const { user } = registerUser;

      setAuth({
        user_role: user.data.user_role,
        access_token: user.data.access_token,
      });

      navigate("/");
    }
  }, [registerUser, registerUser.success]);

  const registerFormHandler = (event) => {
    event.preventDefault();

    registerUserDispatch(
      registerUserAction(registerUserDispatch, {
        firstname: firstName,
        lastname: lastName,
        address: address,
        mobileNumber: mobileNumber,
        gender: gender,
        email: email,
        password: password,
        role: "USER",
      })
    );

    clearSignInForm();
  };

  const clearSignInForm = () => {
    setFirstName("");
    setLastName("");
    setAddress("");
    setMobileNumber("");
    setGender(DEFAULT);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-10">
      <div className="col-start-2 col-span-4 md:col-span-4 md:col-start-2 lg:col-span-2 lg:col-start-4 text-center">
        <p className="text-3xl">
          Rent
          <span className="text-orange-600 font-extralight text-3xl">*2M</span>
        </p>
        <p className="mt-5 font-mono  underline underline-offset-4 decoration-orange">
          Create your account{" "}
        </p>
        {registerUser.error && <Error message={registerUser.error} />}

        {registerUser.success && (
          <Success message={"Registered succesfully..."} />
        )}
        <form onSubmit={registerFormHandler}>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="text-left font-extralight">
              <label>First Name</label>
              <input
                className="sign-in-form-input"
                type="text"
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="text-left font-extralight">
              <label>Last Name</label>
              <input
                className="sign-in-form-input"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="text-left font-extralight">
              <label>Address</label>
              <input
                className="sign-in-form-input"
                type="text"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="text-left font-extralight">
              <label>Mobile Number</label>
              <input
                className="sign-in-form-input"
                type="tel"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div className="text-left font-extralight">
              <label>Email address</label>
              <input
                className="sign-in-form-input"
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="text-left font-extralight">
              <label>Password</label>
              <input
                className="sign-in-form-input"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-left font-extralight">
              <label>Gender</label>
              <select
                name="genders"
                id="genders"
                className="register-form-dropdown"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              >
                <option value={DEFAULT} disabled>
                  Gender
                </option>
                <option value="FEMALE">FEMALE</option>
                <option value="MALE">MALE</option>
              </select>
            </div>
            <div className="text-left font-extralight grid content-end">
              <button className="btn-sign-in-form-submit" type="submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
