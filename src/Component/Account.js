import { useSelector } from "react-redux";

const Account = () => {
  const userDataInitialState = useSelector((state) => state.userReducer);
  return (
    <>
      <div>id : {userDataInitialState.id}</div>
      <div>name :{userDataInitialState.name}</div>
      <div>loginId : {userDataInitialState.loginId}</div>
      <div>password : {userDataInitialState.password}</div>
      <div>phoneNum : {userDataInitialState.phoneNum}</div>
      <div>email : {userDataInitialState.email}</div>
    </>
  );
};

export default Account;
