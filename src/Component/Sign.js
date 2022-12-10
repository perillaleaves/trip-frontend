import SignIn from "./SignIn";
import SignUp from "./SignUp";
import styled from "styled-components";
import { signUp, signIn, forgotPW } from "../module/reducer";
import { useDispatch, useSelector } from "react-redux";
const SignStyle = styled.div`
  .current-page-wrapper {
    justify-content: center;
    display: flex;
    position: fixed;
    bottom: 5%;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    width: 100px;
    height: 20px;
  }
  .current-page {
  }
  .current-page span {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #fff;
    display: inline-block;
    border: 1px solid #fff;
    border-radius: 10px;
    width: 10px;
    height: 10px;
    /* transform: translateX(19px); */
    transition: 1s;
  }

  .current-page-fix {
    text-align: center;
  }
  .current-page-fix span {
    display: inline-block;
    border: 1px solid #fff;
    border-radius: 10px;
    width: 7px;
    height: 7px;
    margin: 0 5px;
    cursor: pointer;
  }
`;
const Sign = () => {
  const signInitialState = useSelector((state) => state.signReducer);
  const dispatch = useDispatch();

  //global function

  function onClickSignUp() {
    dispatch(signUp(signInitialState));
  }
  function onClickSignIn() {
    dispatch(signIn(signInitialState));
  }
  function onClickForgotPW() {
    dispatch(forgotPW(signInitialState));
  }
  return (
    <SignStyle>
      <div className="sign">
        <SignUp onClickSignIn={onClickSignIn} />
        <SignIn
          onClickSignUp={onClickSignUp}
          onClickForgotPW={onClickForgotPW}
        />
      </div>
      <div className="current-page-wrapper">
        <div className="current-page">
          <span
            style={{
              transform: `translateX(${signInitialState.pageIndex * 19}px)`,
            }}
          ></span>
          {/* {console.log(signInitialState.pageIndex)} */}
        </div>
        <div className="current-page-fix">
          <span onClick={onClickSignUp}></span>
          <span onClick={onClickSignIn}></span>
          <span onClick={onClickForgotPW}></span>
        </div>
      </div>
    </SignStyle>
  );
};

export default Sign;
