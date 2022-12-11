import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const onAccountClick = () => {
    navigate("/account");
  };
  return (
    <>
      <div className="header-wrapper">
        <div className="header-nav-wrapper">
          <div className="header-nav">
            <span>헤더1</span>
            <span>헤더2</span>
            <span>헤더3</span>
            <span>헤더4</span>
            <span>헤더5</span>
          </div>

          <div className="myaccount">
            <button onClick={onAccountClick}>내정보</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
