import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("id") === null || undefined || "") {
      navigate("/sign");
      console.log("로그인이 필요합니다");
    } else {
      console.log("id 를 불러옵니다.");
    }
  }, []);

  return (
    <>
      <div>id : {localStorage.getItem("id")}</div>
      <div>name : {localStorage.getItem("name")}</div>
      <div>loginId : {localStorage.getItem("loginId")} </div>
      <div>password : {localStorage.getItem("password")} </div>
      <div>phoneNum : {localStorage.getItem("phoneNum")} </div>
      <div>email : {localStorage.getItem("email")} </div>
    </>
  );
};

export default Account;
