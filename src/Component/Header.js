import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isLogined, setIsLogined] = useState(false);
  useEffect(() => {
    // 로그인이 안되어 있다면
    if (localStorage.getItem("id") === null || undefined || "") {
      setIsLogined(false);
    } else {
      setIsLogined(true);
    }
  }, [isLogined]);
  const navigate = useNavigate();
  const onAccountClick = () => {
    navigate("/account");
  };
  const onLogoutClick = () => {
    localStorage.clear();
    setIsLogined(false);
    navigate("/");
  };
  const onLogin = () => {
    navigate("/sign");
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
            {isLogined ? (
              <>
                <button onClick={onAccountClick}>내정보</button>
                <button onClick={onLogoutClick}>로그아웃</button>
              </>
            ) : (
              <>
                <button onClick={onLogin}>로그인</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
