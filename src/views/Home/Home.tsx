import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { RegistrationForm } from "../../components/Form/RegistrationForm/RegistrationForm";
import "./Home.sass";

export const Home: React.FC = () => {
  const history = useHistory();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    history.push("/chart");
  };

  return (
    <div className="home-view">
      <h1>Home</h1>
      <RegistrationForm />
      <button onClick={handleSubmit}>Lorem Ipsum</button>
    </div>
  );
};
