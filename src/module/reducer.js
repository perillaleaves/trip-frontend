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

// initState
const initialState = {
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

// Action Create Function
export const postSave = (saveData) => ({
  type: MODE_SAVE,
  saveData: {
    postId: saveData.postId,
    postTitle: saveData.postTitle,
    postContent: saveData.postContent,
    postCreated_date: new Date(),
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

// Reducer
export function postReducer(state = initialState, action) {
  switch (
    action.type // 클릭한 postId 를 가지지 않은 data 만 return
  ) {
    case MODE_REMOVE:
      return {
        ...state,
        posts: state.posts.filter((row) => row.postId !== action.postId),
      };
    case MODE_SAVE:
      if (action.saveData.postId === "") {
        // postId 가 없다면 신규 데이터 저장
        console.log("saved");
        console.log(initialState);
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
      return {
        // 클릭한 셀의 postId 를 가진 state 만 찾아서 return
        ...state,
        selectRowData: state.posts.find((row) => row.postId === action.postId),
      };
    default:
      return state;
  }
}
// console.log(initialState.posts);
