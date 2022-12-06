export function signReducer(currentState, action) {
  if (currentState === undefined) {
    return {
      pageIndex: 0,
    };
  }
  const newState = { ...currentState };
  if (action.type === "SIGNUP") {
    newState.pageIndex = -1;
  }
  if (action.type === "SIGNIN") {
    newState.pageIndex = 0;
  }
  if (action.type === "FORGOTPW") {
    newState.pageIndex = +1;
  }
  return newState;
}

// Action Type
const MODE_REMOVE = "REMOVE";
const MODE_SAVE = "SAVE";
const MODE_SELECT_ROW = "SELECT_ROW";

// Action Create Function
export const postSave = (saveData) => ({
  type: MODE_SAVE,
  saveData: {
    postId: saveData.postId,
    postTitle: saveData.postTitle,
    postContent: saveData.postContent,
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

// initState
const initialState = {
  dummyList: [
    {
      id: 1,
      author: "이지윤",
      title: "제목1",
      content: "hello 1",
      created_date: new Date().getTime(),
    },
    {
      id: 2,
      author: "이지윤",
      title: "제목2",
      content: "hello 2",
      created_date: new Date().getTime(),
    },
    {
      id: 3,
      author: "이지윤",
      title: "제목3",
      content: "hello 3",
      created_date: new Date().getTime(),
    },
    {
      id: 4,
      author: "이지윤",
      title: "제목4",
      content: "hello 4",
      created_date: new Date().getTime(),
    },
  ],
  lastId: 4,
};

// Reducer
export function postReducer(state = initialState, action) {
  switch (
    action.type // 클릭한 postId 를 가지지 않은 data 만 return
  ) {
    // case MODE_REMOVE:
    //   return {
    //     ...state,
    //     posts: state.posts.filter((row) => row.postId !== action.postId),
    //   };
    case MODE_SAVE:
      if (action.saveData.postId === "") {
        // postId 가 없다면 신규 데이터 저장
        return {
          lastId: state.lastId + 1,
          posts: state.posts.concat({
            ...action.saveData,
            postId: state.lastId + 1,
          }),
        };
      } else {
        // postId 가 있다면 기존 데이터 수정
        return {
          ...state,
          posts: state.posts.map((data) =>
            data.postId === action.saveData.postId
              ? { ...action.saveData }
              : data
          ),
        };
      }
    default:
      return state;
  }
}
