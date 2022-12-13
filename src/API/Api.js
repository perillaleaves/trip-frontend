import axios from "axios";

const API_base = "http://192.168.35.126:8080";

const API = {
  // 로그인 검사
  signin: async (loginId, password) => {
    const data = await axios.post(
      `${API_base}/login`,
      {
        loginId: loginId,
        password: password,
      },
      { withCredentials: true }
    );
    if (data.status === 200) {
      return data;
    } else {
      console.log("error", data.status);
    }
  },

  // 회원가입 검사
  signup: async (name, loginId, password, phoneNum, email) => {
    console.log("hihi signup call!", loginId, password, name, phoneNum, email);
    const data = await axios.post(`${API_base}/signup`, {
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

  // ID 중복검사
  idoverlap: async (loginId) => {
    const data = await axios.get(`${API_base}/overlap/loginid`, {
      params: {
        loginId: loginId,
      },
    });
    console.log("idcheck", loginId);
    return data;
  },

  // ID 중복검사
  phoneNumoverlap: async (phoneNum) => {
    const data = await axios.get(`${API_base}/overlap/phonenumber`, {
      params: {
        phoneNum: phoneNum,
      },
    });
    console.log("PNcheck", phoneNum);
    return data;
  },

  // ID 중복검사
  emailoverlap: async (email) => {
    const data = await axios.get(`${API_base}/overlap/email`, {
      params: {
        email: email,
      },
    });
    console.log("emailcheck", email);
    return data;
  },

  // 게시글 리스트 조회
  getposts: async () => {
    const data = await axios.get(`${API_base}/posts`);
    return data;
  },
  // 게시글 상세 조회
  getpost: async (postId) => {
    const data = await axios.get(`${API_base}/post/1`);
    return data;
  },

  //게시글 생성
  creatpost: async (title, content, user_id) => {
    console.log(user_id);
    const data = await axios.post(`${API_base}/post`, {
      title: title,
      content: content,
      user: user_id,
    });
    return data;
  },
  updatepost: async (postId, title, content, user_id) => {
    const data = await axios.put(`${API_base}/post/${postId}`, {
      postId: postId,
      title: title,
      content: content,
      user: user_id,
    });
    return data;
  },

  // 게시글 수정
};

export default API;
