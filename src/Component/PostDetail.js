import { useEffect, useState } from "react";
import API from "../API/Api";
import CommentList from "./CommentList";
import { useDispatch } from "react-redux";
import "./PostDetail.css";
import { useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
  // hook
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    API.getpost(postId).then((data) => {
      setUserDetail({
        title: data.data.data.title,
        content: data.data.data.content,
        createdAt: data.data.data.createdAt,
        userDTO: data.data.data.userDTO,
        comments: data.data.data.comments,
      });
    });
  }, []);

  // local state
  const [userDetail, setUserDetail] = useState({
    title: "",
    content: "",
    createdAt: "",
    userDTO: {
      name: "",
      userId: "",
    },
    comments: [],
  });

  //local function
  const onRemove = (postId) => {};
  const onUpdate = () => {
    navigate(`/posts/${postId}/update`);
  };

  // 수정하기 or 삭제하기 -> 유저 id가 post를 게시했는지 서버에서 확인 후 isAdmin?=true로 반환해서 데이터로 넘겨주길 바람
  return (
    <>
      <div style={{ display: "flex", height: "100%" }}>
        <div className="post-detail-form">
          <div className="post-detail-wrapper">
            <div>작성자 : {userDetail.userDTO.name}</div>
            <div>제목 : {userDetail.title}</div>
            <div>
              작성일 : {new Date(userDetail.createdAt).toLocaleString()}
            </div>
            <div>내용 : {userDetail.content}</div>
            <span>
              <button onClick={() => onUpdate()}>수정하기</button>
              <button onClick={() => onRemove(userDetail.postId)}>
                삭제하기
              </button>
            </span>
          </div>
        </div>
      </div>
      <div>
        <CommentList />
      </div>
    </>
  );
};

export default PostDetail;
