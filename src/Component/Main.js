import Footer from "./Footer";
import Header from "./Header";
import Navigator from "./Navigator";
import PostList from "./PostList";
import { useDispatch, useSelector } from "react-redux";
import { postRemove, postSelectRow } from "../module/reducer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostEditor from "./PostEditor";

const Main = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState();
  const { selectRowData } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  const onRemove = (postId) => dispatch(postRemove(postId));

  // User Function
  const onRowClick = (postId) => {
    // dispatch 를 하고,
    dispatch(postSelectRow(postId));
    setInputData({
      postId: selectRowData.postId,
      postTitle: selectRowData.postTitle,
      postContent: selectRowData.postContent,
      postAuthor: selectRowData.postAuthor,
    });
    console.log(inputData);
    navigate(`/${postId}`);
    // inputData 에 selectRowData 의 값을 반영
    // if (JSON.stringify(selectRowData) !== "{}") {
    //   setInputData({
    //     postId: selectRowData.postId,
    //     postTitle: selectRowData.postTitle,
    //     postContent: selectRowData.postContent,
    //     postAuthor: selectRowData.postAuthor,
    //   });
    //   console.log(inputData);
    //   navigate("/1");
    // }
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex", height: "100%" }}>
        <Navigator />
        <PostList onRowClick={onRowClick} onRemove={onRemove} />
        <PostEditor />
      </div>
      <Footer />
    </>
  );
};

export default Main;
