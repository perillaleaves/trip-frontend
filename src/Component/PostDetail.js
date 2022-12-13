import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API from "../API/Api";
import CommentList from "./CommentList";
import Footer from "./Footer";
import Header from "./Header";
import Navigator from "./Navigator";
import "./PostDetail.css";

const PostDetail = () => {
  // global state
  const { selectRowData } = useSelector((state) => state.postReducer);
  // local state
  useEffect(() => {
    API.getpost(userDetail.postId).then((data) => {
      console.log(data);
      setUserDetail({
        title: data.data.data.title,
        content: data.data.data.content,
        createdAt: data.data.data.createdAt,
        userDTO: data.data.data.userDTO,
        comments: data.data.data.comments,
      });
    });
  }, []);
  const [userDetail, setUserDetail] = useState({
    postId: selectRowData.postId,
    title: "",
    content: "",
    createdAt: "",
    userDTO: {
      name: "",
      userId: "",
    },
    comments: [],
  });
  return (
    <>
      <Header />
      <div style={{ display: "flex", height: "100%" }}>
        <Navigator />
        <div className="post-detail-form">
          <div className="post-detail-wrapper">
            <div>작성자 : {userDetail.userDTO.name}</div>
            <div>제목 : {userDetail.title}</div>
            <div>
              작성일 : {new Date(userDetail.createdAt).toLocaleString()}
            </div>
            <div>내용 : {userDetail.content}</div>
            <span>{}</span>
          </div>
        </div>
      </div>
      <div>
        <CommentList />
      </div>
      <Footer />
    </>
  );
};

export default PostDetail;
