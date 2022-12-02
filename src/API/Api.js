import axios from "axios";

const API = {
  signin: async (loginId, password) => {
    const data = await axios.post("http://192.168.35.126:8080/login", {
      loginId: loginId,
      password: password,
    });
    if (data.status === 200) {
      console.log(data);
      return data;
    } else {
      console.log("error", data.status);
    }
  },
  signup: async (name, loginId, password, phoneNum, email) => {
    console.log("hihi signup call!", loginId, password, name, phoneNum, email);
    const data = await axios.post("http://192.168.35.126:8080/signup", {
      name: name,
      loginId: loginId,
      password: password,
      phoneNum: phoneNum,
      email: email,
    });
    console.log(data);
    if (data.status === 200) {
      return data;
    } else {
      console.log("error", data?.status);
    }
  },
  idoverlap: async (loginId) => {
    // ID 중복검사 API CALL
    const data = await axios.get("http://192.168.35.126:8080/overlap/loginId", {
      params: {
        loginId: loginId,
      },
    });
    console.log("idcheck", loginId);
    return data;
  },
  phoneNumoverlap: async (phoneNum) => {
    // ID 중복검사 API CALL
    const data = await axios.get(
      "http://192.168.35.126:8080/overlap/phoneNum",
      {
        params: {
          phoneNum: phoneNum,
        },
      }
    );
    console.log("PNcheck", phoneNum);
    return data;
  },
  emailoverlap: async (email) => {
    // ID 중복검사 API CALL
    const data = await axios.get("http://192.168.35.126:8080/overlap/email", {
      params: {
        email: email,
      },
    });
    console.log("emailcheck", email);
    return data;
  },
};

export default API;
