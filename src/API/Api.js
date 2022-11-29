import axios from "axios";

const API = {
  signin: async (loginId, password) => {
    console.log("hihi login call!", loginId, password);
    const data = await axios.post("http://192.168.35.126:8080/login", {
      loginId: loginId,
      password: password,
    });

    return data.data;
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
    return data.data;
  },
};

export default API;
