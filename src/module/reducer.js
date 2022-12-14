// SIGN REDUCER
// initState
const signInitialState = {
  pageIndex: 0,
};
// Action Type
const MODE_SIGN_UP = "SIGNUP";
const MODE_SIGN_IN = "SIGNIN";
const MODE_FORGOT_PW = "FORGOTPW";
export const signUp = () => ({
  type: MODE_SIGN_UP,
});
export const signIn = () => ({
  type: MODE_SIGN_IN,
});
export const forgotPW = () => ({
  type: MODE_FORGOT_PW,
});
export function signReducer(state = signInitialState, action) {
  switch (action.type) {
    case MODE_SIGN_UP:
      return {
        pageIndex: -1,
      };
    case MODE_SIGN_IN:
      return {
        pageIndex: 0,
      };
    case MODE_FORGOT_PW:
      return {
        pageIndex: 1,
      };
    default:
      return state;
  }
}

// POST REDUCER
// initState
const postInitialState = {
  posts: [
    {
      postId: 1,
      postAuthor: "이지윤",
      postTitle: "제목1",
      postContent: "hello 1",
      postCreated_date: new Date().getTime(),
    },
    {
      postId: 2,
      postAuthor: "이지윤",
      postTitle: "제목2",
      postContent: "hello 2",
      postCreated_date: new Date().getTime(),
    },
    {
      postId: 3,
      postAuthor: "이지윤",
      postTitle: "제목3",
      postContent: "hello 3",
      postCreated_date: new Date().getTime(),
    },
    {
      postId: 4,
      postAuthor: "이지윤",
      postTitle: "제목4",
      postContent: "hello 4",
      postCreated_date: new Date().getTime(),
    },
  ],
  lastId: 4,
  selectRowData: {},
};
// Action Type
const MODE_REMOVE = "REMOVE";
const MODE_SAVE = "SAVE";
const MODE_SELECT_ROW = "SELECT_ROW";
const MODE_UPDATE = "UPDATE";

// Action Create Function
export const postSave = (saveData) => ({
  type: MODE_SAVE,
  saveData: {
    postId: saveData.postId,
    postAuthor: localStorage.name,
    postTitle: saveData.postTitle,
    postContent: saveData.postContent,
    postCreated_date: saveData.postCreated_date,
  },
});
export const postRemove = (postId) => ({
  type: MODE_REMOVE,
  postId: postId,
});
export const postSelectRow = (postId) => ({
  type: MODE_SELECT_ROW,
  postId: postId,
});
export const postUpdate = (postId) => ({
  type: MODE_UPDATE,
  postId: postId,
});

// Reducer
export function postReducer(state = postInitialState, action) {
  switch (action.type) {
    case MODE_REMOVE:
      return {
        ...state,
        posts: state.posts.filter((row) => row.postId !== action.postId),
      };
    case MODE_SAVE:
      if (action.saveData.postId === "") {
        // postId 가 없다면 신규 데이터 저장
        return {
          lastId: state.lastId + 1,
          posts: state.posts.concat({
            ...action.saveData,
            postId: state.lastId + 1,
          }),
          selectRowData: {},
        };
      } else {
        // postId 가 있다면 기존 데이터 수정
        console.log("수정이군요");
        return {
          ...state,
          posts: state.posts.map((data) =>
            data.postId === action.saveData.postId
              ? { ...action.saveData }
              : data
          ),
        };
      }
    case MODE_SELECT_ROW:
      // debugger;
      return {
        // 클릭한 셀의 postId 를 가진 state 만 찾아서 return
        selectRowData: action.postId,
      };
    case MODE_UPDATE:
      return {
        ...state,
        selectRowData: state.posts.find((row) => row.postId === action.postId),
      };
    default:
      return state;
  }
}

// USER REDUCER
// INIT
const userDataInitialState = {
  id: "",
  name: "",
  loginId: "",
  password: "",
  phoneNum: "",
  email: "",
  isLogin: false,
};

//ACTION TYPE
const MODE_GET_USER_DATA = "GETUSER";
const MODE_CHANGE_LOGIN = "CHANGELOGIN";

export const getUserData = (userData) => ({
  type: MODE_GET_USER_DATA,
  userData: {
    id: userData.id,
    name: userData.name,
    loginId: userData.loginId,
    password: userData.password,
    phoneNum: userData.phoneNum,
    email: userData.email,
  },
});
export const changeLogin = (isLogin) => ({
  type: MODE_CHANGE_LOGIN,
  isLogin: isLogin,
});

export function userReducer(state = userDataInitialState, action) {
  switch (action.type) {
    case MODE_GET_USER_DATA:
      return {
        id: action.userData.id,
        name: action.userData.name,
        loginId: action.userData.loginId,
        password: action.userData.password,
        phoneNum: action.userData.phoneNum,
        email: action.userData.email,
      };
    case MODE_CHANGE_LOGIN:
      return {
        isLogin: action.isLogin,
      };
    default:
      return state;
  }
}
