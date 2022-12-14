import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import API from "../API/Api.js";

const SignInStyle = styled.div`
  .login-wrapper {
  }
  .login-body {
    background-color: #fff;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    width: 350px;
    height: 320px;
    border-radius: 10px;
    box-shadow: 2px 2px 30px rgba(217, 217, 217, 0.451);
    transform: translateX(0vw);
    transition: 1s;
  }
  .login-form {
    width: 235px;
    padding: 40px;
    margin: auto;
  }
  .login-form-main div {
    margin-bottom: 20px;
  }
  .login-form-other div {
    margin-bottom: 10px;
  }
  .login-form-title {
    font-size: 22px;
  }
  .login-input {
    font-size: 12px;
    width: 235px;
    height: 35px;
    border: none;
    border-bottom: 1px solid #000;
    border-radius: 2px;
    border-color: rgba(0, 0, 0, 0.243);
    outline: none;
  }
  .sign-in button {
    background-color: #1b2866;
    border-radius: 3px;
    color: #fff;
    border: none;
    width: 238px;
    height: 35px;
    cursor: pointer;
  }
  .login-form-help {
    display: flex;
    justify-content: space-between;

    font-size: 11px;
    font-weight: bold;
    color: #1b2866cd;
  }

  .sign-up,
  .forgot-pw {
    cursor: pointer;
  }
`;

const SignIn = ({ onClickSignUp, onClickForgotPW }) => {
  //global state
  const signInitialState = useSelector((state) => state.signReducer);

  //local state

  const idInput = useRef();
  const passwordInput = useRef();
  const [inputValue, setInputValue] = useState({
    loginId: "",
    password: "",
  });
  const navigate = useNavigate();

  //function

  function onChange(e) {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  }

  function onClickSignIn() {
    API.signin(inputValue.loginId, inputValue.password).then((data) => {
      if (data.status === 200) {
        console.log(data.data);
        if (data.data.error === null) {
          console.log(data.data.data);
          // ????????? ????????? ????????? ?????? ????????????
          // console.log("userData", getUser(data.data.data.user));
          // getUser(data.data.data.user);
          // local storage ??? ?????? ----> token ??? ????????? token??? ????????? ????????? ???????????? ?????? ????????? ??? ?????????, token?????? ?????? ???????????? ?????? ????????? ???????????????.
          let userData = data.data.data;
          console.log(userData);
          localStorage.clear();
          localStorage.setItem("id", userData.id);
          localStorage.setItem("name", userData.name);
          localStorage.setItem("loginId", userData.loginId);
          localStorage.setItem("password", userData.password);
          localStorage.setItem("phoneNum", userData.phoneNum);
          localStorage.setItem("email", userData.email);
          navigate("/");
        } else {
          if (data.data.error?.success === "EmptyLoginId") {
            idInput.current.focus();
            alert(data.data.error.message);
          }
          if (data.data.error?.success === "InconsistencyPassword") {
            passwordInput.current.focus();
            alert(data.data.error.message);
          }
        }
        setInputValue({ loginId: "", password: "" });
        console.log("?????? ?????? ??????");
      } else {
        console.log("?????? ?????? ??????");
      }
    });
  }

  return (
    <>
      <SignInStyle>
        <div className="login-wrapper">
          <div
            className="login-body"
            style={{
              transform: `translateX(${-signInitialState.pageIndex * 100}vw)`,
            }}
          >
            <div className="login-form">
              <div className="login-form-main">
                <div className="login-form-title">Great to see you again !</div>
                <div>
                  <input
                    className="login-input login-input-id"
                    placeholder="ID"
                    name="loginId"
                    value={inputValue.loginId}
                    ref={idInput}
                    onChange={onChange}
                  />
                </div>
                <div>
                  <input
                    className="login-input login-input-pw"
                    placeholder="PASSWORD"
                    value={inputValue.password}
                    name="password"
                    ref={passwordInput}
                    type="password"
                    onChange={onChange}
                  />
                </div>
                <div></div>
              </div>
              <div className="login-form-other">
                <div className="sign-in">
                  <button onClick={onClickSignIn}>Sign in</button>
                </div>
                <div className="login-form-help">
                  <span className="sign-up" onClick={onClickSignUp}>
                    SIGN UP
                  </span>
                  <span className="forgot-pw" onClick={onClickForgotPW}>
                    FORGOT PASSWORD ?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignInStyle>
    </>
  );
};

export default SignIn;
