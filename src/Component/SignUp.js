import { useRef, useState } from "react";
import styled from "styled-components";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const SignUpStyle = styled.div`
  .sign-up-body {
    display: flex;
    overflow: hidden;
    background-color: #fff;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    width: 700px;
    height: 520px;
    border-radius: 10px;
    box-shadow: 2px 2px 15px rgba(217, 217, 217, 0.451);
    transform: translateX(-100vw);
    transition: 1s;
  }
  .sign-up-holder-container {
    display: flex;
    flex-direction: column;
    background-color: #16215d;
    padding: 20px;
    width: 40%;
    text-align: left;
  }
  .sign-up-holder {
    display: flex;
    flex-direction: column;
    margin: 100px 0;
    align-items: left;
    color: #fff;
  }
  .sign-up-holder-title {
    font-size: 30px;
  }
  .sign-up-holder-subtitle {
    font-size: 20px;
  }
  .sign-up-form {
    width: 60%;
    padding: 40px;
    margin: auto;
  }
  .sign-up-form-main div {
    margin-bottom: 20px;
  }
  .sign-up-form-other div {
    margin-bottom: 10px;
  }
  .sign-up-form-title {
    font-size: 22px;
  }
  .sign-up-input {
    font-size: 12px;
    width: 235px;
    height: 35px;
    border: none;
    border-bottom: 1px solid #000;
    border-radius: 2px;
    border-color: rgba(0, 0, 0, 0.243);
    outline: none;
  }
  .sign-up button {
    background-color: #1b2866;
    border-radius: 3px;
    color: #fff;
    border: none;
    width: 238px;
    height: 35px;
    cursor: pointer;
  }
  .sign-up-form-help {
    display: flex;
    justify-content: space-between;

    font-size: 11px;
    font-weight: bold;
    color: #1b2866cd;
  }

  /* fontawesome */
  .faCheck {
    opacity: 0;
    position: absolute;
    transform: translate(-15px, 10px);
    color: rgb(26, 157, 26);
  }
  .valid {
    opacity: 1;
  }
  .faCircleXmark {
    opacity: 0;
    position: absolute;
    transform: translate(-15px, 10px);
    color: rgb(210, 3, 3);
  }
  .invalid {
    opacity: 1;
  }
`;
const SignUp = () => {
  //global state
  const pageIndex = useSelector((state) => state.pageIndex);
  //local state
  //FIX
  const nameInput = useRef();
  const idInput = useRef();
  const passwordInput = useRef();
  const phoneNumInput = useRef();
  const emailInput = useRef();
  const [touched, setTouched] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [idValid, setIdValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [phoneNumValid, setPhoneNumValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [inputValue, setInputValue] = useState({
    name: "",
    loginId: "",
    password: "",
    phoneNum: "",
    email: "",
  });

  //function
  const handleSubmit = () => {
    console.log(inputValue);
    // 중복 검사
  };

  const onChangeName = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    // 이름은 3글자만
    if (nameInput.current.value.length === 3) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };
  const onChangeId = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    // id 8글자 이상
    if (idInput.current.value.length >= 8) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };
  const onChangePW = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    // Password 8글자 이상, 대문자 포함
    const regexPW = /[A-Z]+/;
    if (
      passwordInput.current.value.length > 8 &&
      regexPW.test(inputValue.password)
    ) {
      setPasswordValid(true);
      console.log("8글자 이상 and 대문자 포함");
    } else {
      setPasswordValid(false);
      console.log("8글자 아래 or 대문자 미포함");
    }
  };
  const onChangePN = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    const regexPN = /^01([0|1|6|7|8|9]?)-?([0-9]{4})-?([0-9]{4})$/;
    // PN
    if (regexPN.test(phoneNumInput.current.value)) {
      // 하이픈 없이 숫자만
      setPhoneNumValid(true);
      console.log("가능");
    } else {
      setPhoneNumValid(false);
      console.log("불가능");
    }
    console.log(phoneNumInput.current.value);
  };
  const onChangeEmail = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    const regexEmail =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    // email
    if (regexEmail.test(emailInput.current.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  return (
    <SignUpStyle>
      <div className="sign-up-wrapper">
        <div
          className="sign-up-body"
          style={{ transform: `translateX(${-pageIndex * 100 - 100}vw)` }}
        >
          <div className="sign-up-holder-container">
            <div className="sign-up-holder-icon">icon</div>
            <div className="sign-up-holder">
              <div className="sign-up-holder-title">Sign up now,</div>
              <div className="sign-up-holder-subtitle">Let's get started !</div>
            </div>
          </div>
          <div className="sign-up-form">
            <div className="sign-up-form-main">
              <div className="sign-up-form-title">Sign Up</div>
              <div>
                <input
                  className="sign-up-input sign-up-input-pw"
                  placeholder="NAME"
                  name="name"
                  ref={nameInput}
                  value={inputValue.name}
                  onChange={onChangeName}
                  onBlur={() => setTouched(true)}
                />
                {touched ? (
                  <>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={nameValid ? "faCheck valid" : "faCheck"}
                    />
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className={
                        nameValid ? "faCircleXmark" : "faCircleXmark invalid"
                      }
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div>
                <input
                  className="sign-up-input sign-up-input-id"
                  placeholder="ID"
                  name="loginId"
                  ref={idInput}
                  value={inputValue.loginId}
                  onChange={onChangeId}
                  onBlur={() => setTouched(true)}
                />
                {touched ? (
                  <>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={idValid ? "faCheck valid" : "faCheck"}
                    />
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className={
                        idValid ? "faCircleXmark" : "faCircleXmark invalid"
                      }
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div>
                <input
                  className="sign-up-input sign-up-input-pw"
                  placeholder="PASSWORD"
                  type="password"
                  name="password"
                  ref={passwordInput}
                  value={inputValue.password}
                  onChange={onChangePW}
                  onBlur={() => setTouched(true)}
                />
                {touched ? (
                  <>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={passwordValid ? "faCheck valid" : "faCheck"}
                    />
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className={
                        passwordValid
                          ? "faCircleXmark"
                          : "faCircleXmark invalid"
                      }
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div>
                <input
                  className="sign-up-input sign-up-input-pw"
                  placeholder="PHONENUMBER 숫자만"
                  name="phoneNum"
                  ref={phoneNumInput}
                  value={inputValue.phoneNum}
                  onChange={onChangePN}
                  onBlur={() => setTouched(true)}
                />
                {touched ? (
                  <>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={phoneNumValid ? "faCheck valid" : "faCheck"}
                    />
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className={
                        phoneNumValid
                          ? "faCircleXmark"
                          : "faCircleXmark invalid"
                      }
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div>
                <input
                  className="sign-up-input sign-up-input-pw"
                  placeholder="EMAIL"
                  name="email"
                  type="email"
                  ref={emailInput}
                  value={inputValue.email}
                  onChange={onChangeEmail}
                  onBlur={() => setTouched(true)}
                />
                {touched ? (
                  <>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={emailValid ? "faCheck valid" : "faCheck"}
                    />
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className={
                        emailValid ? "faCircleXmark" : "faCircleXmark invalid"
                      }
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="sign-up-form-other">
              <div className="sign-up">
                <button onClick={() => handleSubmit()}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SignUpStyle>
  );
};

export default SignUp;
