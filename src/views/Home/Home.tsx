import React from "react";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import "./Home.sass";

export const Home: React.FC = () => {
  return (
    <div className="home-view">
      <div className="home-left-column" />
      <div className="home-right-column">
        <div className="registration-form-container">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};
