import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Sign = () => {
  const [index, setIndex] = useState();

  return (
    <>
      <div className="sign">
        <SignUp />
        <SignIn />
      </div>
    </>
  );
};

export default Sign;
