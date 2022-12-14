import PostList from "./PostList";
import { useDispatch } from "react-redux";
import { postSelectRow } from "../module/reducer";
import { useNavigate } from "react-router-dom";

const Main = () => {
  // global state
  // local state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // User Function
  const onRowClick = (postId) => {
    console.log("onRowClick on main");
    navigate(`/posts/${postId}`);
  };

  return (
    <>
      <div className="main-background">
        <div className="main-gap"></div>
        <div className="main">
          게시판 리스트
          <PostList onRowClick={onRowClick} />
        </div>
      </div>
    </>
  );
};

export default Main;
