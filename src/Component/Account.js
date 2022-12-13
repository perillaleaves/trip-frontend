import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  useEffect(() => {
    if (localStorage.getItem("id") === null || undefined || "") {
      navigate("/sign");
      console.log("로그인이 필요합니다");
    } else {
      console.log("id 를 불러옵니다.");
    }
  }, [navigate]);

  return (
    <>
      <div className="account-form-wrapper">
        <div className="account-form">
          <div className="account-title">
            <h1>Account</h1>
          </div>
          <div className="account-detail-form">
            <span className="account-detail account-id">
              id : {localStorage.getItem("id")}
            </span>
            <span className="account-detail account-name">
              name : {localStorage.getItem("name")}
            </span>
            <span className="account-detail account-loginId">
              loginId : {localStorage.getItem("loginId")}
            </span>
            <span className="account-detail account-password">
              password : {localStorage.getItem("password")}
            </span>
            <span className="account-detail account-phoneNum">
              phoneNum : {localStorage.getItem("phoneNum")}
            </span>
            <span className="account-detail account-email">
              email : {localStorage.getItem("email")}
            </span>
          </div>
          <div>
            <button onClick={goHome}>홈으로</button>
            <button>수정하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
