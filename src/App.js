import { useNavigate } from "react-router-dom";
import "./App.css";
import Main from "./Component/Main";

function App() {
  const navigate = useNavigate();

  function onClick() {
    navigate("/sign");
  }

  return (
    <>
      <Main />
    </>
  );
}

export default App;
