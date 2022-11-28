import axios from "axios";

const API = {
  signin: async (loginId, password) => {
    console.log("hihi login call!", loginId, password);
    const data = await axios.post("http://192.168.35.126:8080/signin", {
      loginId: loginId,
      password: password,
    });

    return data.data;
  },
  signup: async (loginId, password, name, phoneNum, email) => {
    console.log("hihi signup call!", loginId, password, name, phoneNum, email);
    return { code: 200, status: "SUCCESS" };
  },
};

export default API;
