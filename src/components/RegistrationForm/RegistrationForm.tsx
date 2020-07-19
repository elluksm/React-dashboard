import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../store/userInfo";
import { Input } from "../FormElements/Input/Input";
import { Button } from "../FormElements/Button/Button";
import "./RegistrationForm.sass";

export const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorMesssage, setEmailErrorMessage] = useState("");
  const [passwordErrorMesssage, setPasswordErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setEmailErrorMessage("");
    setPasswordErrorMessage("");
    if (!email) {
      setEmailErrorMessage("Please enter your email");
    }
    if (!password) {
      setPasswordErrorMessage("Please enter your password");
    }
    if (email && password) {
      dispatch(register(email, password));
      history.push("/chart");
    }
  };

  return (
    <div className="registration-form">
      <h2>Lorem Ipsum</h2>
      <form onSubmit={handleSubmit} noValidate>
        <Input
          value={email}
          label={"Email"}
          type="email"
          errorMessage={emailErrorMesssage}
          onValueChange={(value) => setEmail(value)}
        />
        <Input
          value={password}
          label={"Password"}
          type="password"
          errorMessage={passwordErrorMesssage}
          onValueChange={(value) => setPassword(value)}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button type="submit" buttonText="Lorem Ipsum" />
      </form>
    </div>
  );
};
