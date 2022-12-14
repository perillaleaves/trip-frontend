import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../API/Api";
import "../App.css";
const PostUpdate = () => {
  // hook
  const { postId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    API.getpost(postId).then((data) => {
      setPostInput({
        postId: postId,
        title: data.data.data.title,
        content: data.data.data.content,
        createdAt: data.data.data.createdAt,
        updatedAt: new Date(),
        userDTO: data.data.data.userDTO,
        comments: data.data.data.comments,
      });
    });
  }, []);

  // local state
  const [postInput, setPostInput] = useState({
    postId: postId,
    title: "",
    content: "",
    createdAt: "",
    updatedAt: new Date(),
    userDTO: {
      name: "",
      userId: "",
    },
    comments: [],
  });

  // local function
  const resetForm = () => {
    setPostInput({
      postId: "",
      title: "",
      content: "",
      createdAt: "",
      updatedAt: "",
      userDTO: {
        name: "",
        userId: "",
      },
      comments: [],
    });
  };

  const onChange = (e) => {
    setPostInput({
      ...postInput,
      [e.target.name]: e.target.value,
    });
  };

  const onSave = () => {
    API.updatepost(
      postInput.postId,
      postInput.title,
      postInput.content,
      postInput.userDTO.name
    );
  };

  const saveBtnClick = (e) => {
    e.preventDefault();
    onSave();
    resetForm();
    navigate("/");
  };

  return (
    <>
      <div className="post-editor-wrapper">
        <div className="post-editor">
          <div>
            <span>제목 :</span>
            <input
              className="post-editor-title-input"
              name="title"
              onChange={onChange}
              value={postInput.title}
            />
          </div>
          <div>
            <span>본문 :</span>
            <input
              className="post-editor-content-input"
              name="content"
              onChange={onChange}
              value={postInput.content}
            ></input>
          </div>
          <button onClick={saveBtnClick}>저장</button>
        </div>
      </div>
    </>
  );
};

export default PostUpdate;
