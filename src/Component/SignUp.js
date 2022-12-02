import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import API from "../API/Api";
import { useNavigate } from "react-router-dom";

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

  // input animate

  .place-label {
    position: absolute;
    font-size: 12px;
    color: #8c8c8c;
    transform: translate(-238px, 12.5px);
    transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
    pointer-events: none;
  }

  .sign-up-input-name:focus ~ .place-label-name,
  .sign-up-input-name:valid ~ .place-label-name {
    transform: translate(-238px, 0px);
    font-size: 9px;
  }

  .sign-up-input-id:focus ~ .place-label-id,
  .sign-up-input-id:valid ~ .place-label-id {
    transform: translate(-238px, 0px);
    font-size: 9px;
  }
  .sign-up-input-pw:focus ~ .place-label-pw,
  .sign-up-input-pw:valid ~ .place-label-pw {
    transform: translate(-238px, 0px);
    font-size: 9px;
  }

  .sign-up-input-phoneNum:focus ~ .place-label-phoneNum,
  .sign-up-input-phoneNum:valid ~ .place-label-phoneNum {
    transform: translate(-238px, 0px);
    font-size: 9px;
  }

  .sign-up-input-email:focus ~ .place-label-email,
  .sign-up-input-email:valid ~ .place-label-email {
    transform: translate(-238px, 0px);
    font-size: 9px;
  }

  .duplicate-check {
    position: absolute;
    color: #fff;
    transform: translate(0px, 5px);
    cursor: pointer;
    font-size: 11px;
    padding: 4px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #6b728e;
  }

  .exist-input {
    border-bottom: 1px solid red !important;
  }
  .exist-input:valid {
    border-bottom: 1px solid red !important;
  }
  .exist-input:focus ~ .exist-placeholder,
  .exist-input:valid ~ .exist-placeholder {
    transform: translate(-238px, 0px);
    font-size: 9px;
    color: red;
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
  const navigate = useNavigate();

  //FIX
  const nameInput = useRef();
  const idInput = useRef();
  const passwordInput = useRef();
  const phoneNumInput = useRef();
  const emailInput = useRef();
  // 반복되는 선언 줄이기
  const [existId, setExistId] = useState(false);
  const [existPhoneNum, setExistPhoneNum] = useState(false);
  const [existEmail, setExistEmail] = useState(false);

  const [nameTouched, setNameTouched] = useState(false);
  const [idTouched, setIdTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [phoneNumTouched, setPhoneNumTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  // 반복되는 선언 줄이기
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

  const handleSubmit = () => {
    if (
      nameValid &&
      idValid &&
      passwordValid &&
      phoneNumValid &&
      emailValid === true
    ) {
      API.signup(
        inputValue.name,
        inputValue.loginId,
        inputValue.password,
        inputValue.phoneNum,
        inputValue.email
      ).then((data) => {
        if (data.status === 200) {
          console.log(data.data);
          if (data.data?.success?.code === "signup") {
            // success
            alert("회원가입 성공 !");
            navigate("./sign");
          }
        } else {
          console.log("서버 통신 실패");
        }
      });
    } else {
      alert("회원가입 인풋 에러");
    }
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

  const onClickIdCheck = () => {
    API.idoverlap(idInput.current.value).then((data) => {
      if (data.data.validate.code === "available") {
        setIdValid(true);
        setExistId(false);
      } else {
        setIdValid(false);
        setExistId(true);
      }
    });
  };
  const onClickPhoneNumCheck = () => {
    API.phoneNumoverlap(phoneNumInput.current.value).then((data) => {
      if (data.data.validate.code === "available") {
        setPhoneNumValid(true);
        setExistPhoneNum(false);
      } else {
        setPhoneNumValid(false);
        setExistPhoneNum(true);
      }
    });
  };
  const onClickEmailCheck = () => {
    API.emailoverlap(emailInput.current.value).then((data) => {
      if (data.data.validate.code === "available") {
        setEmailValid(true);
        setExistEmail(false);
      } else {
        setEmailValid(false);
        setExistEmail(true);
      }
    });
  };
  //
  const debounce = (callback, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), delay);
    };
  };
  const debouncedIdValue = useCallback(
    debounce(() => onClickIdCheck(), 1000),
    []
  );
  const debouncedPhoneNumValue = useCallback(
    debounce(() => onClickPhoneNumCheck(), 1000),
    []
  );
  const debouncedEmailValue = useCallback(
    debounce(() => onClickEmailCheck(), 1000),
    []
  );

  const onChangeId = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: idInput.current.value,
    });
    if (idInput.current.value.length >= 8) {
      // 8글자 넘고 중복검사중에 변화 안되게 바꿔야함
      debouncedIdValue(idInput.current.value);
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
    } else {
      setPasswordValid(false);
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
      debouncedPhoneNumValue(phoneNumInput.current.value);
    } else {
      setPhoneNumValid(false);
    }
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
      debouncedEmailValue(emailInput.current.value);
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
              <div className="sign-up-form-name">
                <input
                  className="sign-up-input sign-up-input-name"
                  name="name"
                  ref={nameInput}
                  value={inputValue.name}
                  onChange={onChangeName}
                  onBlur={() => setNameTouched(true)}
                  required
                />
                {nameTouched ? (
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
                <span className="place-label place-label-name">NAME</span>
              </div>
              <div>
                <input
                  className={
                    existId
                      ? "sign-up-input sign-up-input-id exist-input"
                      : "sign-up-input sign-up-input-id"
                  }
                  name="loginId"
                  ref={idInput}
                  value={inputValue.loginId}
                  onChange={onChangeId}
                  onBlur={() => setIdTouched(true)}
                  required
                />
                {idTouched ? (
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

                <span
                  className={
                    existId
                      ? "place-label place-label-id exist-placeholder"
                      : "place-label place-label-id"
                  }
                >
                  ID
                </span>
              </div>
              <div>
                <input
                  className="sign-up-input sign-up-input-pw"
                  type="password"
                  name="password"
                  ref={passwordInput}
                  value={inputValue.password}
                  onChange={onChangePW}
                  onBlur={() => setPasswordTouched(true)}
                  required
                />
                {passwordTouched ? (
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
                <span className="place-label place-label-pw">PASSWORD</span>
              </div>
              <div>
                <input
                  className={
                    existPhoneNum
                      ? "sign-up-input sign-up-input-phoneNum exist-input"
                      : "sign-up-input sign-up-input-phoneNum"
                  }
                  name="phoneNum"
                  ref={phoneNumInput}
                  value={inputValue.phoneNum}
                  onChange={onChangePN}
                  onBlur={() => setPhoneNumTouched(true)}
                  required
                />
                {phoneNumTouched ? (
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
                <span
                  className={
                    existPhoneNum
                      ? "place-label place-label-phoneNum exist-placeholder"
                      : "place-label place-label-phoneNum"
                  }
                >
                  PHONENUMBER
                </span>
              </div>
              <div>
                <input
                  className={
                    existEmail
                      ? "sign-up-input sign-up-input-email exist-input"
                      : "sign-up-input sign-up-input-email"
                  }
                  name="email"
                  type="email"
                  ref={emailInput}
                  value={inputValue.email}
                  onChange={onChangeEmail}
                  onBlur={() => setEmailTouched(true)}
                  required
                />
                {emailTouched ? (
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
                <span
                  className={
                    existEmail
                      ? "place-label place-label-email exist-placeholder"
                      : "place-label place-label-email"
                  }
                >
                  EMAIL
                </span>
              </div>
            </div>
            <div className="sign-up-form-other">
              <div className="sign-up">
                <button onClick={handleSubmit}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SignUpStyle>
  );
};

export default SignUp;
