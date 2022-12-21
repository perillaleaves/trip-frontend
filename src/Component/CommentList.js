import Comment from "./Comment";
import "./style.css";

const CommentList = () => {
  const dummyList = [
    {
      commentId: "1",
      commentContent:
        "LoginComponent.jsx와 Mypage.jsx 모두 App.jsx를 통해 화면에 출력되도록 구조를 설정했다. 그 이유는 App.jsx에서 특정 조건이 일어날 경우 한 컴포넌트만을 출력할 수 있도록 설정하기 위해서다. 아까 userSlice.js에서는 loginUser()가 실행될 경우 userInfo의 값이 state에 적용될 것이고, clearUser()가 실행된다면 state가 초기 값과 같은 빈 값으로 설정될 것이다. 이것을 아래와 같이 삼항연산자로 App.jsx에 작성하면 원하는 조건에 원하는 컴포넌트가 출력된다. 현재 state에서 변동이 일어나는 것은 id와 name이므로, 둘 중 하나를 선택해 작성한다.",
      commentAuthor: "홍길동",
      commentCreated_time: new Date().toLocaleString(),
    },
    {
      commentId: "2",
      commentContent:
        "무사히 userInfo 값을 리듀서에 전달 한 상황이다. 이제 버튼을 클릭했을때  문구가 출력됐다가 이벤트까 끝나면 1.5초 뒤 사라져야하며, 그동안 버튼이 클릭되지 않도록 해야 한다.로딩 메세지는 useEffect()를 사용해도 되지만, submit 이벤트가 발생할때 출력되도록 코드를 작성했다. 이 경우 then() 안에 setTimeout()을 통해 로딩 메세지가 axious 통신이 끝난 이후 1.5초 뒤 사라지게 하자. 그리고 버튼은 disabled={}에 들어갈 값을 useState()를 통해 관리해준다. 초기 값은 false, submit 이벤트가 발생하면 true, axious 통신이 끝나면 다시 false 값을 지정해주자. 위의 설명을 통해 아래와 같이 코드를 작성해보자.",
      commentAuthor: "이지윤",
      commentCreated_time: new Date().toLocaleString(),
    },
  ];
  return (
    <>
      <div className="comment-list-form-wrapper">
        <div className="comment-list-form">
          {dummyList.map((comment) => {
            return (
              <Comment
                key={comment.commentId}
                commentId={comment.commentId}
                commentContent={comment.commentContent}
                commentAuthor={comment.commentAuthor}
                commentCreated_time={comment.commentCreated_time}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CommentList;
