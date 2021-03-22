import React from "react";
import Testform from "../components/Formtest";
import FormWithHook from "../components/FormWithHook";

interface Props {}

const Main: React.FC<Props> = ({}) => {
  return (
    <div>
      <h1>Form</h1>
      <Testform />
      <h2>_________________</h2>
      <FormWithHook message="hellow" />
    </div>
  );
};

export default Main;
