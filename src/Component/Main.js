import Footer from "./Footer";
import Header from "./Header";
import Navigator from "./Navigator";
import PostList from "./PostList";
import { useDispatch, useSelector } from "react-redux";
import { postRemove, postSelectRow, postUpdate } from "../module/reducer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostNew from "./PostNew";

const Main = () => {
  // global state
  const { selectRowData } = useSelector((state) => state.postReducer);
  // local state
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState();

  // User Function
  const onRemove = (postId) => dispatch(postRemove(postId));
  const onUpdate = (postId) => {
    dispatch(postUpdate(postId));
    setInputData({
      postId: selectRowData.postId,
      postTitle: selectRowData.postTitle,
      postContent: selectRowData.postContent,
      postAuthor: selectRowData.postAuthor,
    });
    navigate(`/postupdate/${postId}`);
  };
  const onRowClick = (postId) => {
    dispatch(postSelectRow(postId));
    setInputData({
      postId: selectRowData.postId,
      postTitle: selectRowData.postTitle,
      postContent: selectRowData.postContent,
      postAuthor: selectRowData.postAuthor,
    });
    navigate(`/${postId}`);
  };

  return (
    <>
      <Navigator />
      <div className="main-background">
        <Header />
        <div className="main-gap"></div>
        <div className="main">
          게시판 리스트
          <PostList
            onRowClick={onRowClick}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
